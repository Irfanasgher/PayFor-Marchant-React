import React, { useEffect } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import Switch from "rc-switch";
import { Row, Col, Label, FormGroup, Form, Table } from "reactstrap";

import {
  getAllDepartments,
  getAllMappingDepartmentsByCompanyId,
  getAllLocationByCompanyId,
  createDepartmentLocation,
  disableDepartment,
  enableDepartment,
} from "../../../../actions";
import CreatableSelect from "../../MyCreatableSelect";
import "./index.css";
/**
 * @author
 * @function Step2
 **/
const Department = (props) => {
  const {
    // Formik HOC props
    values,
    touched,
    errors,
    isSubmitting,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
    // Loki props
    // backLabel,
    nextLabel,
    onBack,
    cantBack,
  } = props;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllLocationByCompanyId(companyData?.id_company));
    dispatch(getAllMappingDepartmentsByCompanyId(companyData?.id_company));
    dispatch(getAllDepartments());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // const { countriesData } = useSelector((state) => state.CompanyReducer);

  const { companyData, mappingDepartment } = useSelector(
    (state) => state.CompanyReducer
  );
  const { companyLocation } = useSelector((state) => state.CompanyReducer);
  const { getDepartmentData } = useSelector((state) => state.CompanyReducer);
  // const { parentDepartmentId } = useSelector((state) => state.CompanyReducer);
  // console.log("department", companyId);

  const Location = [
    companyLocation?.map((pdes) => {
      var value = pdes.id_location;
      var label = pdes.name_location;
      return { value, label };
    }),
  ];
  const department = [
    getDepartmentData?.map((pdes) => {
      var value = pdes.id_department;
      var label = pdes.name_department;
      return { value, label };
    }),
  ];

  const addDepartment = () => {
    const data = {
      company_id: companyData?.id_company,
      location_id: values.locationNameD.value,
      department_id: values.departmentName.value,
    };
    if (values.locationNameD.value && values.departmentName.value) {
      dispatch(createDepartmentLocation(data)).then(() => {
        dispatch(getAllMappingDepartmentsByCompanyId(companyData?.id_company));
      });
    }
  };

  const handleToggle = (data) => {
    if (data?.is_enable_mapping_department_location === true) {
      dispatch(disableDepartment(data?.id_mapping_department_location)).then(
        () => {
          dispatch(
            getAllMappingDepartmentsByCompanyId(companyData?.id_company)
          );
        }
      );
    } else {
      dispatch(enableDepartment(data?.id_mapping_department_location)).then(
        () => {
          dispatch(
            getAllMappingDepartmentsByCompanyId(companyData?.id_company)
          );
        }
      );
    }
  };

  console.log("mappingDepartment", mappingDepartment);
  return (
    <div className="wizard-steps horizontal">
      <Form onSubmit={handleSubmit} className="d-flex flex-column">
        <Row className="p-5">
          <Col md="6">
            <FormGroup>
              <Label for="">Location</Label>
              <CreatableSelect
                label="locationNameD"
                options={Location[0]}
                isClearable
                placeholder={"Country"}
                // isDisabled={loading}
                // isLoading={isLoadingList}
                touched={touched.locationNameD}
                value={values.locationNameD}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.locationNameD}
              />
              {/* {console.log("sss", values.locationNameD)} */}
              {errors.locationNameD && touched.locationNameD && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  please select Location
                </div>
              )}
            </FormGroup>
          </Col>

          <Col md="6">
            <FormGroup>
              <Label for="">Department</Label>
              <CreatableSelect
                label="departmentName"
                options={department[0]}
                isClearable
                placeholder={"Country"}
                // isDisabled={loading}
                // isLoading={isLoadingList}
                touched={touched.departmentName}
                value={values.departmentName}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.departmentName}
              />
              {/* {console.log("sss", values.departmentName)} */}
              {errors.departmentName && touched.departmentName && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  please select Department
                </div>
              )}
            </FormGroup>
          </Col>

          {/* <Col md="12" style={{ marginTop: "30px" }}>
            <div className="d-flex align-items-center">
              <Button
                href="#/"
                size="m"
                className="py-3"
                // onClick={addModalToggle}
                color="primary"
              >
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={["fas", "plus"]} />
                </span>
                <span className="btn-wrapper--label ml-3">Add</span>
              </Button>
              <Button
                href="#/"
                size="m"
                className="ml-3 py-3"
                // onClick={addModalToggle}
                color="primary"
              >
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={["fas", "plus"]} />
                </span>
                <span className="btn-wrapper--label ml-3">Add More</span>
              </Button>
            </div>
          </Col> */}
        </Row>
        <div
          className="m-4 tableContainer"
          style={{
            borderRadius: "15px",
            overflow: "hidden",
            borderWidth: "1px",
          }}
        >
          <Table
            responsive
            className="table-alternate-spaced text-nowrap mb-0"
            style={{ marginBottom: "0" }}
          >
            <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
              <tr>
                <th
                  className="text-left p-3 pl-4"
                  style={{ marginLeft: "50px" }}
                >
                  Department
                </th>
                <th className="text-center p-3">Location</th>
                <th className="text-center p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {mappingDepartment?.map((data, index) => {
                return (
                  <tr key={index}>
                    <td className="text-left pl-4">
                      <span>{data.department.name_department}</span>
                    </td>
                    <td className="text-center pl-4">
                      <span>{data.location.name_location}</span>
                    </td>

                    <td className="text-center">
                      <div className="d-flex align-items-center justify-content-center">
                        <div className="ml-2">
                          <Switch
                            checked={
                              data?.is_enable_mapping_department_location
                            }
                            onClick={() => handleToggle(data)}
                            className="switch-medium toggle-switch-second"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
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
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                addDepartment();
              }}
              disabled={isSubmitting || cantBack}
            >
              Save
            </button>
            <button
              type="submit"
              className="btn btn-primary1 ml-3"
              // disabled={isSubmitting}
              onClick={() => {
                props.onNext();
              }}
              style={{
                cursor: mappingDepartment?.length === 0 && "not-allowed",
              }}
              disabled={mappingDepartment?.length === 0}
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
    locationNameD: props.form.locationNameD,
    departmentName: props.form.departmentName,
  }),

  validationSchema: Yup.object().shape({
    locationName: Yup.object().shape({
      label: Yup.string().required("Required"),
      value: Yup.string().required("Required"),
    }),
    departmentName: Yup.object().shape({
      label: Yup.string().required("Required"),
      value: Yup.string().required("Required"),
    }),
  }),

  handleSubmit: (values, { props }) => {
    props.onNext(values);
  },
})(Department);
