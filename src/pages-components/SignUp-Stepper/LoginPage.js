import React, { useState, useEffect } from "react";
import logo from "./assets/images/payforLogo.png";
import { FaRegEnvelope, FaAngleDoubleLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { toast, Slide } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { VscKey } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { loginAction } from "../../actions";
import "./assets/css/style.css";
function LoginForPayfor() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [forgetPassword, setForgetPassword] = useState(false);
  const [email, setEmail] = useState("safyaneis@gmail.com");
  const [password, setPassword] = useState("156943000");
  const [loginProcess, setLoginProcess] = useState(false);

  const { user } = useSelector((state) => state.LoginReducer);

  useEffect(() => {
    if (user.access_token) {
      history.push("/dashboard");
    }
  }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginProcess(true);

    console.log("login", email, password);
    if (email.length === 0 || password.length === 0) {
      toast.error("Email and password required", {
        containerId: "B",
        transition: Slide,
      });
      return;
    }

    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.toLowerCase().match(regex)) {
      toast.error("Email is not vaild", {
        containerId: "B",
        transition: Slide,
      });
      return;
    }
    if (password.length < 8) {
      toast.error("Password is to short", {
        containerId: "B",
        transition: Slide,
      });
      return;
    }
    await dispatch(loginAction({ email, password }));
    setLoginProcess(false);
  };
  return (
    <div>
      <div className="merchant-signin-wrapper">
        {/*  Merchant Sign In Header  */}
        <div data-scroll-section>
          <header className="merchant-signin-header">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <a className="navbar-brand logo" href="index.html">
                    <img className="img-fluid" src={logo} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </header>
        </div>
        {/*  End Of Merchant Sign In Header  */}
        {
          //merchant signIn form start}
        }
        <section className="merchant-signin-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-lg-4 m-auto text-center">
                <div className="merch-login-box-wrap">
                  {forgetPassword === false && (
                    <div className="merch-login-box">
                      <form className="merch-signin-form">
                        <h2>Login</h2>
                        <div className="form-group">
                          <FaRegEnvelope className="icon" />
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <VscKey className="icon" />
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        {/* <a
                          onClick={() => setForgetPassword(!forgetPassword)}
                          className="forgot-pass"
                          href="#/"
                        >
                          Forgot Your Password?
                        </a> */}
                        <a
                          className="mr-signin-btn"
                          type="submit"
                          onClick={(e) => handleLogin(e)}
                          disabled={loginProcess ? true : false}
                          style={{ pointerEvents: loginProcess ? "none" : "" }}
                          href="#/"
                        >
                          {loginProcess ? "Processing" : "Log In"}
                        </a>
                        <p>
                          By logging in, you agree to accept our{" "}
                          <a href="#/">Privacy Notice</a>
                        </p>

                        <p>
                          Don't have an account{" "}
                          <Link to="/SignUp">Sign Up</Link>
                        </p>
                      </form>
                    </div>
                  )}
                  {forgetPassword && (
                    <div className="merch-forgot-box">
                      <form className="merch-signin-form">
                        <h2>Forgot Password?</h2>
                        <p>
                          To reset your password, please enter the email address{" "}
                          {/* <br /> */}
                          you registered with
                        </p>
                        <div className="form-group mt-4">
                          <FaRegEnvelope className="icon" />
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Your Payfor registered email address"
                          />
                        </div>
                        <a className="mr-signin-btn" type="submit" href="#/">
                          Send instructions
                        </a>
                        <a
                          href="#/"
                          className="back-to-login"
                          onClick={() => setForgetPassword(!forgetPassword)}
                        >
                          <FaAngleDoubleLeft className="icon mr-2" /> Back to
                          Login
                        </a>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        {
          //merchant signIn form end
        }
      </div>
    </div>
  );
}
// export default compose(withRouter, connect(null, {}))(Login);
export default LoginForPayfor;
