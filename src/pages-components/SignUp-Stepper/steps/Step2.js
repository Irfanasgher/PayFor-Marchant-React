import React, { useEffect } from "react";
import "../assets/css/style.css";
import * as Yup from "yup";
// import Select from "react-select";

import { Input, Form, Button } from "reactstrap";

import { withFormik } from "formik";
const Step2 = (props) => {
  useEffect(() => {
    setFieldValue("InitialCodeOfContactNumber", "+92");
    setFieldValue("ContactCity", "Lahore");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // const options = [
  //   { value: "+92", label: "+92" },
  //   { value: "+93", label: "+93" },
  //   { value: "+94", label: "+94" },
  // ];
  // const options2 = [
  //   { value: "Lahore", label: "Lahore" },
  //   { value: "Karachi", label: "Karachi" },
  //   { value: "Islamabad", label: "Islamabad" },
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
          <div className="p-2">
            {/* <h5 className="font-size-xl font-weight-bold">Billing information</h5> */}
            {/* <p className="text-black-50 mb-4">Wonderful transition effects.</p> */}

            <div className="form-row ">
              <div className="form-group col-md-12">
                <label htmlFor="contactName">Point of Contact Name</label>
                {/* <input
                    class="form-control"
                    type="text"
                    name="ContactName"
                    id="contactName"
                    placeholder="Contact Name"
                  /> */}
                <Input
                  type="text"
                  className="form-control"
                  placeholder={"Contact Name"}
                  name="contactName"
                  id="contactName"
                  onChange={handleChange}
                  value={values.contactName}
                  onBlur={handleBlur}
                  error={errors.contactName}
                />
                {errors.contactName && touched.contactName && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "14px",
                      marginTop: "0.5rem",
                    }}
                  >
                    {errors.contactName}
                  </div>
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group comapny-add col-md-6">
                <label htmlFor="phoneNumber">Phone</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <select
                      className="form-control "
                      name="InitialCodeOfContactNumber"
                      onChange={handleChange}
                      // onChange={(value) => setFieldValue("CompanyCity", value)}
                      onBlur={handleBlur}
                      value={values.InitialCodeOfContactNumber}
                      error={errors.InitialCodeOfContactNumber}
                    >
                      <option value="+92">+92</option>
                      <option value="+93">+93</option>
                      <option value="+94">+94</option>
                      <option value="+95">+95</option>
                    </select>
                    {/* <Select
                      class="form-control"
                      // isDisabled={this.props.disabled}
                      // id={this.props.label}
                      options={options}
                      onChange={(value) =>
                        setFieldValue("InitialCodeOfContactNumber", value)
                      }
                      onBlur={handleBlur}
                      value={values.InitialCodeOfContactNumber}
                      error={errors.InitialCodeOfContactNumber}
                      // isLoading={this.props.isLoading}
                      // isMulti={this.props.isMulti}
                      // isMulti
                    /> */}
                  </div>
                  {/* <input
                      type="number"
                      class="form-control"
                      placeholder="322 000000000"
                      id="ContactPhoneNumber"
                      name="ContactPhoneNumber"
                    /> */}
                  <Input
                    type="text"
                    className="form-control"
                    placeholder={"123456"}
                    name="ContactPhoneNumber"
                    id="ContactPhoneNumber"
                    onChange={handleChange}
                    value={values.ContactPhoneNumber}
                    onBlur={handleBlur}
                    error={errors.ContactPhoneNumber}
                  />
                </div>
                <div className="input-group-prepend">
                  {errors.InitialCodeOfContactNumber &&
                    touched.InitialCodeOfContactNumber && (
                      <div
                        style={{
                          color: "red",
                          fontSize: "14px",
                          width: "120px",
                          marginTop: "0.5rem",
                        }}
                      >
                        {errors.InitialCodeOfContactNumber.label}
                      </div>
                    )}
                  {errors.ContactPhoneNumber && touched.ContactPhoneNumber && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "14px",
                        marginTop: "0.5rem",
                      }}
                    >
                      {errors.ContactPhoneNumber}
                    </div>
                  )}
                </div>
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="ContactEmail">Email</label>
                {/* <input
                  className="form-control"
                  id="ContactEmail"
                  placeholder="abc@gmail.com"
                  type="email"
                  name="ContactEmail"
                /> */}
                <Input
                  type="text"
                  className="form-control"
                  placeholder={"abc@gmail.com"}
                  name="ContactEmail"
                  id="ContactEmail"
                  onChange={handleChange}
                  value={values.ContactEmail}
                  onBlur={handleBlur}
                  error={errors.ContactEmail}
                />
                {errors.ContactEmail && touched.ContactEmail && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "14px",
                      marginTop: "0.5rem",
                    }}
                  >
                    {errors.ContactEmail}
                  </div>
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group comapny-add col-md-12">
                <label htmlFor="ContactAddress">Address</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <select
                      className="form-control"
                      name="ContactCity"
                      onChange={handleChange}
                      // onChange={(value) => setFieldValue("CompanyCity", value)}
                      onBlur={handleBlur}
                      value={values.ContactCity}
                      error={errors.ContactCity}
                    >
                      <option value="Lahore">Lahore</option>
                      <option value="Islamabad">Islamabad</option>
                      <option value="Multan">Multan</option>
                      <option value="Karachi">Karachi</option>
                      <option value="Peshawar">Peshawar</option>
                      <option value="Quetta">Quetta</option>
                    </select>
                    {/* <Select
                      class="form-control"
                      // isDisabled={this.props.disabled}
                      // id={this.props.label}
                      options={options2}
                      onChange={(value) => setFieldValue("ContactCity", value)}
                      onBlur={handleBlur}
                      value={values.ContactCity}
                      error={errors.ContactCity}
                      // isLoading={this.props.isLoading}
                      // isMulti={this.props.isMulti}
                      // isMulti
                    /> */}
                  </div>
                  {/* <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      id="ContactAddress"
                      name="ContactAddress"
                    /> */}
                  <Input
                    type="text"
                    className="form-control"
                    placeholder={""}
                    name="ContactAddress"
                    id="ContactAddress"
                    onChange={handleChange}
                    value={values.ContactAddress}
                    onBlur={handleBlur}
                    error={errors.ContactAddress}
                  />
                </div>
                <div className="input-group-prepend">
                  {errors.ContactCity && touched.ContactCity && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "14px",
                        width: "120px",
                        marginTop: "0.5rem",
                      }}
                    >
                      {errors.ContactCity.label}
                    </div>
                  )}
                  {errors.ContactAddress && touched.ContactAddress && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "14px",
                        marginTop: "0.5rem",
                      }}
                    >
                      {errors.ContactAddress}
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* <div className="form-group">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    id="gridCheck"
                    type="checkbox"
                  />
                  <label className="form-check-label" htmlFor="gridCheck">
                    Check me out
                  </label>
                </div>
              </div> */}
          </div>
          <div className={"actions p-4 formActionButtonDivForSecondStep"}>
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
              Next
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};
export default withFormik({
  mapPropsToValues: (props) => ({
    contactName: props.form.contactName,
    ContactEmail: props.form.ContactEmail,
    InitialCodeOfContactNumber: props.form.InitialCodeOfContactNumber,
    ContactPhoneNumber: props.form.ContactPhoneNumber,
    ContactCity: props.form.ContactCity,
    ContactAddress: props.form.ContactAddress,
    //   Role: props.form.Role,
    //   Salutation: props.form.Salutation,
    //   firstName: props.form.firstName,
    //   lastName: props.form.lastName,
    //   fatherName: props.form.fatherName,
    //   email: props.form.email,
    //   personalEmail: props.form.personalEmail,
    //   phone: props.form.phone,
    //   Gender: props.form.Gender,
    //   Marital: props.form.Marital,
    //   cnicNumber: props.form.cnicNumber,
    //   EmployeeType: props.form.EmployeeType,
    //   EmployeeTypeId: props.form.EmployeeTypeId,
    //   datePicker: props.form.datePicker,
  }),
  validationSchema: Yup.object().shape({
    // Salutation: Yup.object()
    //   .shape({
    //     label: Yup.string().required("Required"),
    //     value: Yup.string().required("Required"),
    //   })
    //   .required(),
    //   Salutation: Yup.object().required("Required"),
    //   firstName: Yup.string().required("Required"),
    //   lastName: Yup.string().required("Required"),
    //   fatherName: Yup.string().required("Required"),
    //   email: Yup.string().email().required("Required"),
    //   personalEmail: Yup.string().email().required("Required"),
    //   phone: Yup.number().positive().required("Required"),
    //   Gender: Yup.object().required("Required"),
    //   Marital: Yup.object().required("Required"),
    //   cnicNumber: Yup.number().positive().required("Required"),
    //   EmployeeType: Yup.object().required("Required"),
    //   EmployeeTypeId: Yup.object().required("Required"),
    //   datePicker: Yup.date().required("Date is Required").nullable(),
    // }),
    contactName: Yup.string().required("Required"),
    ContactEmail: Yup.string().email().required("required"),
    // InitialCodeOfContactNumber: Yup.object()
    //   .shape({
    //     label: Yup.string().required("Required"),
    //     value: Yup.string().required("Required"),
    //   })
    //   .required(),
    ContactPhoneNumber: Yup.number().required("Required"),
    // ContactCity: Yup.object().shape({
    //   label: Yup.string().required("Required"),
    //   value: Yup.string().required("Required"),
    // }),
    ContactAddress: Yup.string().required("Required"),
  }),
  handleSubmit: (values, { props }) => {
    props.onNext(values);
  },
})(Step2);
