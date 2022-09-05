import React, { useState } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Row, Col, Label, FormGroup, Input, Form } from "reactstrap";
// import CreatableSelect from "../../MyCreatableSelect";
import { addCompany } from "../../../../actions";
import "./index.css";
// import Label from "reactstrap/lib/Label";
/**
 * @author
 * @function Step2
 **/

const BasicInfo = (props) => {
  const [image, setImage] = useState();
  const {
    // Formik HOC props
    isSubmitting,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    values,
    touched,
    // setFieldValue,
    // setFieldTouched,
    // Loki props
    // onBack,
    // cantBack,
    // backLabel,
  } = props;

  const dispatch = useDispatch();
  // console.log("orhhhhjj", props);
  // useEffect(() => {
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let baseURL = "";
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        baseURL = reader.result;
        // console.log("base url", baseURL);
        resolve(baseURL);
      };
    });
  };

  const handleFileInputChange = (e) => {
    getBase64(e.target.files[0])
      .then((result) => {
        // const str = result.replaceAll("data:image/png;base64,", "");
        console.log("base url company step 1", result);
        setImage(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addComp = () => {
    const data = {
      organization_id: values.orgId,
      name_company: values.companyName,
      legal_name_company: values.legalName,
      code_company: values.code,
      ntn_company: values.ntn,
      phone_company: values.phone,
      email_company: values.email,
      url_website_company: values.website,
      url_logo: image,
      description_company: values.description,
    };
    if (
      values.companyName &&
      values.legalName &&
      values.code &&
      values.ntn &&
      values.phone &&
      values.email &&
      values.website &&
      image &&
      values.description
    ) {
      dispatch(addCompany(data));
    }
  };

  return (
    <div className="wizard-steps horizontal">
      {/* <div className="px-4 pt-4">
        <h5 className="font-size-xl font-weight-bold">Basic Details</h5>
      </div> */}

      <Form onSubmit={handleSubmit} className="d-flex flex-column">
        <Row className="p-5">
          <Col md="6">
            <FormGroup>
              <Label for="">Company Name</Label>
              <Input
                type="text"
                placeholder={"Company Name"}
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
                >
                  {errors.companyName}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="">Legal Company Name </Label>
              <Input
                type="text"
                name="legalName"
                placeholder={"Legal Name"}
                onChange={handleChange}
                value={values.legalName}
                onBlur={handleBlur}
                error={errors.legalName}
              />
              {errors.legalName && touched.legalName && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  {errors.legalName}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="">Code</Label>
              <Input
                type="text"
                name="code"
                onChange={handleChange}
                placeholder="Enter code..."
                // touched={touched.code}
                value={values.code}
                onBlur={handleBlur}
                error={errors.code}
              />
              {errors.code && touched.code && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                  className={"formikError"}
                >
                  {errors.code}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="">NTN #</Label>
              <Input
                type="text"
                name="ntn"
                placeholder={"NTN #"}
                onChange={handleChange}
                value={values.ntn}
                onBlur={handleBlur}
                error={errors.ntn}
              />
              {errors.ntn && touched.ntn && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  {errors.ntn}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="">Phone No</Label>
              <Input
                type="number"
                name="phone"
                placeholder={"Phone"}
                onChange={handleChange}
                value={values.phone}
                onBlur={handleBlur}
                error={errors.phone}
              />
              {errors.phone && touched.phone && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  {errors.phone}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="">Official Email address </Label>
              <Input
                type="email"
                name="email"
                placeholder={"Email Address"}
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
                error={errors.email}
              />
              {errors.email && touched.email && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  {errors.email}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="">Website</Label>
              <Input
                type="text"
                name="website"
                placeholder={"Website"}
                onChange={handleChange}
                value={values.website}
                onBlur={handleBlur}
                error={errors.website}
              />
              {errors.website && touched.website && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  {errors.website}
                </div>
              )}
            </FormGroup>
          </Col>
          {/* <Col md="6">
            <FormGroup>
              <Label for="">Time Zone</Label>
              <CreatableSelect
                label="timezone"
                // options={optionUnits[0]}
                isClearable
                placeholder={"Country"}
                // isDisabled={loading}
                // isLoading={isLoadingList}
                touched={touched.timezone}
                value={values.timezone}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.timezone}
              />
              {errors.timezone && touched.timezone && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  {errors.timezone}
                </div>
              )}
            </FormGroup>
          </Col> */}
          <Col md="6">
            <FormGroup>
              <Label for="">Company Logo</Label>
              <Input
                type="file"
                name="companylogo"
                onChange={(e) => {
                  handleFileInputChange(e);
                  handleChange(e);
                }}
                // value={values.companylogo}
                onBlur={handleBlur}
                error={errors.companylogo}
              />
              {errors.companylogo && touched.companylogo && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  {errors.companylogo}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="12">
            <FormGroup>
              <Label for="">Description</Label>
              <Input
                type="textarea"
                name="description"
                placeholder={"description"}
                onChange={handleChange}
                value={values.description}
                onBlur={handleBlur}
                error={errors.description}
              />
              {errors.description && touched.description && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  {errors.description}
                </div>
              )}
            </FormGroup>
          </Col>
        </Row>
        <div className="divider my-5" />
        <div className="button-group d-flex justify-content-end m-4">
          {/* <button
            type="button"
            className="btn btn-primary1"
            onClick={onBack}
            disabled={isSubmitting || cantBack}
          >
            {backLabel}
          </button> */}
          <button
            type="submit"
            className="btn btn-primary1 ml-3"
            disabled={isSubmitting}
            onClick={() => {
              addComp();
            }}
            // onClick={() => {
            //   props.onNext();
            // }}
          >
            Save & Next
          </button>
        </div>
      </Form>
    </div>
  );
};
export default withFormik({
  mapPropsToValues: (props) => ({
    companyName: props.form.companyName,
    legalName: props.form.legalName,
    code: props.form.code,
    ntn: props.form.ntn,
    phone: props.form.phone,
    email: props.form.email,
    website: props.form.website,
    // timezone: props.form.timezone,
    companylogo: props.form.companylogo,
    description: props.form.description,
    orgId: props.orgId,
  }),
  validationSchema: Yup.object().shape({
    companyName: Yup.string().required(),
    legalName: Yup.string().required(),
    code: Yup.number().positive().required(),
    ntn: Yup.number().positive().required(),
    phone: Yup.number().positive().required(),
    email: Yup.string().email().required(),
    website: Yup.string().required(),
    // timezone: Yup.string().required(),
    companylogo: Yup.string().required(),
    description: Yup.string().required(),
  }),
  handleSubmit: (values, { props }) => {
    props.onNext(values);
  },
})(BasicInfo);
