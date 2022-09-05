import React, { useEffect } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Label, FormGroup, Input, Form } from "reactstrap";
import {
  GetAllEmployeeType,
  GetAllEmployeeTypeID,
  getALLRollType,
} from "../../../../actions";
import MySelect from "../../MySelect";
import "./index.css";
// import Label from "reactstrap/lib/Label";
/**
 * @author
 * @function Step1
 **/

const PersonalInformation = (props) => {
  const salutationList = [
    {
      id: "mr",
      name: "Mr",
    },
    {
      id: "mrs",
      name: "Mrs",
    },
    {
      id: "miss",
      name: "Miss",
    },
  ];

  const genderList = [
    {
      id: "male",
      name: "Male",
    },
    {
      id: "female",
      name: "Female",
    },
  ];

  const maritalList = [
    {
      id: "married",
      name: "Married",
    },
    {
      id: "unmarried",
      name: "Unmarried",
    },
  ];

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
  } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllEmployeeType());
    dispatch(GetAllEmployeeTypeID());
    dispatch(getALLRollType());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { employeeType, employeeTypeID } = useSelector(
    (state) => state.EmployeeReducer
  );
  const { roll } = useSelector((state) => state.RollReducer);

  const rollData = roll.filter((rol) => {
    return rol.name_role !== "Owner";
  });

  const rollDropdownData = rollData?.map((role) => {
    return { value: role.id_role, label: role.name_role };
  });

  const salutationData = salutationList?.map((pdes) => {
    return { value: pdes.id, label: pdes.name };
  });

  const genderData = genderList?.map((pdes) => {
    return { value: pdes.id, label: pdes.name };
  });

  const maritalData = maritalList?.map((pdes) => {
    return { value: pdes.id, label: pdes.name };
  });

  const employeeData = employeeType?.map((pdes) => {
    return { value: pdes.id_employee_type, label: pdes.name_employee_type };
  });
  const employeeTypeIDList = employeeTypeID?.map((pdes) => {
    return {
      value: pdes.id_authentication_type,
      label: pdes.name_authentication_type,
    };
  });

  // console.log(errors, "okkkkkk");
  return (
    <div className="wizard-steps horizontal">
      <Form onSubmit={handleSubmit} className="d-flex flex-column">
        <Row className="p-5">
          <Col md="6">
            <FormGroup>
              <MySelect
                label="Salutation"
                options={salutationData}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                value={values.Salutation}
                touched={touched.Salutation}
                error={errors.Salutation}
                isMulti={false}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                First Name
              </Label>
              <Input
                type="text"
                placeholder={"First Name"}
                name="firstName"
                onChange={handleChange}
                value={values.firstName}
                onBlur={handleBlur}
                error={errors.firstName}
              />
              {errors.firstName && touched.firstName && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  {errors.firstName}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                Last Name{" "}
              </Label>
              <Input
                type="text"
                placeholder={"Last Name"}
                name="lastName"
                onChange={handleChange}
                value={values.lastName}
                onBlur={handleBlur}
                error={errors.lastName}
              />
              {errors.lastName && touched.lastName && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  {errors.lastName}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                Father/Husband Name
              </Label>
              <Input
                type="text"
                placeholder="Enter name..."
                name="fatherName"
                onChange={handleChange}
                value={values.fatherName}
                onBlur={handleBlur}
                error={errors.fatherName}
              />
              {errors.fatherName && touched.fatherName && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                  className={"formikError"}
                >
                  {errors.fatherName}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                Official Email
              </Label>
              <Input
                type="email"
                placeholder={"Enter Email"}
                name="email"
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
              <Label for="" className="font-weight-bold">
                Personal Email
              </Label>
              <Input
                type="email"
                placeholder={"Enter Email"}
                name="personalEmail"
                onChange={handleChange}
                value={values.personalEmail}
                onBlur={handleBlur}
                error={errors.personalEmail}
              />
              {errors.personalEmail && touched.personalEmail && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  {errors.personalEmail}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                Phone
              </Label>
              <Input
                type="number"
                placeholder={"Phone"}
                name="phone"
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
            <Label for="" className="font-weight-bold">
              Date Of Birth{" "}
            </Label>
            {/* <InputGroup>
              <DatePicker
                className="form-control"
                // dateFormat={"yyyy-MM-dd"}
                placeholder={"1990/08/19"}
                // selected={startDate}
                onChange={(e) => {
                  setFieldValue("datePicker", new Date(e));
                }}
                // onBlur={(e) => {
                //   setFieldTouched("datePicker", e);
                // }}
                startDate={startDate}
                name="datePicker"
              />
              <InputGroupAddon addonType="append">
                <InputGroupText>
                  <FontAwesomeIcon icon={["far", "calendar-alt"]} />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup> */}
            <Input
              type="date"
              placeholder={"Date Picker"}
              name="datePicker"
              onChange={handleChange}
              value={values.datePicker}
              onBlur={handleBlur}
              error={errors.datePicker}
            />
            {errors.datePicker && touched.datePicker && (
              <div
                style={{
                  color: "red",
                  fontSize: "14px",
                  marginTop: "0.5rem",
                }}
              >
                {errors.datePicker}
              </div>
            )}
          </Col>
          <Col md="6">
            <FormGroup>
              <MySelect
                label="Gender"
                options={genderData}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                value={values.Gender}
                touched={touched.Gender}
                error={errors.Gender}
                isMulti={false}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <MySelect
                label="Marital"
                options={maritalData}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                value={values.Marital}
                touched={touched.Marital}
                error={errors.Marital}
                isMulti={false}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                CNIC
              </Label>
              <Input
                type="number"
                placeholder={"35202-0000000-0"}
                name="cnicNumber"
                onChange={handleChange}
                value={values.cnicNumber}
                onBlur={handleBlur}
                error={errors.cnicNumber}
              />
              {errors.cnicNumber && touched.cnicNumber && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  {errors.cnicNumber}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <MySelect
                label="EmployeeTypeId"
                options={employeeTypeIDList}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                value={values.EmployeeTypeId}
                touched={touched.EmployeeTypeId}
                error={errors.EmployeeTypeId}
                isMulti={false}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <MySelect
                label="EmployeeType"
                options={employeeData}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                value={values.EmployeeType}
                touched={touched.EmployeeType}
                error={errors.EmployeeType}
                isMulti={false}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <MySelect
                label="Role"
                options={rollDropdownData}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                value={values.Role}
                touched={touched.Role}
                error={errors.Role}
                isMulti={false}
              />
            </FormGroup>
          </Col>

          {/* {employeeType?.map((data, key) => {
            return (
              <Col md="4" key={key}>
                <CustomInput
                  onChange={() => setEmployeeID(data.id_employee_type)}
                  type="radio"
                  className="align-self-start"
                  id={data.id_employee_type}
                  label={data.name_employee_type}
                  name="customRadio"
                />
              </Col>
            );
          })} */}
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
            // onClick={() => {
            //   props.onNext();
            // }}
          >
            Next
          </button>
        </div>
      </Form>
    </div>
  );
};
export default withFormik({
  mapPropsToValues: (props) => ({
    Role: props.form.Role,
    Salutation: props.form.Salutation,
    firstName: props.form.firstName,
    lastName: props.form.lastName,
    fatherName: props.form.fatherName,
    email: props.form.email,
    personalEmail: props.form.personalEmail,
    phone: props.form.phone,
    Gender: props.form.Gender,
    Marital: props.form.Marital,
    cnicNumber: props.form.cnicNumber,
    EmployeeType: props.form.EmployeeType,
    EmployeeTypeId: props.form.EmployeeTypeId,
    datePicker: props.form.datePicker,
  }),
  validationSchema: Yup.object().shape({
    // Salutation: Yup.object()
    //   .shape({
    //     label: Yup.string().required("Required"),
    //     value: Yup.string().required("Required"),
    //   })
    //   .required(),
    Salutation: Yup.object().required("Required"),
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    fatherName: Yup.string().required("Required"),
    email: Yup.string().email().required("Required"),
    personalEmail: Yup.string().email().required("Required"),
    phone: Yup.number().positive().required("Required"),
    Gender: Yup.object().required("Required"),
    Marital: Yup.object().required("Required"),
    cnicNumber: Yup.number().positive().required("Required"),
    EmployeeType: Yup.object().required("Required"),
    EmployeeTypeId: Yup.object().required("Required"),
    datePicker: Yup.date().required("Date is Required").nullable(),
  }),
  handleSubmit: (values, { props }) => {
    props.onNext(values);
  },
})(PersonalInformation);
