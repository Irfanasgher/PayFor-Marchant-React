import config from "../config/config";
import React from "react";
import axios from "axios";
import { Route, Redirect } from "react-router-dom";

class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: null,
    };
  }
  // changestate() {}
  componentDidMount() {
    // debugger;
    // console.log(localStorage.getItem('auth-token'));
    axios
      .get(
        config.BASEURLEMPLOYEE + "/api/employee_info/verify",
        { headers: { "auth-token": localStorage.getItem("auth-token") } },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        // console.log(this.state.isLoggedIn);

        this.setState({ isLoggedIn: true });
        console.log(this.state.isLoggedIn);
      })
      .catch((error) => {                       
        console.log("error prompt", error);
        this.setState({ isLoggedIn: false });
      });
  }

  render() {
    if (this.state.isLoggedin === null) {
      return "loading ......";
    } else {
      if (this.state.isLoggedIn === false) {
        return (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        );
      } else {
        return (
          <Route
            path={this.props.path}
            component={this.props.component}
            exact={this.props.exact}
          />
        );
      }
    }
  }
}

export default PrivateRoute;
