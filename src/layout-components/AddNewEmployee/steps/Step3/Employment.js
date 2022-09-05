import React, { useState, useEffect } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Label, FormGroup, Input, Form } from "reactstrap";
import MySelect from "../../MySelect";

import {
  getTimeSlotShift,
  GetAllCompanyList,
  getAllCompanyData,
  GetAllocationType,
} from "../../../../actions";
import "./index.css";
/**
 * @author
 * @function Step3
 **/
const Employment = (props) => {
  const [dataArray, setDataArray] = useState([]);
  const {
    // Formik HOC props
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
    // Loki props
    nextLabel,
    onBack,
    cantBack,
  } = props;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTimeSlotShift());
    dispatch(GetAllCompanyList());
    dispatch(GetAllocationType());
    dispatch(getAllCompanyData(values.Company.value));
  }, [values.Company.value]); // eslint-disable-line react-hooks/exhaustive-deps

  const { companyData } = useSelector((state) => state.EmployeeReducer);
  const { allocationData } = useSelector((state) => state.EmployeeReducer);
  const { attendance } = useSelector((state) => state.AttendanceReducer);

  const { getAllCompanyListData } = useSelector(
    (state) => state.CompanyReducer
  );

  const companyList = companyData?.map((cd) => {
    return {
      value: cd.id_company,
      label: cd.name_company,
    };
  });

  const locationList = getAllCompanyListData?.locations?.map((rs) => {
    return {
      value: rs.id_location,
      label: rs.name_location,
    };
  });

  let departmentList = [];

  getAllCompanyListData?.locations?.forEach((pdes) => {
    if (pdes.id_location === values.Location.value) {
      pdes?.mapping_department_locaitons?.forEach((data) => {
        departmentList.push({
          value: data.department.id_department,
          label: data.department.name_department,
        });
      });
    }
  });

  const designationList = getAllCompanyListData?.mapping_designation_company?.map(
    (rs) => {
      return {
        value: rs.designation_defination.id_designation,
        label: rs.designation_defination.name_designation,
      };
    }
  );

  let regularShift = [];

  attendance?.forEach((data) => {
    if (data.regular_shift_id > 0) {
      regularShift.push(data);
    }
  });

  const shiftList = regularShift?.map((rs) => {
    return {
      value: rs.id_time_slot,
      label: rs?.regular_shift?.name_regular_shift,
    };
  });

  const myChange = (value, type) => {
    console.log("dsdddddd", value);
    if (value !== "") {
      let res = allocationData.filter((ar) => {
        return ar.name_allocation === type;
      });

      if (res.length > 0) {
        const data = {
          allocation_type_id: res[0].id_allocation,
          value_employee_allocation: value,
        };

        let found = dataArray.filter((dat) => {
          return dat.allocation_type_id === res[0].id_allocation;
        });

        if (found.length > 0) {
          let final = dataArray.filter((dat) => {
            return dat.allocation_type_id !== res[0].id_allocation;
          });
          setFieldValue("allocations", [...final, data]);
          setDataArray([...final, data]);
        } else {
          setFieldValue("allocations", [...dataArray, data]);
          setDataArray([...dataArray, data]);
        }
      }

      // setFieldValue("Department", e);
    }
  };
  console.log("allocations", values.allocations);
  // console.log("zaidd", departmentList);
  return (
    <div className="wizard-steps horizontal">
      <Form onSubmit={handleSubmit} className="d-flex flex-column">
        <Row className="p-5">
          <Col md="6">
            <FormGroup>
              <MySelect
                label="Company"
                options={companyList?.reverse()}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                value={values.Company}
                touched={touched.Company}
                error={errors.Company}
                isMulti={false}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <MySelect
                label="Location"
                options={locationList}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                value={values.Location}
                touched={touched.Location}
                error={errors.Location}
                isMulti={false}
              />
            </FormGroup>
          </Col>

          <Col md="6">
            <FormGroup>
              <MySelect
                label="Department"
                options={departmentList}
                // onChange={myChange}
                onChange={(field, value) => {
                  myChange(value.value, "department");
                  setFieldValue(field, value);
                }}
                onBlur={setFieldTouched}
                value={values.Department}
                touched={touched.Department}
                error={errors.Department}
                isMulti={false}
              />
            </FormGroup>
          </Col>

          <Col md="6">
            <FormGroup>
              <MySelect
                label="Designation"
                options={designationList}
                // onChange={setFieldValue}
                onChange={(field, value) => {
                  myChange(value.value, "designation");
                  setFieldValue(field, value);
                }}
                onBlur={setFieldTouched}
                value={values.Designation}
                touched={touched.Designation}
                error={errors.Designation}
                isMulti={false}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                Employee Code
              </Label>
              <Input
                type="number"
                name="employeeCode"
                onChange={handleChange}
                value={values.employeeCode}
                onBlur={handleBlur}
                error={errors.employeeCode}
              />
              {errors.employeeCode && touched.employeeCode && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                  className={"formikError"}
                >
                  {errors.employeeCode}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                Salary
              </Label>
              <Input
                type="text"
                name="salary"
                onChange={handleChange}
                onBlur={(e) => {
                  // setFieldTouched(field.name, value);
                  myChange(e.target.value, "salary");
                }}
                value={values.salary}
                // onBlur={handleBlur}
                error={errors.salary}
              />
              {errors.salary && touched.salary && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                  className={"formikError"}
                >
                  {errors.salary}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                Manager
              </Label>
              <Input
                type="text"
                name="manager"
                onChange={handleChange}
                onBlur={(e) => {
                  // setFieldTouched(field.name, value);
                  myChange(e.target.value, "manager");
                }}
                value={values.manager}
                // onBlur={handleBlur}
                error={errors.manager}
              />
              {errors.manager && touched.manager && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                  className={"formikError"}
                >
                  {errors.manager}
                </div>
              )}
            </FormGroup>
          </Col>

          <Col md="6">
            <FormGroup>
              <MySelect
                label="Shift"
                options={shiftList}
                // onChange={setFieldValue}
                onChange={(field, value) => {
                  myChange(value.value, "shift");
                  setFieldValue(field, value);
                }}
                onBlur={setFieldTouched}
                value={values.Shift}
                touched={touched.Shift}
                error={errors.Shift}
                isMulti={false}
              />
            </FormGroup>
          </Col>

          <Col md="6">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                Joining Date
              </Label>
              <Input
                type="date"
                name="joiningDate"
                onChange={handleChange}
                value={values.joiningDate}
                onBlur={handleBlur}
                error={errors.joiningDate}
              />
              {errors.joiningDate && touched.joiningDate && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                  className={"formikError"}
                >
                  {errors.joiningDate}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                Confirmation Due
              </Label>
              <Input
                type="date"
                name="confirmationDue"
                onChange={handleChange}
                value={values.confirmationDue}
                onBlur={handleBlur}
                error={errors.confirmationDue}
              />
              {errors.confirmationDue && touched.confirmationDue && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                  className={"formikError"}
                >
                  {errors.confirmationDue}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                Contract Start
              </Label>
              <Input
                type="date"
                name="contractStart"
                onChange={(e) => {
                  myChange(e.target.value, "contract start");
                  handleChange(e);
                }}
                value={values.contractStart}
                onBlur={handleBlur}
                error={errors.contractStart}
              />
              {errors.contractStart && touched.contractStart && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                  className={"formikError"}
                >
                  {errors.contractStart}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                Contract End
              </Label>
              <Input
                type="date"
                name="contractEnd"
                // onChange={handleChange}
                onChange={(e) => {
                  myChange(e.target.value, "contract end");
                  handleChange(e);
                }}
                value={values.contractEnd}
                onBlur={handleBlur}
                error={errors.contractEnd}
              />
              {errors.contractEnd && touched.contractEnd && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                  className={"formikError"}
                >
                  {errors.contractEnd}
                </div>
              )}
            </FormGroup>
          </Col>
        </Row>
        <div className="divider" />

        <div className="button-group d-flex justify-content-between m-4">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onBack}
            disabled={isSubmitting || cantBack}
          >
            Previous
          </button>
          <div className="button-group">
            <button
              type="submit"
              className="btn btn-primary1 ml-3"
              disabled={isSubmitting}
              // onClick={() => {
              //   props.onNext();
              // }}
            >
              {nextLabel}
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};
export default withFormik({
  mapPropsToValues: (props) => ({
    allocations: props.form.allocations,
    Company: props.form.Company,
    Location: props.form.Location,
    Department: props.form.Department,
    Designation: props.form.Designation,
    employeeCode: props.form.employeeCode,
    salary: props.form.salary,
    manager: props.form.manager,
    Shift: props.form.Shift,
    joiningDate: props.form.joiningDate,
    confirmationDue: props.form.confirmationDue,
    contractStart: props.form.contractStart,
    contractEnd: props.form.contractEnd,
  }),

  validationSchema: Yup.object().shape({
    Company: Yup.object().required("Required"),
    Location: Yup.object().required("Required"),
    Department: Yup.object().required("Required"),
    Designation: Yup.object().required("Required"),
    employeeCode: Yup.number().positive().required("Required"),
    salary: Yup.string().required("Required"),
    manager: Yup.string().required("Required"),
    Shift: Yup.object().required("Required"),
    joiningDate: Yup.date().required("Date is Required").nullable(),
    confirmationDue: Yup.date().required("Date is Required").nullable(),
    contractStart: Yup.date().required("Date is Required").nullable(),
    contractEnd: Yup.date().required("Date is Required").nullable(),
  }),

  handleSubmit: (values, { props }) => {
    props.onNext(values);
  },
})(Employment);
