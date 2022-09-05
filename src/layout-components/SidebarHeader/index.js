import React from "react";

import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import {
  setSidebarToggle,
  setSidebarToggleMobile,
} from "../../reducers/ThemeOptions";

const SidebarHeader = () => {
  return (
    <>
      <div className="app-sidebar--header d-flex align-items-center justify-content-center">
        <NavLink
          to="/"
          // title="Bamburgh React Admin Dashboard with Reactstrap PRO"
          className="app-sidebar-logo "
        >
          <img
            alt="Payfors Logo"
            src="/images/payfor.png"
            style={{ height: "35px" }}
          />
          {/* <h5>HRMS</h5> */}
        </NavLink>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  sidebarToggle: state.ThemeOptions.sidebarToggle,
  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile,
});

const mapDispatchToProps = (dispatch) => ({
  setSidebarToggle: (enable) => dispatch(setSidebarToggle(enable)),
  setSidebarToggleMobile: (enable) => dispatch(setSidebarToggleMobile(enable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarHeader);
