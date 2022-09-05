import React, { useEffect } from "react";
import "../assets/css/style.css";
import * as Yup from "yup";
// import Select from "react-select";
import { withFormik } from "formik";
import { Input, Form, Button } from "reactstrap";

const Step1 = (props) => {
  // const [logo, setLogo] = useState("");
  // const [chkBox, setChkBox] = useState("");
  // console.log("hhhh", logo);
  useEffect(() => {
    setFieldValue("CompanyCity", "Lahore");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // const options = [
  //   { value: "Lahore", label: "Lahore" },
  //   { value: "Karachi", label: "Karachi" },
  //   { value: "Islamabad", label: "Islamabad" },
  // ];
  const {
    // Formik HOC props
    isSubmitting,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    values,
    touched,
    setFieldValue,
    // setFieldTouched,
    // Loki props
  } = props;
  return (
    <>
      <div className="wizard-steps horizontal merchant-form">
        <Form onSubmit={handleSubmit}>
          <div className="p-4">
            {/* <h5 className="font-size-xl font-weight-bold">
                  Personal information
                </h5> */}
            {/* <p className="text-black-50 mb-4">
                  Small section summary description can be added here!
                </p> */}
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="CompanyName">Company's Registered Name</label>
                {/* <input
                    className="form-control"
                    id="CompanyName"
                    placeholder="Company Name"
                    type="text"
                    name="CompanyName"
                   
                  /> */}
                <Input
                  type="text"
                  className="form-control"
                  placeholder={"First Name"}
                  name="CompanyName"
                  id="CompanyName"
                  onChange={handleChange}
                  value={values.CompanyName}
                  onBlur={handleBlur}
                  error={errors.CompanyName}
                />
                {errors.CompanyName && touched.CompanyName && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "14px",
                      marginTop: "0.5rem",
                    }}
                  >
                    {errors.CompanyName}
                  </div>
                )}
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="CompanyregistrationNumber">
                  Company's Registration Number
                </label>
                {/* <input
                  className="form-control"
                  id="CompanyregistrationNumber"
                  placeholder="12345678"
                  type="number"
                  name="CompanyregistrationNumber"
                  onChange={handleChange}
                  error={errors.CompanyregistrationNumber}
                /> */}
                <Input
                  className="form-control"
                  type="number"
                  placeholder={"12345678"}
                  name="CompanyregistrationNumber"
                  id="CompanyregistrationNumber"
                  onChange={handleChange}
                  value={values.CompanyregistrationNumber}
                  onBlur={handleBlur}
                  error={errors.CompanyregistrationNumber}
                />
                {errors.CompanyregistrationNumber &&
                  touched.CompanyregistrationNumber && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "14px",
                        marginTop: "0.5rem",
                      }}
                    >
                      {errors.CompanyregistrationNumber}
                    </div>
                  )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="CompanyExpectedSale">Expected Sale</label>
                {/* <input
                  className="form-control"
                  id="CompanyExpectedSale"
                  placeholder="Sales"
                  type="text"
                  name="CompanyExpectedSale"
                /> */}
                <Input
                  type="text"
                  className="form-control"
                  placeholder={"Sales"}
                  name="CompanyExpectedSale"
                  id="CompanyExpectedSale"
                  onChange={handleChange}
                  value={values.CompanyExpectedSale}
                  onBlur={handleBlur}
                  error={errors.CompanyExpectedSale}
                />
                {errors.CompanyExpectedSale && touched.CompanyExpectedSale && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "14px",
                      marginTop: "0.5rem",
                    }}
                  >
                    {errors.CompanyExpectedSale}
                  </div>
                )}
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="CompanyWebsite">Website</label>
                {/* <input
                  className="form-control"
                  id="CompanyWebsite"
                  placeholder="www.abc.com"
                  type="text"
                  name="CompanyWebsite"
                /> */}
                <Input
                  type="text"
                  placeholder={"Website"}
                  name="CompanyWebsite"
                  id="CompanyWebsite"
                  onChange={handleChange}
                  value={values.CompanyWebsite}
                  onBlur={handleBlur}
                  error={errors.CompanyWebsite}
                />
                {errors.CompanyWebsite && touched.CompanyWebsite && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "14px",
                      marginTop: "0.5rem",
                    }}
                  >
                    {errors.CompanyWebsite}
                  </div>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="CompanyEmail">Email</label>
                {/* <input
                  className="form-control"
                  id="CompanyEmail"
                  placeholder="abc@gmail.com"
                  type="email"
                  name="CompanyEmail"
                /> */}
                <Input
                  className="form-control"
                  type="email"
                  placeholder={"abc@gmail.com"}
                  name="CompanyEmail"
                  id="CompanyEmail"
                  onChange={handleChange}
                  value={values.CompanyEmail}
                  onBlur={handleBlur}
                  error={errors.CompanyEmail}
                />
                {errors.CompanyEmail && touched.CompanyEmail && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "14px",
                      marginTop: "0.5rem",
                    }}
                  >
                    {errors.CompanyEmail}
                  </div>
                )}
              </div>
              <div className="form-group col-md-6 comapny-add">
                <label htmlFor="CompanyAddress">Company's Address</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <select
                      className="form-control"
                      name="CompanyCity"
                      onChange={handleChange}
                      // onChange={(value) => setFieldValue("CompanyCity", value)}
                      onBlur={handleBlur}
                      value={values.CompanyCity}
                      error={errors.CompanyCity}
                    >
                      <option value="">Select</option>
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
                      options={options}
                      onChange={(value) => setFieldValue("CompanyCity", value)}
                      onBlur={handleBlur}
                      value={values.CompanyCity}
                      error={errors.CompanyCity}
                      // isLoading={this.props.isLoading}
                      // isMulti={this.props.isMulti}
                      // isMulti
                    /> */}
                  </div>
                  {/* <input
                    type="text"
                    class="form-control"
                    placeholder=""
                    id="CompanyAddress"
                    name="CompanyAddress"
                  /> */}
                  <Input
                    className="form-control"
                    type="text"
                    placeholder={"abc@gmail.com"}
                    name="CompanyAddress"
                    id="CompanyAddress"
                    onChange={handleChange}
                    value={values.CompanyAddress}
                    onBlur={handleBlur}
                    error={errors.CompanyAddress}
                  />
                </div>
                <div className="input-group-prepend">
                  {errors.CompanyCity && touched.CompanyCity && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "14px",
                        width: "120px",
                        marginTop: "0.5rem",
                      }}
                    >
                      {errors.CompanyCity}
                    </div>
                  )}
                  {errors.CompanyAddress && touched.CompanyAddress && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "14px",
                        marginTop: "0.5rem",
                      }}
                    >
                      {errors.CompanyAddress}
                    </div>
                  )}
                </div>
              </div>

              <div className="col-md-12 mt-3">
                <div className="form-group">
                  <label className="d-block mb-3">Required Account for</label>
                  <div className="form-check form-check-inline">
                    <input
                      onBlur={handleBlur}
                      // value={values.checkbox}
                      value={"Online"}
                      error={errors.checkbox}
                      className="form-check-input"
                      name="checkbox"
                      type="radio"
                      id="onlineCheckbox"
                      // value="option1"
                      onChange={handleChange}
                      checked={values.checkbox === "Online" ? true : false}
                    />
                    {/* <Input
                    className="form-control"
                    type="radio"
                    // placeholder={"abc@gmail.com"}
                    name="checkbox"
                    id="checkbox"
                    onChange={handleChange}
                    value={values.checkbox}
                    onBlur={handleBlur}
                    error={errors.checkbox}
                  /> */}

                    <label
                      className="form-check-label"
                      htmlFor="onlineCheckbox"
                    >
                      Online{" "}
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      onBlur={handleBlur}
                      error={errors.checkbox}
                      onChange={handleChange}
                      // checked={values.checkbox}
                      className="form-check-input"
                      type="radio"
                      name="checkbox"
                      id="instoreCheckbox"
                      value="Instore"
                      checked={values.checkbox === "Instore" ? true : false}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="instoreCheckbox"
                    >
                      Instore{" "}
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      onBlur={handleBlur}
                      error={errors.checkbox}
                      onChange={handleChange}
                      className="form-check-input"
                      type="radio"
                      name="checkbox"
                      id="bothCheckbox"
                      value="Both"
                      checked={values.checkbox === "Both" ? true : false}
                    />
                    <label className="form-check-label" htmlFor="bothCheckbox">
                      Both
                    </label>
                  </div>
                </div>
                {errors.checkbox && touched.checkbox && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "14px",
                      marginTop: "0.5rem",
                    }}
                  >
                    {errors.checkbox}
                  </div>
                )}
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>Upload Logo</label>
                  {/* <input
                    class="form-control"
                    type="file"
                    name="CompanyUploadLogo"
                    id="CompanyUploadLogo"
                  /> */}
                  <input
                    type="file"
                    className="form-control"
                    // placeholder={"Sales"}
                    name="CompanyUploadLogo"
                    id="CompanyUploadLogo"
                    // onChange={(event) => {
                    //   // handleChange(e);
                    //   setFieldValue("CompanyUploadLogo", event.target.files[0]);
                    //   // const formData = new FormData();
                    //   // formData.append("file", event.target.files[0]);
                    //   // console.log("formData", formData);
                    //   // setFieldValue("CompanyUploadLogo", formData);
                    // }}
                    onChange={handleChange}
                    // value={values.CompanyUploadLogo}
                    onBlur={handleBlur}
                    error={errors.CompanyUploadLogo}
                  />
                  {errors.CompanyUploadLogo && touched.CompanyUploadLogo && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "14px",
                        marginTop: "0.5rem",
                      }}
                    >
                      {errors.CompanyUploadLogo}
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* <div className="form-group">
                  <label htmlFor="inputAddress">Address</label>
                  <input
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                    type="text"
                  />
                </div> */}
          </div>
          <div className={"actions p-4 formActionButtonsDiv"}>
            {/* <Button
          className={cantBack ? "hidePreviousButton" : "previousStepButton"}
          outline
          color="primary"
          onClick={backHandler}
          disabled={cantBack || isComplete}
        >
          Previous
        </Button> */}
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
    CompanyName: props.form.CompanyName,
    CompanyregistrationNumber: props.form.CompanyregistrationNumber,
    CompanyExpectedSale: props.form.CompanyExpectedSale,
    CompanyWebsite: props.form.CompanyWebsite,
    CompanyEmail: props.form.CompanyEmail,
    CompanyAddress: props.form.CompanyAddress,
    CompanyCity: props.form.CompanyCity,
    checkbox: props.form.checkbox,
    CompanyUploadLogo: props.form.CompanyUploadLogo,
  }),
  validationSchema: Yup.object().shape({
    CompanyName: Yup.string().required("Required"),
    CompanyregistrationNumber: Yup.number().required("Required"),
    CompanyExpectedSale: Yup.string().required("Required"),
    CompanyWebsite: Yup.string().required("Required"),
    CompanyEmail: Yup.string().email().required("Required"),
    CompanyAddress: Yup.string().required("Required"),
    CompanyCity: Yup.string().required("Required"),
    checkbox: Yup.string().required("Required"),
    CompanyUploadLogo: Yup.string().required("Required"),
  }),
  handleSubmit: (values, { props }) => {
    props.onNext(values);
  },
})(Step1);
