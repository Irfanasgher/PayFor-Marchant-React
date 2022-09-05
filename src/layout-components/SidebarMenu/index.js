import React, { useState } from "react";
import clsx from "clsx";
import { Collapse } from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaTachometerAlt,
  FaBoxes,
  FaUserPlus,
  FaChartBar,
  FaUsers,
  FaUserFriends,
  FaCog,
  FaLink,
} from "react-icons/fa";
import { ChevronRight } from "react-feather";

import { setSidebarToggleMobile } from "../../reducers/ThemeOptions";
import SidebarUserbox from "../SidebarUserbox";

const SidebarMenu = (props) => {
  const [reportOpen, setReportOpen] = useState(false);
  const toggleReport = (event) => {
    setReportOpen(!reportOpen);
    event.preventDefault();
  };

  const [settingOpen, setSettingOpen] = useState(false);
  const toggleSetting = (event) => {
    setSettingOpen(!settingOpen);
    event.preventDefault();
  };
  const { user } = useSelector((state) => state.LoginReducer);
  console.log("user in sidebar", user);

  const dataArray = [
    {
      id: 1,
      name: "Dashboards",
      path: "/dashboard",
      icon: FaTachometerAlt,
    },
    {
      id: 2,
      name: "Generate instore link",
      path: "/instore-link",
      icon: FaLink,
    },
    {
      id: 2,
      name: "Clients",
      path: "/clients",
      icon: FaUserFriends,
    },
    {
      id: 3,
      name: "Customers",
      path: "/customers",
      icon: FaUsers,
    },
    {
      id: 4,
      name: "Order",
      path: "/orders",
      icon: FaBoxes,
    },
    {
      id: 5,
      name: "Access Control",
      path: "/access",
      icon: FaUserPlus,
    },
    {
      id: 6,
      name: "Reports",
      toggle: toggleReport,
      open: reportOpen,
      icon: FaChartBar,
      child: [
        {
          name: "Sales Report",
          path: "/dashboard/Organization",
        },
      ],
    },
    {
      id: 5,
      name: "Setting",
      toggle: toggleSetting,
      open: settingOpen,
      icon: FaCog,
      child: [
        {
          name: "User",
          path: "/user",
        },
      ],
    },
  ];

  if (user.role === "merchant") {
    dataArray.forEach((data, index) => {
      if (
        data.name.includes("Clients") ||
        data.name.includes("Access Control")
      ) {
        console.log(dataArray.splice(index, 1));
      }
    });
  }

  if (user.role === "admin") {
    dataArray.forEach((data, index) => {
      if (data.name.includes("Generate instore link")) {
        console.log(dataArray.splice(index, 1));
      }
    });
  }

  const { sidebarUserbox } = props;
  return (
    <PerfectScrollbar>
      {sidebarUserbox && <SidebarUserbox />}
      <div className="sidebar-navigation">
        <ul>
          {dataArray?.map((data, key) => {
            return data?.child?.length > 0 ? (
              <li key={key}>
                <a
                  href="#/"
                  onClick={data.toggle}
                  className={clsx(
                    { active: data.open },
                    data.open ? "box-shadow-on-li" : ""
                  )}
                >
                  <span className="sidebar-icon">
                    <data.icon size={30} />
                  </span>
                  <span className="sidebar-item-label">{data.name}</span>
                  <span className="sidebar-icon-indicator">
                    <ChevronRight />
                  </span>
                </a>
                <Collapse className="collapse-div" isOpen={data.open}>
                  <ul>
                    {data?.child?.length > 0 &&
                      data.child.map((e, index) => {
                        return (
                          <li className="kkk" key={index}>
                            <NavLink to={e.path}>
                              <span> {e.name}</span>
                            </NavLink>
                          </li>
                        );
                      })}
                  </ul>
                </Collapse>
              </li>
            ) : (
              <li className="kkk" key={key}>
                <NavLink to={data.path}>
                  <span className="sidebar-icon">
                    <data.icon size={30} />
                  </span>
                  <span className="sidebar-item-label">{data.name}</span>
                  <span className="sidebar-icon-indicator2">
                    <ChevronRight />
                  </span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </PerfectScrollbar>
  );
};

const mapStateToProps = (state) => ({
  sidebarUserbox: state.ThemeOptions.sidebarUserbox,
  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile,
});

const mapDispatchToProps = (dispatch) => ({
  setSidebarToggleMobile: (enable) => dispatch(setSidebarToggleMobile(enable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarMenu);
