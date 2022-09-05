import React, { lazy, Suspense } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ScaleLoader } from "react-spinners";
import PrivateRoute from "./pages-components/PrivateRoute";
import { LeftSidebar } from "./layout-blueprints";

const PageNotFound = lazy(() => import("./pages-components/PageError404"));

// const PageChat = lazy(() => import("./pages-components/PageChat/index"));
const Dashboard = lazy(() => import("./pages-components/Dashboard/Dashboard"));
const Overview = lazy(() => import("./pages-components/Dashboard/Overview"));
const HRMSOverview = lazy(() =>
  import("./pages-components/HRMS/Employees/Overview")
);
const AddOrganization = lazy(() =>
  import("./layout-components/OrganizationViews/AddOrganization")
);

const AddCompanyDetails = lazy(() =>
  import("./layout-components/AddCompanyDetails")
);
const AddNewCompanyByHaseeeb = lazy(() =>
  import("./layout-components/AddNewCompanyByHaseeb/index")
);
const AddNewEmployee = lazy(() =>
  import("./layout-components/AddNewEmployee/index")
);
const Setting = lazy(() => import("./layout-components/SettingTab/index"));
const UnitDetails = lazy(() => import("./layout-components/UnitDetails"));
const Companies = lazy(() => import("./pages-components/Companies"));
const CompaniesList = lazy(() =>
  import("./pages-components/AdminControls/AddOrgAndCompany/Companies")
);
const OrganizationPolicy = lazy(() =>
  import("./pages-components/OrganizationPolicy")
);
const OrganizationManagement = lazy(() =>
  import("./pages-components/OrganizationManagement")
);
const DigitalSignature = lazy(() =>
  import("./pages-components/DigitalSignature")
);
const EmployeeDirectory = lazy(() =>
  import("./pages-components/HRMS/Employees/EmployeeDirectory")
);
const Internee = lazy(() =>
  import("./pages-components/HRMS/Employees/Internee")
);
const EmployeeDirectoryDetail = lazy(() =>
  import("./pages-components/HRMS/Employees/EmployeeDirectoryDetail")
);
const Attendance = lazy(() =>
  import("./pages-components/Time&Attendance/Attendance")
);
const LeaveRecord = lazy(() =>
  import("./pages-components/Time&Attendance/LeaveRecord")
);
const ShiftRoster = lazy(() =>
  import("./pages-components/Time&Attendance/ShiftRoster")
);
const AddOfficeShift = lazy(() =>
  import("./pages-components/Time&Attendance/AddOfficeShift")
);
const Salary = lazy(() =>
  import("./pages-components/Payroll/PayrollInputs/Salary")
);
const SelectedEmployees = lazy(() =>
  import("./pages-components/Payroll/PayrollInputs/SelectedEmployees")
);
const SalaryDetail = lazy(() =>
  import("./pages-components/Payroll/PayrollInputs/SalaryDetail")
);
const Reimbursement = lazy(() =>
  import("./pages-components/Payroll/PayrollInputs/Reimbursement")
);
const IncomeTax = lazy(() =>
  import("./pages-components/Payroll/PayrollInputs/IncomeTax")
);
const Overtime = lazy(() =>
  import("./pages-components/Payroll/PayrollInputs/Overtime")
);
const FinalStatement = lazy(() =>
  import("./pages-components/Payroll/PayrollInputs/FinalStatement")
);
const RevisionHistory = lazy(() =>
  import("./pages-components/Payroll/Revision/RevisionHistory")
);
const PayrollProcess = lazy(() =>
  import("./pages-components/Payroll/PayrollProcess")
);
const Payout = lazy(() => import("./pages-components/Payroll/Payout"));
const AccountInfo = lazy(() =>
  import("./pages-components/AdminControls/Account/AccountInfo")
);
const GeneralSetting = lazy(() =>
  import("./pages-components/AdminControls/Account/GeneralSetting")
);
const CalendarFeed = lazy(() =>
  import("./pages-components/AdminControls/Account/CalendarFeed")
);
const EmailConfiguration = lazy(() =>
  import("./pages-components/AdminControls/Account/EmailConfiguration")
);
const AddEmailConfiguration = lazy(() =>
  import(
    "./pages-components/AdminControls/Account/EmailConfiguration/AddEmailConfiguration"
  )
);
const SMSConfiguration = lazy(() =>
  import("./pages-components/AdminControls/Account/SMSConfiguration")
);
const AddSMSConfiguration = lazy(() =>
  import(
    "./pages-components/AdminControls/Account/SMSConfiguration/AddSMSConfiguration"
  )
);
const AddOrgAndCompany = lazy(() =>
  import("./pages-components/AdminControls/AddOrgAndCompany/Organization")
);
const Companyinfo = lazy(() =>
  import("./pages-components/AdminControls/CompanySetting/Companyinfo")
);
const CompanyinfoDetail = lazy(() =>
  import(
    "./pages-components/AdminControls/CompanySetting/Companyinfo/CompanyinfoDetail"
  )
);
const Designations = lazy(() =>
  import("./pages-components/AdminControls/CompanySetting/Designations")
);
const Departments = lazy(() =>
  import("./pages-components/AdminControls/CompanySetting/Departments")
);
const Policies = lazy(() =>
  import("./pages-components/AdminControls/CompanySetting/Policies")
);
const AddNewBenefits = lazy(() =>
  import("./pages-components/AdminControls/CompanySetting/AddNewPolicy")
);
const AddBenefitGroup = lazy(() =>
  import("./pages-components/AdminControls/CompanySetting/AddPolicyGroup")
);
const Grades = lazy(() =>
  import("./pages-components/AdminControls/CompanySetting/Grades")
);
const AddGrade = lazy(() =>
  import("./pages-components/AdminControls/CompanySetting/AddGrade")
);
const Policy = lazy(() =>
  import("./pages-components/AdminControls/CompanySetting/Policy")
);
const AddNewPolicyGroup = lazy(() =>
  import(
    "./pages-components/AdminControls/CompanySetting/Policy/AddNewPolicyGroup"
  )
);
const AddNewPolicy = lazy(() =>
  import("./pages-components/AdminControls/CompanySetting/Policy/AddNewPolicy")
);

const AttendanceSystem = lazy(() =>
  import("./pages-components/AdminControls/CompanySetting/AttendanceSystem")
);
const AddNewShift = lazy(() =>
  import(
    "./pages-components/AdminControls/CompanySetting/AttendanceSystem/AddNewShift"
  )
);
const UpdateRegularShift = lazy(() =>
  import(
    "./pages-components/AdminControls/CompanySetting/AttendanceSystem/UpdateRegularShift"
  )
);

const AddNewSeasonalShift = lazy(() =>
  import(
    "./pages-components/AdminControls/CompanySetting/AttendanceSystem/AddNewSeasonalShift"
  )
);
const UpdateSeasonalShift = lazy(() =>
  import(
    "./pages-components/AdminControls/CompanySetting/AttendanceSystem/UpdateSeasonalShift"
  )
);
const Assets = lazy(() =>
  import("./pages-components/AdminControls/CompanySetting/Assets")
);

const LeaveType = lazy(() =>
  import("./pages-components/AdminControls/CompanySetting/Leaves/LeaveType")
);

const LeaveBank = lazy(() =>
  import("./pages-components/AdminControls/CompanySetting/Leaves/LeaveBank")
);

const CreateAccessLevel = lazy(() =>
  import(
    "./pages-components/AdminControls/CompanySetting/AccessLevel/CreateAccessLevel"
  )
);
const AccessLevelPage = lazy(() =>
  import(
    "./pages-components/AdminControls/CompanySetting/AccessLevel/AccessLevelPage"
  )
);

const EmployeeFields = lazy(() =>
  import("./pages-components/AdminControls/EmployeeDirectory/EmployeeFields")
);
const EmployeeDegree = lazy(() =>
  import("./pages-components/AdminControls/EmployeeDirectory/Degree")
);
const EmployeeDepartments = lazy(() =>
  import("./pages-components/AdminControls/EmployeeDirectory/Departments")
);
const EmergencyContact = lazy(() =>
  import("./pages-components/AdminControls/EmployeeDirectory/EmergencyContact")
);
const EmployeeStatuses = lazy(() =>
  import("./pages-components/AdminControls/EmployeeDirectory/EmployeeStatuses")
);
const JobTitles = lazy(() =>
  import("./pages-components/AdminControls/EmployeeDirectory/JobTitles")
);
const Compensation = lazy(() =>
  import("./pages-components/AdminControls/EmployeeDirectory/Compensation")
);
const SecondaryLanguage = lazy(() =>
  import("./pages-components/AdminControls/EmployeeDirectory/SecondaryLanguage")
);
const AssetCategory = lazy(() =>
  import("./pages-components/AdminControls/CompanySetting/AssetCategory")
);
const JobHistory = lazy(() =>
  import("./pages-components/AdminControls/EmployeeDirectory/JobHistory")
);
const InformationUpdates = lazy(() =>
  import("./pages-components/AdminControls/Approvals/InformationUpdates")
);
const AddApproval = lazy(() =>
  import("./pages-components/AdminControls/Approvals/AddApproval")
);
const Compensations = lazy(() =>
  import("./pages-components/AdminControls/Approvals/Compensations")
);
const AddNewApproval = lazy(() =>
  import("./pages-components/AdminControls/Approvals/AddNewApproval")
);
const EmployeeStatus = lazy(() =>
  import("./pages-components/AdminControls/Approvals/EmployeeStatus")
);
const AddNewEmployeeStatus = lazy(() =>
  import("./pages-components/AdminControls/Approvals/AddNewEmployeeStatus")
);
const JobInformation = lazy(() =>
  import("./pages-components/AdminControls/Approvals/JobInformation")
);
const AddNewJobInformation = lazy(() =>
  import("./pages-components/AdminControls/Approvals/AddNewJobInformation")
);
const AssetRequest = lazy(() =>
  import("./pages-components/AdminControls/Approvals/AssetRequest")
);
const AddNewAssetRequest = lazy(() =>
  import("./pages-components/AdminControls/Approvals/AddNewAssetRequest")
);
const EmailAlert = lazy(() =>
  import("./pages-components/AdminControls/Notification/EmailAlert")
);
const AddEmailTemplate = lazy(() =>
  import("./pages-components/AdminControls/Notification/AddEmailTemplate")
);
const SMSAlert = lazy(() =>
  import("./pages-components/AdminControls/Notification/SMSAlert")
);
const AddSMSTemplate = lazy(() =>
  import("./pages-components/AdminControls/Notification/AddSMSTemplate")
);
const CandidateStatuses = lazy(() =>
  import("./pages-components/AdminControls/Hiring/CandidateStatuses")
);
const OfferTemplates = lazy(() =>
  import("./pages-components/AdminControls/Hiring/OfferTemplates")
);
const AddOfferTemplate = lazy(() =>
  import("./pages-components/AdminControls/Hiring/AddOfferTemplate")
);
const Offboarding = lazy(() =>
  import("./pages-components/AdminControls/Offboarding/OffboardingPage")
);
const AddNewCategary = lazy(() =>
  import("./pages-components/AdminControls/Offboarding/AddNewCategary")
);
const NewOffboardingTask = lazy(() =>
  import("./pages-components/AdminControls/Offboarding/NewOffboardingTask")
);
const OnBoarding = lazy(() =>
  import("./pages-components/AdminControls/OnBoarding/OnBoardingPage")
);
const TimeOff = lazy(() =>
  import("./pages-components/AdminControls/TimeOff/TimeOffPage")
);

const Routes = () => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.99,
    },
    in: {
      opacity: 1,
      scale: 1,
    },
    out: {
      opacity: 0,
      scale: 1.01,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.4,
  };

  const SuspenseLoading = () => {
    return (
      <>
        <div className="d-flex align-items-center flex-column vh-100 justify-content-center text-center py-3">
          <div className="d-flex align-items-center flex-column px-4">
            <ScaleLoader color={"#3C44B1"} loading={true} />
          </div>
          <div className="text-muted font-size-xl text-center pt-3">
            Please wait while we load the live preview examples
            <span className="font-size-lg d-block text-dark">
              This live preview instance can be slower than a real production
              build!
            </span>
          </div>
        </div>
      </>
    );
  };
  return (
    <AnimatePresence>
      <Suspense fallback={<SuspenseLoading />}>
        <Switch>
          <Route
            path={[
              "/PageCalendar",
              // "/PageChat",
              "/PageProjects",
              "/PageFileManager",
              "/PageProfile",
              "/dashboard",
              "/addOrganization",
              "/Company/:id",
              "/Setting",
            ]}
          >
            <LeftSidebar>
              <Switch location={location} key={location.pathname}>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Route
                    path="/PageNotFound"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/PageNotFound"
                        {...props}
                        component={PageNotFound}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/Overview"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/Overview"
                        {...props}
                        component={Overview}
                        exact
                      />
                    )}
                  />

                  <Route
                    path="/dashboard/HRMSOverview"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/HRMSOverview"
                        {...props}
                        component={HRMSOverview}
                        exact
                      />
                    )}
                  />

                  <Route
                    path="/dashboard/OrganizationList"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/OrganizationList"
                        {...props}
                        component={Dashboard}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/OrganizationInfo"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/OrganizationInfo"
                        {...props}
                        component={Dashboard}
                        exact
                      />
                    )}
                  />
                  {/* <Route
                    path="/dashboard/addOrganization"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/addOrganization"
                        {...props}
                        component={AddOrganization}
                        exact
                      />
                    )}
                  /> */}
                  <Route
                    path="/dashboard/OrganizationList/Company/:id"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/OrganizationList/Company/:id"
                        {...props}
                        component={Companies}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/OrganizationInfo/Company/:id"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/OrganizationInfo/Company/:id"
                        {...props}
                        component={Companies}
                        exact
                      />
                    )}
                  />

                  <Route
                    path="/dashboard/Organization/Company/:id"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/Organization/Company/:id"
                        {...props}
                        component={CompaniesList}
                        exact
                      />
                    )}
                  />

                  <Route
                    path="/dashboard/AddCompanyDetails/:id"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/AddCompanyDetails/:id"
                        {...props}
                        component={AddCompanyDetails}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/:compid/UnitDetail/:id"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/:compid/UnitDetail/:id"
                        {...props}
                        component={UnitDetails}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/Organization/AddCompany/:id"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/Organization/AddCompany/:id"
                        {...props}
                        component={AddNewCompanyByHaseeeb}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/OrganizationPolicy"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/OrganizationPolicy"
                        {...props}
                        component={OrganizationPolicy}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/OrganizationManagement"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/OrganizationManagement"
                        {...props}
                        component={OrganizationManagement}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/DigitalSignature"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/DigitalSignature"
                        {...props}
                        component={DigitalSignature}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/EmployeeDirectory"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/EmployeeDirectory"
                        {...props}
                        component={EmployeeDirectory}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/Internee"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/Internee"
                        {...props}
                        component={Internee}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/EmployeeDirectory/AddNewEmployee"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/EmployeeDirectory/AddNewEmployee"
                        {...props}
                        component={AddNewEmployee}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/EmployeeDirectory/EmployeeDirectoryDetail/:id"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/EmployeeDirectory/EmployeeDirectoryDetail/:id"
                        {...props}
                        component={EmployeeDirectoryDetail}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/Setting"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/Setting"
                        {...props}
                        component={Setting}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/Attendance"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/Attendance"
                        {...props}
                        component={Attendance}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/LeaveRecord"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/LeaveRecord"
                        {...props}
                        component={LeaveRecord}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/ShiftRoster"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/ShiftRoster"
                        {...props}
                        component={ShiftRoster}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/ShiftRoster/AddOfficeShift"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/ShiftRoster/AddOfficeShift"
                        {...props}
                        component={AddOfficeShift}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/Salary"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/Salary"
                        {...props}
                        component={Salary}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/Salary/SelectedEmployees"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/Salary/SelectedEmployees"
                        {...props}
                        component={SelectedEmployees}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/Salary/SalaryDetail"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/Salary/SalaryDetail"
                        {...props}
                        component={SalaryDetail}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/Reimbursement"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/Reimbursement"
                        {...props}
                        component={Reimbursement}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/IncomeTax"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/IncomeTax"
                        {...props}
                        component={IncomeTax}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/Overtime"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/Overtime"
                        {...props}
                        component={Overtime}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/FinalStatement"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/FinalStatement"
                        {...props}
                        component={FinalStatement}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/RevisionHistory"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/RevisionHistory"
                        {...props}
                        component={RevisionHistory}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/PayrollProcess"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/PayrollProcess"
                        {...props}
                        component={PayrollProcess}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/Payout"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/Payout"
                        {...props}
                        component={Payout}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/AccountInfo"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/AccountInfo"
                        {...props}
                        component={AccountInfo}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/GeneralSetting"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/GeneralSetting"
                        {...props}
                        component={GeneralSetting}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/CalendarFeed"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/CalendarFeed"
                        {...props}
                        component={CalendarFeed}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/EmailConfiguration"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/EmailConfiguration"
                        {...props}
                        component={EmailConfiguration}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/EmailConfiguration/AddEmailConfiguration"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/EmailConfiguration/AddEmailConfiguration"
                        {...props}
                        component={AddEmailConfiguration}
                        exact
                      />
                    )}
                  />

                  <Route
                    path="/dashboard/SMSConfiguration"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/SMSConfiguration"
                        {...props}
                        component={SMSConfiguration}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/SMSConfiguration/AddSMSConfiguration"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/SMSConfiguration/AddSMSConfiguration"
                        {...props}
                        component={AddSMSConfiguration}
                        exact
                      />
                    )}
                  />

                  <Route
                    path="/dashboard/Organization"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/Organization"
                        {...props}
                        component={AddOrgAndCompany}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/Organization/addOrganization"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/Organization/addOrganization"
                        {...props}
                        component={AddOrganization}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/Companyinfo"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/Companyinfo"
                        {...props}
                        component={Companyinfo}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/Companyinfo/CompanyinfoDetail"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/Companyinfo/CompanyinfoDetail"
                        {...props}
                        component={CompanyinfoDetail}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/Designations"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/Designations"
                        {...props}
                        component={Designations}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/Departments"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/Departments"
                        {...props}
                        component={Departments}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/Policy"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/Policy"
                        {...props}
                        component={Policy}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/AddNewPolicy"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/AddNewPolicy"
                        {...props}
                        component={AddNewBenefits}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/AddPolicyGroup"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/AddPolicyGroup"
                        {...props}
                        component={AddBenefitGroup}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/Grades"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/Grades"
                        {...props}
                        component={Grades}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/Grades/AddGrade"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/Grades/AddGrade"
                        {...props}
                        component={AddGrade}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/Policies"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/Policies"
                        {...props}
                        component={Policies}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/Policies/AddNewPolicyGroup"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/Policies/AddNewPolicyGroup"
                        {...props}
                        component={AddNewPolicyGroup}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/Policies/AddNewPolicy"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/Policies/AddNewPolicy"
                        {...props}
                        component={AddNewPolicy}
                        exact
                      />
                    )}
                  />

                  <Route
                    path="/dashboard/AttendanceSystem"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/AttendanceSystem"
                        {...props}
                        component={AttendanceSystem}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/AttendanceSystem/AddNewShift"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/AttendanceSystem/AddNewShift"
                        {...props}
                        component={AddNewShift}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/AttendanceSystem/UpdateRegularShift"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/AttendanceSystem/UpdateRegularShift"
                        {...props}
                        component={UpdateRegularShift}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/AttendanceSystem/AddNewSeasonalShift"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/AttendanceSystem/AddNewSeasonalShift"
                        {...props}
                        component={AddNewSeasonalShift}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/AttendanceSystem/UpdateSeasonalShift"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/AttendanceSystem/UpdateSeasonalShift"
                        {...props}
                        component={UpdateSeasonalShift}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/Assets"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/Assets"
                        {...props}
                        component={Assets}
                        exact
                      />
                    )}
                  />

                  <Route
                    path="/dashboard/LeaveType"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/LeaveType"
                        {...props}
                        component={LeaveType}
                        exact
                      />
                    )}
                  />

                  <Route
                    path="/dashboard/LeaveBank"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/LeaveBank"
                        {...props}
                        component={LeaveBank}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/AccessLevel/CreateAccessLevel"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/AccessLevel/CreateAccessLevel"
                        {...props}
                        component={CreateAccessLevel}
                        exact
                      />
                    )}
                  />

                  <Route
                    path="/dashboard/AccessLevel"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/AccessLevel"
                        {...props}
                        component={AccessLevelPage}
                        exact
                      />
                    )}
                  />

                  <Route
                    path="/dashboard/EmployeeFields"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/EmployeeFields"
                        {...props}
                        component={EmployeeFields}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/EmployeeDegree"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/EmployeeDegree"
                        {...props}
                        component={EmployeeDegree}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/EmployeeDepartments"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/EmployeeDepartments"
                        {...props}
                        component={EmployeeDepartments}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/EmergencyContact"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/EmergencyContact"
                        {...props}
                        component={EmergencyContact}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/EmployeeStatuses"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/EmployeeStatuses"
                        {...props}
                        component={EmployeeStatuses}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/JobTitles"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/JobTitles"
                        {...props}
                        component={JobTitles}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/Compensation"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/Compensation"
                        {...props}
                        component={Compensation}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/SecondaryLanguage"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/SecondaryLanguage"
                        {...props}
                        component={SecondaryLanguage}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/AssetCategory"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/AssetCategory"
                        {...props}
                        component={AssetCategory}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/JobHistory"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/JobHistory"
                        {...props}
                        component={JobHistory}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/InformationUpdates"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/InformationUpdates"
                        {...props}
                        component={InformationUpdates}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/InformationUpdates/AddApproval"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/InformationUpdates/AddApproval"
                        {...props}
                        component={AddApproval}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/Compensations"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/Compensations"
                        {...props}
                        component={Compensations}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/Compensations/AddNewApproval"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/Compensations/AddNewApproval"
                        {...props}
                        component={AddNewApproval}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/EmployeeStatus"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/EmployeeStatus"
                        {...props}
                        component={EmployeeStatus}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/EmployeeStatus/AddNewEmployeeStatus"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/EmployeeStatus/AddNewEmployeeStatus"
                        {...props}
                        component={AddNewEmployeeStatus}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/JobInformation"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/JobInformation"
                        {...props}
                        component={JobInformation}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/JobInformation/AddNewJobInformation"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/JobInformation/AddNewJobInformation"
                        {...props}
                        component={AddNewJobInformation}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/AssetRequest"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/AssetRequest"
                        {...props}
                        component={AssetRequest}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/AssetRequest/AddNewAssetRequest"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/AssetRequest/AddNewAssetRequest"
                        {...props}
                        component={AddNewAssetRequest}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/EmailAlert"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/EmailAlert"
                        {...props}
                        component={EmailAlert}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/EmailAlert/AddEmailTemplate"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/EmailAlert/AddEmailTemplate"
                        {...props}
                        component={AddEmailTemplate}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/SMSAlert"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/SMSAlert"
                        {...props}
                        component={SMSAlert}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/SMSAlert/AddSMSTemplate"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/SMSAlert/AddSMSTemplate"
                        {...props}
                        component={AddSMSTemplate}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/CandidateStatuses"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/CandidateStatuses"
                        {...props}
                        component={CandidateStatuses}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/OfferTemplates"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/OfferTemplates"
                        {...props}
                        component={OfferTemplates}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/OfferTemplates/AddOfferTemplate"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/OfferTemplates/AddOfferTemplate"
                        {...props}
                        component={AddOfferTemplate}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/Offboarding"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/Offboarding"
                        {...props}
                        component={Offboarding}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/Offboarding/AddNewCategary"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/Offboarding/AddNewCategary"
                        {...props}
                        component={AddNewCategary}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/Offboarding/NewOffboardingTask"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/Offboarding/NewOffboardingTask"
                        {...props}
                        component={NewOffboardingTask}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/OnBoarding"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/OnBoarding"
                        {...props}
                        component={OnBoarding}
                        exact
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/TimeOff"
                    exact
                    render={(props) => (
                      <PrivateRoute
                        path="/dashboard/TimeOff"
                        {...props}
                        component={TimeOff}
                        exact
                      />
                    )}
                  />
                </motion.div>
              </Switch>
            </LeftSidebar>
          </Route>
        </Switch>
      </Suspense>
    </AnimatePresence>
  );
};

export default Routes;
