import React, { Component } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BlockUi from "react-block-ui";
import { connect } from "react-redux";
import { HashLoader } from "react-spinners";

import Loki from "./src";
import PersonalInformation from "./steps/Step1/PersonalInformation";
import Address from "./steps/Step2/Address";
import Employment from "./steps/Step3/Employment";
import Grade from "./steps/Step4/Grade";
import Experience from "./steps/Step5/Experience";
import Education from "./steps/Step6/Education";
import Dependents from "./steps/Step7/Dependents";
import MedicalEmergency from "./steps/Step8/MedicalEmergency";

import { store } from "../../store";

import { createEmployee, createUserRole } from "../../actions";
import "./index.css";
class LivePreviewExample extends Component {
  state = {
    user: {
      // step1 start
      Role: "",
      Salutation: "",
      firstName: "",
      lastName: "",
      fatherName: "",
      email: "",
      personalEmail: "",
      EmployeeTypeId: "",
      phone: "",
      Gender: "",
      Marital: "",
      cnicNumber: "",
      EmployeeType: "",
      datePicker: "",
      // step1 end

      // step2 start
      addressData: [],
      Country: "",
      AdddressType: "",
      province: "",
      cityName: "",
      postalCode: "",
      locationNumber: "",
      alternativeNumber: "",
      locationAddress: "",
      // step2 end

      // step3 start
      allocations: [],
      Company: "",
      Location: "",
      Department: "",
      Designation: "",
      employeeCode: "",
      salary: "",
      manager: "",
      Shift: "",
      joiningDate: "",
      confirmationDue: "",
      contractStart: "",
      contractEnd: "",
      // step3 end

      // step4 start
      Grade: "",
      // step4 end

      // step5 start
      experience: [],
      companyName: "",
      period: "",
      jobStarted: "",
      jobEnded: "",
      designation: "",
      jobResponsibilities: "",
      previousSalary: "",
      // step5 end

      // step6 start
      education: [],
      educationData: [],
      Tittle: "",
      university: "",
      majors: "",
      year: "",
      yearStarted: "",
      yearEnded: "",
      cgpa: "",
      // step6 end

      // step7 start
      dependent: [],
      dependentData: [],
      dependentName: "",
      Relation: "",
      dependentAddress: "",
      contact: "",
      // step7 end

      // step8 start
      emergency: [],
      emergencyName: "",
      EmergencyRelation: "",
      emergencyAddress: "",
      emergencyContact: "",
      BloodGroup: "",
      allergy: "",
      // step8 end
    },
  };
  constructor(props) {
    super(props);
    this.props = props;

    if (this.state.user.Role?.value > 0) {
      console.log("role is valid");
    } else {
      console.log("role is not valid");
    }
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

  _finishWizard() {
    // console.log("lokiiiiiiii", this.state.user);
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

    const data = {
      authentication_type_id: this.state.user.EmployeeTypeId.value,
      personal_email_employee_info: this.state.user.personalEmail,
      employee_type_id: this.state.user.EmployeeType.value,
      code_employee_info: this.state.user.employeeCode,
      first_name_employee_info: this.state.user.firstName,
      last_name_employee_info: this.state.user.lastName,
      official_email_employee_info: this.state.user.email,
      personal_mobile_employee_info: this.state.user.phone,
      father_fullname_employee_info: this.state.user.fatherName,
      dob_employee_info: this.state.user.datePicker,
      gender_employee_info: this.state.user.Gender.label,
      cnic_number_employee_info: this.state.user.cnicNumber,
      blood_group_emloyee_info: this.state.user.BloodGroup.label,
      marital_status: this.state.user.Marital.label,
      joining_date_employee_info: this.state.user.joiningDate,
      employee_allocations: this.state.user.allocations,
      employee_dependents: this.state.user.dependentData,
      eductations: this.state.user.educationData,
      work_experiences: this.state.user.experience,
      employee_addresses: this.state.user.addressData,
    };

    console.log("dataaaaaaaaa", data);

    store.dispatch(createEmployee(data)).then((e) => {
      if (this.state.user.Role?.value > 0) {
        console.log("role is valid");
        const roleData = {
          role_id: this.state.user.Role?.value,
          employee_id: e.id_employee_info,
        };

        store.dispatch(createUserRole(roleData)).then(() => {
          this.props.history.push("/dashboard/EmployeeDirectory");
        });
      } else {
        console.log("role is not valid");
        this.props.history.push("/dashboard/EmployeeDirectory");
      }
    });
  }
  render() {
    // console.log("propssssss", this.props);
    // }
    const customSteps = [
      {
        label: "Personal Information",
        number: "1",
        component: <PersonalInformation form={this.state.user} />,
        // component: <PersonalInformation form={this.state.user} />,
      },
      {
        label: "Address",
        number: "2",
        component: <Address form={this.state.user} />,
      },
      {
        label: "Employment Information",
        number: "3",
        component: <Employment form={this.state.user} />,
      },
      {
        label: "Grade",
        number: "4",
        component: <Grade form={this.state.user} />,
      },
      {
        label: "Past Work Experience",
        number: "5",
        component: <Experience form={this.state.user} />,
      },
      {
        label: "Education",
        number: "6",
        component: <Education form={this.state.user} />,
      },
      {
        label: "Add Dependents",
        number: "7",
        component: <Dependents form={this.state.user} />,
      },
      {
        label: "Medical Emergency Details",
        number: "8",
        component: <MedicalEmergency form={this.state.user} />,
      },
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
                // goTo(step.index);
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
                <h1 style={{ color: "#3A3D65" }}>Add Employee </h1>
              </div>
            </div>
          </div>

          <div className="card card-box m-5">
            <div className="card-header">
              <div className="card-header--title">
                <b>Add New Employee</b>
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
export default connect(mapStateToProps)(LivePreviewExample);
