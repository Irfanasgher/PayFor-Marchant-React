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
  getAllDesignation,
  mappingDesignation,
  UpdateDesignationByID,
  enableMappingDesignation,
  disableMappingDesignation,
  getAllCompanyData,
} from "../../actions";

const DesignationDetail = ({ add, companyId, data }) => {
  const [updateModal, setUpdateModal] = useState(false);
  const updateToggle = () => setUpdateModal(!updateModal);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [code, setCode] = useState();
  const [id] = useState();

  const [addModal, setAddModal] = useState(false);
  const addModalToggle = () => setAddModal(!addModal);
  const [selectedId, setSelectedId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDesignation());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { designationData } = useSelector((state) => state.DesignationReducer);

  const handleChangeData = (options) => {
    setSelectedId(options.value);
  };

  const handleAddDesignation = () => {
    const designationData = {
      company_id: companyId,
      designation_id: selectedId,
    };

    const filtered = data.filter((dat) => {
      return dat.designation_id === selectedId;
    });

    if (selectedId > 0) {
      if (filtered.length === 0) {
        dispatch(mappingDesignation(designationData)).then(() => {
          dispatch(getAllCompanyData(companyId));
        });
        addModalToggle();
      } else {
        alert("This Designation is already Added");
      }
    } else {
      alert("Please Select Designation");
    }
  };

  // const handleUpdateToggle = (designation) => {
  //   setName(designation.name_designation);
  //   setNote(designation.note_designation);
  //   setCode(designation.code_designation);
  //   setId(designation.id_designation);

  //   updateToggle();
  // };

  const updateDesignation = (e) => {
    e.preventDefault();

    const data = {
      name_designation: name,
      code_designation: code,
      note_designation: note,
    };
    if (name.length > 0 && code.length > 0 && note.length > 0) {
      dispatch(UpdateDesignationByID(data, id, companyId));
    } else {
      alert("All fields must be filled");
    }
    updateToggle();
  };

  const handleToggle = (data) => {
    if (data?.is_enable === true) {
      dispatch(
        disableMappingDesignation(data.id_mapping_designation_company)
      ).then(() => {
        dispatch(getAllCompanyData(companyId));
      });
    } else {
      dispatch(
        enableMappingDesignation(data.id_mapping_designation_company)
      ).then(() => {
        dispatch(getAllCompanyData(companyId));
      });
    }
  };

  const parentDesignation1 = designationData?.map((pdes) => {
    return {
      value: pdes.details.id_designation,
      label: pdes.details.name_designation,
    };
  });

  console.log("handleAddDepartment", data);
  return (
    <div>
      <Table responsive className="table-alternate-spaced text-nowrap mb-0">
        <thead className="font-size-sm" style={{ background: "#DDDDDD" }}>
          <tr>
            <th className="text-left pl-4 p-3">Designation</th>
            <th className="text-center p-3">Parent Designation</th>
            <th className="text-center p-3">Code</th>
            <th className="text-center p-3">Note</th>
            <th className="text-center p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((designation, key) => {
            // console.log("Designationttttttttttt", Designation);
            return (
              <tr key={key}>
                <td className="text-left pl-4 p-3">
                  <span>
                    {designation?.designation_defination?.name_designation}
                  </span>
                </td>
                <td className="text-center p-3">
                  {designation?.designation_defination?.parent_designation
                    ?.name_designation ? (
                    <span>
                      {
                        designation?.designation_defination?.parent_designation
                          ?.name_designation
                      }
                    </span>
                  ) : (
                    <span>N / A</span>
                  )}
                </td>
                <td className="text-center p-3">
                  <span>
                    {designation?.designation_defination?.code_designation}
                  </span>
                </td>

                <td className="text-center p-3">
                  <span>
                    {designation?.designation_defination?.note_designation}
                  </span>
                </td>

                <td className="text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    {/* <Button
                      onClick={() =>
                        handleUpdateToggle(designation?.designation_defination)
                      }
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
                        checked={designation?.is_enable}
                        onClick={() => handleToggle(designation)}
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

      <Modal
        zIndex={2000}
        centered
        scrollable
        isOpen={addModal}
        toggle={addModalToggle}
        size="lg"
      >
        <ModalHeader toggle={addModalToggle}>Add New Designation</ModalHeader>
        <ModalBody>
          <Form>
            <Row className="p-3">
              <Col md="12">
                <FormGroup>
                  <Label for="">Designation</Label>
                  <Select
                    options={parentDesignation1}
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
              onClick={handleAddDesignation}
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
            <span className="btn-wrapper--label">Add Designation</span>
          </Button>
        </div>
      )}

      <Modal
        zIndex={2000}
        centered
        scrollable
        isOpen={updateModal}
        toggle={updateToggle}
      >
        <ModalHeader toggle={updateToggle}>Update Designation</ModalHeader>
        <ModalBody>
          <form onSubmit={updateDesignation}>
            <Container>
              <div className="py-4">
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Designation Name
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
                        Designation Code
                      </Label>
                      <Input
                        type="text"
                        name=""
                        value={code}
                        onChange={(e) => {
                          setCode(e.target.value);
                        }}
                        placeholder="Code..."
                      />
                    </FormGroup>
                  </Col>

                  <Col md="12">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Designation Note
                      </Label>
                      <Input
                        type="textarea"
                        name=""
                        value={note}
                        onChange={(e) => {
                          setNote(e.target.value);
                        }}
                        placeholder="Add Unit details"
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
    </div>
  );
};

export default DesignationDetail;
