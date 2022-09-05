import React, { useEffect } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import Switch from "rc-switch";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Label, FormGroup, Form, Table, Input } from "reactstrap";
import {
  getAllDesignation,
  mappingDesignation,
  GetAllDesignationByCompanyId,
  enableMappingDesignation,
  disableMappingDesignation,
} from "../../../../actions";
import CreatableSelect from "../../MyCreatableSelect";
import "./index.css";
/**
 * @author
 * @function Step2
 **/

const Designation = (props) => {
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
    dispatch(getAllDesignation());
    dispatch(GetAllDesignationByCompanyId(companyData?.id_company));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { companyData } = useSelector((state) => state.CompanyReducer);
  const { designationData, designationByCompany } = useSelector(
    (state) => state.DesignationReducer
  );

  const designation = [
    designationData?.map((pdes) => {
      var value = pdes.details.id_designation;
      var label = pdes.details.name_designation;
      return { value, label };
    }),
  ];

  const addDesignation = () => {
    const data = {
      company_id: companyData?.id_company,
      designation_id: values.designationName.value,
    };
    if (companyData?.id_company && values.designationName.value) {
      dispatch(mappingDesignation(data)).then(() => {
        dispatch(GetAllDesignationByCompanyId(companyData?.id_company));
      });
    }
  };

  const handleToggle = (data) => {
    if (data?.is_enable === true) {
      dispatch(
        disableMappingDesignation(data?.id_mapping_designation_company)
      ).then(() => {
        dispatch(GetAllDesignationByCompanyId(companyData?.id_company));
      });
    } else {
      dispatch(
        enableMappingDesignation(data?.id_mapping_designation_company)
      ).then(() => {
        dispatch(GetAllDesignationByCompanyId(companyData?.id_company));
      });
    }
  };

  console.log("designationByCompany", designationByCompany);
  return (
    <div className="wizard-steps horizontal">
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
              <Label for="">Designation</Label>
              <CreatableSelect
                label="designationName"
                options={designation[0]}
                isClearable
                placeholder={"Parent-id"}
                // isDisabled={loading}
                // isLoading={isLoadingList}
                touched={touched.designationName}
                value={values.designationName}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.designationName}
              />
              {errors.designationName && touched.designationName && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginTop: "0.5rem",
                  }}
                >
                  please select designation
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
                <span className="btn-wrapper--label ml-3">Add More</span>
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
                  Designation
                </th>
                <th className="text-center p-3">Code</th>
                <th className="text-center p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {designationByCompany?.map((data, key) => {
                return (
                  <tr key={key}>
                    <td className="text-left pl-4">
                      <span>
                        {data.designation_defination.name_designation}
                      </span>
                    </td>
                    <td className="text-center pl-4">
                      <span>
                        {data.designation_defination.code_designation}
                      </span>
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
                addDesignation();
              }}
              disabled={isSubmitting || cantBack}
            >
              Save
            </button>
            <button
              type="submit"
              className="btn btn-primary1 ml-3"
              // disabled={isSubmitting}
              // onClick={() => {
              //   props.onNext();
              // }}
              style={{
                cursor: designationByCompany?.length === 0 && "not-allowed",
              }}
              disabled={designationByCompany?.length === 0}
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
    designationName: props.form.designationName,
  }),
  validationSchema: Yup.object().shape({
    designationName: Yup.object().shape({
      label: Yup.string().required("Required"),
      value: Yup.string().required("Required"),
    }),
  }),
  handleSubmit: (values, { props }) => {
    props.onNext(values);
  },
})(Designation);
