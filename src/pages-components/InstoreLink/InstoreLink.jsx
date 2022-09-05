import React, { useState } from "react";
import { Row, Col, Label, FormGroup, Input, Form, Button } from "reactstrap";
import { FaLink } from "react-icons/fa";
import { toast, Slide } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { GenerateInstoreLink } from "../../actions";

const InstoreLink = () => {
  const [sending, setSending] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [invoice, setInvoice] = useState("");
  const [amount, setAmount] = useState();
  const [installment, setInstallment] = useState();
  const [credit, setCredit] = useState(false);
  const [debit, setDebit] = useState(false);

  const { user } = useSelector((state) => state.LoginReducer);

  // let installment = amount / 2;

  // console.log(credit, "Rrr", debit);

  const handleCredit = () => {
    setCredit(true);
    setDebit(false);
  };

  const handleAmount = () => {
    let data = amount / 2;
    setInstallment(data);
  };
  const handleDebit = () => {
    setCredit(false);
    setDebit(true);
  };
  const dispatch = useDispatch();

  const GenerateLink = async (e) => {
    e.preventDefault();
    setSending(true);

    if (
      email.length === 0 ||
      name.length === 0 ||
      phone.length === 0 ||
      invoice.length === 0 ||
      amount.length === 0
    ) {
      toast.error("Please Fill All Fields", {
        containerId: "B",
        transition: Slide,
      });
      setSending(false);
      return;
    }

    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.toLowerCase().match(regex)) {
      toast.error("Email is not vaild", {
        containerId: "B",
        transition: Slide,
      });
      setSending(false);
      return;
    }
    let type = credit ? "Credit Card" : "Debit Card";
    if (type.length === 0) {
      toast.error("Please Select Payment Option", {
        containerId: "B",
        transition: Slide,
      });
      setSending(false);
      return;
    }

    const data = {
      name: name,
      phone_number: `+${phone}`,
      invoice_no: invoice,
      total_amount: amount,
      payment_type: type,
      store_name: user?.store_id?.name,
      store_id: user?.store_id?.id,
    };

    await dispatch(GenerateInstoreLink(data));
    setSending(false);
  };

  return (
    <div id="customers">
      <div className="addOrganization mb-1 d-flex align-items-center justify-content-between p-5">
        <div className="app-page-title--first">
          <div className="app-page-title--iconbox d-50">
            <div className="d-70 d-flex align-items-center justify-content-center">
              <FaLink className="icon" />
            </div>
          </div>
          <div className="app-page-title--heading">
            <h1>Generate Instore Link</h1>
          </div>
        </div>
        {/* <Button color="primary">
          <span className="btn-wrapper--icon">
            <FaPlus className="icon" />
          </span>
          <span className="btn-wrapper--label">Create New</span>
        </Button> */}
      </div>
      <div className="contactDetail m-5">
        <Form>
          <Row className="p-5">
            <Col md="6">
              <FormGroup className="formGroup">
                <Label for="">Name</Label>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="">Email</Label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="">Phone Number</Label>
                <Input
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="">Invoice No.</Label>
                <Input
                  type="number"
                  value={invoice}
                  onChange={(e) => setInvoice(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md="12">
              <FormGroup>
                <Label for="">Total Amount </Label>
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  onBlur={() => handleAmount()}
                />
              </FormGroup>
            </Col>
            <Col md="12">
              <br />
              <div className="information">
                <h1>Payment Option</h1>
              </div>
              <br />
            </Col>
            <Col md="12" style={{ marginBottom: "15px" }}>
              <Row>
                <Col md="3">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      name="required"
                      type="radio"
                      id="onlineCheckbox"
                      value="option1"
                      checked={credit}
                      onChange={() => handleCredit()}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="onlineCheckbox"
                    >
                      Credit Card
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
                      checked={debit}
                      onChange={() => handleDebit()}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="instoreCheckbox"
                    >
                      Debit Card
                    </label>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="">1st Installment </Label>
                <Input
                  type="text"
                  style={{ cursor: "pointer" }}
                  readOnly
                  defaultValue={installment}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="">2nd Installment </Label>
                <Input
                  type="text"
                  style={{ cursor: "pointer" }}
                  readOnly
                  defaultValue={installment}
                />
              </FormGroup>
            </Col>
            <Col md="12" className="d-flex justify-content-center">
              <br />
              <Button
                color="primary"
                type="submit"
                style={{ width: "185px", marginTop: "45px" }}
                disabled={sending ? true : false}
                onClick={(e) => GenerateLink(e)}
              >
                {sending ? "Sending" : "Send Link"}
              </Button>
              <br />
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};
export default InstoreLink;
