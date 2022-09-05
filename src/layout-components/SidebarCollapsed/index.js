import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { UncontrolledTooltip } from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import { connect } from "react-redux";
import { setSidebarToggleMobile } from "../../reducers/ThemeOptions";
import { NavLink } from "react-router-dom";
import "./index.css";
import projectLogo from "../../assets/images/react.svg";
import { FaTachometerAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { AiFillSchedule } from "react-icons/ai";

const SidebarCollapsed = (props) => {
  const toggleSidebarMobile = () => {
    setSidebarToggleMobile(!sidebarToggleMobile);
  };

  const {
    sidebarShadow,
    sidebarStyle,
    sidebarToggleMobile,
    setSidebarToggleMobile,
  } = props;

  return (
    <>
      <div
        className={clsx(
          "app-sidebar app-sidebar--collapsed app-sidebar--mini",
          sidebarStyle,
          { "app-sidebar--shadow": sidebarShadow }
        )}
      >
        <div className="app-sidebar--header">
          <div className="app-sidebar-logo">
            <Link
              to="/DashboardAnalytics"
              title="Bamburgh React Admin Dashboard with Reactstrap PRO"
              className="app-sidebar-logo"
            >
              <div className="app-sidebar-logo--icon">
                <img
                  alt="Bamburgh React Admin Dashboard with Reactstrap PRO"
                  src={projectLogo}
                />
              </div>
            </Link>
          </div>
        </div>

        <div className="app-sidebar--content">
          <PerfectScrollbar>
            <ul className="mt-2 sidebar-menu-collapsed">
              <li>
                <NavLink
                  onClick={toggleSidebarMobile}
                  activeClassName="active"
                  to="/dashboard"
                  id="CollapsedSidebarTooltip123"
                  className="doWhite"
                >
                  {/* <span> */}
                  {/* <Settings/> */}
                  <FaTachometerAlt size={30} />
                  {/* </span> */}
                </NavLink>
                <UncontrolledTooltip
                  popperClassName="tooltip-secondary text-nowrap"
                  placement="right"
                  target="CollapsedSidebarTooltip123"
                  container=".app-sidebar--content"
                  boundariesElement="window"
                >
                  Chat
                </UncontrolledTooltip>
              </li>
              <li>
                <NavLink
                  onClick={toggleSidebarMobile}
                  activeClassName="active"
                  to="/PageCalendar"
                  id="CollapsedSidebarTooltip124"
                  className="doWhite"
                >
                  <span>
                    {/* <CloudDrizzle /> */}
                    <FaUsers size={30} />
                  </span>
                </NavLink>
                <UncontrolledTooltip
                  popperClassName="tooltip-secondary text-nowrap"
                  placement="right"
                  target="CollapsedSidebarTooltip124"
                  container=".app-sidebar--content"
                  boundariesElement="window"
                >
                  Calendar
                </UncontrolledTooltip>
              </li>
              <li>
                <NavLink
                  onClick={toggleSidebarMobile}
                  activeClassName="active"
                  to="/PageFileManager"
                  id="CollapsedSidebarTooltip125"
                  className="doWhite"
                >
                  <span>
                    {/* <Search /> */}
                    <AiFillSchedule size={30} />
                  </span>
                </NavLink>
                <UncontrolledTooltip
                  popperClassName="tooltip-secondary text-nowrap"
                  placement="right"
                  target="CollapsedSidebarTooltip125"
                  container=".app-sidebar--content"
                  boundariesElement="window"
                >
                  File Manager
                </UncontrolledTooltip>
              </li>
              <li>
                <NavLink
                  onClick={toggleSidebarMobile}
                  activeClassName="active"
                  to="/PageProjects"
                  id="CollapsedSidebarTooltip126"
                  className="doWhite"
                >
                  <span>
                    {/* <Grid /> */}
                    <FaHandHoldingUsd size={30} />
                  </span>
                </NavLink>
                <UncontrolledTooltip
                  popperClassName="tooltip-secondary text-nowrap"
                  placement="right"
                  target="CollapsedSidebarTooltip126"
                  container=".app-sidebar--content"
                  boundariesElement="window"
                >
                  Projects
                </UncontrolledTooltip>
              </li>
              <li>
                <NavLink
                  onClick={toggleSidebarMobile}
                  activeClassName="active"
                  to="/PageProfile"
                  id="CollapsedSidebarTooltip127"
                  className="doWhite"
                >
                  <span>
                    {/* <Users /> */}
                    <FaChartLine size={30} />
                  </span>
                </NavLink>
                <UncontrolledTooltip
                  popperClassName="tooltip-secondary text-nowrap"
                  placement="right"
                  target="CollapsedSidebarTooltip127"
                  container=".app-sidebar--content"
                  boundariesElement="window"
                >
                  Profile
                </UncontrolledTooltip>
              </li>
              <li>
                <NavLink
                  onClick={toggleSidebarMobile}
                  activeClassName="active"
                  to="/DashboardMonitoring"
                  id="CollapsedSidebarTooltip128"
                  className="doWhite"
                >
                  <span>
                    {/* <LifeBuoy /> */}
                    <FaUserCog size={30} />
                  </span>
                </NavLink>
                <UncontrolledTooltip
                  popperClassName="tooltip-secondary text-nowrap"
                  placement="right"
                  target="CollapsedSidebarTooltip128"
                  container=".app-sidebar--content"
                  boundariesElement="window"
                >
                  Monitoring Dashboard
                </UncontrolledTooltip>
              </li>
            </ul>
            {/* <div className="text-center mb-2">
              <Button
                tag={Link}
                color="warning"
                className="m-1 p-0 d-inline-block shadow-none text-center font-size-lg d-40 rounded"
                to="/DashboardAnalytics"
                id="CollapsedSidebarTooltip131">
                <FontAwesomeIcon icon={['fas', 'arrow-left']} />
              </Button>
              <UncontrolledTooltip
                popperClassName="tooltip-secondary text-nowrap"
                placement="right"
                target="CollapsedSidebarTooltip131"
                container=".app-sidebar--content"
                boundariesElement="window">
                Back to dashboard
              </UncontrolledTooltip>
            </div> */}
          </PerfectScrollbar>
        </div>
      </div>
      <div
        onClick={toggleSidebarMobile}
        className={clsx("app-sidebar-overlay", {
          "is-active": sidebarToggleMobile,
        })}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  sidebarShadow: state.ThemeOptions.sidebarShadow,
  sidebarStyle: state.ThemeOptions.sidebarStyle,
  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile,
});

const mapDispatchToProps = (dispatch) => ({
  setSidebarToggleMobile: (enable) => dispatch(setSidebarToggleMobile(enable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarCollapsed);
