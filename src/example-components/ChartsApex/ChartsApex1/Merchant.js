import React from "react";

import Chart from "react-apexcharts";
export default function Merchant(props) {
  const options = {
    xaxis: {
      categories: props.month,
    },
  };
  const series = [
    {
      name: "Order",
      data: props.order,
    },
    {
      name: "Refund",
      data: props.refund,
    },
  ];

  return (
    <>
      <Chart options={options} series={series} type="area" />
    </>
  );
}
