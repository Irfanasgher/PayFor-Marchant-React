import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Form,
  Row,
  Col,
  Table,
  Label,
  FormGroup,
  Input,
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import Switch from "rc-switch";
import {
  getAllPoliciesForDropDown,
  createMappingPolicy,
  UpdatePolicyByID,
  enableMappingPolicy,
  disableMappingPolicy,
  getAllCompanyData,
} from "../../actions";

const PolicyDetail = ({ companyId, data, add }) => {
  const [policyModal, setPolicyModal] = useState(false);
  const [array, setArray] = useState([]);
  const policyToggle = () => setPolicyModal(!policyModal);

  const [updateModal, setUpdateModal] = useState(false);
  const updateToggle = () => setUpdateModal(!updateModal);

  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [description, setDescription] = useState();
  const [id] = useState();

  const [addModal, setAddModal] = useState(false);
  const addModalToggle = () => setAddModal(!addModal);
  const [selectedId, setSelectedId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPoliciesForDropDown());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { dropDownPolicies } = useSelector((state) => state.PolicyReducer);

  const handleChangeData = (options) => {
    setSelectedId(options.value);
  };

  const handleAddPolicy = () => {
    const policyData = {
      company_id: companyId,
      policy_id: selectedId,
    };

    const filtered = data.filter((dat) => {
      return dat.policy_id === selectedId;
    });

    if (selectedId > 0) {
      if (filtered.length === 0) {
        dispatch(createMappingPolicy(policyData)).then(() => {
          dispatch(getAllCompanyData(companyId));
        });
        addModalToggle();
      } else {
        alert("This Policy is already Added");
      }
    } else {
      alert("Please Select Policy");
    }
  };

  // const handleUpdateToggle = (policy) => {
  //   setName(policy.name_policy);
  //   setNote(policy.note_policy);
  //   setDescription(policy.description_policy);
  //   setId(policy.id_policy);

  //   updateToggle();
  // };

  const updatePolicy = (e) => {
    e.preventDefault();

    const data = {
      name_policy: name,
      description_policy: description,
      note_policy: note,
    };
    if (name.length > 0 && description.length > 0 && note.length > 0) {
      dispatch(UpdatePolicyByID(data, id, companyId));
    } else {
      alert("All fields must be filled");
    }
    updateToggle();
  };

  const handleModalToggle = (policy) => {
    setArray(policy);

    policy?.length > 0 && policyToggle();
  };
  const handleToggle = (data) => {
    if (data?.is_enable === true) {
      dispatch(disableMappingPolicy(data.id_mapping_company_policy)).then(
        () => {
          dispatch(getAllCompanyData(companyId));
        }
      );
    } else {
      dispatch(enableMappingPolicy(data.id_mapping_company_policy)).then(() => {
        dispatch(getAllCompanyData(companyId));
      });
    }
  };

  const parentPolicy = dropDownPolicies?.map((pdes) => {
    return {
      value: pdes.id_policy,
      label: pdes.name_policy,
    };
  });

  return (
    <div>
      <Table
        responsive
        className="table-alternate-spaced text-nowrap mb-0 mt-4"
      >
        <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
          <tr>
            <th className="text-left pl-4 p-3">Policy</th>
            <th className="text-center p-3">Description</th>
            <th className="text-center p-3">Note</th>
            <th className="text-center p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((policy, key) => {
            // console.log("policy view", policy);
            return (
              <tr key={key}>
                <td className="text-left pl-4 p-3">
                  <span>{policy?.policy?.name_policy}</span>
                </td>
                <td className="text-center p-3">
                  <span>{policy?.policy?.description_policy}</span>
                </td>

                <td className="text-center p-3">
                  <span>{policy?.policy?.note_policy}</span>
                </td>
                <td className="text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <Button
                      onClick={() => handleModalToggle(policy?.policy?.factors)}
                      style={{
                        background: "#00c74e",
                        color: "#fff",
                        cursor: !(policy?.policy?.factors?.length > 0)
                          ? "not-allowed"
                          : "",
                      }}
                      className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <FontAwesomeIcon
                        icon={["far", "eye"]}
                        className="font-size-sm"
                      />
                    </Button>
                    {/* <Button
                      onClick={() => handleUpdateToggle(policy?.policy)}
                      style={{
                        background: "#3B74F9",
                        color: "#fff",
                      }}
                      className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <FontAwesomeIcon
                        icon={["far", "edit"]}
                        className="font-size-sm"
                      />
                    </Button> */}
                    <div className="ml-2">
                      <Switch
                        checked={policy?.is_enable}
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
          toggle={updateToggle}
        >
          <ModalHeader toggle={updateToggle}>Update Policy</ModalHeader>
          <ModalBody>
            <form onSubmit={updatePolicy}>
              <Container>
                <div className="py-4">
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label className="font-weight-bold" for="">
                          Policy Name
                        </Label>
                        <Input
                          type="text"
                          name=""
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                          placeholder="Enter Name..."
                        />
                      </FormGroup>
                    </Col>
                    <Col md="12">
                      <FormGroup>
                        <Label className="font-weight-bold" for="">
                          Policy Description
                        </Label>
                        <Input
                          type="text"
                          name=""
                          value={description}
                          onChange={(e) => {
                            setDescription(e.target.value);
                          }}
                          placeholder="Code..."
                        />
                      </FormGroup>
                    </Col>

                    <Col md="12">
                      <FormGroup>
                        <Label className="font-weight-bold" for="">
                          Policy Note
                        </Label>
                        <Input
                          type="textarea"
                          name=""
                          value={note}
                          onChange={(e) => {
                            setNote(e.target.value);
                          }}
                          placeholder="Add Policy details"
                        />
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
                  onClick={updateToggle}
                >
                  Close
                </Button>{" "}
                <Button color="primary" type="submit" className="ml-auto">
                  Submit
                </Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </Modal>
        <Modal
          zIndex={2000}
          size={"xl"}
          centered
          scrollable
          isOpen={policyModal}
          toggle={policyToggle}
        >
          <ModalHeader toggle={policyToggle}>Policy Detail</ModalHeader>
          <ModalBody style={{ padding: 0 }}>
            <Table
              responsive
              className="table-alternate-spaced text-nowrap mb-0 mt-4"
            >
              <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
                <tr>
                  <th className="text-left pl-4 p-3">Factor Code</th>
                  <th className="text-center p-3">Target</th>
                  <th className="text-center p-3">Period</th>
                  <th className="text-center p-3">Start Date / End Date</th>
                  <th className="text-center p-3">Adjustment</th>
                  <th className="text-center p-3">Value </th>
                  <th className="text-center p-3">Note</th>
                  {/* <th className="text-center p-3">Policy Type</th>
                  <th className="text-center p-3">Policy Code</th> */}
                </tr>
              </thead>
              <tbody>
                {array?.map((factor, key) => {
                  const startArray = factor?.start_period_factor?.split("T");
                  const endArray = factor?.end_peroid_facto?.split("T");
                  return (
                    <tr key={key}>
                      <td className="text-left pl-4 p-3">
                        <span>{factor?.code_factor}</span>
                      </td>
                      <td className="text-center p-3">
                        <span>{factor?.target_factor}</span>
                      </td>
                      <td className="text-center p-3">
                        <span>{factor?.period_factor}</span>
                      </td>
                      <td className="text-center p-3">
                        {factor?.start_period_factor && (
                          <span>
                            {/* {factor?.start_period_factor?.split("T00:00:00.000Z")} */}
                            {startArray[0]} /
                          </span>
                        )}
                        {factor?.end_period_factor && (
                          <span>{endArray[0]} </span>
                        )}
                      </td>
                      <td className="text-center p-3">
                        <span>{factor?.adjustment_factor}</span>
                      </td>
                      <td className="text-center p-3">
                        <span>{factor?.value_factor}</span>
                      </td>
                      <td className="text-center p-3">
                        <span>{factor?.note_factor} </span>
                      </td>
                      {/* <td className="text-center p-3">
                        <span>{factor?.policy_type?.name_policy_type}</span>
                      </td>
                      <td className="text-center p-3">
                        <span>{factor?.policy_type?.code_policy_type}</span>
                      </td> */}
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </ModalBody>

          <ModalHeader>Policy Detail</ModalHeader>
          <ModalBody style={{ padding: 0 }}>
            <Table
              responsive
              className="table-alternate-spaced text-nowrap mb-0 mt-4"
            >
              <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
                <tr>
                  <th className="text-left pl-4 p-3">Factor Code</th>
                  <th className="text-center p-3">Target</th>
                  <th className="text-center p-3">Period</th>
                  <th className="text-center p-3">Start Date / End Date</th>
                  <th className="text-center p-3">Adjustment</th>
                  <th className="text-center p-3">Value </th>
                  <th className="text-center p-3">Note</th>
                  {/* <th className="text-center p-3">Policy Type</th>
                  <th className="text-center p-3">Policy Code</th> */}
                </tr>
              </thead>
              <tbody>
                {array?.map((factor, key) => {
                  const startArray = factor?.start_period_factor?.split("T");
                  const endArray = factor?.end_peroid_facto?.split("T");
                  return (
                    <tr key={key}>
                      <td className="text-left pl-4 p-3">
                        <span>{factor?.code_factor}</span>
                      </td>
                      <td className="text-center p-3">
                        <span>{factor?.target_factor}</span>
                      </td>
                      <td className="text-center p-3">
                        <span>{factor?.period_factor}</span>
                      </td>
                      <td className="text-center p-3">
                        {factor?.start_period_factor && (
                          <span>
                            {/* {factor?.start_period_factor?.split("T00:00:00.000Z")} */}
                            {startArray[0]} /
                          </span>
                        )}
                        {factor?.end_period_factor && (
                          <span>{endArray[0]} </span>
                        )}
                      </td>
                      <td className="text-center p-3">
                        <span>{factor?.adjustment_factor}</span>
                      </td>
                      <td className="text-center p-3">
                        <span>{factor?.value_factor}</span>
                      </td>
                      <td className="text-center p-3">
                        <span>{factor?.note_factor} </span>
                      </td>
                      {/* <td className="text-center p-3">
                        <span>{factor?.policy_type?.name_policy_type}</span>
                      </td>
                      <td className="text-center p-3">
                        <span>{factor?.policy_type?.code_policy_type}</span>
                      </td> */}
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </ModalBody>
        </Modal>
      </Table>
      <Modal
        zIndex={2000}
        centered
        scrollable
        isOpen={addModal}
        toggle={addModalToggle}
        size="lg"
      >
        <ModalHeader toggle={addModalToggle}>Add New Policy</ModalHeader>
        <ModalBody>
          <Form>
            <Row className="p-3">
              <Col md="12">
                <FormGroup>
                  <Label for="">Policy</Label>
                  <Select
                    options={parentPolicy}
                    closeMenuOnSelect={true}
                    onChange={handleChangeData}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
          <ModalFooter>
            <Button className="btn btn-secondary" onClick={addModalToggle}>
              Cancel
            </Button>{" "}
            <Button
              onClick={handleAddPolicy}
              color="primary1"
              type="submit"
              className="ml-auto"
            >
              Add
            </Button>
          </ModalFooter>
        </ModalBody>
      </Modal>
      {add && (
        <div className="d-block d-md-flex align-items-center justify-content-center">
          <Button
            size="m"
            className="m-2"
            onClick={() => addModalToggle()}
            color="primary"
          >
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon icon={["fas", "plus"]} />
            </span>
            <span className="btn-wrapper--label">Add Policy</span>
          </Button>
        </div>
      )}
    </div>
  );
};

export default PolicyDetail;
