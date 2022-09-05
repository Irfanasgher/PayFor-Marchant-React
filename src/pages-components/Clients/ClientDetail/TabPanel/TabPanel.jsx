import React, { useState } from "react";
import clsx from "clsx";
import { TabContent, TabPane, Nav, NavItem } from "reactstrap";
import { NavLink as NavLinkStrap } from "reactstrap";
import Order from "./Order";
import Customer from "./Customer";

const TabPanel = ({ data }) => {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  // console.log("TabPanel dataaaaaa", data);
  return (
    <div id="TabPanel">
      <div className="tabPanelContainer d-flex align-items-center justify-content-center">
        <Nav tabs className="d-flex align-items-center justify-content-center">
          <NavItem>
            <NavLinkStrap
              className={clsx({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              <span className="px-3 py-2">Orders</span>
            </NavLinkStrap>
          </NavItem>
          <NavItem>
            <NavLinkStrap
              className={clsx({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              <span className="px-3 py-2">Customers</span>
            </NavLinkStrap>
          </NavItem>
        </Nav>
      </div>
      <TabContent
        activeTab={activeTab}
        // style={{ background: "#fff", borderRadius: "13px", marginTop: "30px" }}
      >
        <TabPane tabId="1" style={{ paddingTop: "30px" }}>
          <Order data={data} />
        </TabPane>

        {/* ------------------------------SECOND TAB-------------------------------- */}

        <TabPane tabId="2" style={{ paddingTop: "30px" }}>
          <Customer data={data} />
        </TabPane>
      </TabContent>
    </div>
  );
};
export default TabPanel;
