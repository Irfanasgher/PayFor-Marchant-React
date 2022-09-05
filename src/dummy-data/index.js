export const Organization = [
    {
        to: "/Dashboard",
        icon: "chart-pie",
        tabName: "Organization",
        active:true
    },
    {
        to: "/Company/:id?#/",
        icon: "user-friends",
        tabName: "Company",
        active:true
    }
]
export const companyPath = [
    {
        to: "/companyClaims",
        icon: "check-circle",
        tabName: "Warranties"
    }
]
export const returns = [
    {
        to: "/Organization",
        icon: "sync-alt",
        tabName: "Add Organization"
    }
]
export const analyticsDropDown = [
    {
        to: "/companyClaimAnalytics",
        tabName: "Warranties Claims"
    },
    {
        to: "/ShipmentClaimAnylatics",
        tabName: "Shipment Claims"
    },
    {
        to: "/ReturnClaimAnalytics",
        tabName: "Return Claims"
    },
    {
        to: "/Reports",
        tabName: "Reports"
    },
    
]
export const analyticsTab = [
    {
        icon: "poll",
        tabName: "Analytics",
        dropIcon: '<ChevronRight />'
    }
]
export const companyCardss = [
    {
        to: "/companyCardsClaim",
        icon: "shipping-fast",
        tabName: "Company Cards"
    }
]

export const userData=[
    {
        name:'zaid@admin.com',
        pass: '123',
        superadmin:false,
        returnsRole:true,
        companyCards:true,
        companyy:true,
        analytics: true
    },
    {
        name:'ahmad@employee.com',
        pass: '456',
        admin:false,
        returnsRole:true,
        companyCards:false,
        companyy:true, 
        analytics: false
    },
    {
        name:'safyan@superadmin.com',
        pass: '789',
        superadmin:false,
        returnsRole:true,
        companyCards:true,
        companyy:true,
        analytics: true
    }

]

export const employeeData = [
    {
        analytics1:{
            workingDays: '22',
            absents: '3',
            totalOvertime: '13',
            overtimeDays: '4',
            leaves: '2',
            alerts: 'New alerts will be mentioned here'
        }
        ,
        analytics2:{
            d1: [10, 50, 15,30,40],
            colors: ['#f83245', '#4191ff', '#1bc943', "#FB607F",'#FFFF00']
        },
        analytics3:[  
            {
              name: 'Week 1',
              data: [
                { x: '1', y: 28 },
                        { x: '2', y: 30 },
                        { x: '3', y: 30 },
                        { x: '4', y: 30 },
                        { x: '5', y: 30 },
                        { x: '6', y: 30 },
                        { x: '7', y: 30 }
              ]
            },
            {
              name: 'Week 2',
              data: [
                { x: '1', y: 28 },
                        { x: '2', y: 30 },
                        { x: '3', y: 30 },
                        { x: '4', y: 30 },
                        { x: '5', y: 30 },
                        { x: '6', y: 25 },
                        { x: '7', y: 30 }
              ]
            },
            {
              name: 'Week 3',
              data: [
                { x: '1', y: 29 },
                        { x: '2', y: 30 },
                        { x: '3', y: 30 },
                        { x: '4', y: 30 },
                        { x: '5', y: 26 },
                        { x: '6', y: 30 },
                        { x: '7', y: 28 }
              ]
            },
            {
              name: 'Week 4',
              data: [
                { x: '1', y: 28 },
                        { x: '2', y: 30 },
                        { x: '3', y: 30 },
                        { x: '4', y: 21 },
                        { x: '5', y: 30 },
                        { x: '6', y: 24 },
                        { x: '7', y: 30 }
              ]
            },
            {
                chart: {
                  height: 350,
                  type: 'heatmap'
                },
                dataLabels: {
                  enabled: false
                },
                title: {
                  text: 'Monthly attandence report'
                },
                plotOptions : {
                  heatmap: {
                    colorScale: {
                      ranges: [
                        {
                          from: 29,
                          to: 30,
                          color: '#1bc943',
                          name: 'Present',
                        },
                        {
                          from: 27,
                          to: 28,
                          color: '#4191ff',
                          name: 'Approved casual leave',
                        },
                        {
                          from: 25,
                          to: 26,
                          color: '#f83245',
                          name: 'Medical leave',
                        },              
                        {
                          from: 23,
                          to: 24,
                          color: '#FB607F',
                          name: 'Casual leaves',
                        },
                        {
                          from: 21, 
                          to: 22,
                          color: '#6a0dad',
                          name: 'Overtime',
                        }
              
                      ]
                    }
                  }}
              }
        ],
    }        
]



