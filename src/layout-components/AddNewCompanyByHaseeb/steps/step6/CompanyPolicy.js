import React, { useEffect } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import Switch from "rc-switch";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Input, Label, FormGroup, Form, Table } from "reactstrap";
import {
  getAllPoliciesForDropDown,
  createMappingPolicy,
  getAllPolicyByCompanyId,
  disableMappingPolicy,
  enableMappingPolicy,
} from "../../../../actions";
import CreatableSelect from "../../MyCreatableSelect";

import "./index.scss";

/**
 * @author
 * @function Step2
 **/

const CompanyPolicy = (props) => {
  const {
    // Formik HOC props
    values,
    touched,
    errors,
    isSubmitting,
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
    dispatch(getAllPoliciesForDropDown());
    dispatch(getAllPolicyByCompanyId(companyData?.id_company));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { companyData } = useSelector((state) => state.CompanyReducer);
  const { dropDownPolicies, companyIdPolicies } = useSelector(
    (state) => state.PolicyReducer
  );

  const policies = [
    dropDownPolicies?.map((pdes) => {
      var value = pdes.id_policy;
      var label = pdes.name_policy;
      return { value, label };
    }),
  ];

  const addCompanyPolicy = () => {
    const data = {
      company_id: companyData?.id_company,
      policy_id: values.policyName.value,
      // name_policy: values.policyNote,
    };
    if (values.policyName.value) {
      dispatch(createMappingPolicy(data)).then(() => {
        dispatch(getAllPolicyByCompanyId(companyData?.id_company));
      });
    }
  };

  const handleToggle = (data) => {
    if (data?.is_enable === true) {
      dispatch(disableMappingPolicy(data?.id_mapping_company_policy)).then(
        () => {
          dispatch(getAllPolicyByCompanyId(companyData?.id_company));
        }
      );
    } else {
      dispatch(enableMappingPolicy(data?.id_mapping_company_policy)).then(
        () => {
          dispatch(getAllPolicyByCompanyId(companyData?.id_company));
        }
      );
    }
  };

  console.log("companyIdPolicies", companyIdPolicies);
  return (
    <div id="companyPolicy" className="wizard-steps horizontal">
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
              <Label for="">Policy</Label>
              <CreatableSelect
                label="policyName"
                options={policies[0]}
                isClearable
                placeholder={"Country"}
                // isDisabled={loading}
                // isLoading={isLoadingList}
                touched={touched.policyName}
                value={values.policyName}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.policyName}
              />
              {errors.policyName && touched.policyName && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  please select Policy
                </div>
              )}
            </FormGroup>
          </Col>

          {/* <div className="form-group cstm_select col-md-6">
            <Label>Start date:</Label>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <FontAwesomeIcon icon={["far", "calendar-alt"]} />
                </InputGroupText>
              </InputGroupAddon>
              <DatePicker
                className="form-control"
                dateFormat={"yyyy-MM-dd"}
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                }}
                startDate={startDate}
                endDate={endDate}
              />
            </InputGroup>
          </div>
          <div className="form-group cstm_select col-md-6">
            <Label>End date:</Label>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <FontAwesomeIcon icon={["far", "calendar-alt"]} />
                </InputGroupText>
              </InputGroupAddon>
              <DatePicker
                className="form-control"
                dateFormat={"yyyy-MM-dd"}
                selected={endDate}
                onChange={(date) => {
                  setEndDate(date);
                }}
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
              />
            </InputGroup>
          </div>
          
          */}

          {/* <Col md="12" style={{ marginTop: "30px" }}>
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
              <span className="btn-wrapper--label">Add New Policy</span>
            </Button>
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
                  Policies
                </th>
                <th className="text-center p-3">Company</th>
                <th className="text-center p-3">Code</th>
                <th className="text-center p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {companyIdPolicies?.map((data, key) => {
                return (
                  <tr key={key}>
                    <td className="text-left pl-4">
                      <span>{data.policy.name_policy}</span>
                    </td>
                    <td className="text-center pl-4">
                      <span>{companyData?.name_company}</span>
                    </td>
                    <td className="text-center pl-4">
                      <span>01</span>
                    </td>

                    <td className="text-center">
                      <div className="d-flex align-items-center justify-content-center">
                        <div className="ml-2">
                          <Switch
                            checked={data?.is_enable}
                            onClick={() => handleToggle(data)}
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
              onClick={() => {
                addCompanyPolicy();
              }}
              disabled={isSubmitting || cantBack}
            >
              Save
            </button>
            <button
              type="submit"
              className="btn btn-primary1 ml-3"
              // disabled={isSubmitting}
              onClick={() => {
                props.onNext();
              }}
              style={{
                cursor: companyIdPolicies?.length === 0 && "not-allowed",
              }}
              disabled={companyIdPolicies?.length === 0}
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
    policyName: props.form.policyName,
    policyNote: props.form.policyNote,
  }),
  validationSchema: Yup.object().shape({
    policyName: Yup.object().shape({
      label: Yup.string().required("Required"),
      value: Yup.string().required("Required"),
    }),
    policyNote: Yup.string().required(),
  }),
  handleSubmit: (values, { props }) => {
    props.onNext(values);
  },
})(CompanyPolicy);
