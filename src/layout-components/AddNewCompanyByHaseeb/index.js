import React, { Component } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BlockUi from "react-block-ui";
import { connect } from "react-redux";
import { HashLoader } from "react-spinners";
import { withRouter } from "react-router-dom";

import Loki from "./src";
import BasicInfo from "./steps/Step1/BasicInfo";
// import Unit from "./steps/Step2/Unit";
import Location from "./steps/step3/Location";
import Department from "./steps/step4/Department";
import Designation from "./steps/step5/Designation";
import CompanyPolicy from "./steps/step6/CompanyPolicy";
import AddNewForm from "./steps/step7/addNewForm";

import "./index.css";
class LivePreviewExample extends Component {
  state = {
    user: {
      // step1 start
      companyName: "",
      legalName: "",
      code: "",
      ntn: "",
      email: "",
      phone: "",
      website: "",
      timezone: "",
      companylogo: "",
      description: "",
      // step1 end

      // step2 start
      locationName: "",
      countryName: "",
      stateName: "",
      divisionName: "",
      districtName: "",
      tehsilName: "",
      cityName1: "",
      locationCode: "",
      address1Location: "",
      address2Location: "",
      postalCodeLocation: "",
      phoneLocation: "",
      emailLocation: "",
      noteLocation: "",
      // step2 end

      // step3 start
      locationNameD: "",
      departmentName: "",
      // step3 end

      // step4 start
      designationName: "",
      // step4 end

      // step5 start
      policyName: "",
      policyNote: "",
      // step5 end

      //addnewform
      formName: "",
      formNickName: "",
      newFormSearch: "",
      fromDescription: "",
    },
  };
  constructor(props) {
    super(props);
    this.props = props;
  }
  _mergeValues(values) {
    // console.log(values)
    this.setState({
      user: {
        ...this.state.user,
        ...values,
      },
    });
  }
  _finishWizard() {
    // const catArr = [];
    // const a = this.state?.user?.select_categories.map((cat, arr) => {
    //   catArr.push({
    //     id_category: parseInt(cat.value),
    //     id_line: parseInt(this.state.user.line_list.value),
    //     id_manfacturer: parseInt(this.state.user.manufacturer_list.value),
    //     design_code_product: this.state.user.design_code_product,
    //   });
    // });
    // const data = JSON.stringify(this.state.user);
    // localStorage.clear();
    // this.props.dispatch(addProduct(data));

    this.props.history.push(
      `/dashboard/Organization/Company/${this.props.match.params.id}`
    );
  }

  render() {
    console.log("params", this.props.match.params);
    const customSteps = [
      {
        label: "Company Information",
        number: "1",
        component: (
          <BasicInfo
            form={this.state.user}
            orgId={this?.props?.match?.params?.id}
          />
        ),
      },
      {
        label: "Add Location/Offices",
        number: "2",
        component: <Location form={this.state.user} />,
      },
      {
        label: "Add Department",
        number: "3",
        component: <Department form={this.state.user} />,
      },
      {
        label: "Add Designation",
        number: "4",
        component: <Designation form={this.state.user} />,
      },
      {
        label: "Company Policies",
        number: "5",
        component: (
          <CompanyPolicy
            form={this.state.user}
            orgId={this?.props?.match?.params?.id}
          />
        ),
      },
      {
        label: "New Form/Policy",
        number: "6",
        component: <AddNewForm form={this.state.user} />,
      },
      // {
      //   label: "Add New Form",
      //   number: "7",
      //   component: <AddNewForm form={this.state.user} />,
      // },
    ];
    // console.log("props in steps comp", this.props);
    const CustomRenderer = ({ steps, currentStep, goTo, isComplete }) => {
      const steps123 = steps.map((step, index) => {
        const isActive = currentStep === index + 1;
        const isNext = currentStep < index + 1;
        const isDisabled = !isActive && !isComplete;

        return (
          <li key={index} className={clsx("card-box", { current: isActive })}>
            <a
              href={"/#"}
              // onClick={handleClick}
              className={clsx({ disabled: isNext })}
              // disabled={!!isNext}
              onClick={(event) => {
                event.preventDefault();
                if (isDisabled) {
                  return;
                }
                goTo(step.index);
              }}
              // className={`LokiStep-Link ${isDisabled && "disabled"}`}
              disabled={isDisabled}
            >
              <div className="label">{step.label}</div>
              <div className="step-indicator step-indicator-2">
                {step.number}
              </div>
            </a>
          </li>
        );
      });
      return (
        <div className="vertical ">
          <ul className="steps-indicator">{steps123}</ul>
        </div>
      );
    };
    return (
      <>
        <BlockUi
          // className="p-5"
          tag="div"
          blocking={this.props?.productData?.isAddingProduct}
          loader={
            <HashLoader
              color={"#68E1C9"}
              loading={this.props?.productData?.isAddingProduct}
            />
          }
        >
          <div className="addOrganization mb-1 d-flex align-items-center justify-content-between p-5">
            <div className="app-page-title--first">
              <div className="app-page-title--iconbox d-70">
                <div className="d-70 d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon
                    icon={["far", "building"]}
                    style={{ fontSize: "20px", color: "#3C44B1" }}
                    className="display-2"
                  />
                </div>
              </div>
              <div className="app-page-title--heading">
                <h1 style={{ color: "#3A3D65" }}>Add Company</h1>
              </div>
            </div>
          </div>

          <div className="card card-box m-5">
            <div className="card-header">
              <div className="card-header--title">
                <b>Add Company</b>
              </div>
            </div>
            <div className="wizard vertical">
              <Loki
                steps={customSteps}
                onNext={this._mergeValues.bind(this)}
                onBack={this._mergeValues.bind(this)}
                onFinish={this._finishWizard.bind(this)}
                renderSteps={(props) => (
                  <CustomRenderer steps={customSteps} {...props} />
                )}
                noActions
              />
            </div>
          </div>
        </BlockUi>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return { productData: state.AddProductReducer };
};
export default connect(mapStateToProps, null)(withRouter(LivePreviewExample));
