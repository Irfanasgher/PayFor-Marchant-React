import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Row,
  Col,
  Card,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  Button,
} from "reactstrap";
import { NavLink as NavLinkStrap } from "reactstrap";
import { getAllCompanyData } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import UnitDetail from "./UnitDetail";
import DepartmentDetail from "./DepartmentDetail";
import DesignationDetail from "./DesignationDetail";
import PolicyDetail from "./PolicyDetail";
import AssetsDetail from "./AssetsDetail";
import "./AddCompanyDetails.scss";

export default function AddCompanyDetails(props) {
  const companyIdStore = props.match.params.id;
  const location = useLocation();
  console.log("detail data from location:", location);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCompanyData(companyIdStore));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { getAllCompanyListData } = useSelector(
    (state) => state.CompanyReducer
  );
  console.log("GET ALL COMPANY LIST comp", getAllCompanyListData);
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  // console.log("companyid", getAllCompanyListData);
  return (
    <div id="companyDetail">
      <div className="addOrganization mb-1 d-flex align-items-center justify-content-between p-5">
        <div className="editContainer">
          <span className="btn-wrapper--icon">
            {/* <FontAwesomeIcon icon={["fas", "edit"]} color={"#fff"} /> */}
          </span>
        </div>
        {/* {getAllCompanyListData?.companyDetail?.name_company} */}
        <div className="d-flex align-items-center">
          <div
            className="box d-flex align-items-center justify-content-center"
            style={{ overflow: "hidden" }}
          >
            <img
              src={
                getAllCompanyListData?.url_logo.length > 0
                  ? getAllCompanyListData?.url_logo
                  : "/logo-2.png"
              }
              style={{
                width: "80%",
                // height: "90%",
                objectFit: "contain",
                // borderRadius: "50%",
              }}
              alt="logo"
            />
          </div>
          <div className="ml-5 app-page-title--heading">
            <h1 className="organizationName">
              {getAllCompanyListData?.name_company}
            </h1>
            <div className="d-flex align-items-center">
              <p className="owner">Company Type:</p>
              <p className="owner ml-1"></p>
            </div>
            <div className="d-flex align-items-center">
              <p className="owner">Contact No:</p>
              <p className="owner ml-1">
                {getAllCompanyListData?.phone_company}
              </p>
            </div>
            <div className="d-flex align-items-center">
              <p className="owner">Email Address:</p>
              <p className="owner ml-1">
                {getAllCompanyListData?.email_company}
              </p>
            </div>
            <div className="d-flex align-items-center">
              <p className="owner">Website:</p>
              <p className="owner ml-1">
                {getAllCompanyListData?.url_website_company}
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex align-items-center">
            <p className="owner">Reg# :</p>
            <p className="owner ml-1">762015</p>
          </div>
          <div className="d-flex align-items-center">
            <p className="owner">NTN# :</p>
            <p className="owner ml-1">{getAllCompanyListData?.ntn_company}</p>
          </div>
          <Button
            href="#/"
            size="m"
            className="m-2 py-3"
            // onClick={toggle2}
            // color="primary"
            style={{
              backgroundColor: "#00C74E",
              color: "#fff",
              borderColor: "#00C74E",
              boxShadow: "none",
            }}
          >
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon icon={["fas", "file-download"]} />
            </span>
            <span className="btn-wrapper--label ml-3">Download</span>
            <span className="btn-wrapper--icon ml-3">
              <FontAwesomeIcon icon={["fas", "angle-down"]} />
            </span>
          </Button>
        </div>
      </div>
      <Row className="p-5">
        <Col lg="12">
          <Card
            className="shadow-xxl mb-5"
            style={{ paddingTop: "30px", paddingBottom: "20px" }}
          >
            <div className="nav-tabs-success">
              <Nav tabs>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === "1" })}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    <span className="px-3 py-2 font-weight-bold">
                      Location/Offices
                    </span>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === "2" })}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    <span className="px-3 py-2 font-weight-bold">
                      Department
                    </span>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === "3" })}
                    onClick={() => {
                      toggle("3");
                    }}
                  >
                    <span className="px-3 py-2 font-weight-bold">
                      Designation
                    </span>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === "4" })}
                    onClick={() => {
                      toggle("4");
                    }}
                  >
                    <span className="px-3 py-2 font-weight-bold">
                      Company Policies
                    </span>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === "5" })}
                    onClick={() => {
                      toggle("5");
                    }}
                  >
                    <span className="px-3 py-2 font-weight-bold">Assets</span>
                  </NavLinkStrap>
                </NavItem>
              </Nav>
            </div>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1" style={{ paddingBottom: "20px" }}>
                <UnitDetail
                  data={getAllCompanyListData?.locations}
                  companyId={companyIdStore}
                />
              </TabPane>

              {/* ------------------------------SECOND TAB-------------------------------- */}

              <TabPane
                tabId="2"
                style={{ paddingTop: "30px", paddingBottom: "20px" }}
              >
                <DepartmentDetail
                  data={getAllCompanyListData?.locations}
                  companyId={companyIdStore}
                  add={location?.state?.add}
                />
              </TabPane>

              {/* ----------------------------policy tab--------------------------- */}

              <TabPane
                tabId="3"
                style={{ paddingTop: "30px", paddingBottom: "20px" }}
              >
                <DesignationDetail
                  data={getAllCompanyListData?.mapping_designation_company}
                  companyId={companyIdStore}
                  add={location?.state?.add}
                />
              </TabPane>
              <TabPane
                tabId="4"
                style={{ paddingTop: "30px", paddingBottom: "20px" }}
              >
                <PolicyDetail
                  data={getAllCompanyListData?.mapping_company_policies}
                  companyId={companyIdStore}
                  add={location?.state?.add}
                />
              </TabPane>
              <TabPane
                tabId="5"
                style={{ paddingTop: "30px", paddingBottom: "20px" }}
              >
                <AssetsDetail
                  data={getAllCompanyListData?.asset_details}
                  companyId={companyIdStore}
                />
              </TabPane>
            </TabContent>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
