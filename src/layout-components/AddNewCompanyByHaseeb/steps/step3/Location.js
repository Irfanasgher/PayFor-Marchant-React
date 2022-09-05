import React, { useEffect } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import Switch from "rc-switch";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Label,
  FormGroup,
  Input,
  // Button,
  Form,
  Table,
} from "reactstrap";
import {
  getAllCountries,
  getAllStates,
  postUnitLocation,
  getAllLocationByCompanyId,
  disableLocation,
  enableLocation,
} from "../../../../actions";
import CreatableSelect from "../../MyCreatableSelect";

import "./index.css";

/**
 * @author
 * @function Step2
 **/

const Location = (props) => {
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
    values.countryName && dispatch(getAllStates(values.countryName.value));
    dispatch(getAllLocationByCompanyId(companyData?.id_company));
  }, [values.countryName]); //eslint-disable-line react-hooks/exhaustive-deps

  const { countriesData } = useSelector((state) => state.CompanyReducer);
  const { statesData } = useSelector((state) => state.CompanyReducer);
  const { companyData } = useSelector((state) => state.CompanyReducer);
  const { companyLocation } = useSelector((state) => state.CompanyReducer);
  // console.log("companyLocation", companyLocation);
  // console.log("abddddd", statesData);
  // console.log("companyData", companyData);

  const optionCountry = [
    countriesData?.map((pdes) => {
      var value = pdes.id_country;
      var label = pdes.name_country;
      return { value, label };
    }),
  ];
  const optionState = [
    statesData?.map((pdes) => {
      var value = pdes.id_state;
      var label = pdes.name_state;
      return { value, label };
    }),
  ];
  // const optionUnits = [
  //   units?.map((unit) => {
  //     var value = unit.id_unit;
  //     var label = unit.name_unit;
  //     return { value, label };
  //   }),
  // ];

  const addLocation = () => {
    const data = {
      company_id: companyData.id_company,
      name_location: values.locationName,
      state_id: values.stateName.value,
      name_division: values.divisionName,
      name_district: values.districtName,
      name_tehsil: values.tehsilName,
      name_city: values.cityName1,
      code_location: values.locationCode,
      address1_location: values.address1Location,
      address2_location: values.address2Location,
      postal_code_location: values.postalCodeLocation,
      phone_location: values.phoneLocation,
      email_location: values.emailLocation,
      note_location: values.noteLocation,
    };
    if (
      values.stateName.value &&
      values.divisionName &&
      values.districtName &&
      values.tehsilName &&
      values.cityName1 &&
      values.locationName &&
      values.locationCode &&
      values.address1Location &&
      values.address2Location &&
      values.postalCodeLocation &&
      values.phoneLocation &&
      values.emailLocation &&
      values.noteLocation
    ) {
      dispatch(postUnitLocation(data)).then(() => {
        dispatch(getAllLocationByCompanyId(companyData.id_company));
      });
    }
  };
  const handleToggle = (data) => {
    if (data?.is_enable_location === true) {
      dispatch(disableLocation(data?.id_location)).then(() => {
        dispatch(getAllLocationByCompanyId(companyData.id_company));
      });
    } else {
      dispatch(enableLocation(data?.id_location)).then(() => {
        dispatch(getAllLocationByCompanyId(companyData.id_company));
      });
    }
  };
  return (
    <div className="wizard-steps horizontal">
      {/* <div className="px-4 pt-4">
        <h5 className="font-size-xl font-weight-bold">Location Detail</h5>
      </div> */}

      <Form onSubmit={handleSubmit} className="d-flex flex-column">
        <Row className="p-5">
          <Col md="6">
            <FormGroup>
              <Label for="">Company</Label>
              <Input type="text" value={companyData?.name_company} readOnly />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="">Title/Name</Label>
              <Input
                type="text"
                name="locationName"
                // placeholder={"Text 1"}
                onChange={handleChange}
                value={values.locationName}
                onBlur={handleBlur}
                error={errors.locationName}
              />
              {errors.locationName && touched.locationName && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  {errors.locationName}
                </div>
              )}
            </FormGroup>
          </Col>
          {/* <Col md="12">
            <FormGroup>
              <Label for="">Address</Label>
              <Input
                type="text"
                name="address"
                placeholder={"Text 1"}
                onChange={handleChange}
                value={values.address}
                onBlur={handleBlur}
                error={errors.address}
              />
              {errors.address && touched.address && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  Please enter any devision name to proceed
                </div>
              )}
            </FormGroup>
          </Col> */}

          <Col md="6">
            <FormGroup>
              <Label for="">Country</Label>
              <CreatableSelect
                label="countryName"
                options={optionCountry[0]}
                isClearable
                placeholder={"Country"}
                // isDisabled={loading}
                // isLoading={isLoadingList}
                touched={touched.countryName}
                value={values.countryName}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.countryName}
              />
              {/* {console.log("www", values.countryName)} */}
              {errors.countryName && touched.countryName && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  please select Country
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="">Province/State</Label>
              <CreatableSelect
                label="stateName"
                //options={options}
                options={optionState[0]}
                isClearable
                placeholder={"Country"}
                // isDisabled={loading}
                // isLoading={isLoadingList}
                touched={touched.stateName}
                value={values.stateName}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.stateName}
              />
              {/* {console.log("sss", values.stateName)} */}
              {errors.stateName && touched.stateName && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  please select State
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="">Division Name</Label>
              <Input
                type="text"
                name="divisionName"
                // placeholder={"Division Name"}
                onChange={handleChange}
                value={values.divisionName}
                onBlur={handleBlur}
                error={errors.divisionName}
              />
              {errors.divisionName && touched.divisionName && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  Please enter any devision name to proceed
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="">District Name</Label>
              <Input
                type="text"
                name="districtName"
                // placeholder={"District Name"}
                onChange={handleChange}
                value={values.districtName}
                onBlur={handleBlur}
                error={errors.districtName}
              />
              {errors.districtName && touched.districtName && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  {errors.districtName}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="">Tehsil Name</Label>
              <Input
                type="text"
                name="tehsilName"
                // placeholder={"Tehsil Name"}
                onChange={handleChange}
                value={values.tehsilName}
                onBlur={handleBlur}
                error={errors.tehsilName}
              />
              {errors.tehsilName && touched.tehsilName && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  {errors.tehsilName}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="">City Name</Label>
              <Input
                type="text"
                name="cityName1"
                // placeholder={"City Name"}
                onChange={handleChange}
                value={values.cityName1}
                onBlur={handleBlur}
                error={errors.cityName1}
              />
              {errors.cityName1 && touched.cityName1 && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  {errors.cityName1}
                </div>
              )}
            </FormGroup>
          </Col>
          {/* <Col md="6">
            <FormGroup>
              <Label for="">Location</Label>
              <Input
                type="text"
                name="locationName"
                // placeholder={"Location"}
                onChange={handleChange}
                value={values.locationName}
                onBlur={handleBlur}
                error={errors.locationName}
              />
              {errors.locationName && touched.locationName && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  {errors.locationName}
                </div>
              )}
            </FormGroup>
          </Col> */}
          <Col md="6">
            <FormGroup>
              <Label for="">Location Code</Label>
              <Input
                type="text"
                name="locationCode"
                // placeholder={"Location Code"}
                onChange={handleChange}
                value={values.locationCode}
                onBlur={handleBlur}
                error={errors.locationCode}
              />
              {errors.locationCode && touched.locationCode && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  {errors.locationCode}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="">Address1 Location</Label>
              <Input
                type="text"
                name="address1Location"
                // placeholder={"Address1 Location"}
                onChange={handleChange}
                value={values.address1Location}
                onBlur={handleBlur}
                error={errors.address1Location}
              />
              {errors.address1Location && touched.address1Location && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  {errors.address1Location}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="">Address2 Location</Label>
              <Input
                type="text"
                name="address2Location"
                // placeholder={"Address2 Location"}
                onChange={handleChange}
                value={values.address2Location}
                onBlur={handleBlur}
                error={errors.address2Location}
              />
              {errors.address2Location && touched.address2Location && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  {errors.address2Location}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="">Postal Code Location</Label>
              <Input
                type="text"
                name="postalCodeLocation"
                // placeholder={"Postal Code Location"}
                onChange={handleChange}
                value={values.postalCodeLocation}
                onBlur={handleBlur}
                error={errors.postalCodeLocation}
              />
              {errors.postalCodeLocation && touched.postalCodeLocation && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  {errors.postalCodeLocation}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="">Phone No</Label>
              <Input
                type="number"
                name="phoneLocation"
                // placeholder={"Postal Code Location"}
                onChange={handleChange}
                value={values.phoneLocation}
                onBlur={handleBlur}
                error={errors.phoneLocation}
              />
              {errors.phoneLocation && touched.phoneLocation && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  {errors.phoneLocation}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="">Official Email Address </Label>
              <Input
                type="email"
                name="emailLocation"
                // placeholder={"Postal Code Location"}
                onChange={handleChange}
                value={values.emailLocation}
                onBlur={handleBlur}
                error={errors.emailLocation}
              />
              {errors.emailLocation && touched.emailLocation && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  {errors.emailLocation}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="12">
            <FormGroup>
              <Label for="">Description</Label>
              <Input
                type="textarea"
                name="noteLocation"
                placeholder={"description"}
                onChange={handleChange}
                value={values.noteLocation}
                onBlur={handleBlur}
                error={errors.noteLocation}
              />
              {errors.noteLocation && touched.noteLocation && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  {errors.noteLocation}
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
                <span className="btn-wrapper--label ml-3">
                  Add More Location
                </span>
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
                  Loc/Com
                </th>
                <th className="text-center p-3">Email</th>
                <th className="text-center p-3">City</th>
                <th className="text-center p-3">Ph#</th>
                <th className="text-center p-3">Code</th>
                <th className="text-center p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {companyLocation?.map((data, key) => {
                // console.log("dataaaaaaaaaaaa", data);
                return (
                  <tr key={key}>
                    <td className="text-left pl-4">
                      <span>{data.name_location}</span>
                    </td>
                    <td className="text-center">
                      <span>{data.email_location}</span>
                    </td>
                    <td className="text-center pl-4">
                      <span>{data.city.name_city}</span>
                    </td>
                    <td className="text-center">
                      <span>{data.phone_location}</span>
                    </td>
                    <td className="text-center">
                      <span>{data.code_location}</span>
                    </td>

                    <td className="text-center">
                      <div className="d-flex align-items-center justify-content-center">
                        <div className="ml-2">
                          <Switch
                            checked={data?.is_enable_location}
                            onClick={() => handleToggle(data)}
                            // className="switch-small toggle-switch-square toggle-switch-first"
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
              onClick={addLocation}
              disabled={isSubmitting || cantBack}
            >
              Save
            </button>
            <button
              type="submit"
              className="btn btn-primary1 ml-3"
              // disabled={isSubmitting}
              style={{
                cursor: companyLocation?.length === 0 && "not-allowed",
              }}
              disabled={companyLocation?.length === 0}
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
    locationName: props.form.locationName,
    countryName: props.form.countryName,
    stateName: props.form.stateName,
    divisionName: props.form.divisionName,
    districtName: props.form.districtName,
    tehsilName: props.form.tehsilName,
    cityName1: props.form.cityName1,
    locationCode: props.form.locationCode,
    address1Location: props.form.address1Location,
    address2Location: props.form.address2Location,
    postalCodeLocation: props.form.postalCodeLocation,
    phoneLocation: props.form.phoneLocation,
    emailLocation: props.form.emailLocation,
    noteLocation: props.form.noteLocation,
  }),

  validationSchema: Yup.object().shape({
    locationName: Yup.string().required(),
    countryName: Yup.object().shape({
      label: Yup.string().required("Required"),
      value: Yup.string().required("Required"),
    }),
    stateName: Yup.object().shape({
      label: Yup.string().required("Required"),
      value: Yup.string().required("Required"),
    }),
    divisionName: Yup.string().required(),
    districtName: Yup.string().required(),
    tehsilName: Yup.string().required(),
    cityName1: Yup.string().required(),
    locationCode: Yup.string().required(),
    address1Location: Yup.string().required(),
    address2Location: Yup.string().required(),
    postalCodeLocation: Yup.string().required(),
    phoneLocation: Yup.string().required(),
    emailLocation: Yup.string().required(),
    noteLocation: Yup.string().required(),
  }),

  handleSubmit: (values, { props }) => {
    props.onNext(values);
  },
})(Location);
