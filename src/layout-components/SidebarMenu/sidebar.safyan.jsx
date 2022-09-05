import React, { useState } from "react";

import clsx from "clsx";

import { Collapse } from "reactstrap";

import PerfectScrollbar from "react-perfect-scrollbar";
import { connect } from "react-redux";

import { NavLink } from "react-router-dom";
import { setSidebarToggleMobile } from "../../reducers/ThemeOptions";

import SidebarUserbox from "../SidebarUserbox";

import { FaTachometerAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";
// import { FaChartLine } from "react-icons/fa";
import { AiFillSchedule } from "react-icons/ai";
import { ChevronRight } from "react-feather";

const SidebarMenu = (props) => {
  let a = JSON.parse(localStorage.getItem("userData"));
  console.log("SidebarMenu", a?.rabc?.role?.permission_roles);

  // route to be extract

  let routes = [];
  a?.rabc?.role?.permission_roles.map((role) => {
    if (role.name_module_permission_role === "All") {
      routes.push({ module: role.name_entity_permission_role, child: true });
    } else {
      var moduleToBeChanged;
      routes.filter((route, index) => {
        if (route.module === role.name_entity_permission_role) {
          moduleToBeChanged = index;
        }
      });

      if (routes[moduleToBeChanged]?.module) {
        routes[moduleToBeChanged]?.child.push(role.name_module_permission_role);
      } else {
        let child = [];
        child.push(role.name_module_permission_role);
        routes.push({ module: role.name_entity_permission_role, child });
      }
    }
  });

  for (let i = 0; i < routes.length; i++) {
    if (routes[i].module === routes[i + 1]?.module && i + 1 <= routes.length) {
      if (routes[i].child === true) {
        routes.splice(i + 1, 1);
      } else {
        routes.splice(i, 1);
      }
    }
  }

  console.log(routes, "Rrr");

  // route to be extract terminated

  const Dashboards = a?.rabc?.role?.permission_roles?.filter((hr) => {
    return hr.name_entity_permission_role === "Dashboards";
  });
  const hrms = a?.rabc?.role?.permission_roles?.filter((hr) => {
    return hr.name_entity_permission_role === "HRMS";
  });

  const hrmsAll = hrms?.filter((hr) => {
    return hr.name_module_permission_role === "All";
  });
  const hrmsOrganization = hrms?.filter((hr) => {
    return hr.name_module_permission_role === "Organization";
  });
  const hrmsEmployees = hrms?.filter((hr) => {
    return hr.name_module_permission_role === "Employees";
  });

  const TimeAttendance = a?.rabc?.role?.permission_roles?.filter((hr) => {
    return hr.name_entity_permission_role === "Time & Attendance";
  });

  const TimeAttendanceAll = TimeAttendance?.filter((hr) => {
    return hr.name_module_permission_role === "All";
  });

  console.log("hrmsAll", hrmsAll);
  const { sidebarUserbox } = props;
  // const { setSidebarToggleMobile, sidebarUserbox } = props;

  // const toggleSidebarMobile = () => setSidebarToggleMobile(false);

  const [dashboardOpen, setDashboardOpen] = useState(false);
  const toggleDashboard = (event) => {
    setDashboardOpen(!dashboardOpen);
    event.preventDefault();
  };

  const [elementsOpen, setElementsOpen] = useState(false);
  const toggleElements = (event) => {
    setElementsOpen(!elementsOpen);
    event.preventDefault();
  };

  const [applicationOpen, setApplicationOpen] = useState(false);
  const toggleApplication = (event) => {
    setApplicationOpen(!applicationOpen);
    event.preventDefault();
  };

  // const [blocksOpen, setBlocksOpen] = useState(false);
  // const toggleBlocks = (event) => {
  //   setBlocksOpen(!blocksOpen);
  //   event.preventDefault();
  // };

  const [widgetsOpen, setWidgetsOpen] = useState(false);
  const toggleWidgets = (event) => {
    setWidgetsOpen(!widgetsOpen);
    event.preventDefault();
  };

  const [uiKitComponentsOpen, setUiKitComponents] = useState(false);
  const toggleUiKitComponents = (event) => {
    setUiKitComponents(!uiKitComponentsOpen);
    event.preventDefault();
  };

  const [employeesOpen, setEmployeesOpen] = useState(false);
  const toggleEmployees = (e) => {
    setEmployeesOpen(!employeesOpen);
    e.preventDefault();
  };
  const [organizationOpen, setOrganizationOpen] = useState(false);
  const toggleOrganization = (event) => {
    setOrganizationOpen(!organizationOpen);
    event.preventDefault();
  };
  // const [payrollInputsOpen, setPayrollInputsOpen] = useState(false);
  // const togglePayrollInputs = (e) => {
  //   setPayrollInputsOpen(!payrollInputsOpen);
  //   e.preventDefault();
  // };

  // const [revisionOpen, setRevisionOpen] = useState(false);
  // const toggleRevision = (e) => {
  //   setRevisionOpen(!revisionOpen);
  //   e.preventDefault();
  // };
  const [accountOpen, setAccountOpen] = useState(false);
  const toggleAccount = (e) => {
    setAccountOpen(!accountOpen);
    e.preventDefault();
  };
  const [companyOpen, setCompanyOpen] = useState(false);
  const toggleCompany = (e) => {
    setCompanyOpen(!companyOpen);
    e.preventDefault();
  };

  const [employeeDirectoryOpen, setEmployeeDirectoryOpen] = useState(false);
  const toggleEmployeeDirectory = (e) => {
    setEmployeeDirectoryOpen(!employeeDirectoryOpen);
    e.preventDefault();
  };
  // const [approvalsOpen, setApprovalsOpen] = useState(false);
  // const toggleApprovals = (e) => {
  //   setApprovalsOpen(!approvalsOpen);
  //   e.preventDefault();
  // };
  // const [notificationOpen, setNotificationOpen] = useState(false);
  // const toggleNotification = (e) => {
  //   setNotificationOpen(!notificationOpen);
  //   e.preventDefault();
  // };
  // const [hiringOpen, setHiringOpen] = useState(false);
  // const toggleHiring = (e) => {
  //   setHiringOpen(!hiringOpen);
  //   e.preventDefault();
  // };

  return (
    <>
      <PerfectScrollbar>
        {sidebarUserbox && <SidebarUserbox />}
        <div className="sidebar-navigation">
          {/* <div className="sidebar-header">
            <span>Navigation menu</span>
          </div> */}
          <ul>
            {Dashboards.length > 0 && (
              <li>
                <a
                  href="#/"
                  onClick={toggleDashboard}
                  className={clsx({ active: dashboardOpen })}
                >
                  <span className="sidebar-icon">
                    <FaTachometerAlt size={30} />
                  </span>
                  <span className="sidebar-item-label">Dashboards</span>
                  <span className="sidebar-icon-indicator">
                    <ChevronRight />
                  </span>
                </a>
                <Collapse isOpen={dashboardOpen}>
                  <ul>
                    <li>
                      <NavLink to="/dashboard/Overview">Overview</NavLink>
                    </li>
                  </ul>
                </Collapse>
              </li>
            )}
            {hrmsAll?.length > 0 ? (
              <li>
                <a
                  href="#/"
                  onClick={toggleWidgets}
                  className={clsx({ active: widgetsOpen })}
                >
                  <span className="sidebar-icon">
                    <FaUsers size={30} />
                  </span>
                  <span className="sidebar-item-label">HRMS</span>
                  <span className="sidebar-icon-indicator">
                    <ChevronRight />
                  </span>
                </a>
                <Collapse isOpen={widgetsOpen}>
                  <ul>
                    {/* <li>
                    <NavLink to="/dashboard/HRMSOverview">Overview</NavLink>
                  </li> */}
                    <li>
                      <a
                        href="#/"
                        onClick={toggleOrganization}
                        className={clsx(
                          { active: organizationOpen },
                          organizationOpen ? "box-shadow-on-li" : ""
                        )}
                      >
                        <span
                          className={
                            "sidebar-item-label sidebar-item-label-by-haseeb"
                          }
                        >
                          Organization
                        </span>
                        <span className="sidebar-icon-indicator">
                          <ChevronRight />
                        </span>
                      </a>
                      <Collapse
                        className="collapse-div"
                        isOpen={organizationOpen}
                      >
                        <ul>
                          <li className="kkk">
                            <NavLink to="/dashboard/OrganizationList">
                              <span> Organization List</span>
                            </NavLink>
                          </li>
                          {/* <li className="kkk">
                          <NavLink to="/dashboard/Company">
                            <span> Org Chart</span>
                          </NavLink>
                        </li>
                        <li className="kkk">
                          <NavLink to="/dashboard/OrganizationPolicy">
                            <span>Org Policies</span>
                          </NavLink>
                        </li>
                        <li className="kkk">
                          <NavLink to="/dashboard/OrganizationManagement">
                            <span> Management</span>
                          </NavLink>
                        </li>
                        <li className="kkk">
                          <NavLink to="/dashboard/DigitalSignature">
                            <span> Digital Signature</span>
                          </NavLink>
                        </li> */}
                          {/* <li className="kkk">
                          <NavLink to="/dashboard/Setting">
                            <span>Setting</span>
                          </NavLink>
                        </li> */}
                        </ul>
                      </Collapse>
                    </li>
                    <li>
                      <a
                        href="#/"
                        onClick={toggleEmployees}
                        className={clsx(
                          { active: employeesOpen },
                          employeesOpen ? "box-shadow-on-li" : ""
                        )}
                      >
                        <span
                          className={
                            "sidebar-item-label sidebar-item-label-by-haseeb"
                          }
                        >
                          Employees
                        </span>
                        <span className="sidebar-icon-indicator">
                          <ChevronRight />
                        </span>
                      </a>
                      <Collapse className="collapse-div" isOpen={employeesOpen}>
                        <ul>
                          <li className="kkk">
                            <NavLink to="/dashboard/Overview">
                              <span> Overview</span>
                            </NavLink>
                          </li>
                          <li className="kkk">
                            <NavLink to="/dashboard/EmployeeDirectory">
                              <span>Employee Directory</span>
                            </NavLink>
                          </li>
                          {/* <li className="kkk">
                          <NavLink to="/dashboard/Internee">
                            <span> Internee</span>
                          </NavLink>
                        </li> */}
                        </ul>
                      </Collapse>
                    </li>
                  </ul>
                </Collapse>
              </li>
            ) : (
              hrms?.length > 0 && (
                <li>
                  <a
                    href="#/"
                    onClick={toggleWidgets}
                    className={clsx({ active: widgetsOpen })}
                  >
                    <span className="sidebar-icon">
                      <FaUsers size={30} />
                    </span>
                    <span className="sidebar-item-label">HRMS</span>
                    <span className="sidebar-icon-indicator">
                      <ChevronRight />
                    </span>
                  </a>
                  <Collapse isOpen={widgetsOpen}>
                    <ul>
                      {hrmsOrganization?.length > 0 && (
                        <li>
                          <a
                            href="#/"
                            onClick={toggleOrganization}
                            className={clsx(
                              { active: organizationOpen },
                              organizationOpen ? "box-shadow-on-li" : ""
                            )}
                          >
                            <span
                              className={
                                "sidebar-item-label sidebar-item-label-by-haseeb"
                              }
                            >
                              Organization
                            </span>
                            <span className="sidebar-icon-indicator">
                              <ChevronRight />
                            </span>
                          </a>
                          <Collapse
                            className="collapse-div"
                            isOpen={organizationOpen}
                          >
                            <ul>
                              <li className="kkk">
                                <NavLink to="/dashboard/OrganizationList">
                                  <span> Organization List</span>
                                </NavLink>
                              </li>
                            </ul>
                          </Collapse>
                        </li>
                      )}
                      {hrmsEmployees?.length > 0 && (
                        <li>
                          <a
                            href="#/"
                            onClick={toggleEmployees}
                            className={clsx(
                              { active: employeesOpen },
                              employeesOpen ? "box-shadow-on-li" : ""
                            )}
                          >
                            <span
                              className={
                                "sidebar-item-label sidebar-item-label-by-haseeb"
                              }
                            >
                              Employees
                            </span>
                            <span className="sidebar-icon-indicator">
                              <ChevronRight />
                            </span>
                          </a>
                          <Collapse
                            className="collapse-div"
                            isOpen={employeesOpen}
                          >
                            <ul>
                              <li className="kkk">
                                <NavLink to="/dashboard/Overview">
                                  <span> Overview</span>
                                </NavLink>
                              </li>
                              <li className="kkk">
                                <NavLink to="/dashboard/EmployeeDirectory">
                                  <span>Employee Directory</span>
                                </NavLink>
                              </li>
                            </ul>
                          </Collapse>
                        </li>
                      )}
                    </ul>
                  </Collapse>
                </li>
              )
            )}
            <li>
              <a
                href="#/"
                onClick={toggleApplication}
                className={clsx({ active: applicationOpen })}
              >
                <span className="sidebar-icon">
                  <AiFillSchedule />
                </span>
                <span className="sidebar-item-label">Time & Attendance</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRight />
                </span>
              </a>
              <Collapse isOpen={applicationOpen}>
                <ul>
                  <li className="kkk">
                    <NavLink to="/dashboard/Overview">
                      <span> Overview</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/Attendance">
                      <span className="sidebar-item-label">Attendance</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/LeaveRecord">
                      <span className="sidebar-item-label">Leave Record</span>
                    </NavLink>
                  </li>
                  <li>
                    <a href="#/" rel="noopener noreferrer">
                      <span className="sidebar-item-label">Leave Calender</span>
                    </a>
                  </li>
                  {/* <li>
                    <NavLink to="/dashboard/ShiftRoster">
                      <span className="sidebar-item-label">Shift Roster</span>
                    </NavLink>
                  </li> */}
                </ul>
              </Collapse>
            </li>
          </ul>
          <ul>
            <li>
              <a
                href="#/"
                onClick={toggleElements}
                className={clsx({ active: elementsOpen })}
              >
                <span className="sidebar-icon">
                  <FaHandHoldingUsd />
                </span>
                <span className="sidebar-item-label">Payroll</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRight />
                </span>
              </a>
              <Collapse isOpen={elementsOpen}>
                <ul>
                  {/* <li>
                    <a
                      href="#/"
                      // onClick={toggleSidebarMobile}
                      // to="/ElementsAvatars"
                    >
                      Overview
                    </a>
                  </li> */}
                  <li className="kkk">
                    <NavLink to="/dashboard/FinalStatement">
                      <span>Final Statement</span>
                    </NavLink>
                  </li>
                  {/* <li>
                    <a
                      href="#/"
                      onClick={togglePayrollInputs}
                      className={clsx(
                        { active: payrollInputsOpen },
                        payrollInputsOpen ? "box-shadow-on-li" : ""
                      )}
                    >
                      <span
                        className={
                          "sidebar-item-label sidebar-item-label-by-haseeb"
                        }
                      >
                        Payroll Inputs
                      </span>
                      <span className="sidebar-icon-indicator">
                        <ChevronRight />
                      </span>
                    </a>
                    <Collapse
                      className="collapse-div"
                      isOpen={payrollInputsOpen}
                    >
                      <ul>
                        <li className="kkk">
                          <NavLink to="/dashboard/Salary">
                            <span> Salary</span>
                          </NavLink>
                        </li>
                        <li className="kkk">
                          <NavLink to="/dashboard/Reimbursement">
                            <span>Reimbursement</span>
                          </NavLink>
                        </li>
                        <li className="kkk">
                          <NavLink to="/dashboard/IncomeTax">
                            <span>Income Tax</span>
                          </NavLink>
                        </li>
                        <li className="kkk">
                          <NavLink to="/dashboard/FinalStatement">
                            <span>Final Statement</span>
                          </NavLink>
                        </li>
                        <li className="kkk">
                          <NavLink to="/dashboard/Overtime">
                            <span>Overtime</span>
                          </NavLink>
                        </li>
                      </ul>
                    </Collapse>
                  </li> */}
                  {/* <li>
                    <a
                      href="#/"
                      onClick={toggleRevision}
                      className={clsx(
                        { active: revisionOpen },
                        revisionOpen ? "box-shadow-on-li" : ""
                      )}
                    >
                      <span
                        className={
                          "sidebar-item-label sidebar-item-label-by-haseeb"
                        }
                      >
                        Revision
                      </span>
                      <span className="sidebar-icon-indicator">
                        <ChevronRight />
                      </span>
                    </a>
                    <Collapse className="collapse-div" isOpen={revisionOpen}>
                      <ul>
                        <li className="kkk">
                          <NavLink
                            onClick={() => {
                              toggleSidebarMobile();
                            }}
                            to="/dashboard/RevisionHistory"
                          >
                            <span> Revision History</span>
                          </NavLink>
                        </li>
                        <li className="kkk">
                          <NavLink
                            onClick={() => {
                              toggleSidebarMobile();
                            }}
                            to="/dashboard/Reimbursement"
                          >
                            <span>Revision Analysis</span>
                          </NavLink>
                        </li>
                      </ul>
                    </Collapse>
                  </li> */}
                  {/* <li>
                    <NavLink to="/dashboard/PayrollProcess">
                      <span
                        className={
                          "sidebar-item-label sidebar-item-label-by-haseeb"
                        }
                      >
                        Payroll Process
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/Payout">
                      <span
                        className={
                          "sidebar-item-label sidebar-item-label-by-haseeb"
                        }
                      >
                        Payout
                      </span>
                    </NavLink>
                  </li> */}
                </ul>
              </Collapse>
            </li>
            {/* <li>
              <a
                href="#/"
                onClick={toggleBlocks}
                className={clsx({ active: blocksOpen })}
              >
                <span className="sidebar-icon">
                  <FaChartLine />
                </span>
                <span className="sidebar-item-label">Reporting</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRight />
                </span>
              </a>
              <Collapse isOpen={blocksOpen}>
                <ul>
                  <li>
                    <NavLink to="/BlocksChartsLarge">Charts Large</NavLink>
                  </li>
                  <li>
                    <NavLink to="/BlocksChartsSmall">Charts Small</NavLink>
                  </li>
                </ul>
              </Collapse>
            </li> */}
            <li>
              <a
                href="#/"
                onClick={toggleUiKitComponents}
                className={clsx({ active: uiKitComponentsOpen })}
              >
                <span className="sidebar-icon">
                  <FaUserCog />
                </span>
                <span className="sidebar-item-label">Admin Controls</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRight />
                </span>
              </a>
              <Collapse isOpen={uiKitComponentsOpen}>
                <ul>
                  <li>
                    <a
                      href="#/"
                      onClick={toggleAccount}
                      className={clsx(
                        { active: accountOpen },
                        accountOpen ? "box-shadow-on-li" : ""
                      )}
                    >
                      <span
                        className={
                          "sidebar-item-label sidebar-item-label-by-haseeb"
                        }
                      >
                        Account
                      </span>
                      <span className="sidebar-icon-indicator">
                        <ChevronRight />
                      </span>
                    </a>
                    <Collapse className="collapse-div" isOpen={accountOpen}>
                      <ul>
                        <li className="kkk">
                          <NavLink to="/dashboard/AccountInfo">
                            <span> Account Info</span>
                          </NavLink>
                        </li>
                        <li className="kkk">
                          <NavLink to="/dashboard/GeneralSetting">
                            <span>General Setting</span>
                          </NavLink>
                        </li>
                        <li className="kkk">
                          <NavLink to="/dashboard/CalendarFeed">
                            <span>I Calendar Feed</span>
                          </NavLink>
                        </li>
                        <li className="kkk">
                          <NavLink to="/dashboard/EmailConfiguration">
                            <span>Email Configuration</span>
                          </NavLink>
                        </li>
                        <li className="kkk">
                          <NavLink to="/dashboard/SMSConfiguration">
                            <span>SMS Configuration</span>
                          </NavLink>
                        </li>
                      </ul>
                    </Collapse>
                  </li>
                  <li>
                    <a
                      href="#/"
                      onClick={toggleCompany}
                      className={clsx(
                        { active: companyOpen },
                        companyOpen ? "box-shadow-on-li" : ""
                      )}
                    >
                      <span
                        className={
                          "sidebar-item-label sidebar-item-label-by-haseeb"
                        }
                      >
                        Organization Setting
                      </span>
                      <span className="sidebar-icon-indicator">
                        <ChevronRight />
                      </span>
                    </a>
                    <Collapse className="collapse-div" isOpen={companyOpen}>
                      <ul>
                        <li className="kkk">
                          <NavLink to="/dashboard/OrganizationInfo">
                            <span> Organization Info</span>
                          </NavLink>
                        </li>
                        <li className="kkk">
                          <NavLink to="/dashboard/Designations">
                            <span>Designations</span>
                          </NavLink>
                        </li>
                        <li className="kkk">
                          <NavLink to="/dashboard/Departments">
                            <span>Departments</span>
                          </NavLink>
                        </li>
                        <li className="kkk">
                          <NavLink to="/dashboard/Policies">
                            <span>Policies</span>
                          </NavLink>
                        </li>
                        {/* <li className="kkk">
                          <NavLink to="/dashboard/Grades">
                            <span>Grades</span>
                          </NavLink>
                        </li> */}
                        {/* <li className="kkk">
                          <NavLink to="/dashboard/Policy">
                            <span>Policy</span>
                          </NavLink>
                        </li> */}
                        <li className="kkk">
                          <NavLink to="/dashboard/AttendanceSystem">
                            <span>Attendance</span>
                          </NavLink>
                        </li>
                        <li className="kkk">
                          <NavLink to="/dashboard/Assets">
                            <span>Assets</span>
                          </NavLink>
                        </li>
                        <li className="kkk">
                          <NavLink to="/dashboard/AssetCategory">
                            <span>Asset Category</span>
                          </NavLink>
                        </li>
                        <li className="kkk">
                          <NavLink to="/dashboard/LeaveBank">
                            <span>Leave Bank</span>
                          </NavLink>
                        </li>
                        <li className="kkk">
                          <NavLink to="/dashboard/LeaveType">
                            <span>Leave Type</span>
                          </NavLink>
                        </li>
                        <li className="kkk">
                          <NavLink to="/dashboard/AccessLevelPage">
                            <span>Access Level</span>
                          </NavLink>
                        </li>
                      </ul>
                    </Collapse>
                  </li>
                  <li>
                    <NavLink to="/dashboard/Organization">
                      <span>Add Org/Company</span>
                      {/* <span className="sidebar-icon-indicator">
                        <ChevronRight />
                      </span> */}
                    </NavLink>
                  </li>

                  <li>
                    <a
                      href="#/"
                      onClick={toggleEmployeeDirectory}
                      className={clsx(
                        { active: employeeDirectoryOpen },
                        employeeDirectoryOpen ? "box-shadow-on-li" : ""
                      )}
                    >
                      <span
                        className={
                          "sidebar-item-label sidebar-item-label-by-haseeb"
                        }
                      >
                        Employee
                      </span>
                      <span className="sidebar-icon-indicator">
                        <ChevronRight />
                      </span>
                    </a>
                    <Collapse
                      className="collapse-div"
                      isOpen={employeeDirectoryOpen}
                    >
                      <ul>
                        {/* <li className="kkk">
                          <NavLink to="/dashboard/EmployeeFields">
                            <span> Employee Fields</span>
                          </NavLink>
                        </li> */}
                        <li className="kkk">
                          <NavLink to="/dashboard/EmployeeDegree">
                            <span>Degree</span>
                          </NavLink>
                        </li>
                        {/* <li className="kkk">
                          <NavLink to="/dashboard/EmployeeDepartments">
                            <span>Departments</span>
                          </NavLink>
                        </li> */}
                        <li className="kkk">
                          <NavLink to="/dashboard/EmergencyContact">
                            <span>Emergency Contact</span>
                          </NavLink>
                        </li>
                        <li className="kkk">
                          <NavLink to="/dashboard/EmployeeStatuses">
                            <span>Employee Statuses</span>
                          </NavLink>
                        </li>
                        {/* <li className="kkk">
                          <NavLink to="/dashboard/JobTitles">
                            <span>Job Titles</span>
                          </NavLink>
                        </li>
                        <li className="kkk">
                          <NavLink to="/dashboard/Compensation">
                            <span>Compensation Change</span>
                          </NavLink>
                        </li>
                        <li className="kkk">
                          <NavLink to="/dashboard/SecondaryLanguage">
                            <span>Secondary Language</span>
                          </NavLink>
                        </li>
                        <li className="kkk">
                          <NavLink to="/dashboard/JobHistory">
                            <span>Job History Fields</span>
                          </NavLink>
                        </li> */}
                      </ul>
                    </Collapse>
                  </li>
                  {/* <li>
                    <a
                      href="#/"
                      onClick={toggleApprovals}
                      className={clsx(
                        { active: approvalsOpen },
                        approvalsOpen ? "box-shadow-on-li" : ""
                      )}
                    >
                      <span
                        className={
                          "sidebar-item-label sidebar-item-label-by-haseeb"
                        }
                      >
                        Approvals
                      </span>
                      <span className="sidebar-icon-indicator">
                        <ChevronRight />
                      </span>
                    </a>
                    <Collapse className="collapse-div" isOpen={approvalsOpen}>
                      <ul>
                        <li className="kkk">
                          <NavLink to="/dashboard/InformationUpdates">
                            <span>Information Updates</span>
                          </NavLink>
                        </li>
                        <li className="kkk">
                          <NavLink to="/dashboard/EmployeeDegree">
                            <span>Time Off Requests</span>
                          </NavLink>
                        </li>
                        <li className="kkk">
                          <NavLink to="/dashboard/Compensations">
                            <span>Compensations</span>
                          </NavLink>
                        </li>
                        <li className="kkk">
                          <NavLink to="/dashboard/EmployeeStatus">
                            <span>Employee Status</span>
                          </NavLink>
                        </li>
                        <li className="kkk">
                          <NavLink to="/dashboard/JobInformation">
                            <span>Job Information</span>
                          </NavLink>
                        </li>
                        <li className="kkk">
                          <NavLink to="/dashboard/JobTitles">
                            <span>Promotion</span>
                          </NavLink>
                        </li>
                        <li className="kkk">
                          <NavLink to="/dashboard/AssetRequest">
                            <span>Asset Request</span>
                          </NavLink>
                        </li>
                      </ul>
                    </Collapse>
                  </li>
                  <li>
                    <a
                      href="#/"
                      onClick={toggleNotification}
                      className={clsx(
                        { active: notificationOpen },
                        notificationOpen ? "box-shadow-on-li" : ""
                      )}
                    >
                      <span
                        className={
                          "sidebar-item-label sidebar-item-label-by-haseeb"
                        }
                      >
                        Notification Alert
                      </span>
                      <span className="sidebar-icon-indicator">
                        <ChevronRight />
                      </span>
                    </a>
                    <Collapse
                      className="collapse-div"
                      isOpen={notificationOpen}
                    >
                      <ul>
                        <li className="kkk">
                          <NavLink to="/dashboard/EmailAlert">
                            <span>Email Alert</span>
                          </NavLink>
                        </li>
                        <li className="kkk">
                          <NavLink to="/dashboard/SMSAlert">
                            <span>SMS Alert</span>
                          </NavLink>
                        </li>
                      </ul>
                    </Collapse>
                  </li>
                  <li>
                    <a
                      href="#/"
                      onClick={toggleHiring}
                      className={clsx(
                        { active: hiringOpen },
                        hiringOpen ? "box-shadow-on-li" : ""
                      )}
                    >
                      <span
                        className={
                          "sidebar-item-label sidebar-item-label-by-haseeb"
                        }
                      >
                        Hiring
                      </span>
                      <span className="sidebar-icon-indicator">
                        <ChevronRight />
                      </span>
                    </a>
                    <Collapse className="collapse-div" isOpen={hiringOpen}>
                      <ul>
                        <li className="kkk">
                          <NavLink to="/dashboard/CandidateStatuses">
                            <span>Candidate Statuses</span>
                          </NavLink>
                        </li>
                        <li className="kkk">
                          <NavLink to="/dashboard/OfferTemplates">
                            <span>Offer Templates</span>
                          </NavLink>
                        </li>
                      </ul>
                    </Collapse>
                  </li>
                  <li>
                    <NavLink to="/dashboard/Offboarding">
                      <span>Off Boarding</span>
                      <span className="sidebar-icon-indicator">
                        <ChevronRight />
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/Onboarding">
                      <span>On Boarding</span>
                      <span className="sidebar-icon-indicator">
                        <ChevronRight />
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/TimeOff">
                      <span>Time Off</span>
                      <span className="sidebar-icon-indicator">
                        <ChevronRight />
                      </span>
                    </NavLink>
                  </li> */}
                </ul>
              </Collapse>
            </li>
          </ul>
        </div>
      </PerfectScrollbar>
    </>
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
