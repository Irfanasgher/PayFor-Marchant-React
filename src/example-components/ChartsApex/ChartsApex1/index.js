import React from "react";

import Chart from "react-apexcharts";
export default function LivePreviewExample(props) {
  const options = {
    xaxis: {
      categories: props.month,
    },
  };
  const series = [
    {
      name: "Clients",
      data: props.client,
    },
    {
      name: "Customers",
      data: props.customer,
    },
  ];

  return (
    <>
      <Chart options={options} series={series} type="area" />
    </>
  );
}
