import React from "react";
import { Row, Col, Label, FormGroup, Input, Form } from "reactstrap";
import { useLocation } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import Switch from "rc-switch";
import TabPanel from "./TabPanel";
import "./CustomerDetail.scss";

const CustomerDetail = () => {
  const location = useLocation();
  const data = location?.state?.data;
  console.log("paramData", data);

  return (
    <div id="customerDetail">
      <div className="clientDetail mb-1 d-flex align-items-center justify-content-between p-5">
        <div
          className="editContainer"
          //   onClick={() => handleUpdateToggle(singleEmployee)}
        >
          <span className="btn-wrapper--icon">
            <FaEdit className="icon" />
          </span>
        </div>
        <div className="d-flex align-items-center">
          <div className="box d-flex align-items-center justify-content-center">
            <img src="/images/logo.png" alt="logo" className="logo" />
          </div>
          <div className="ml-5 app-page-title--heading">
            <h1
              className="organizationName"
              style={{ textTransform: "capitalize" }}
            >
              {data.user.first_name} {data?.user?.last_name}
            </h1>
            <div className="d-flex align-items-center">
              <p className="owner">Email :</p>
              <p className="owner ml-1">{data.user?.account?.email}</p>
            </div>
            <div className="d-flex align-items-center">
              <p className="owner">Phone Number :</p>
              <p className="owner ml-1">{data?.user?.phone_number} </p>
            </div>
            <div className="d-flex align-items-center">
              <p className="owner">Address :</p>
              <p className="owner ml-1">{data?.user?.address?.address}</p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex align-items-center">
            <p className="owner">CNIC : </p>
            <p className="owner ml-1">{data?.user?.cnic ?? "Null"}</p>
          </div>
          <div className="d-flex align-items-center">
            <p className="owner">Customer ID :</p>
            <p className="owner ml-1">{data?.user?.id}</p>
          </div>
        </div>
      </div>
      <div className="contactDetail m-5">
        <Form>
          <Row className="p-5">
            <Col md="12">
              <div className="d-flex justify-content-between align-items-center">
                <div className="information">
                  <h1>Credit limits</h1>
                </div>
                <div
                  className="editContainer"
                  // onClick={() => handleUpdateToggle(data)}
                >
                  <span className="btn-wrapper--icon">
                    <FaEdit className="icon" />
                  </span>
                </div>
              </div>
            </Col>
            <br />
            <br />
            <Col md="6">
              <FormGroup className="formGroup">
                <Label for="">Last Order</Label>
                <Input
                  type="text"
                  // placeholder="Officialemail@gmail.com"
                  style={{ cursor: "pointer" }}
                  readOnly
                  defaultValue={`${data?.lastOrderPrice}-/ ${data?.user?.orderDetail[0]?.isoCurrency}`}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="">Total Spend to Date</Label>
                <Input
                  type="text"
                  style={{ cursor: "pointer" }}
                  readOnly
                  defaultValue={`${data?.totalSpend}-/ ${data?.user?.orderDetail[0]?.isoCurrency}`}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="">Credit Limit </Label>
                <Input
                  type="email"
                  // placeholder="Officialemail@gmail.com"
                  style={{ cursor: "pointer" }}
                  readOnly
                  defaultValue={`${data?.user?.credit_limit}-/ ${data?.user?.orderDetail[0]?.isoCurrency}`}
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </div>
      <div className="contactDetail m-5">
        <Form>
          <Row className="p-5">
            <Col md="12">
              <div className="d-flex justify-content-between align-items-center">
                <div className="information">
                  <h1>Controls</h1>
                </div>
                <div
                  className="editContainer"
                  // onClick={() => handleUpdateToggle(data)}
                >
                  <span className="btn-wrapper--icon">
                    <FaEdit className="icon" />
                  </span>
                </div>
              </div>
            </Col>
            <br />
            <br />
            <Col md="6">
              <FormGroup className="formGroup">
                <Label for="">Account</Label>
                <Input
                  type="text"
                  // placeholder="Officialemail@gmail.com"
                  style={{ cursor: "pointer" }}
                  readOnly
                  defaultValue={"Non-Defaulter"}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="">Activity</Label>
                <Input
                  type="text"
                  style={{ cursor: "pointer" }}
                  readOnly
                  defaultValue={"2 Mins Ago"}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="">Account Status</Label>
                <Input
                  type="email"
                  // placeholder="Officialemail@gmail.com"
                  style={{ cursor: "pointer" }}
                  readOnly
                  defaultValue={data?.user?.status ?? ""}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <Row>
                <Col md="6">
                  <FormGroup className="d-flex align-items-center justify-content-between">
                    <Label for="">Active</Label>
                    <div className="ml-2">
                      <Switch
                        checked={data?.user?.status === "Active" ? true : false}
                        // onClick={() => modalToggle()}
                        className="switch-small toggle-switch-second"
                      />
                    </div>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup className="d-flex align-items-center justify-content-between">
                    <Label for="">Restricted</Label>
                    <div className="ml-2">
                      <Switch
                        checked={false}
                        // onClick={() => modalToggle()}
                        className="switch-small toggle-switch-second"
                      />
                    </div>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup className="d-flex align-items-center justify-content-between">
                    <Label for="">Blacklist</Label>
                    <div className="ml-2">
                      <Switch
                        checked={false}
                        // onClick={() => modalToggle()}
                        className="switch-small toggle-switch-second"
                      />
                    </div>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup className="d-flex align-items-center justify-content-between">
                    <Label for="">Defaulter</Label>
                    <div className="ml-2">
                      <Switch
                        checked={false}
                        // onClick={() => modalToggle()}
                        className="switch-small toggle-switch-second"
                      />
                    </div>
                  </FormGroup>
                </Col>
              </Row>
            </Col>

            <Col md="12">
              <FormGroup>
                <Label for="">Add Remarks</Label>
                <Input
                  type="textarea"
                  // placeholder="032100000000"
                  style={{ cursor: "pointer" }}
                  readOnly
                  defaultValue={
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enimad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. "
                  }
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </div>
      <div className="m-5 customer-detail tableContainer3">
        <TabPanel order={data?.user?.orderDetail} />
      </div>
    </div>
  );
};
export default CustomerDetail;
