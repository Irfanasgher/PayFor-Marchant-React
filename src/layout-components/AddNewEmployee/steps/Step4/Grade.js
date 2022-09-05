import React, { useState, useEffect } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import {
  Row,
  Col,
  Label,
  FormGroup,
  CustomInput,
  Input,
  Button,
  Form,
  Modal,
  ModalHeader,
  ModalBody,
  Container,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";

import {
  GetAllFindBenefitGroupList,
  GetAllocationType,
  GetAllPolicyGroup,
  getAllLeaveBank,
  getAllPolicyGroupByCompanyId,
} from "../../../../actions";
import MySelect from "../../MySelect";
import "./index.css";
/**
 * @author
 * @function Step4
 **/
const Grade = (props) => {
  const [updateModal, setUpdateModal] = useState(false);
  const updateModalToggle = () => setUpdateModal(!updateModal);
  const [dataArray, setDataArray] = useState([]);
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
    dispatch(GetAllFindBenefitGroupList());
    dispatch(GetAllocationType());
    dispatch(GetAllPolicyGroup());
    dispatch(getAllLeaveBank());
    dispatch(getAllPolicyGroupByCompanyId(values.Company.value));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { allocationData } = useSelector((state) => state.EmployeeReducer);
  const { leaveBank } = useSelector((state) => state.LeaveReducer);
  const { policyGroup, policyGroupByCompany } = useSelector(
    (state) => state.PlanReducer
  );

  console.log("policyGroupByCompany", policyGroupByCompany);

  const gradeList = policyGroup?.map((gd) => {
    return {
      value: gd.id_policy_group,
      label: gd.grade_policy_group,
    };
  });

  let policyList = [];

  policyGroup?.forEach((pdes) => {
    if (pdes.id_policy_group === values.Grade.value) {
      pdes?.mapping_policy_groups?.forEach((data) => {
        policyList.push({
          value: data.policy.id_policy,
          label: data.policy.name_policy,
        });
      });
    }
  });

  const myChange = (value, type) => {
    if (value !== "") {
      let res = allocationData.filter((ar) => {
        return ar.name_allocation === type;
      });

      console.log("res", res);

      if (res.length > 0) {
        const data = {
          allocation_type_id: res[0].id_allocation,
          value_employee_allocation: value,
        };

        let found = values.allocations.filter((dat) => {
          return dat.allocation_type_id === res[0].id_allocation;
        });

        if (found.length > 0) {
          let final = values.allocations.filter((dat) => {
            return dat.allocation_type_id !== res[0].id_allocation;
          });
          setFieldValue("allocations", [...final, data]);
          setDataArray([...final, data]);
        } else {
          setFieldValue("allocations", [...values.allocations, data]);
          setDataArray([...dataArray, data]);
        }
      }

      // setFieldValue("Department", e);
    }
  };

  const myChange1 = (value, type) => {
    let res = allocationData.filter((ar) => {
      return ar.name_allocation === type;
    });

    console.log("res", res);

    if (res.length > 0) {
      const data = {
        allocation_type_id: res[0].id_allocation,
        value_employee_allocation: value,
      };

      console.log("data", data);

      let found = values.allocations.filter((dat) => {
        return dat.value_employee_allocation === value;
      });

      console.log("found", found);

      if (found.length > 0) {
        let final = values.allocations.filter((dat) => {
          return dat.value_employee_allocation !== value;
        });
        setFieldValue("allocations", final);
        setDataArray(final);
      } else {
        setFieldValue("allocations", [...values.allocations, data]);
        setDataArray([...dataArray, data]);
      }
    }

    // setFieldValue("Department", e);
  };

  // const handleArrayUpdate = (index, value) => {
  //   policyList[index].value = !value;
  //   console.log("policyList", policyList);

  //   // res.map((chk, i) => arr.push(res[i].label));
  //   // console.log("arr", arr);
  // };

  console.log("allocations", values.allocations);
  return (
    <div className="wizard-steps horizontal">
      <Form onSubmit={handleSubmit} className="d-flex flex-column">
        <Row className="p-5">
          <Col md="12">
            <FormGroup>
              <Label for="" className="font-weight-bold">
                Leave Bank
              </Label>
            </FormGroup>
          </Col>

          <Col md="12">
            <Row>
              {leaveBank?.map((data, key) => (
                <Col md="4" key={key}>
                  <FormGroup>
                    <CustomInput
                      className="mb-3"
                      label={`${data.name_leave_bank} (${data.total_day_leave_bank} days)`}
                      type="checkbox"
                      id={data.name_leave_bank}
                      onClick={() => myChange1(data.id_leave_bank, "leaveBank")}
                    />
                  </FormGroup>
                </Col>
              ))}
            </Row>
          </Col>

          <Col md="12">
            <FormGroup>
              <MySelect
                label="Grade"
                options={gradeList}
                // onChange={setFieldValue}
                onChange={(field, value) => {
                  myChange(value.label, "grade");
                  setFieldValue(field, value);
                }}
                onBlur={setFieldTouched}
                value={values.Grade}
                touched={touched.Grade}
                error={errors.Grade}
                isMulti={false}
              />
            </FormGroup>
          </Col>
          <Col md="12">
            <div className="divider" />
            <br />
            <div md="12">
              <Label for="">Benefits</Label>
              <br />
              <br />
            </div>
            <Row>
              {/* {policyList?.map((data, key) => {
              return (
                <div key={key}>
                  <div className="d-flex align-items-center justify-content-between">
                    <p style={{ marginBottom: "0" }}>{data.label}</p>
                    <div className="d-flex align-items-center">
                      <div className="mr-2">
                        <Switch
                          checked={true}
                          className="switch-medium toggle-switch-second"
                        />
                      </div>
                      <p
                        className="ml-3"
                        style={{ marginBottom: "0", cursor: "pointer" }}
                      >
                        Edit
                      </p>
                    </div>
                  </div>
                  <div
                    className="divider"
                    style={{ marginTop: "10px", marginBottom: "10px" }}
                  />
                </div>
              );
            })} */}
              {policyGroupByCompany?.map((data, key) => (
                <Col md="4" key={key}>
                  <FormGroup>
                    <CustomInput
                      className="mb-3"
                      label={data.policy.name_policy}
                      type="checkbox"
                      id={data.policy.name_policy}
                      // readOnly
                      // defaultChecked={data.value}
                      // onChange={() => myChange(data.value, "policy")}
                      // onClick={() => handleArrayUpdate(key, data.value)}
                      onClick={() => myChange1(data.policy.id_policy, "policy")}
                    />
                  </FormGroup>
                </Col>
              ))}
            </Row>

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
                  disabled={isSubmitting}
                  // onClick={() => {
                  //   props.onNext();
                  // }}
                >
                  {nextLabel}
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Form>
      <Modal
        zIndex={2000}
        centered
        scrollable
        isOpen={updateModal}
        toggle={updateModalToggle}
      >
        <ModalHeader toggle={updateModalToggle} className="font-weight-bold">
          Edit Leave Allocation
        </ModalHeader>
        <ModalBody>
          <form onSubmit={console.log("Edit Modal Step 4 of and new employee")}>
            <Container>
              <div className="py-4">
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label for="">Approved Leave</Label>
                      <Input
                        type="text"
                        name=""
                        // value={companyName}
                        // onChange={(e) => {
                        //   setCompanyName(e.target.value);
                        // }}
                        placeholder="12"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label for="">Change With</Label>
                      <Input
                        type="text"
                        name=""
                        // value={companyName}
                        // onChange={(e) => {
                        //   setCompanyName(e.target.value);
                        // }}
                        placeholder="6"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    <div className="d-flex align-items-center">
                      <CustomInput type="checkbox" id={1219} label="&nbsp;" />
                      <p style={{ marginBottom: "0" }}>
                        Notify Admin & Employee
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* <div className="divider" /> */}

            <div
              style={{ marginTop: "20px" }}
              className="d-flex justify-content-end"
            >
              <Button color="primary1" type="submit" className="ml-auto">
                Save
              </Button>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default withFormik({
  mapPropsToValues: (props) => ({
    Company: props.form.Company,
    allocations: props.form.allocations,
    Grade: props.form.Grade,
  }),

  validationSchema: Yup.object().shape({
    Grade: Yup.object().required("Required"),
  }),

  handleSubmit: (values, { props }) => {
    props.onNext(values);
  },
})(Grade);
