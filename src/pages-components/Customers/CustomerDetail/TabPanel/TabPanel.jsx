import React, { useState } from "react";
import clsx from "clsx";
import { TabContent, TabPane, Nav, NavItem, Row, Col } from "reactstrap";
import { NavLink as NavLinkStrap } from "reactstrap";
import Pending from "./Pending";
import Completed from "./Completed";

const TabPanel = ({ order }) => {
  const [activeTab, setActiveTab] = useState("1");
  const [productDetail, setProductDetail] = useState(order[0]);
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const selectedData = (data) => {
    console.log(data);
    setProductDetail(data);
  };

  console.log("order in TabPanel", order);
  return (
    <Row className="p-5">
      <Col md="6" className="tabContainer">
        <div className="">
          <div className="d-flex align-items-center justify-content-center">
            <Nav
              tabs
              className="d-flex align-items-center justify-content-center"
            >
              <NavItem>
                <NavLinkStrap
                  className={clsx({ active: activeTab === "1" })}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  <span className="px-3 py-2">Pending</span>
                </NavLinkStrap>
              </NavItem>
              <NavItem>
                <NavLinkStrap
                  className={clsx({ active: activeTab === "2" })}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  <span className="px-3 py-2">Completed</span>
                </NavLinkStrap>
              </NavItem>
            </Nav>
          </div>
          <TabContent
            activeTab={activeTab}
            // style={{ background: "#fff", borderRadius: "13px", marginTop: "30px" }}
          >
            <TabPane tabId="1" style={{ paddingTop: "30px" }}>
              <Pending order={order} selectedData={selectedData} />
            </TabPane>

            {/* ------------------------------SECOND TAB-------------------------------- */}

            <TabPane tabId="2" style={{ paddingTop: "30px" }}>
              <Completed order={order} selectedData={selectedData} />
            </TabPane>
          </TabContent>
        </div>
      </Col>
      <Col md="6">
        <div className="tabContainer1">
          {productDetail?.itemDetail?.map((product, key) => (
            <div className="customCard" key={key}>
              <div style={{ padding: "15px" }}>
                <h1 className="name">{product?.item_name}</h1>
                <div className="d-flex align-items-center">
                  <img
                    src={product?.item_image_url}
                    className="image"
                    alt="product"
                  />
                  <div className="ml-2">
                    <p className="size">Size: {product?.item_size},</p>
                    <p className="size">
                      {product?.createdAt?.toLocaleString()?.split(",")[0]}
                    </p>
                    <p className="size">Order #: {productDetail?.id}</p>
                  </div>
                </div>
              </div>
              <div className="priceContainer d-flex align-items-center justify-content-between">
                <span className="total">Total Amount</span>
                <span className="total">
                  {productDetail?.isoCurrency + " " + productDetail?.price}
                </span>
              </div>
            </div>
          ))}

          <h1 className="Payfor">Payfor Installment Paid</h1>
          {productDetail?.installmentPayout.map((data, key) => {
            var arr = data?.createdAt;
            var date = arr?.split("T");
            return (
              <div
                key={key}
                className="productContainer d-flex align-items-center justify-content-between"
              >
                <div className="d-flex align-items-center pl-1">
                  <svg
                    id="check2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                  >
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
                  </svg>
                  <div className="ml-2">
                    <p className="name payment">
                      {key + 1 === 1 ? "1st" : "2nd"} Payment
                    </p>
                    <p className="name date">{date?.length > 0 && date[0]}</p>
                  </div>
                </div>
                <div
                  className="d-flex flex-column align-items-end justify-content-flex-end"
                  style={{ paddingRight: "10px" }}
                >
                  <p className="price amount">
                    {productDetail?.isoCurrency +
                      " " +
                      data?.installment_amount}
                  </p>
                  <p className="price paid">
                    {data.is_paid ? "Paid" : "Unpaid"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Col>
    </Row>
  );
};
export default TabPanel;
