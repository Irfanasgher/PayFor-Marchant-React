import React, { useState, useEffect } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
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
import { GetAllDependentType } from "../../../../actions";
import MySelect from "../../MySelect";
import "./index.css";
/**
 * @author
 * @function Step8
 **/

const MedicalEmergency = (props) => {
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
    setFieldTouched,
    // Loki props
    onBack,
    cantBack,
  } = props;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllDependentType());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { dependentData } = useSelector((state) => state.EmployeeReducer);

  const bloodGroupList = [
    {
      id: "O+",
      name: "O+",
    },
    {
      id: "O-",
      name: "O",
    },
    {
      id: "A+",
      name: "A+",
    },
    {
      id: "A-",
      name: "A-",
    },
    {
      id: "B+",
      name: "B+",
    },

    {
      id: "B-",
      name: "B-",
    },

    {
      id: "AB+",
      name: "AB+",
    },

    {
      id: "AB-",
      name: "AB-",
    },
  ];

  const addEmergency = () => {
    const data = {
      emergencyName: values.emergencyName,
      EmergencyRelation: values.EmergencyRelation,
      emergencyAddress: values.emergencyAddress,
      emergencyContact: values.emergencyContact,
    };
    setFieldValue("emergency", [...dataArray, data]);
    setDataArray([...dataArray, data]);
    // setFieldValue("emergencyName", "");
    // setFieldValue("EmergencyRelation", "");
    // setFieldValue("emergencyAddress", "");
    // setFieldValue("emergencyContact", "");
    // values.arrayData = dataArray;
  };

  const dependentList = dependentData?.map((dt) => {
    return {
      value: dt.id_dependent_type,
      label: dt.name_dependent_type,
    };
  });

  const bloodGroupData = bloodGroupList?.map((pdes) => {
    return { value: pdes.id, label: pdes.name };
  });

  return (
    <div className="wizard-steps horizontal">
      <Form onSubmit={handleSubmit} className="d-flex flex-column">
        <Row className="p-5">
          <Col md="6">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                Name
              </Label>
              <Input
                type="text"
                name="emergencyName"
                onChange={handleChange}
                value={values.emergencyName}
                onBlur={handleBlur}
                error={errors.emergencyName}
              />
              {errors.emergencyName && touched.emergencyName && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  {errors.emergencyName}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <MySelect
                label="EmergencyRelation"
                options={dependentList}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                value={values.EmergencyRelation}
                touched={touched.EmergencyRelation}
                error={errors.EmergencyRelation}
                isMulti={false}
              />
            </FormGroup>
          </Col>

          <Col md="6">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                Address
              </Label>
              <Input
                type="text"
                name="emergencyAddress"
                onChange={handleChange}
                value={values.emergencyAddress}
                onBlur={handleBlur}
                error={errors.emergencyAddress}
              />
              {errors.emergencyAddress && touched.emergencyAddress && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  {errors.emergencyAddress}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                Contact #
              </Label>
              <Input
                type="number"
                name="emergencyContact"
                onChange={handleChange}
                value={values.emergencyContact}
                onBlur={handleBlur}
                error={errors.emergencyContact}
              />
              {errors.emergencyContact && touched.emergencyContact && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  {errors.emergencyContact}
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md="12" style={{ marginTop: "30px", marginBottom: "30px" }}>
            <div className="d-flex align-items-center">
              <Button
                href="#/"
                size="m"
                className="py-3"
                onClick={addEmergency}
                color="primary"
              >
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={["fas", "plus"]} />
                </span>
                <span className="btn-wrapper--label ml-3">Add Another</span>
              </Button>
            </div>
          </Col>
          <Col md="6">
            <FormGroup>
              <MySelect
                label="BloodGroup"
                options={bloodGroupData}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                value={values.BloodGroup}
                touched={touched.BloodGroup}
                error={errors.BloodGroup}
                isMulti={false}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                Allergy With
              </Label>
              <Input
                type="text"
                name="allergy"
                onChange={handleChange}
                value={values.allergy}
                onBlur={handleBlur}
                error={errors.allergy}
              />
              {errors.allergy && touched.allergy && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  {errors.allergy}
                </div>
              )}
            </FormGroup>
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
                  Name
                </th>
                <th className="text-center p-3">Relation</th>
                <th className="text-center p-3">Address</th>
                <th className="text-center p-3">Contact#</th>
              </tr>
            </thead>
            <tbody>
              {values?.emergency?.map((data, key) => {
                return (
                  <tr key={key}>
                    <td className="text-left pl-4">
                      <span>{data.emergencyName}</span>
                    </td>
                    <td className="text-center pl-4">
                      <span>{data.EmergencyRelation.label}</span>
                    </td>
                    <td className="text-center pl-4">
                      <span>{data.emergencyAddress}</span>
                    </td>
                    <td className="text-center pl-4">
                      <span>{data.emergencyContact}</span>
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
          <button
            type="submit"
            className="btn btn-primary1 ml-3"
            style={{
              cursor: dataArray?.length === 0 && "not-allowed",
            }}
            disabled={dataArray?.length === 0 || isSubmitting}
          >
            Save
          </button>
        </div>
      </Form>
    </div>
  );
};
export default withFormik({
  mapPropsToValues: (props) => ({
    emergency: props.form.emergency,
    emergencyName: props.form.emergencyName,
    EmergencyRelation: props.form.EmergencyRelation,
    emergencyAddress: props.form.emergencyAddress,
    emergencyContact: props.form.emergencyContact,
    BloodGroup: props.form.BloodGroup,
    allergy: props.form.allergy,
  }),

  validationSchema: Yup.object().shape({
    emergencyName: Yup.string().required("Required"),
    EmergencyRelation: Yup.object().required("Required"),
    emergencyAddress: Yup.string().required("Required"),
    emergencyContact: Yup.number().positive().required("Required"),
    BloodGroup: Yup.object().required("Required"),
    allergy: Yup.string().required("Required"),
  }),

  handleSubmit: (values, { props }) => {
    props.onNext(values);
  },
})(MedicalEmergency);
