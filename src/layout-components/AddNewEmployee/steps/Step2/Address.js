import React, { useState, useEffect } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Label, FormGroup, Input, Button, Form } from "reactstrap";
import { getAllCountries, GetAllAddressType } from "../../../../actions";
import MySelect from "../../MySelect";
import "./index.css";
// import Label from "reactstrap/lib/Label";
/**
 * @author
 * @function Step2
 **/

const Address = (props) => {
  const [dataArray, setDataArray] = useState([]);
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
    setFieldTouched,
    // Loki props
    nextLabel,
    onBack,
    cantBack,
  } = props;

  const dispatch = useDispatch();
  // console.log("orhhhhjj", props);
  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(GetAllAddressType());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { countriesData } = useSelector((state) => state.CompanyReducer);
  const { adddressType } = useSelector((state) => state.EmployeeReducer);

  const countriesList = countriesData?.map((pdes) => {
    return { value: pdes.id_country, label: pdes.name_country };
  });

  const adddressList = adddressType?.map((pdes) => {
    return { value: pdes.id_address_type, label: pdes.name_address_type };
  });

  const addArrayData = () => {
    const data = {
      address_type_id: values.AdddressType.value,
      full_name_employee_address: values.locationAddress,
      mobile_no_employee_address: values.locationNumber,
      landline_employee_address: values.alternativeNumber,
      city_employee_address: values.cityName,
      province_employee_address: values.province,
      postal_code_employee_address: values.postalCode,
      country_employee_address: values.Country.label,
    };
    setFieldValue("addressData", [...dataArray, data]);
    setDataArray([...dataArray, data]);
    // setFieldValue("province", "");
    // values.addressData = dataArray;
    console.log("valuessssss", values);
  };

  // console.log("dataArray", dataArray);
  return (
    <div className="wizard-steps horizontal">
      <Form onSubmit={handleSubmit} className="d-flex flex-column">
        <Row className="p-5">
          <Col md="6">
            <FormGroup>
              <MySelect
                label="Country"
                options={countriesList}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                value={values.Country}
                touched={touched.Country}
                error={errors.Country}
                isMulti={false}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <MySelect
                label="AdddressType"
                options={adddressList}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                value={values.AdddressType}
                touched={touched.AdddressType}
                error={errors.AdddressType}
                isMulti={false}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                Province
              </Label>
              <Input
                type="text"
                name="province"
                onChange={handleChange}
                value={values.province}
                onBlur={handleBlur}
                error={errors.province}
              />
              {errors.province && touched.province && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  {errors.province}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                City
              </Label>
              <Input
                type="text"
                name="cityName"
                onChange={handleChange}
                value={values.cityName}
                onBlur={handleBlur}
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
                  {errors.cityName}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                Postal Code
              </Label>
              <Input
                type="text"
                name="postalCode"
                onChange={handleChange}
                value={values.postalCode}
                onBlur={handleBlur}
                error={errors.postalCode}
              />
              {errors.postalCode && touched.postalCode && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                  className={"formikError"}
                >
                  {errors.postalCode}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                Phone No
              </Label>
              <Input
                type="number"
                name="locationNumber"
                onChange={handleChange}
                value={values.locationNumber}
                onBlur={handleBlur}
                error={errors.locationNumber}
              />
              {errors.locationNumber && touched.locationNumber && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  {errors.locationNumber}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                Alternative Phone No
              </Label>
              <Input
                type="number"
                name="alternativeNumber"
                onChange={handleChange}
                value={values.alternativeNumber}
                onBlur={handleBlur}
                error={errors.alternativeNumber}
              />
              {errors.alternativeNumber && touched.alternativeNumber && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  {errors.alternativeNumber}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="12">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                Address
              </Label>
              <Input
                type="text"
                name="locationAddress"
                onChange={handleChange}
                value={values.locationAddress}
                onBlur={handleBlur}
                error={errors.locationAddress}
              />
              {errors.locationAddress && touched.locationAddress && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                  className={"formikError"}
                >
                  {errors.locationAddress}
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
                onClick={addArrayData}
                color="primary"
              >
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={["fas", "plus"]} />
                </span>
                <span className="btn-wrapper--label ml-3">
                  Add More Location
                </span>
              </Button>
            </div>
          </Col>
        </Row>
        <div className="divider my-5" />
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
              // disabled={isSubmitting}
              style={{
                cursor: dataArray?.length === 0 && "not-allowed",
              }}
              disabled={dataArray?.length === 0}
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
    addressData: props.form.addressData,
    Country: props.form.Country,
    AdddressType: props.form.AdddressType,
    province: props.form.province,
    cityName: props.form.cityName,
    postalCode: props.form.postalCode,
    locationNumber: props.form.locationNumber,
    alternativeNumber: props.form.alternativeNumber,
    locationAddress: props.form.locationAddress,
  }),
  validationSchema: Yup.object().shape({
    Country: Yup.object().required("Required"),
    AdddressType: Yup.object().required("Required"),
    province: Yup.string().required("Required"),
    cityName: Yup.string().required("Required"),
    postalCode: Yup.number().positive().required("Required"),
    locationNumber: Yup.number().positive().required("Required"),
    alternativeNumber: Yup.number().positive().required("Required"),
    locationAddress: Yup.string().required("Required"),
  }),
  handleSubmit: (values, { props }) => {
    props.onNext(values);
  },
})(Address);
