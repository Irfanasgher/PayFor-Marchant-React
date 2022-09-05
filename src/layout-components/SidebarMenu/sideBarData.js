const data = [
  {
    id: 1,
    name: "Dashboard",
    child: [
      {
        name: "Overview",
        path: "Overview",
      },
    ],
  },
  {
    id: 2,
    name: "HRMS",
    child: [
      {
        name: "Organization",
        child: [
          {
            name: "Organization List",
            path: "OrganizationList",
          },
        ],
      },
      {
        name: "Employees",
        child: [
          {
            name: "Overview",
            path: "Overview",
          },
          {
            name: "Employee Directory",
            path: "EmployeeDirectory",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Time & Attendance",
    child: [
      {
        name: "Overview",
        path: "Overview",
      },
      {
        name: "Attendance",
        path: "Attendance",
      },
      {
        name: "Leave Record",
        path: "LeaveRecord",
      },
      {
        name: "Leave Calender",
        path: "LeaveRecord",
      },
    ],
  },
  {
    id: 4,
    name: "Payroll",
    child: [
      {
        name: "Final Statement",
        path: "FinalStatement",
      },
    ],
  },
  {
    id: 5,
    name: "Admin Controls",
    child: [
      {
        name: "Account",
        child: [
          {
            name: "Account Info",
            path: "AccountInfo",
          },
          {
            name: "General Setting",
            path: "GeneralSetting",
          },
          {
            name: "I Calendar Feed",
            path: "CalendarFeed",
          },
          {
            name: "Email Configuration",
            path: "EmailConfiguration",
          },
          {
            name: "SMS Configuration",
            path: "SMSConfiguration",
          },
        ],
      },
      {
        name: "Organization Setting",
        child: [
          {
            name: "Organization Info",
            path: "OrganizationInfo",
          },
          {
            name: "Designations",
            path: "Designations",
          },
          {
            name: "Departments",
            path: "Departments",
          },
          {
            name: "Policies",
            path: "Policies",
          },
          {
            name: "Attendance",
            path: "AttendanceSystem",
          },
          {
            name: "Assets",
            path: "Assets",
          },
          {
            name: "Asset Category",
            path: "AssetCategory",
          },
          {
            name: "Leave Bank",
            path: "LeaveBank",
          },
          {
            name: "Leave Type",
            path: "LeaveType",
          },
          {
            name: "Access Level",
            path: "AccessLevel",
          },
        ],
      },
      {
        name: "Add Org/Company",
        path: "Organization",
      },
      {
        name: "Employee",
        child: [
          {
            name: "Degree",
            path: "EmployeeDegree",
          },
          {
            name: "Emergency Contact",
            path: "EmergencyContact",
          },
          {
            name: "Employee Statuses",
            path: "EmployeeStatuses",
          },
        ],
      },
    ],
  },
];

export default data;
