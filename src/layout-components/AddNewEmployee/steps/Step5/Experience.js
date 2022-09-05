import React, { useState } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
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

import "./index.css";
/**
 * @author
 * @function Step5
 **/

const Designation = (props) => {
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
    // Loki props
    nextLabel,
    onBack,
    cantBack,
  } = props;

  const addExperience = () => {
    const data = {
      company__work_experience: values.companyName,
      details__work_experience: values.jobResponsibilities,
      year_started_work_experience: values.jobStarted,
      year_ended_work_experience: values.jobEnded,
      position__work_experience: values.designation,
      salary__work_experience: values.previousSalary,
    };
    setFieldValue("experience", [...dataArray, data]);
    setDataArray([...dataArray, data]);
    // setFieldValue("province", "");
    // values.arrayData = dataArray;
  };

  // console.log("experience", values?.experience);
  return (
    <div className="wizard-steps horizontal">
      <Form onSubmit={handleSubmit} className="d-flex flex-column">
        <Row className="p-5">
          <Col md="6">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                Company
              </Label>
              <Input
                type="text"
                name="companyName"
                onChange={handleChange}
                value={values.companyName}
                onBlur={handleBlur}
                error={errors.companyName}
              />
              {errors.companyName && touched.companyName && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                  className={"formikError"}
                >
                  {errors.companyName}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                Period{" "}
              </Label>
              <Input
                type="number"
                name="period"
                onChange={handleChange}
                value={values.period}
                onBlur={handleBlur}
                error={errors.period}
              />
              {errors.period && touched.period && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                  className={"formikError"}
                >
                  {errors.period}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                Job Started
              </Label>
              <Input
                type="date"
                name="jobStarted"
                onChange={handleChange}
                value={values.jobStarted}
                onBlur={handleBlur}
                error={errors.jobStarted}
              />
              {errors.jobStarted && touched.jobStarted && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                  className={"formikError"}
                >
                  {errors.jobStarted}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                Job Ended
              </Label>
              <Input
                type="date"
                name="jobEnded"
                onChange={handleChange}
                value={values.jobEnded}
                onBlur={handleBlur}
                error={errors.jobEnded}
              />
              {errors.jobEnded && touched.jobEnded && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                  className={"formikError"}
                >
                  {errors.jobEnded}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                Designation
              </Label>
              <Input
                type="text"
                name="designation"
                onChange={handleChange}
                value={values.designation}
                onBlur={handleBlur}
                error={errors.designation}
              />
              {errors.designation && touched.designation && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                  className={"formikError"}
                >
                  {errors.designation}
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
                type="number"
                name="previousSalary"
                onChange={handleChange}
                value={values.previousSalary}
                onBlur={handleBlur}
                error={errors.previousSalary}
              />
              {errors.previousSalary && touched.previousSalary && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                  className={"formikError"}
                >
                  {errors.previousSalary}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="12">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                Job Responsibilities{" "}
              </Label>
              <Input
                type="textarea"
                name="jobResponsibilities"
                onChange={handleChange}
                value={values.jobResponsibilities}
                onBlur={handleBlur}
                error={errors.jobResponsibilities}
              />
              {errors.jobResponsibilities && touched.jobResponsibilities && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                  className={"formikError"}
                >
                  {errors.jobResponsibilities}
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
                onClick={addExperience}
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
                  Company
                </th>
                <th className="text-center p-3">Job Started</th>
                <th className="text-center p-3">Job Ended</th>
                <th className="text-center p-3">Designation</th>
                <th className="text-center p-3">Salary</th>
              </tr>
            </thead>
            <tbody>
              {values?.experience?.map((data, key) => {
                return (
                  <tr key={key}>
                    <td className="text-left pl-4">
                      <span>{data.company__work_experience}</span>
                    </td>
                    <td className="text-center pl-4">
                      <span>{data.year_started_work_experience}</span>
                    </td>
                    <td className="text-center pl-4">
                      <span>{data.year_ended_work_experience}</span>
                    </td>
                    <td className="text-center pl-4">
                      <span>{data.position__work_experience}</span>
                    </td>
                    <td className="text-center pl-4">
                      <span>{data.salary__work_experience}</span>
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
    experience: props.form.experience,
    companyName: props.form.companyName,
    period: props.form.period,
    jobStarted: props.form.jobStarted,
    jobEnded: props.form.jobEnded,
    designation: props.form.designation,
    previousSalary: props.form.previousSalary,
    jobResponsibilities: props.form.jobResponsibilities,
  }),
  validationSchema: Yup.object().shape({
    companyName: Yup.string().required("Required"),
    period: Yup.number().positive().required("Required"),
    jobStarted: Yup.date().required("Date is Required").nullable(),
    jobEnded: Yup.date().required("Date is Required").nullable(),
    designation: Yup.string().required("Required"),
    previousSalary: Yup.number().positive().required("Required"),
    jobResponsibilities: Yup.string().required("Required"),
  }),
  handleSubmit: (values, { props }) => {
    props.onNext(values);
  },
})(Designation);
