import React, { useState } from "react";
import {
  Row,
  Col,
  Label,
  FormGroup,
  Input,
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
  CustomInput,
} from "reactstrap";
import { FaRegEdit } from "react-icons/fa";
import { toast, Slide } from "react-toastify";
import { useDispatch } from "react-redux";
import Switch from "rc-switch";
import { CreateEmployee } from "../../../actions";

const Employee = (props) => {
  const data = props?.data?.client[0]?.employee;

  const [save, setSave] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [addEmployee, setAddEmployee] = useState(false);
  const addEmployeeToggle = () => setAddEmployee(!addEmployee);

  const dispatch = useDispatch();
  // console.log("clientDetail", props.data);

  const addEmployeeF = async () => {
    setSave(true);
    if (email.length === 0 || name.length === 0 || phone.length === 0) {
      toast.error("Please Fill All Fields", {
        containerId: "B",
        transition: Slide,
      });
      setSave(false);
      return;
    }

    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.toLowerCase().match(regex)) {
      toast.error("Email is not vaild", {
        containerId: "B",
        transition: Slide,
      });
      setSave(false);
      return;
    }

    const data = {
      name: name,
      email: email,
      phone_number: phone,
      merchant_id: props.data.client[0].id,
      company_id: props.data.id,
    };

    await dispatch(CreateEmployee(data, props.id));
    setSave(false);
    addEmployeeToggle();
  };

  return (
    <div className="contactDetail m-5 p-5">
      <div className="d-flex justify-content-between align-items-center">
        <div className="information">
          <h1>Employee</h1>
        </div>
      </div>
      <br />
      <div className="tableContainer2">
        <Table
          responsive
          className="table-alternate-spaced text-nowrap mb-0"
          style={{ margin: "0px" }}
        >
          <thead className="font-size-sm">
            <tr>
              <th className="text-left p-3 pl-4">Name</th>
              <th className="text-center p-3">Email</th>
              <th className="text-center p-3">Phone</th>
              <th className="text-center p-3">code</th>
              <th className="text-center p-3">Access Controls</th>
              <th className="text-center p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((data, key) => {
              return (
                <tr key={key}>
                  <td className="text-left pl-4">
                    <span>{data.name}</span>
                  </td>
                  <td className="text-center">
                    <span>{data.email}</span>
                  </td>

                  <td className="text-center">
                    <span>{data.phone_number}</span>
                  </td>
                  <td className="text-center">
                    <span>{data.location_id}</span>
                  </td>
                  <td className="text-center">
                    <span>Can Generate Link Only</span>
                  </td>
                  <td className="text-center">
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="ml-2">
                        <Switch
                          checked={data.is_active}
                          // onClick={() => handleToggle(data)}
                          className="switch-small toggle-switch-second"
                        />
                      </div>
                      <Button className="ml-2 update-button rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                        <FaRegEdit className="icon" />
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <br />
      <Button outline color="primary" onClick={() => addEmployeeToggle()}>
        Add Employee
      </Button>
      <Modal
        zIndex={2000}
        size="xl"
        centered
        scrollable
        isOpen={addEmployee}
        toggle={addEmployeeToggle}
      >
        <ModalHeader toggle={addEmployeeToggle}>Add Employee</ModalHeader>
        <ModalBody>
          <form>
            <Container>
              <div className="py-4">
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label>Name</Label>
                      <Input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label>Email</Label>
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    <FormGroup>
                      <Label>Phone Number</Label>
                      <Input
                        type="number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    <Label>Access Controls</Label>
                    <CustomInput
                      type="checkbox"
                      id={11}
                      className="align-self-start"
                      label="Can Generate Link Only"
                      // checked={approved}
                      // onChange={() => setApproved(!approved)}
                    />
                    <div style={{ marginTop: "5px" }}>
                      <CustomInput
                        type="checkbox"
                        id={12}
                        className="align-self-start"
                        label="Can View Details"
                      />
                    </div>
                    <div style={{ marginTop: "5px" }}>
                      <CustomInput
                        type="checkbox"
                        id={13}
                        className="align-self-start"
                        label="Admin Controls "
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* <div className="divider mt-5 mb-4" /> */}

            <ModalFooter className="d-flex align-items-center justify-content-center">
              <Button
                color="primary"
                // type="submit"
                className="ml-auto"
                style={{ width: "185px" }}
                disabled={save ? true : false}
                onClick={() => addEmployeeF()}
              >
                {save ? "Saving" : "Save"}
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default Employee;
