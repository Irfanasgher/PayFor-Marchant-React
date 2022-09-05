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
  getAllDepartments,
  UpdateDepartmentByID,
  disableDepartment,
  enableDepartment,
  getAllCompanyData,
} from "../../actions";

const DepartmentDetail = ({ add, companyId, data }) => {
  const [departmentModal, setDepartmentModal] = useState(false);
  const [array] = useState([]);
  const departmentToggle = () => setDepartmentModal(!departmentModal);

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
    dispatch(getAllDepartments());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { getDepartmentData } = useSelector((state) => state.CompanyReducer);

  const handleChangeData = (options) => {
    setSelectedId(options.value);
  };

  const handleAddDepartment = () => {
    const data = {
      company_id: companyId,
      designation_id: selectedId,
    };

    if (selectedId > 0) {
      // dispatch(postDepartment(data)).then(() => {
      //   dispatch(getAllCompanyData(companyId));
      // });
      console.log("handleAddDepartment", data);
    } else {
      alert("Please Select Department");
    }

    addModalToggle();
  };

  // const handleUpdateToggle = (department) => {
  //   setName(department.name_department);
  //   setNote(department.note_department);
  //   setCode(department.code_department);
  //   setId(department.id_department);

  //   updateToggle();
  // };

  const updateDepartment = (e) => {
    e.preventDefault();

    const data = {
      name_department: name,
      code_department: code,
      note_department: note,
    };
    if (name.length > 0 && code.length > 0 && note.length > 0) {
      dispatch(UpdateDepartmentByID(data, id, companyId));
    } else {
      alert("All fields must be filled");
    }
    updateToggle();
  };

  // const handleModalToggle = (mapping) => {
  //   setArray(mapping);

  //   mapping?.length > 0 && departmentToggle();
  // };

  const handleToggle = (data) => {
    if (data?.is_enable_mapping_department_location === true) {
      dispatch(disableDepartment(data.id_mapping_department_location)).then(
        () => {
          dispatch(getAllCompanyData(companyId));
        }
      );
    } else {
      dispatch(enableDepartment(data.id_mapping_department_location)).then(
        () => {
          dispatch(getAllCompanyData(companyId));
        }
      );
    }
  };

  const parentDepartment = [
    getDepartmentData?.map((pdes) => {
      var value = pdes.id_department;
      var label = pdes.name_department;
      return { value, label };
    }),
  ];

  console.log("getDepartmentData", getDepartmentData);
  return (
    <div>
      <Table responsive className="table-alternate-spaced text-nowrap mb-0">
        <thead className="font-size-sm" style={{ background: "#DDDDDD" }}>
          <tr>
            <th className="text-left pl-4 p-3">Department</th>
            <th className="text-center p-3">Parent Department</th>
            <th className="text-center p-3">Code</th>
            <th className="text-center p-3">Note</th>
            <th className="text-center p-3">Actions</th>
          </tr>
        </thead>
        {data?.map((department, key) => {
          // console.log("departmentttttttttttt", department);
          return (
            <tbody key={key} style={{ border: "0" }}>
              {department?.mapping_department_locaitons?.map((dpt, keyd) => {
                return (
                  <tr key={keyd}>
                    <td className="text-left pl-4 p-3">
                      <span>{dpt?.department?.name_department}</span>
                    </td>
                    <td className="text-center p-3">
                      <span>
                        {dpt?.department?.parent_deparment?.name_department}
                      </span>

                      {dpt?.department?.parent_deparment?.name_department ? (
                        <span>
                          {dpt?.department?.parent_deparment?.name_department}
                        </span>
                      ) : (
                        <span>N / A</span>
                      )}
                    </td>
                    <td className="text-center p-3">
                      <span>{dpt?.department?.code_department}</span>
                    </td>

                    <td className="text-center p-3">
                      <span>{dpt?.department?.note_department}</span>
                    </td>

                    <td className="text-center">
                      <div className="d-flex align-items-center justify-content-center">
                        {/* <Button
                          onClick={() => handleUpdateToggle(dpt?.department)}
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
                            checked={dpt?.is_enable_mapping_department_location}
                            onClick={() => handleToggle(dpt)}
                            className="switch-medium toggle-switch-second"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          );
        })}
      </Table>
      <Modal
        zIndex={2000}
        centered
        scrollable
        isOpen={addModal}
        toggle={addModalToggle}
        size="lg"
      >
        <ModalHeader toggle={addModalToggle}>Add New Department</ModalHeader>
        <ModalBody>
          <Form>
            <Row className="p-3">
              <Col md="12">
                <FormGroup>
                  <Label for="">Department</Label>
                  <Select
                    options={parentDepartment[0]}
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
              onClick={handleAddDepartment}
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
            <span className="btn-wrapper--label">Add Department</span>
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
        <ModalHeader toggle={updateToggle}>Update Department</ModalHeader>
        <ModalBody>
          <form onSubmit={updateDepartment}>
            <Container>
              <div className="py-4">
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Department Name
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
                        Department Code
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
                        Department Note
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
      <Modal
        zIndex={2000}
        size={"xl"}
        centered
        scrollable
        isOpen={departmentModal}
        toggle={departmentToggle}
      >
        <ModalHeader toggle={departmentToggle}> Mapping Detail</ModalHeader>
        <ModalBody style={{ padding: 0 }}>
          <Table
            responsive
            className="table-alternate-spaced text-nowrap mb-0 mt-4"
          >
            <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
              <tr>
                <th className="text-left p-3 pl-4">Location Name</th>
                <th className="text-center p-3">Location Code</th>
                <th className="text-center p-3">address1 / Address2</th>
                <th className="text-center p-3">Postal Code</th>
                <th className="text-center p-3">Note</th>
                <th
                  className="text-center p-3"
                  style={{ background: "#F3F5FD" }}
                >
                  City/ Tehsil/ District/ Division/ State/ Country
                </th>
              </tr>
            </thead>
            <tbody>
              {array?.map((mapping, index) => {
                return (
                  <tr key={index}>
                    <td className="text-left pl-4 p-3">
                      <span>{mapping?.name_location}</span>
                    </td>
                    <td className="text-center p-3">
                      <span>{mapping?.code_location}</span>
                    </td>

                    <td className="text-center p-3">
                      <span>{mapping?.address1_location} /</span>
                      <span>{mapping?.address2_location}</span>
                    </td>
                    <td className="text-center p-3">
                      <span>{mapping?.postal_code_location}</span>
                    </td>
                    <td className="text-center p-3">
                      <span>{mapping?.note_location}</span>
                    </td>
                    <td className="text-center p-3">
                      <span>{mapping?.city?.name_city} /</span>
                      <span>{mapping?.tehsil?.name_tehsil} /</span>
                      <span>{mapping?.tehsil?.district?.name_district} /</span>
                      <span>
                        {mapping?.tehsil?.district?.division?.name_division}/
                      </span>
                      <span>
                        {mapping?.tehsil?.district?.division?.state?.name_state}
                        /
                      </span>
                      <span>
                        {
                          mapping?.tehsil?.district?.division?.state?.country
                            ?.name_country
                        }
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default DepartmentDetail;
