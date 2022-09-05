import React, { useEffect } from "react";
import { Row, Col, Label, FormGroup, Input, Form } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import TabPanel from "./TabPanel";
import Employee from "./Employee";
import Location from "./Location";
import { GetClientDetailByID } from "../../../actions";

const ClientDetail = (props) => {
  const clientID = props.match.params.id;
  // console.log("clientID", clientID);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetClientDetailByID(clientID));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { clientDetail } = useSelector((state) => state.ClientReducer);

  // console.log("clientDetail", clientDetail);
  return (
    <div id="clientDetail">
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
            <img src={clientDetail?.logo} alt="logo" className="logo" />
            {/* <img src="/images/logo.png" alt="logo" className="logo" /> */}
          </div>
          <div className="ml-5 app-page-title--heading">
            <h1
              className="organizationName"
              style={{ textTransform: "capitalize" }}
            >
              {clientDetail?.company_name}
            </h1>
            <div className="d-flex align-items-center">
              <p className="owner">Owner :</p>
              <p className="owner ml-1" style={{ textTransform: "capitalize" }}>
                {clientDetail?.client[0]?.contact_name}
              </p>
            </div>
            <div className="d-flex align-items-center">
              <p className="owner">Expected Sale :</p>
              <p className="owner ml-1">
                {clientDetail?.expected_sale}-/ {clientDetail?.bank?.currency}
              </p>
            </div>
            <div className="d-flex align-items-center">
              <p className="owner">NTN :</p>
              <p className="owner ml-1">0000000000000</p>
            </div>
            <div className="d-flex align-items-center">
              <p className="owner">Address :</p>
              <p className="owner ml-1">{clientDetail?.address}</p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex align-items-center">
            <p className="owner">Phone :</p>
            <p className="owner ml-1">
              {clientDetail?.client[0]?.phone_number}
            </p>
          </div>
          <div className="d-flex align-items-center">
            <p className="owner">Email :</p>
            <p className="owner ml-1">{clientDetail?.company_email}</p>
          </div>
          <div className="d-flex align-items-center">
            <p className="owner">Website :</p>
            <p className="owner ml-1">{clientDetail?.website}</p>
          </div>
        </div>
      </div>
      <div className="contactDetail m-5">
        <Form>
          <Row className="p-5">
            <Col md="12">
              <div className="d-flex justify-content-between align-items-center">
                <div className="information">
                  <h1>Contact Detail</h1>
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
                <Label for="">Point of Contact Name</Label>
                <Input
                  type="text"
                  // placeholder="Officialemail@gmail.com"
                  style={{ cursor: "pointer" }}
                  readOnly
                  defaultValue={clientDetail?.client[0]?.contact_name}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="">Phone Number</Label>
                <Input
                  type="text"
                  style={{ cursor: "pointer" }}
                  readOnly
                  defaultValue={clientDetail?.client[0]?.phone_number}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="">Email</Label>
                <Input
                  type="email"
                  // placeholder="Officialemail@gmail.com"
                  style={{ cursor: "pointer" }}
                  readOnly
                  defaultValue={clientDetail?.client[0]?.email}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="">Address</Label>
                <Input
                  type="text"
                  // placeholder="032100000000"
                  style={{ cursor: "pointer" }}
                  readOnly
                  defaultValue={clientDetail?.client[0]?.address}
                />
              </FormGroup>
            </Col>
            <Col md="6" style={{ marginTop: "15px" }}>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label style={{ fontSize: "14px" }}>Select Type</Label>
                  </FormGroup>
                </Col>
                <Col md="3">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      name="required"
                      type="radio"
                      id="onlineCheckbox"
                      value="option1"
                      readOnly
                      checked={
                        clientDetail?.required_for === "instore" ? true : false
                      }
                    />
                    <label
                      className="form-check-label"
                      htmlFor="onlineCheckbox"
                    >
                      In-Store
                    </label>
                  </div>
                </Col>
                <Col md="3">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="required"
                      id="instoreCheckbox"
                      value="option2"
                      readOnly
                      checked={
                        clientDetail?.required_for === "online" ? true : false
                      }
                    />
                    <label
                      className="form-check-label"
                      htmlFor="instoreCheckbox"
                    >
                      Online
                    </label>
                  </div>
                </Col>
                <Col md="3">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="required"
                      id="bothCheckbox"
                      value="option3"
                      readOnly
                      checked={
                        clientDetail?.required_for === "both" ? true : false
                      }
                    />
                    <label className="form-check-label" htmlFor="bothCheckbox">
                      Both
                    </label>
                  </div>
                </Col>
              </Row>
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
                  <h1>Bank Account Details</h1>
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
                <Label for="">Company Bank Account Name</Label>
                <Input
                  type="text"
                  style={{ cursor: "pointer" }}
                  readOnly
                  defaultValue={clientDetail?.bank?.account_name}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="">Company Bank Account Number</Label>
                <Input
                  type="text"
                  style={{ cursor: "pointer" }}
                  readOnly
                  defaultValue={clientDetail?.bank?.account_number}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="">Bank Name</Label>
                <Input
                  type="text"
                  style={{ cursor: "pointer" }}
                  readOnly
                  defaultValue={clientDetail?.bank?.bank_name}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="">Branch Code</Label>
                <Input
                  type="text"
                  style={{ cursor: "pointer" }}
                  readOnly
                  defaultValue={clientDetail?.bank?.branch_code}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="">Currency</Label>
                <Input
                  type="text"
                  style={{ cursor: "pointer" }}
                  readOnly
                  defaultValue={clientDetail?.bank?.currency}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="">Bank Statement </Label>
                <Input
                  type="text"
                  style={{ cursor: "pointer" }}
                  readOnly
                  defaultValue={clientDetail?.bank?.bank_statement}
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </div>

      <div>
        <Employee data={clientDetail} id={clientID} />
      </div>

      <div>
        <Location />
      </div>

      <div className="m-5">
        <TabPanel data={clientDetail} />
      </div>
    </div>
  );
};
export default ClientDetail;
