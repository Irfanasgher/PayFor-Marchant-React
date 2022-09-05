import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Badge,
  ListGroup,
  ListGroupItem,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { NavLink as NavLinkStrap } from "reactstrap";
import { useSelector } from "react-redux";
// import avatar4 from "../../assets/images/avatars/avatar4.jpg";

const HeaderUserbox = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  // let a = JSON.parse(localStorage.getItem("userData"));

  const { user } = useSelector((state) => state.LoginReducer);
  // console.log("HeaderUserbox", user);

  const handleLogout = () => {
    dispatch({ type: "RESET_STORE" });
    history.push("/");
  };
  return (
    <>
      <UncontrolledDropdown
        className="position-relative ml-2"
        style={{ marginRight: "20px" }}
      >
        <DropdownToggle
          color="link"
          className="p-0 text-left d-flex btn-transition-none align-items-center"
        >
          <div className="d-block p-0 avatar-icon-wrapper">
            <Badge color="success" className="badge-circle p-top-a">
              Online
            </Badge>
            <div className="avatar-icon rounded">
              <img src={user?.store_id?.logo} alt="..." />
            </div>
          </div>
          {/* <div className="d-none d-md-block pl-2"> */}
          <div className="pl-2">
            <div
              className="font-weight-bold"
              style={{ textTransform: "capitalize" }}
            >
              {user?.name}
            </div>
            <span
              className="text-black-50"
              style={{ textTransform: "capitalize" }}
            >
              {user?.role}
            </span>
          </div>
          <span className="pl-1 pl-xl-3">
            <FontAwesomeIcon
              icon={["fas", "angle-down"]}
              className="opacity-5"
            />
          </span>
        </DropdownToggle>
        <DropdownMenu
          right
          className="dropdown-menu-lg overflow-hidden p-0"
          style={{ borderRadius: "20px" }}
        >
          <ListGroup flush className="text-left bg-transparent">
            <ListGroupItem className="rounded-top">
              <Nav pills className="nav-neutral-primary flex-column">
                <NavItem className="nav-header d-flex text-primary pt-1 pb-2 font-weight-bold align-items-center">
                  <div>Profile options</div>
                </NavItem>
                <NavItem>
                  <NavLinkStrap href="#/" onClick={handleLogout}>
                    Logout
                  </NavLinkStrap>
                </NavItem>
                {/* <NavItem>
                  <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                    Profile settings
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                    Active tasks
                  </NavLinkStrap>
                </NavItem> */}
              </Nav>
            </ListGroupItem>
          </ListGroup>
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  );
};

export default HeaderUserbox;
