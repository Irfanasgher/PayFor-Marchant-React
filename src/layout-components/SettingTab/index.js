import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { HashLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import BlockUi from "react-block-ui";
import Switch from "rc-switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Row,
  Card,
  Table,
  Col,
  Label,
  FormGroup,
  Input,
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  TabContent,
  TabPane,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink as NavLinkStrap } from "reactstrap";
import {
  findAllPolicies,
  enablePolicy,
  disablePolicy,
  createPolicy,
  UpdatePolicyTypeByID,
  getAllDesignationType,
  enableDesignation,
  disableDesignation,
  createDesignation,
  UpdateDesignationTypeByID,
} from "../../actions";

import "./index.scss";

const SettingTab = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const [addModal, setAddModal] = useState(false);
  const addModalToggle = () => setAddModal(!addModal);
  const [addDesignationModal, setAddDesignationModal] = useState(false);
  const addDesignationModalToggle = () =>
    setAddDesignationModal(!addDesignationModal);

  const [updateModal, setUpdateModal] = useState(false);
  const updateModalToggle = () => setUpdateModal(!updateModal);
  const [updateDesignationModal, setUpdateDesignationModal] = useState(false);
  const updateDesignationModalToggle = () =>
    setUpdateDesignationModal(!updateDesignationModal);

  const [policyName, setPolicyName] = useState("");
  const [policyCode, setPolicyCode] = useState("");
  const [designationName, setDesignationName] = useState("");
  const [designationNote, setDesignationNote] = useState("");

  const [updatePolicyName, setUpdatePolicyName] = useState("");
  const [updatePolicyCode, setUpdatePolicyCode] = useState("");
  const [updatePolicyId, setUpdatePolicyId] = useState();

  const [updateDesignationName, setUpdateDesignationName] = useState("");
  const [updateDesignationNote, setUpdateDesignationNote] = useState("");
  const [updateDesignationId, setUpdateDesignationId] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findAllPolicies());
    dispatch(getAllDesignationType());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const handleToggle = (data) => {
    if (data.is_enable_policy_type === true) {
      dispatch(disablePolicy(data.id_policy_type));
    } else {
      dispatch(enablePolicy(data.id_policy_type));
    }
  };

  const handleToggleDesignation = (data) => {
    if (data.is_enable_designation_type === true) {
      dispatch(disableDesignation(data.id_designation_type));
    } else {
      dispatch(enableDesignation(data.id_designation_type));
    }
  };

  const addPolicy = () => {
    const data = {
      name_policy_type: policyName,
      code_policy_type: policyCode,
    };
    // console.log("function data", data);
    dispatch(createPolicy(data));
    setAddModal(!addModal);
  };

  const addDesignation = () => {
    const data = {
      name_designation_type: designationName,
      note_designation_type: designationNote,
    };
    // console.log("function data", data);
    dispatch(createDesignation(data));
    setAddDesignationModal(!addDesignationModal);
  };

  const handleUpdateModal = (policy) => {
    setUpdatePolicyName(policy.name_policy_type);
    setUpdatePolicyCode(policy.code_policy_type);
    setUpdatePolicyId(policy.id_policy_type);

    updateModalToggle();
  };

  const handleUpdateDesignationModal = (designation) => {
    setUpdateDesignationName(designation.name_designation_type);
    setUpdateDesignationNote(designation.note_designation_type);
    setUpdateDesignationId(designation.id_designation_type);

    updateDesignationModalToggle();
  };

  const updatePolicy = () => {
    const data = {
      name_policy_type: updatePolicyName,
      code_policy_type: updatePolicyCode,
    };
    // console.log("function data", data);
    dispatch(UpdatePolicyTypeByID(data, updatePolicyId));
    setUpdateModal(!updateModal);
  };

  const updateDesignation = () => {
    const data = {
      name_designation_type: updateDesignationName,
      note_designation_type: updateDesignationNote,
    };
    // console.log("function data", data);
    dispatch(UpdateDesignationTypeByID(data, updateDesignationId));
    setUpdateDesignationModal(!updateDesignationModal);
  };

  const { policies } = useSelector((state) => state.PolicyReducer);
  // const { designation } = useSelector((state) => state.DesignationReducer);
  const { getAllDesignationTypes } = useSelector(
    (state) => state.CompanyReducer
  );

  return (
    <div id="policy">
      <BlockUi
        className="p-5"
        tag="div"
        blocking={props?.productData?.isAddingProduct}
        loader={
          <HashLoader
            color={"#68E1C9"}
            loading={props?.productData?.isAddingProduct}
          />
        }
      >
        <Card
          className="shadow-xxl mb-5"
          style={{ paddingTop: "30px", paddingBottom: "20px" }}
        >
          <div className="nav-tabs-success">
            <Nav tabs>
              <NavItem>
                <NavLinkStrap
                  className={clsx({ active: activeTab === "1" })}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  <span className="px-3 py-2 font-weight-bold">Policy</span>
                </NavLinkStrap>
              </NavItem>
              <NavItem>
                <NavLinkStrap
                  className={clsx({ active: activeTab === "2" })}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  <span className="px-3 py-2 font-weight-bold">
                    Designation
                  </span>
                </NavLinkStrap>
              </NavItem>
            </Nav>
          </div>
          <TabContent activeTab={activeTab}>
            <TabPane
              tabId="1"
              style={{ paddingTop: "30px", paddingBottom: "20px" }}
            >
              <div className="">
                <div className="">
                  <div className="addOrganization mb-1 d-flex align-items-center justify-content-between p-5">
                    <div className="app-page-title--first">
                      <div className="app-page-title--iconbox d-70">
                        <div className="d-70 d-flex align-items-center justify-content-center">
                          <FontAwesomeIcon
                            icon={["far", "building"]}
                            style={{ fontSize: "20px", color: "#3C44B1" }}
                            className="display-2"
                          />
                        </div>
                      </div>
                      <div className="app-page-title--heading">
                        <h1>Policy</h1>
                      </div>
                    </div>
                    <div className="d-block d-md-flex align-items-center">
                      <Button
                        href="#/"
                        size="m"
                        className="m-2 py-3"
                        onClick={addModalToggle}
                        color="primary"
                      >
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={["fas", "plus"]} />
                        </span>
                        <span className="btn-wrapper--label">Add Policy</span>
                      </Button>
                    </div>
                  </div>
                  <Modal
                    zIndex={2000}
                    centered
                    scrollable
                    isOpen={addModal}
                    toggle={addModalToggle}
                  >
                    <ModalHeader toggle={addModalToggle}>
                      Provide Policy detail
                    </ModalHeader>
                    <ModalBody>
                      <Formik
                        initialValues={{
                          policyName: "",
                          policyCode: "",
                        }}
                        // validate={validate}
                        validationSchema={Yup.object().shape({
                          policyName: Yup.string().required(),
                          policyCode: Yup.number().positive().required(),
                        })}
                        onSubmit={addPolicy}
                      >
                        {(formik) => {
                          const {
                            values,
                            handleChange,
                            handleSubmit,
                            errors,
                            touched,
                            handleBlur,
                            isValid,
                            dirty,
                          } = formik;
                          return (
                            <form onSubmit={handleSubmit}>
                              <Container>
                                <div className="py-4">
                                  <Row>
                                    <Col md="12">
                                      <FormGroup>
                                        <Label
                                          className="font-weight-bold"
                                          for=""
                                        >
                                          Policy Name
                                        </Label>
                                        <Input
                                          type="text"
                                          name="policyName"
                                          onChange={(e) => {
                                            setPolicyName(e.target.value);
                                            handleChange(e);
                                          }}
                                          placeholder="Enter Policy name..."
                                          value={values.policyName}
                                          onBlur={handleBlur}
                                          error={errors.policyName}
                                        />
                                        {errors.policyName &&
                                          touched.policyName && (
                                            <div
                                              style={{
                                                color: "red",
                                                fontSize: "14px",
                                                marginTop: "0.5rem",
                                              }}
                                            >
                                              {errors.policyName}
                                            </div>
                                          )}
                                      </FormGroup>
                                    </Col>
                                    <Col md="12">
                                      <FormGroup>
                                        <Label
                                          className="font-weight-bold"
                                          for=""
                                        >
                                          Policy Code
                                        </Label>
                                        <Input
                                          type="number"
                                          name="policyCode"
                                          onChange={(e) => {
                                            setPolicyCode(e.target.value);
                                            handleChange(e);
                                          }}
                                          placeholder="Enter Policy Code"
                                          value={values.policyCode}
                                          onBlur={handleBlur}
                                          error={errors.policyCode}
                                        />
                                        {errors.policyCode &&
                                          touched.policyCode && (
                                            <div
                                              style={{
                                                color: "red",
                                                fontSize: "14px",
                                                marginTop: "0.5rem",
                                              }}
                                            >
                                              {errors.policyCode}
                                            </div>
                                          )}
                                      </FormGroup>
                                    </Col>
                                  </Row>
                                </div>
                              </Container>
                              <div className="divider mt-5 mb-4" />

                              <ModalFooter>
                                <Button
                                  color="link"
                                  className="btn-link-dark"
                                  onClick={addModalToggle}
                                >
                                  Close
                                </Button>{" "}
                                <Button
                                  color="primary"
                                  type="submit"
                                  className="ml-auto"
                                  disabled={!(dirty && isValid)}
                                  // onClick={toggle2}
                                  style={{
                                    cursor: !(dirty && isValid)
                                      ? "not-allowed"
                                      : "",
                                  }}
                                >
                                  Submit
                                </Button>
                              </ModalFooter>
                            </form>
                          );
                        }}
                      </Formik>
                    </ModalBody>
                  </Modal>
                </div>
                <div className="">
                  <Table
                    responsive
                    className="table-alternate-spaced text-nowrap mb-0"
                  >
                    <thead
                      className="font-size-sm"
                      style={{ background: "#F3F5FD" }}
                    >
                      <tr>
                        <th
                          className="text-left p-3 pl-4"
                          tyle={{ background: "#F3F5FD" }}
                        >
                          Policy Name
                        </th>
                        <th
                          className="text-center p-3"
                          tyle={{ background: "#F3F5FD" }}
                        >
                          Code
                        </th>
                        <th
                          className="text-center p-3"
                          tyle={{ background: "#F3F5FD" }}
                        >
                          Actions
                        </th>
                        {/* <th
                    className="text-center p-3"
                    tyle={{ background: "#F3F5FD" }}
                  >
                    Enable/Disable
                  </th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {policies?.map((policy, key) => {
                        return (
                          <tr key={key}>
                            <td className="text-left p-3 pl-4">
                              <span>{policy.name_policy_type}</span>
                            </td>
                            <td className="text-center">
                              <span>{policy.code_policy_type}</span>
                            </td>

                            <td className="text-center">
                              <div className="d-flex align-items-center justify-content-center">
                                <Button
                                  style={{
                                    background: "#3B74F9",
                                    color: "#fff",
                                  }}
                                  className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                                  onClick={() => handleUpdateModal(policy)}
                                >
                                  <FontAwesomeIcon
                                    icon={["far", "edit"]}
                                    className="font-size-sm"
                                  />
                                </Button>
                                <div className="m-2">
                                  <Switch
                                    checked={policy.is_enable_policy_type}
                                    onClick={() => handleToggle(policy)}
                                    className="switch-medium toggle-switch-second"
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <Modal
                      zIndex={2000}
                      centered
                      scrollable
                      isOpen={updateModal}
                      toggle={updateModalToggle}
                    >
                      <ModalHeader toggle={updateModalToggle}>
                        Update Policy
                      </ModalHeader>
                      <ModalBody>
                        <Formik
                          initialValues={{
                            updatePolicyName: "",
                            updatePolicyCode: "",
                          }}
                          // validate={validate}
                          validationSchema={Yup.object().shape({
                            updatePolicyName: Yup.string().required(),
                            updatePolicyCode: Yup.number()
                              .positive()
                              .required(),
                          })}
                          onSubmit={updatePolicy}
                        >
                          {(formik) => {
                            const {
                              handleChange,
                              handleSubmit,
                              errors,
                              touched,
                              handleBlur,
                              isValid,
                              dirty,
                            } = formik;
                            return (
                              <form onSubmit={handleSubmit}>
                                <Container>
                                  <div className="py-4">
                                    <Row>
                                      <Col md="12">
                                        <FormGroup>
                                          <Label
                                            className="font-weight-bold"
                                            for=""
                                          >
                                            Policy Name
                                          </Label>
                                          <Input
                                            type="text"
                                            name="updatePolicyName"
                                            onChange={(e) => {
                                              setUpdatePolicyName(
                                                e.target.value
                                              );
                                              handleChange(e);
                                            }}
                                            placeholder="Enter Policy name..."
                                            value={updatePolicyName}
                                            onBlur={handleBlur}
                                            error={errors.updatePolicyName}
                                          />
                                          {errors.updatePolicyName &&
                                            touched.updatePolicyName && (
                                              <div
                                                style={{
                                                  color: "red",
                                                  fontSize: "14px",
                                                  marginTop: "0.5rem",
                                                }}
                                              >
                                                {errors.updatePolicyName}
                                              </div>
                                            )}
                                        </FormGroup>
                                      </Col>
                                      <Col md="12">
                                        <FormGroup>
                                          <Label
                                            className="font-weight-bold"
                                            for=""
                                          >
                                            Policy Code
                                          </Label>
                                          <Input
                                            type="number"
                                            name="updatePolicyCode"
                                            onChange={(e) => {
                                              setUpdatePolicyCode(
                                                e.target.value
                                              );
                                              handleChange(e);
                                            }}
                                            placeholder="Enter Policy Code"
                                            value={updatePolicyCode}
                                            onBlur={handleBlur}
                                            error={errors.updatePolicyCode}
                                          />
                                          {errors.updatePolicyCode &&
                                            touched.updatePolicyCode && (
                                              <div
                                                style={{
                                                  color: "red",
                                                  fontSize: "14px",
                                                  marginTop: "0.5rem",
                                                }}
                                              >
                                                {errors.updatePolicyCode}
                                              </div>
                                            )}
                                        </FormGroup>
                                      </Col>
                                    </Row>
                                  </div>
                                </Container>
                                <div className="divider mt-5 mb-4" />

                                <ModalFooter>
                                  <Button
                                    color="link"
                                    className="btn-link-dark"
                                    onClick={updateModalToggle}
                                  >
                                    Close
                                  </Button>{" "}
                                  <Button
                                    color="primary"
                                    type="submit"
                                    className="ml-auto"
                                    disabled={!(dirty && isValid)}
                                    // onClick={toggle2}
                                    style={{
                                      cursor: !(dirty && isValid)
                                        ? "not-allowed"
                                        : "",
                                    }}
                                  >
                                    Submit
                                  </Button>
                                </ModalFooter>
                              </form>
                            );
                          }}
                        </Formik>
                      </ModalBody>
                    </Modal>
                  </Table>
                </div>
              </div>
            </TabPane>
            <TabPane
              tabId="2"
              style={{ paddingTop: "30px", paddingBottom: "20px" }}
            >
              <div className="">
                <div className="">
                  <div className="addOrganization mb-1 d-flex align-items-center justify-content-between p-5">
                    <div className="app-page-title--first">
                      <div className="app-page-title--iconbox d-70">
                        <div className="d-70 d-flex align-items-center justify-content-center">
                          <FontAwesomeIcon
                            icon={["far", "building"]}
                            style={{ fontSize: "20px", color: "#3C44B1" }}
                            className="display-2"
                          />
                        </div>
                      </div>
                      <div className="app-page-title--heading">
                        <h1>Designation</h1>
                      </div>
                    </div>
                    <div className="d-block d-md-flex align-items-center">
                      <Button
                        href="#/"
                        size="m"
                        className="m-2 py-3"
                        onClick={addDesignationModalToggle}
                        color="primary"
                      >
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={["fas", "plus"]} />
                        </span>
                        <span className="btn-wrapper--label">
                          Add Designation
                        </span>
                      </Button>
                    </div>
                  </div>
                  <Modal
                    zIndex={2000}
                    centered
                    scrollable
                    isOpen={addDesignationModal}
                    toggle={addDesignationModalToggle}
                  >
                    <ModalHeader toggle={addDesignationModalToggle}>
                      Provide Designation detail
                    </ModalHeader>
                    <ModalBody>
                      <Formik
                        initialValues={{
                          designationName: "",
                          designationNote: "",
                        }}
                        // validate={validate}
                        validationSchema={Yup.object().shape({
                          designationName: Yup.string().required(),
                          designationNote: Yup.string().required(),
                        })}
                        onSubmit={addDesignation}
                      >
                        {(formik) => {
                          const {
                            values,
                            handleChange,
                            handleSubmit,
                            errors,
                            touched,
                            handleBlur,
                            isValid,
                            dirty,
                          } = formik;
                          return (
                            <form onSubmit={handleSubmit}>
                              <Container>
                                <div className="py-4">
                                  <Row>
                                    <Col md="12">
                                      <FormGroup>
                                        <Label
                                          className="font-weight-bold"
                                          for=""
                                        >
                                          Designation Name
                                        </Label>
                                        <Input
                                          type="text"
                                          name="designationName"
                                          onChange={(e) => {
                                            setDesignationName(e.target.value);
                                            handleChange(e);
                                          }}
                                          placeholder="Enter Designation name..."
                                          value={values.designationName}
                                          onBlur={handleBlur}
                                          error={errors.designationName}
                                        />
                                        {errors.designationName &&
                                          touched.designationName && (
                                            <div
                                              style={{
                                                color: "red",
                                                fontSize: "14px",
                                                marginTop: "0.5rem",
                                              }}
                                            >
                                              {errors.designationName}
                                            </div>
                                          )}
                                      </FormGroup>
                                    </Col>
                                    <Col md="12">
                                      <FormGroup>
                                        <Label
                                          className="font-weight-bold"
                                          for=""
                                        >
                                          Designation Note
                                        </Label>
                                        <Input
                                          type="text"
                                          name="designationNote"
                                          onChange={(e) => {
                                            setDesignationNote(e.target.value);
                                            handleChange(e);
                                          }}
                                          placeholder="Enter Designation Note"
                                          value={values.designationNote}
                                          onBlur={handleBlur}
                                          error={errors.designationNote}
                                        />
                                        {errors.designationNote &&
                                          touched.designationNote && (
                                            <div
                                              style={{
                                                color: "red",
                                                fontSize: "14px",
                                                marginTop: "0.5rem",
                                              }}
                                            >
                                              {errors.designationNote}
                                            </div>
                                          )}
                                      </FormGroup>
                                    </Col>
                                  </Row>
                                </div>
                              </Container>
                              <div className="divider mt-5 mb-4" />

                              <ModalFooter>
                                <Button
                                  color="link"
                                  className="btn-link-dark"
                                  onClick={addDesignationModalToggle}
                                >
                                  Close
                                </Button>{" "}
                                <Button
                                  color="primary"
                                  type="submit"
                                  className="ml-auto"
                                  disabled={!(dirty && isValid)}
                                  // onClick={toggle2}
                                  style={{
                                    cursor: !(dirty && isValid)
                                      ? "not-allowed"
                                      : "",
                                  }}
                                >
                                  Submit
                                </Button>
                              </ModalFooter>
                            </form>
                          );
                        }}
                      </Formik>
                    </ModalBody>
                  </Modal>
                </div>
                <div className="">
                  <Table
                    responsive
                    className="table-alternate-spaced text-nowrap mb-0"
                  >
                    <thead
                      className="font-size-sm "
                      style={{ background: "#F3F5FD" }}
                    >
                      <tr>
                        <th
                          className="text-left p-3 pl-4"
                          tyle={{ background: "#F3F5FD" }}
                        >
                          Designation Name
                        </th>
                        <th
                          className="text-center p-3"
                          tyle={{ background: "#F3F5FD" }}
                        >
                          Note
                        </th>
                        <th
                          className="text-center p-3"
                          tyle={{ background: "#F3F5FD" }}
                        >
                          Actions
                        </th>
                        {/* <th
                    className="text-center p-3"
                    tyle={{ background: "#F3F5FD" }}
                  >
                    Enable/Disable
                  </th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {getAllDesignationTypes?.map((designation, key) => {
                        return (
                          <tr key={key}>
                            <td className="text-left p-3 pl-4">
                              <span>{designation.name_designation_type}</span>
                            </td>
                            <td className="text-center">
                              <span>{designation.note_designation_type}</span>
                            </td>

                            <td className="text-center">
                              <div className="d-flex align-items-center justify-content-center">
                                <Button
                                  style={{
                                    background: "#3B74F9",
                                    color: "#fff",
                                  }}
                                  className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                                  onClick={() =>
                                    handleUpdateDesignationModal(designation)
                                  }
                                >
                                  <FontAwesomeIcon
                                    icon={["far", "edit"]}
                                    className="font-size-sm"
                                  />
                                </Button>
                                <div className="m-2">
                                  <Switch
                                    checked={
                                      designation.is_enable_designation_type
                                    }
                                    onClick={() =>
                                      handleToggleDesignation(designation)
                                    }
                                    className="switch-medium toggle-switch-second"
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <Modal
                      zIndex={2000}
                      centered
                      scrollable
                      isOpen={updateDesignationModal}
                      toggle={updateDesignationModalToggle}
                    >
                      <ModalHeader toggle={updateDesignationModalToggle}>
                        Update Designation
                      </ModalHeader>
                      <ModalBody>
                        <Formik
                          initialValues={{
                            updateDesignationName: "",
                            updateDesignationNote: "",
                          }}
                          // validate={validate}
                          validationSchema={Yup.object().shape({
                            updateDesignationName: Yup.string().required(),
                            updateDesignationNote: Yup.string().required(),
                          })}
                          onSubmit={updateDesignation}
                        >
                          {(formik) => {
                            const {
                              handleChange,
                              handleSubmit,
                              errors,
                              touched,
                              handleBlur,
                              isValid,
                              dirty,
                            } = formik;
                            return (
                              <form onSubmit={handleSubmit}>
                                <Container>
                                  <div className="py-4">
                                    <Row>
                                      <Col md="12">
                                        <FormGroup>
                                          <Label
                                            className="font-weight-bold"
                                            for=""
                                          >
                                            Designation Name
                                          </Label>
                                          <Input
                                            type="text"
                                            name="updateDesignationName"
                                            onChange={(e) => {
                                              setUpdateDesignationName(
                                                e.target.value
                                              );
                                              handleChange(e);
                                            }}
                                            placeholder="Enter Designation name..."
                                            value={updateDesignationName}
                                            onBlur={handleBlur}
                                            error={errors.updateDesignationName}
                                          />
                                          {errors.updateDesignationName &&
                                            touched.updateDesignationName && (
                                              <div
                                                style={{
                                                  color: "red",
                                                  fontSize: "14px",
                                                  marginTop: "0.5rem",
                                                }}
                                              >
                                                {errors.updateDesignationName}
                                              </div>
                                            )}
                                        </FormGroup>
                                      </Col>
                                      <Col md="12">
                                        <FormGroup>
                                          <Label
                                            className="font-weight-bold"
                                            for=""
                                          >
                                            Designation Code
                                          </Label>
                                          <Input
                                            type="text"
                                            name="updateDesignationNote"
                                            onChange={(e) => {
                                              setUpdateDesignationNote(
                                                e.target.value
                                              );
                                              handleChange(e);
                                            }}
                                            placeholder="Enter Designation Note"
                                            value={updateDesignationNote}
                                            onBlur={handleBlur}
                                            error={errors.updateDesignationNote}
                                          />
                                          {errors.updateDesignationNote &&
                                            touched.updateDesignationNote && (
                                              <div
                                                style={{
                                                  color: "red",
                                                  fontSize: "14px",
                                                  marginTop: "0.5rem",
                                                }}
                                              >
                                                {errors.updateDesignationNote}
                                              </div>
                                            )}
                                        </FormGroup>
                                      </Col>
                                    </Row>
                                  </div>
                                </Container>
                                <div className="divider mt-5 mb-4" />

                                <ModalFooter>
                                  <Button
                                    color="link"
                                    className="btn-link-dark"
                                    onClick={updateDesignationModalToggle}
                                  >
                                    Close
                                  </Button>{" "}
                                  <Button
                                    color="primary"
                                    type="submit"
                                    className="ml-auto"
                                    disabled={!(dirty && isValid)}
                                    // onClick={toggle2}
                                    style={{
                                      cursor: !(dirty && isValid)
                                        ? "not-allowed"
                                        : "",
                                    }}
                                  >
                                    Submit
                                  </Button>
                                </ModalFooter>
                              </form>
                            );
                          }}
                        </Formik>
                      </ModalBody>
                    </Modal>
                  </Table>
                </div>
              </div>
            </TabPane>
          </TabContent>
        </Card>
      </BlockUi>
    </div>
  );
};

export default SettingTab;
