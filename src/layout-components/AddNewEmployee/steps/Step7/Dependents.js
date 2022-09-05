import React, { useState, useEffect } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Row,
  Col,
  Label,
  FormGroup,
  Input,
  Button,
  Form,
  Table,
} from "reactstrap";

import { GetAllDependentType } from "../../../../actions";
import MySelect from "../../MySelect";
import "./index.css";
/**
 * @author
 * @function Step7
 **/

const AddNewForm = (props) => {
  const [dataArray, setDataArray] = useState([]);
  const [dependentArray, setDependentArray] = useState([]);
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
    dispatch(GetAllDependentType());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { dependentData } = useSelector((state) => state.EmployeeReducer);

  const addDependent = () => {
    const data = {
      dependent_type_id: values.Relation,
      fullname_employee_dependent: values.dependentName,
      mobile_employee_dependent: values.contact,
      is_same_address_employee_dependent: values.dependentAddress,
    };
    setFieldValue("dependent", [...dataArray, data]);
    setDataArray([...dataArray, data]);
    // setFieldValue("province", "");
    // values.arrayData = dataArray;

    const dependent = {
      dependent_type_id: values.Relation.value,
      fullname_employee_dependent: values.dependentName,
      mobile_employee_dependent: values.contact,
      is_same_address_employee_dependent: values.dependentAddress,
    };
    setFieldValue("dependentData", [...dependentArray, dependent]);
    setDependentArray([...dependentArray, dependent]);
    // setFieldValue("province", "");
    // values.arrayData = dataArray;
  };

  const dependentList = dependentData?.map((dt) => {
    return {
      value: dt.id_dependent_type,
      label: dt.name_dependent_type,
    };
  });

  return (
    <div className="wizard-steps horizontal">
      <Form onSubmit={handleSubmit} className="d-flex flex-column">
        <Row className="p-5">
          <Col md="6">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                Name{" "}
              </Label>
              <Input
                type="text"
                name="dependentName"
                onChange={handleChange}
                value={values.dependentName}
                onBlur={handleBlur}
                error={errors.dependentName}
              />
              {errors.dependentName && touched.dependentName && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  {errors.dependentName}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <MySelect
                label="Relation"
                options={dependentList}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                value={values.Relation}
                touched={touched.Relation}
                error={errors.Relation}
                isMulti={false}
              />
            </FormGroup>
          </Col>

          <Col md="6">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                Address{" "}
              </Label>
              <Input
                type="text"
                name="dependentAddress"
                onChange={handleChange}
                value={values.dependentAddress}
                onBlur={handleBlur}
                error={errors.dependentAddress}
              />
              {errors.dependentAddress && touched.dependentAddress && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  {errors.dependentAddress}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                Contact #
              </Label>
              <Input
                type="number"
                name="contact"
                onChange={handleChange}
                value={values.contact}
                onBlur={handleBlur}
                error={errors.contact}
              />
              {errors.contact && touched.contact && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  {errors.contact}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="12" style={{ marginTop: "30px" }}>
            <div className="d-flex align-items-center">
              <Button
                href="#/"
                size="m"
                className="py-3"
                onClick={addDependent}
                color="primary"
              >
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={["fas", "plus"]} />
                </span>
                <span className="btn-wrapper--label ml-3">Add Another</span>
              </Button>
            </div>
          </Col>
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
                  Name
                </th>
                <th className="text-center p-3">Relation</th>
                <th className="text-center p-3">Address</th>
                <th className="text-center p-3">Contact#</th>
              </tr>
            </thead>
            <tbody>
              {values?.dependent?.map((data, key) => {
                return (
                  <tr key={key}>
                    <td className="text-left pl-4">
                      <span>{data.fullname_employee_dependent}</span>
                    </td>
                    <td className="text-center pl-4">
                      <span>{data.dependent_type_id.label}</span>
                    </td>
                    <td className="text-center pl-4">
                      <span>{data.is_same_address_employee_dependent}</span>
                    </td>
                    <td className="text-center pl-4">
                      <span>{data.mobile_employee_dependent}</span>
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
              type="submit"
              className="btn btn-primary1 ml-3"
              style={{
                cursor: dataArray?.length === 0 && "not-allowed",
              }}
              disabled={dataArray?.length === 0}
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
    dependent: props.form.dependent,
    dependentData: props.form.dependentData,
    dependentName: props.form.dependentName,
    Relation: props.form.Relation,
    dependentAddress: props.form.dependentAddress,
    contact: props.form.contact,
  }),

  validationSchema: Yup.object().shape({
    dependentName: Yup.string().required("Required"),
    Relation: Yup.object().required("Required"),
    dependentAddress: Yup.string().required("Required"),
    contact: Yup.number().positive().required("Required"),
  }),

  handleSubmit: (values, { props }) => {
    props.onNext(values);
  },
})(AddNewForm);
