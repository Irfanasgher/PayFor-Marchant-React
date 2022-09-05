import React, { Component } from "react";
// import axios from "axios";
import toast from "react-toast-notification";
import { connect } from "react-redux";
import "./assets/css/style.css";
import logo from "./assets/images/payforLogo.png";

import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import clsx from "clsx";
import { AiOutlineArrowRight } from "react-icons/ai";

import Loki from "react-loki";
import { Zoom } from "react-toastify";
import { store } from "../../store";

import { signupAction } from "../../actions";

class Login extends Component {
  state = {
    user: {
      // // step1 start
      CompanyName: "", //
      CompanyregistrationNumber: "", //
      CompanyExpectedSale: "", //
      CompanyWebsite: "", //
      CompanyEmail: "", //
      CompanyAddress: "", //
      CompanyCity: "",
      checkbox: "", //
      // instoreCheckbox:"",
      // bothCheckbox:"",
      CompanyUploadLogo: "", //files

      // // step1 end

      // // step2 start
      contactName: "", //
      ContactEmail: "", //merchantemail
      InitialCodeOfContactNumber: "",
      ContactPhoneNumber: "", //
      ContactCity: "",
      ContactAddress: "", //merchant address
      //step2 end

      //step3 start
      bankAccountName: "", //
      bankAccountNumber: "", //
      bankName: "", //
      branchCode: "", //
      Currency: "", //
      bankStatement: "", //files
      termAndConditions: "",
      permissions: "",
      consent: "",
      //step3 end
    },
  };
  constructor(props) {
    super(props);
    this.props = props;
  }
  _mergeValues(values) {
    console.log("valuessssssss", values);
    this.setState({
      user: {
        ...this.state.user,
        ...values,
      },
    });
  }

  _onFinish = (values) => {
    this.setState({
      user: {
        ...this.state.user,
        ...values,
      },
    });

    //Api code

    const validNumber = this.state.user.ContactPhoneNumber.replace("0", "");
    const validPhoneNumber =
      this.state.user.InitialCodeOfContactNumber + validNumber;
    const validAddressCompany =
      this.state.user.CompanyAddress + `,${this.state.user.CompanyCity}`;

    const validContactAddress =
      this.state.user.ContactAddress + `,${this.state.user.ContactCity}`;
    console.log("validContactAddress", validContactAddress);

    const data = {
      company_name: this.state.user.CompanyName,
      registration_number: this.state.user.registration_number,
      expected_sale: this.state.user.expected_sale,
      website: this.state.user.website,
      company_email: this.state.user.CompanyEmail,
      company_address: validAddressCompany,
      required_for: this.state.user.checkbox,
      contact_name: this.state.user.contactName,
      phone_number: validPhoneNumber,
      merchant_email: this.state.user.ContactEmail,
      merchant_address: validContactAddress,
      account_name: this.state.user.bankAccountName,
      account_number: this.state.user.bankAccountNumber,
      bank_name: this.state.user.bankAccountName,
      branch_code: this.state.user.branchCode,
      currency: this.state.user.Currency,
      files: this.state.user.CompanyUploadLogo,
      // files: this.state.user.bankStatement,
    };
    console.log("dataaaaaaaaa", data);

    store.dispatch(signupAction(data));
    // .then((e) => {
    //   this.props.history.push("/dashboard");
    // });

    // axios.post("http://localhost:5000/company ", data, axiosConfig);

    toast.success("Yes, you've successfully reached the last wizard step !", {
      containerId: "B",
      transition: Zoom,
    });
  };

  render() {
    const customSteps = [
      {
        label: "Company Details",
        number: "1",
        component: <Step1 form={this.state.user} />,
      },
      {
        label: "Contact Details",
        number: "2",
        component: <Step2 form={this.state.user} />,
      },
      {
        label: "Bank Account Details",
        number: "3",
        component: <Step3 form={this.state.user} />,
      },
    ];

    const CustomRenderer = ({ currentStep }) => {
      const steps = customSteps.map((step, index) => {
        const isActive = currentStep === index + 1;
        return (
          <li key={index} className={clsx("card-box", { current: isActive })}>
            <a href="#/" onClick={(e) => e.preventDefault()}>
              <div className="label">{step.label}</div>
              <div className="step-indicator">{step.number}</div>
              <AiOutlineArrowRight
                icon={["fas", "chevron-right"]}
                className="step-arrow font-size-xl"
              />
            </a>
          </li>
        );
      });

      return (
        <div className="horizontal">
          <ul className="steps-indicator customStepsIndicator">{steps}</ul>
        </div>
      );
    };

    return (
      <>
        <section className="merchant-wrapper">
          <div className="soon-container">
            <div className="merchant-signup-sec">
              <div className="merchant-acc-info">
                <a className="logo" href="#/">
                  <img className="img-fluid" src={logo} alt="" />
                </a>
                <div className="merchant-message-text">
                  <p>
                    Payfor Is A “Buy Now, Pay Later” Service That Splits Your
                    Customers Bill Into Three Interest Free Equal <br />
                    Payments Over Two Months.
                  </p>
                  <h3>Merchant Registration Form</h3>
                  <p>
                    Payfor Will Keep Your Financial Information Secure. To
                    Facilitate Faster Approval, Kindly Ensure That All <br />
                    Information Is True And Correct.
                  </p>
                  <label>We just need your 5 minutes</label>
                </div>

                <div className="">
                  <div className="card-header"></div>
                  <div className="wizard ">
                    <Loki
                      steps={customSteps}
                      // renderSteps={_customRenderer}
                      renderSteps={(props) => (
                        <CustomRenderer steps={customSteps} {...props} />
                      )}
                      // renderActions={this._customActions.bind(this)}
                      onNext={this._mergeValues.bind(this)}
                      onBack={this._mergeValues.bind(this)}
                      onFinish={this._onFinish.bind(this)}
                      noActions
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="merchant-with"></div>
          </div>
        </section>
      </>
    );
  }
}
// export default compose(withRouter, connect(null, { loginUser }))(Login);
export default connect(null)(Login);
