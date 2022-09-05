import React, { useEffect } from "react";
import { FaTachometerAlt } from "react-icons/fa";
import { Row, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import BlocksProgressCircular2 from "../../../example-components/BlocksProgressCircular/BlocksProgressCircular2";
import MerchantProgressCircular2 from "../../../example-components/BlocksProgressCircular/BlocksProgressCircular2/Merchant";
import ChartsApex1 from "../../../example-components/ChartsApex/ChartsApex1";
import MerchantChartsApex1 from "../../../example-components/ChartsApex/ChartsApex1/Merchant";
import { ExampleWrapperSimple } from "../../../layout-components";
import ChartsApex3 from "../../../example-components/ChartsApex/ChartsApex3";
import ChartsApex7 from "../../../example-components/ChartsApex/ChartsApex7";
import {
  GetProgressChart,
  GetMerchantProgressChart,
  GetDonutChart,
  GetMerchantDonutChart,
  GetOrderByDayGraph,
  GetMerchantOrderByDayGraph,
  GetMonthlyGraph,
  GetMerchantMonthlyGraph,
} from "../../../actions";

// import ListGroupItemC from "./ListGroupItem";

const Overview = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.LoginReducer);

  useEffect(() => {
    if (user?.role === "merchant") {
      dispatch(GetMerchantProgressChart(user.store_id.id));
      dispatch(GetMerchantDonutChart(user.store_id.id));
      dispatch(GetMerchantOrderByDayGraph(user.store_id.id));
      dispatch(GetMerchantMonthlyGraph(user.store_id.id));
    } else {
      dispatch(GetProgressChart());
      dispatch(GetDonutChart());
      dispatch(GetOrderByDayGraph());
    }
    dispatch(GetMonthlyGraph());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const {
    progressChart,
    donutChart,
    dayGraphChart,
    monthlyGraph,
  } = useSelector((state) => state.ChartReducer);

  let dateArray = [];
  let barArray = [];
  // let weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  dayGraphChart?.forEach((item) => {
    // let day = new Date(item?.createdAt).getDay();
    // dateArray.push(weekDay[day]);
    dateArray.push(item.createdAt);
    barArray.push(item.TagCount);
  });

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = [];
  let monthlyClientBar = [];
  let monthlyCustomerBar = [];
  monthlyGraph?.client?.forEach((item) => {
    monthlyClientBar.push(item.TagCount);
  });
  monthlyGraph?.customer?.forEach((item) => {
    let day = new Date(item?.createdAt).getMonth();
    month.push(months[day]);
    monthlyCustomerBar.push(item.TagCount);
  });

  let monthlyOrderBar = [];
  let monthlyRefundBar = [];
  monthlyGraph?.order?.forEach((item) => {
    monthlyOrderBar.push(item.TagCount);
  });
  monthlyGraph?.refund?.forEach((item) => {
    let day = new Date(item?.createdAt).getMonth();
    month.push(months[day]);
    monthlyRefundBar.push(item.TagCount);
  });
  console.log("month", month);
  return (
    <div id="overview">
      <div className="addOrganization mb-1 d-flex align-items-center justify-content-between p-5">
        <div className="app-page-title--first">
          <div className="app-page-title--iconbox d-50">
            <div className="d-50 d-flex align-items-center justify-content-center">
              <FaTachometerAlt className="icon" />
            </div>
          </div>
          <div className="app-page-title--heading">
            <h1>Dashboards</h1>
          </div>
        </div>
      </div>
      <div className="p-5">
        <Row>
          <Col md={12}>
            {user?.role === "merchant" ? (
              <MerchantProgressCircular2 progressChart={progressChart} />
            ) : (
              <BlocksProgressCircular2 progressChart={progressChart} />
            )}
          </Col>
          <Col md={12} style={{ marginTop: "40px" }}></Col>
          <Col md={6}>
            <ExampleWrapperSimple
              sectionHeading={"Order by Location"}
              height={"450px"}
            >
              <ChartsApex3
                height={420}
                dateArray={dateArray}
                barArray={barArray}
              />
            </ExampleWrapperSimple>
          </Col>
          <Col md={6}>
            <ExampleWrapperSimple
              sectionHeading={"Order Status"}
              height={"450px"}
            >
              <ChartsApex7 height={420} data={donutChart} />
            </ExampleWrapperSimple>
          </Col>
          <Col md={12} style={{ marginTop: "40px" }}>
            {user?.role === "merchant" ? (
              <ExampleWrapperSimple
                sectionHeading={"Month Wise Orders and Refunds Headcount"}
              >
                <MerchantChartsApex1
                  month={month}
                  order={monthlyOrderBar}
                  refund={monthlyRefundBar}
                />
              </ExampleWrapperSimple>
            ) : (
              <ExampleWrapperSimple
                sectionHeading={"Month Wise Clients and Customers Headcount"}
              >
                <ChartsApex1
                  month={month}
                  client={monthlyClientBar}
                  customer={monthlyCustomerBar}
                />
              </ExampleWrapperSimple>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Overview;
