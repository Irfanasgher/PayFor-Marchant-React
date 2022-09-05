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

import { GetAllDegree } from "../../../../actions";
import MySelect from "../../MySelect";
import "./index.scss";
/**
 * @author
 * @function Step6
 **/

const Education = (props) => {
  const [dataArray, setDataArray] = useState([]);
  const [educationArray, setEducationArray] = useState([]);

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
    dispatch(GetAllDegree());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { degreeData } = useSelector((state) => state.EmployeeReducer);

  const addEducation = () => {
    const data = {
      degree_id: values.Tittle,
      institute_name_education: values.university,
      major_education: values.majors,
      year_started_education: values.yearStarted,
      year_completed_education: values.yearEnded,
      grade_gpa_education: values.cgpa,
    };
    setFieldValue("education", [...dataArray, data]);
    setDataArray([...dataArray, data]);
    // setFieldValue("province", "");
    // values.arrayData = dataArray;

    const education = {
      degree_id: values.Tittle.value,
      institute_name_education: values.university,
      major_education: values.majors,
      year_started_education: values.yearStarted,
      year_completed_education: values.yearEnded,
      grade_gpa_education: values.cgpa,
    };
    setFieldValue("educationData", [...educationArray, education]);
    setEducationArray([...educationArray, education]);
    // setFieldValue("province", "");
    // values.arrayData = dataArray;
  };

  const degreeList = degreeData?.map((pdes) => {
    return {
      value: pdes.id_degree,
      label: pdes.name_degree,
    };
  });

  // console.log("education", values?.education);
  return (
    <div className="wizard-steps horizontal">
      <Form onSubmit={handleSubmit} className="d-flex flex-column">
        <Row className="p-5">
          <Col md="6">
            <FormGroup>
              <MySelect
                label="Tittle"
                options={degreeList}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                value={values.Tittle}
                touched={touched.Tittle}
                error={errors.Tittle}
                isMulti={false}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                Institute / University{" "}
              </Label>
              <Input
                type="text"
                name="university"
                onChange={handleChange}
                value={values.university}
                onBlur={handleBlur}
                error={errors.university}
              />
              {errors.university && touched.university && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                  className={"formikError"}
                >
                  {errors.university}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                Majors
              </Label>
              <Input
                type="text"
                name="majors"
                onChange={handleChange}
                value={values.majors}
                onBlur={handleBlur}
                error={errors.majors}
              />
              {errors.majors && touched.majors && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                  className={"formikError"}
                >
                  {errors.majors}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                Grade / CGPA{" "}
              </Label>
              <Input
                type="text"
                name="cgpa"
                onChange={handleChange}
                value={values.cgpa}
                onBlur={handleBlur}
                error={errors.cgpa}
              />
              {errors.cgpa && touched.cgpa && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                  className={"formikError"}
                >
                  {errors.cgpa}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                Started Year
              </Label>
              <Input
                type="text"
                name="yearStarted"
                onChange={handleChange}
                value={values.yearStarted}
                onBlur={handleBlur}
                error={errors.yearStarted}
              />
              {errors.yearStarted && touched.yearStarted && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                  className={"formikError"}
                >
                  {errors.yearStarted}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                Ended Year
              </Label>
              <Input
                type="text"
                name="yearEnded"
                onChange={handleChange}
                value={values.yearEnded}
                onBlur={handleBlur}
                error={errors.yearEnded}
              />
              {errors.yearEnded && touched.yearEnded && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                  className={"formikError"}
                >
                  {errors.yearEnded}
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
                onClick={addEducation}
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
                  Title
                </th>
                <th className="text-center p-3">Institute / University</th>
                <th className="text-center p-3">Majors</th>
                <th className="text-center p-3">Year</th>
              </tr>
            </thead>
            <tbody>
              {values?.education?.map((data, key) => {
                return (
                  <tr key={key}>
                    <td className="text-left pl-4">
                      <span>{data.degree_id.label}</span>
                    </td>
                    <td className="text-center pl-4">
                      <span>{data.institute_name_education}</span>
                    </td>
                    <td className="text-center pl-4">
                      <span>{data.major_education}</span>
                    </td>

                    <td className="text-center pl-4">
                      <span>{data.year_completed_education}</span>
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
    education: props.form.education,
    educationData: props.form.educationData,
    Tittle: props.form.Tittle,
    university: props.form.university,
    majors: props.form.majors,
    yearStarted: props.form.yearStarted,
    yearEnded: props.form.yearEnded,
    cgpa: props.form.cgpa,
  }),
  validationSchema: Yup.object().shape({
    Tittle: Yup.object().required("Required"),
    university: Yup.string().required("Required"),
    majors: Yup.string().required("Required"),
    yearStarted: Yup.string().required("Required"),
    yearEnded: Yup.string().required("Required"),
    cgpa: Yup.string().required("Required"),
  }),
  handleSubmit: (values, { props }) => {
    props.onNext(values);
  },
})(Education);
