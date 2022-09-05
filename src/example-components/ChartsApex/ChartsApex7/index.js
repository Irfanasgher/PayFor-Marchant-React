import React from "react";

import Chart from "react-apexcharts";
export default function LivePreviewExample(props) {
  const options = {
    labels: ["Pending", "Completed", "Refund"],
  };
  // const series = [44, 55, 41];

  return (
    <>
      <div className="d-flex justify-content-center">
        <Chart
          options={options}
          series={props.data}
          type="donut"
          width="430"
          height={props.height}
        />
      </div>
    </>
  );
}
