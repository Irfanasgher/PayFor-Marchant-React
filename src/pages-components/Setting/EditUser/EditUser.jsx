import React from "react";
import {
  Row,
  Col,
  Label,
  FormGroup,
  Input,
  Form,
  Button,
  CustomInput,
} from "reactstrap";
import { FaCog } from "react-icons/fa";

const EditUser = () => {
  return (
    <div id="customers">
      <div className="addOrganization mb-1 d-flex align-items-center justify-content-between p-5">
        <div className="app-page-title--first">
          <div className="app-page-title--iconbox d-50">
            <div className="d-70 d-flex align-items-center justify-content-center">
              <FaCog className="icon" />
            </div>
          </div>
          <div className="app-page-title--heading">
            <h1>Edit User Access</h1>
          </div>
        </div>
      </div>
      <div className="contactDetail m-5">
        <Form>
          <Row className="p-5">
            <Col md="6">
              <FormGroup className="formGroup">
                <Label for="">First Name</Label>
                <Input
                  type="text"
                  // placeholder="Officialemail@gmail.com"
                  style={{ cursor: "pointer" }}
                  readOnly
                  defaultValue={"Emerson Hammor"}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup className="formGroup">
                <Label for="">Last Name</Label>
                <Input
                  type="text"
                  // placeholder="Officialemail@gmail.com"
                  style={{ cursor: "pointer" }}
                  readOnly
                  defaultValue={"Emerson Hammor"}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="">Email</Label>
                <Input
                  type="text"
                  style={{ cursor: "pointer" }}
                  readOnly
                  defaultValue={"Emerson@payfor.com"}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="">Phone Number</Label>
                <Input
                  type="email"
                  // placeholder="Officialemail@gmail.com"
                  style={{ cursor: "pointer" }}
                  readOnly
                  defaultValue={"+1 02303030303"}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="">Password</Label>
                <Input
                  type="password"
                  // placeholder="Officialemail@gmail.com"
                  style={{ cursor: "pointer" }}
                  readOnly
                  defaultValue={"S3256849"}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <div
                className="d-flex align-items-center"
                style={{ height: "100px" }}
              >
                <p className="reset-password">Reset Password</p>
              </div>
            </Col>
            <Col md="12">
              <br />
              <div className="information">
                <h1>Access Control</h1>
              </div>
              <br />
            </Col>
            <Col md="12" style={{ marginBottom: "15px" }}>
              <Row>
                <Col md="2">
                  <CustomInput
                    type="checkbox"
                    id={11}
                    className="align-self-start"
                    label="Orders"
                  />
                </Col>
                <Col md="2">
                  <CustomInput
                    type="checkbox"
                    id={12}
                    className="align-self-start"
                    label="Customers"
                  />
                </Col>
                <Col md="2">
                  <CustomInput
                    type="checkbox"
                    id={13}
                    className="align-self-start"
                    label="Admin"
                  />
                </Col>
                <Col md="2">
                  <CustomInput
                    type="checkbox"
                    id={14}
                    className="align-self-start"
                    label="Settings"
                  />
                </Col>
              </Row>
            </Col>
            <Col md="12" className="d-flex justify-content-center">
              <br />
              <Button
                color="primary"
                style={{ width: "185px", marginTop: "45px" }}
              >
                Save
              </Button>
              <br />
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};
export default EditUser;
