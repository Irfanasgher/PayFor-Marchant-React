import React, { useEffect } from "react";
import "../assets/css/style.css";
import * as Yup from "yup";
import { withFormik } from "formik";
// import Select from "react-select";
// import { Row, Col, Label, FormGroup, Input, Form, Button } from "reactstrap";

import {
  // Row,
  // Col,
  // Container,
  // FormGroup,
  Input,
  Button,
  CustomInput,
  Form,
} from "reactstrap";
function Step3(props) {
  // const [file,setFile]=useState("")
  useEffect(() => {
    setFieldValue("bankName", "Meezan Bank Limited");
    setFieldValue("Currency", "PKR");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // const options = [
  //   { value: "Meezan Bank", label: "Meezan Bank" },
  //   { value: "Alflah Bank", label: "Alflah Bank" },
  //   { value: "MCB", label: "MCB" },
  // ];
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    // setFieldTouched,
    // Loki props
    // nextLabel,
    onBack,
    // cantBack,
  } = props;
  return (
    <>
      <div className="wizard-steps horizontal merchant-form">
        <Form onSubmit={handleSubmit}>
          <div className="p-4">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="bankAccountName">
                  Company Bank Account Name
                </label>
                {/* <input
                    className="form-control"
                    id="bankAccountName"
                    placeholder="Bank Account Name"
                    type="text"
                    name="bankAccountName"
                  /> */}
                <Input
                  type="text"
                  className="form-control"
                  placeholder={"Bank Account Name"}
                  name="bankAccountName"
                  id="bankAccountName"
                  onChange={handleChange}
                  value={values.bankAccountName}
                  onBlur={handleBlur}
                  error={errors.bankAccountName}
                />
                {errors.bankAccountName && touched.bankAccountName && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "14px",
                      marginTop: "0.5rem",
                    }}
                  >
                    {errors.bankAccountName}
                  </div>
                )}
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="bankAccountNumber">
                  Company Bank Account Number
                </label>
                {/* <input
                className="form-control"
                id="bankAccountNumber"
                placeholder="12345678"
                type="number"
                name="bankAccountNumber"
              /> */}
                <Input
                  type="number"
                  className="form-control"
                  placeholder={"1234567"}
                  name="bankAccountNumber"
                  id="bankAccountNumber"
                  onChange={handleChange}
                  value={values.bankAccountNumber}
                  onBlur={handleBlur}
                  error={errors.bankAccountNumber}
                />
                {errors.bankAccountNumber && touched.bankAccountNumber && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "14px",
                      marginTop: "0.5rem",
                    }}
                  >
                    {errors.bankAccountNumber}
                  </div>
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group comapny-add col-md-6 ">
                <label>Bank Name</label>
                <select className="form-control customize" name="bankName">
                  <option value="Meezan Bank Limited">
                    Meezan Bank Limited
                  </option>
                  <option value="United Bank Limited">
                    United Bank Limited
                  </option>
                  <option value="Alflah Bank Limited">
                    Alflah Bank Limited
                  </option>
                  <option value="Allied Bank Limited">
                    Allied Bank Limited
                  </option>
                </select>
                {/* <Select
                class="form-control"
                // isDisabled={this.props.disabled}
                // id={this.props.label}
                options={options}
                onChange={(value) =>
                  setFieldValue("bankName", value)
                }
                onBlur={handleBlur}
                value={values.bankName}
                error={errors.bankName}
                // isLoading={this.props.isLoading}
                // isMulti={this.props.isMulti}
                // isMulti
              /> */}
                {errors.bankName && touched.bankName && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "14px",
                      marginTop: "0.5rem",
                    }}
                  >
                    {errors.bankName}
                  </div>
                )}
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="branchCode">Branch Code</label>
                {/* <input
                className="form-control"
                id="branchCode"
                placeholder="12345678"
                type="number"
                name="branchCode"
              /> */}
                <Input
                  type="number"
                  className="form-control"
                  placeholder={"1234567"}
                  name="branchCode"
                  id="branchCode"
                  onChange={handleChange}
                  value={values.branchCode}
                  onBlur={handleBlur}
                  error={errors.branchCode}
                />
                {errors.branchCode && touched.branchCode && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "14px",
                      marginTop: "0.5rem",
                    }}
                  >
                    {errors.branchCode}
                  </div>
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group comapny-add col-md-6">
                <label>Currency</label>
                <select className="form-control customize" name="Currency">
                  <option value="PKR">PKR</option>
                  <option value="USD">USD</option>
                  <option value="EURO">EURO</option>
                  <option value="Saudi Rayal">Saudi Rayal</option>
                </select>
                {/* <Select
                class="form-control"
                // isDisabled={this.props.disabled}
                // id={this.props.label}
                options={options}
                onChange={(value) =>
                  setFieldValue("Currency", value)
                }
                onBlur={handleBlur}
                value={values.Currency}
                error={errors.Currency}
                // isLoading={this.props.isLoading}
                // isMulti={this.props.isMulti}
                // isMulti
              /> */}
                {errors.Currency && touched.Currency && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "14px",
                      marginTop: "0.5rem",
                    }}
                  >
                    {errors.Currency}
                  </div>
                )}
              </div>
              <div className="form-group">
                <label>Bank Statement </label>
                {/* <input
                class="form-control bank-file"
                type="file"
                name="bankStatement"
              /> */}
                <Input
                  type="file"
                  className="form-control"
                  placeholder={"1234567"}
                  name="bankStatement"
                  id="bankStatement"
                  onChange={(e) => {
                    handleChange(e);

                    // setFile(e.target.value)
                    setFieldValue("bankStatement", e.target.files[0]);
                  }}
                  // value={values.bankStatement}
                  // value={file}
                  onBlur={handleBlur}
                  error={errors.bankStatement}
                />
                {errors.bankStatement && touched.bankStatement && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "14px",
                      marginTop: "0.5rem",
                    }}
                  >
                    {errors.bankStatement}
                  </div>
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group comapny-add col-md-6">
                <CustomInput
                  type="checkbox"
                  id="termAndConditions"
                  className="align-self-start"
                  label="Term And Conditions"
                  name="termAndConditions"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  // checked={values.termAndConditions === "on" ? true : false}
                  // checked={notify}
                  // onChange={() => setNotify(!notify)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group comapny-add col-md-6">
                <CustomInput
                  type="checkbox"
                  id="permissions"
                  className="align-self-start"
                  label="Permissions"
                  name="permissions"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  // checked={values.permissions === "on" ? true : false}
                  // checked={notify}
                  // onChange={() => setNotify(!notify)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group comapny-add col-md-6">
                <CustomInput
                  type="checkbox"
                  id="consent"
                  className="align-self-start"
                  label="Consent"
                  name="consent"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  // checked={values.consent === ["on"] ? true : false}
                  // checked={notify}
                  // onChange={() => setNotify(!notify)}
                />
              </div>
            </div>
          </div>
          <div className={"actions p-4 formActionButtonsDiv"}>
            <Button
              // className={cantBack ? "hidePreviousButton" : "previousStepButton"}
              className="previousStepButton"
              color="primary"
              outline
              onClick={onBack}
              // onClick={backHandler}
              // disabled={cantBack || isComplete}
            >
              Previous
            </Button>
            <Button
              type="submit"
              //   className="btn-pill font-weight-bold px-4 text-uppercase font-size-sm"
              className="firstStepNextButton"
              color="primary"
              disabled={isSubmitting}
              // onClick={nextHandler}
              // disabled={isComplete}
            >
              {/* {isInFinalStep ? "Finish" : "Next"} */}
              Finish
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}
export default withFormik({
  mapPropsToValues: (props) => ({
    bankAccountName: props.form.bankAccountName,
    bankAccountNumber: props.form.bankAccountNumber,
    bankName: props.form.bankName,
    branchCode: props.form.branchCode,
    Currency: props.form.Currency,
    bankStatement: props.form.bankStatement,
    termAndConditions: props.form.termAndConditions,
    permissions: props.form.permissions,
    consent: props.form.consent,
  }),
  validationSchema: Yup.object().shape({
    bankAccountName: Yup.string().required("Required"),
    bankAccountNumber: Yup.number().required("Required"),
    bankName: Yup.string().required("Required"),
    branchCode: Yup.string().required("Required"),
    Currency: Yup.string().required("Required"),
    bankStatement: Yup.mixed().required("File is required"),
    // termAndConditions:,
    // permissions:,
    // consent:,
  }),
  handleSubmit: (values, { props }) => {
    props.onNext(values);
    console.log("values====>", values);
  },
})(Step3);
