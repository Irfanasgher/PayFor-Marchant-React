import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Label,
  FormGroup,
  Input,
  Form,
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
} from "reactstrap";
import { useLocation } from "react-router-dom";
import { FaBoxes } from "react-icons/fa";
import { MdRefresh } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
// import Switch from "rc-switch";
import "./OrderDetail.scss";
import { refundRequest } from "../../../actions";

const OrderDetail = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const passedData = location?.state?.data;
  const [data, setData] = useState(passedData);

  const [refund, setRefund] = useState(false);
  const refundToggle = () => setRefund(!refund);

  const request = (id) => {
    dispatch(refundRequest(id));
  };

  const { orders } = useSelector((state) => state.OrderReducer);
  useEffect(() => {
    if (orders.length) {
      setData(orders.find((order) => order.id === passedData.id));
    }
  }, [orders]); // eslint-disable-line react-hooks/exhaustive-deps

  console.log("afdafd", data);
  return (
    <div id="customers">
      <div className="addOrganization mb-1 d-flex align-items-center justify-content-between p-5">
        <div className="app-page-title--first">
          <div className="app-page-title--iconbox d-50">
            <div className="d-70 d-flex align-items-center justify-content-center">
              <FaBoxes className="icon" />
            </div>
          </div>
          <div className="app-page-title--heading">
            <h1>ORDER {data?.order_nop_id}</h1>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="tableContainer m-1" style={{ padding: "0px" }}>
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Orders</b>
            </div>
          </div>
          <Table
            responsive
            className="table-alternate-spaced text-nowrap mb-0"
            style={{ margin: "0px" }}
          >
            <thead className="fontSize-sm">
              <tr>
                <th className="text-left p-3 pl-4">Product</th>
                {/* <th className="text-center p-3">Code</th> */}
                <th className="text-center p-3">merchant</th>
                {/* <th className="text-center p-3">merchant id</th> */}
                <th className="text-center p-3">Size</th>
                <th className="text-center p-3">QTY</th>
                <th className="text-center p-3">price</th>
                <th className="text-center p-3">Location</th>
                {/* <th className="text-center p-3">Action</th> */}
              </tr>
            </thead>
            <tbody>
              {data?.itemDetail?.map((item, key) => {
                return (
                  <tr key={key}>
                    <td className="text-left pl-4">
                      <span title={item.item_name}>
                        {item.item_name.replace(/^(.{10}[^\s]*).*/, "$1")}
                      </span>
                    </td>
                    {/* <td className="text-center">
                      <span>MV21-06</span>
                    </td> */}

                    <td className="text-center">
                      <span>{data?.store?.name}</span>
                    </td>
                    {/* <td className="text-center">
                      <span>0102565</span>
                    </td> */}
                    <td className="text-center">
                      <span>{item.item_size}</span>
                    </td>
                    <td className="text-center">
                      <span>1</span>
                    </td>
                    <td className="text-center">
                      <span>{item.item_price}</span>
                    </td>
                    <td className="text-center">
                      <span>Online</span>
                    </td>
                    {/* <td className="text-center">
                      <div className="d-flex align-items-center justify-content-center">
                        <div className="ml-2">
                          <Switch
                            checked={true}
                            // onClick={() => modalToggle()}
                            className="switch-small toggle-switch-second"
                          />
                        </div>
                      </div>
                    </td> */}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <br />
        <br />
        <div
          className="contactDetail tableContainer3"
          style={{ padding: "0px" }}
        >
          <Form>
            <Row className="p-5">
              <Col md="12">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="information">
                    <h1>Customer Details</h1>
                  </div>
                  <div className="editContainer">
                    <span className="btn-wrapper--icon"></span>
                  </div>
                </div>
              </Col>
              <br />
              <br />
              <Col md="6">
                <FormGroup className="formGroup">
                  <Label for="">Name</Label>
                  <Input
                    type="text"
                    style={{ cursor: "pointer" }}
                    readOnly
                    defaultValue={`${data?.user?.first_name} ${data?.user?.last_name}`}
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
                    defaultValue={data?.user?.account?.email}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="">Phone Number</Label>
                  <Input
                    type="email"
                    style={{ cursor: "pointer" }}
                    readOnly
                    defaultValue={data?.user?.phone_number}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="">Address</Label>
                  <Input
                    type="text"
                    style={{ cursor: "pointer" }}
                    readOnly
                    defaultValue={data?.user?.address?.address}
                  />
                </FormGroup>
              </Col>
              <Col md="12">
                <FormGroup>
                  <Label for="">Shipping Address</Label>
                  <Input
                    type="text"
                    style={{ cursor: "pointer" }}
                    readOnly
                    defaultValue={data?.shippingAddress?.address}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </div>
        <br />
        <br />
        <div
          className="contactDetail tableContainer3"
          style={{ padding: "0px" }}
        >
          <div className="p-5">
            {data?.itemDetail?.map((item, key) => {
              var arr = item?.createdAt;
              var date = arr?.split("T");
              return (
                <div
                  key={key}
                  style={{ marginBottom: "20px" }}
                  className="d-flex align-items-center justify-content-between"
                >
                  <img
                    src={item.item_image_url}
                    className="image"
                    alt="product"
                  />
                  <div>
                    <p className="productSize">Product 1</p>
                    <p className="productSize">Size : {item.item_size}</p>
                    {/* <p className="productSize">Color: Parrot Green</p> */}
                  </div>
                  <div>
                    <p className="productSize">{date[0]}</p>
                    <p className="productSize">Order #: {item.order_id}</p>
                  </div>
                  <div>
                    <p className="productSize">Total Amount</p>
                    <p className="productSize">
                      {data?.isoCurrency} {item.item_price}
                    </p>
                  </div>
                  <Button
                    color="primary"
                    style={{ width: item.is_refunded ? "198px" : "130px" }}
                    disabled={item.is_refunded ? true : false}
                    onClick={() => request(item.id)}
                  >
                    <span className="btn-wrapper--icon">
                      <MdRefresh size={24} className="icon" />
                    </span>
                    <span className="btn-wrapper--label">
                      {item.is_refunded ? "Refund Requested" : "Refund"}
                    </span>
                  </Button>
                </div>
              );
            })}
            <br />
            <Row className="">
              <Col md="12">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="information">
                    <h1>Payfor Installment Paid</h1>
                  </div>
                  <div className="editContainer">
                    <span className="btn-wrapper--icon"></span>
                  </div>
                </div>
              </Col>
              <br />
              <br />
              {data?.installmentPayout?.map((item, key) => {
                var arr = item?.createdAt;
                var date = arr?.split("T");
                return (
                  <Col md="6" key={key}>
                    <div className="d-flex align-items-center justify-content-between">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="122"
                        height="37"
                        viewBox="0 0 122 37"
                      >
                        <g id="check2" transform="translate(0 6)">
                          <circle
                            id="Ellipse_271"
                            data-name="Ellipse 271"
                            cx="13"
                            cy="13"
                            r="13"
                            fill="#f4f5f6"
                          />
                          <path
                            id="Path_14926"
                            data-name="Path 14926"
                            d="M-19526.627-17342.094l2.926,2.818,7.279-6.979"
                            transform="translate(19534.932 17355.516)"
                            fill="none"
                            stroke="#6801fe"
                            strokeWidth="2"
                          />
                        </g>
                        <text
                          id="Text"
                          transform="translate(37 15)"
                          fill="#1b127b"
                          fontSize="14"
                          fontFamily="Heebo-Medium, Heebo"
                          fontWeight="500"
                          letterSpacing="-0.016em"
                        >
                          <tspan x="0" y="0">
                            {key + 1 === 1 ? "1st" : "2nd"} Payment
                          </tspan>
                        </text>
                        <text
                          id="Text-2"
                          data-name="Text"
                          transform="translate(37 32)"
                          fill="#1b127b"
                          fontSize="12"
                          fontFamily="Heebo-ExtraLight, Heebo"
                          fontWeight="200"
                          letterSpacing="-0.016em"
                        >
                          <tspan x="0" y="0">
                            {date[0]}
                          </tspan>
                        </text>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="96"
                        height="33"
                        viewBox="0 0 46 33"
                      >
                        <text
                          id="Text"
                          transform="translate(46 15)"
                          fill="#1b127b"
                          fontSize="14"
                          fontFamily="Heebo-Medium, Heebo"
                          fontWeight="500"
                          letterSpacing="-0.016em"
                        >
                          <tspan x="-45.981" y="0">
                            {data.isoCurrency} {item.installment_amount}
                          </tspan>
                          <tspan fill="#6801fe" fontSize="11">
                            <tspan x="-45.981" y="13">
                              {item.is_paid ? "Paid" : "Unpaid"}
                            </tspan>
                          </tspan>
                        </text>
                      </svg>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </div>
      <Modal
        zIndex={2000}
        size="xl"
        centered
        scrollable
        isOpen={refund}
        toggle={refundToggle}
      >
        <ModalHeader toggle={refundToggle}>Refund Request</ModalHeader>
        <ModalBody>
          <form>
            <Container>
              <div className="py-4">
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <Label>Product Name</Label>
                      <Input type="text" readOnly defaultValue="Product XYZ" />
                    </FormGroup>
                  </Col>
                  <Col
                    md="12"
                    style={{ marginTop: "15px", marginBottom: "15px" }}
                  >
                    <Row>
                      <Col md="4">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            name="required"
                            type="radio"
                            id="onlineCheckbox"
                            value="option1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="onlineCheckbox"
                          >
                            Item Damage
                          </label>
                        </div>
                      </Col>
                      <Col md="4">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="required"
                            id="instoreCheckbox"
                            value="option2"
                            // checked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="instoreCheckbox"
                          >
                            Missing Item
                          </label>
                        </div>
                      </Col>
                      <Col md="4">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="required"
                            id="bothCheckbox"
                            value="option3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="bothCheckbox"
                          >
                            Other
                          </label>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col md="12">
                    <FormGroup>
                      <Label>Remarks</Label>
                      <Input
                        type="textarea"
                        readOnly
                        defaultValue="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh 
                        euismod tinc."
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* <div className="divider mt-5 mb-4" /> */}

            <ModalFooter className="text-left">
              <div className="p-4 w-100 d-flex align-items-center justify-content-center">
                <Button
                  outline
                  color="primary"
                  // type="submit"
                  className="ml-auto"
                  style={{ width: "185px" }}
                  onClick={() => refundToggle()}
                >
                  Approve Request
                </Button>
                <Button
                  color="primary"
                  // type="submit"
                  className="ml-auto"
                  style={{ width: "185px" }}
                  onClick={() => refundToggle()}
                >
                  Cancel Request
                </Button>
              </div>
            </ModalFooter>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default OrderDetail;
