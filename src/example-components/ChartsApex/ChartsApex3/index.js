import React from "react";

import Chart from "react-apexcharts";
export default function LivePreviewExample(props) {
  const options = {
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: props.dateArray,
    },
  };
  const series = [
    {
      data: props.barArray,
    },
  ];

  return (
    <>
      <Chart
        options={options}
        series={series}
        type="bar"
        height={props.height}
      />
    </>
  );
}
