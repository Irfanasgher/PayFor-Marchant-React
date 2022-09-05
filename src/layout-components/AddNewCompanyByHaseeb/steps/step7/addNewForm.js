import React, { useEffect } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Row, Col, Label, FormGroup, Input, Form } from "reactstrap";
import { getAllCountries } from "../../../../actions";
import CreatableSelect from "../../MyCreatableSelect";
import "./index.css";
/**
 * @author
 * @function Step2
 **/

const AddNewForm = (props) => {
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
    dispatch(getAllCountries());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="wizard-steps horizontal">
      <Form onSubmit={handleSubmit} className="d-flex flex-column">
        <Row className="p-5">
          <Col md="6">
            <FormGroup>
              <Label for="">Form Name </Label>
              <Input
                type="text"
                name="formName"
                // placeholder={"Form Name"}
                onChange={handleChange}
                value={values.formName}
                onBlur={handleBlur}
                error={errors.formName}
              />
              {errors.formName && touched.formName && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  Please enter any company name to proceed
                </div>
              )}
            </FormGroup>
          </Col>

          <Col md="6">
            <FormGroup>
              <Label for="">Form Nick Name </Label>
              <Input
                type="text"
                name="formNickName"
                // placeholder={"Form Nick"}
                onChange={handleChange}
                value={values.formNickName}
                onBlur={handleBlur}
                error={errors.formNickName}
              />
              {errors.formNickName && touched.formNickName && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  Please enter any company name to proceed
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="12">
            <FormGroup>
              <Label for="">Description</Label>
              <Input
                type="textarea"
                name="fromDescription"
                // placeholder={"Description"}
                onChange={handleChange}
                value={values.fromDescription}
                onBlur={handleBlur}
                error={errors.fromDescription}
              />
              {errors.fromDescription && touched.fromDescription && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  {errors.fromDescription}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="12">
            <FormGroup>
              <Label for="">Select Type</Label>
              <CreatableSelect
                label="cityName"
                //options={options}
                // options={optionState[0]}
                isClearable
                placeholder={"Country"}
                touched={touched.cityName}
                value={values.cityName}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.cityName}
              />
              {errors.cityName && touched.cityName && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  please select one
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
              type="button"
              className="btn btn-secondary"
              // onClick={onBack}
              disabled={isSubmitting || cantBack}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary1 ml-3"
              disabled={isSubmitting}
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
    formName: props.form.formName,
    formNickName: props.form.formNickName,
    newFormSearch: props.form.newFormSearch,
    fromDescription: props.form.fromDescription,
  }),

  validationSchema: Yup.object().shape({
    // formName: Yup.string().required(),
    // formNickName: Yup.string().required(),
    // fromDescription: Yup.string().required(),
  }),

  handleSubmit: (values, { props }) => {
    props.onNext(values);
  },
})(AddNewForm);
