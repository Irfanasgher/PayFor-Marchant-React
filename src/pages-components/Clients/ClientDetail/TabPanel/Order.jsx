import React from "react";
import RcPagination from "rc-pagination";
import localeInfo from "rc-pagination/lib/locale/en_US";
import { Table } from "reactstrap";

const Order = ({ data }) => {
  return (
    <div className="pt-3 pb-3 tableContainer3 m-1">
      <div className="card-header pr-2">
        <div className="card-header--title">Order Details</div>
      </div>
      <Table
        responsive
        className="table-alternate-spaced text-nowrap mb-0"
        style={{ margin: "0px" }}
      >
        <thead className="font-size-sm">
          <tr>
            <th className="text-left p-3 pl-4">ORDER ID</th>
            <th className="text-center p-3">Name</th>
            <th className="text-center p-3">MERCHANT</th>
            {/* <th className="text-center p-3">MERCHANT ID</th> */}
            <th className="text-center p-3">Location</th>
            {/* <th className="text-center p-3">Location ID</th> */}
            <th className="text-center p-3">ORDER PRICE</th>
            <th className="text-center p-3">1ST INSTALLMENT</th>
            {/* <th className="text-center p-3">Product Name</th>
            <th className="text-center p-3">SKU</th>
            <th className="text-center p-3">Product PRICE</th> */}
          </tr>
        </thead>
        <tbody>
          {data?.store?.orderDetail?.map((item, key) => {
            return (
              <tr key={key}>
                <td
                  className="text-left pl-4"
                  // style={{ textDecoration: "underline" }}
                >
                  <span>{item.id}</span>
                </td>
                <td className="text-center">
                  <span style={{ textTransform: "capitalize" }}>
                    {item.user?.first_name} {item.user?.last_name}
                  </span>
                </td>
                <td className="text-center">
                  <span style={{ textTransform: "capitalize" }}>
                    {data?.store?.name}
                  </span>
                </td>
                {/* <td className="text-center">
                  <span>3213124</span>
                </td> */}
                <td className="text-center">
                  <span title={data?.address}>
                    {data?.address?.replace(/^(.{10}[^\s]*).*/, "$1")}
                  </span>
                </td>
                {/* <td className="text-center">
                  <span>2342342</span>
                </td> */}
                <td className="text-center">
                  <span>{item.price}</span>
                </td>
                <td className="text-center">
                  <span>{item.installmentPayout[0]?.installment_amount}</span>
                </td>
                {/* <td className="text-center">
                  <span>ABCDEF</span>
                </td>
                <td className="text-center">
                  <span>42121311</span>
                </td>
                <td className="text-center">
                  <span>24,000</span>
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="p-3 d-flex align-items-center justify-content-end my-4">
        <RcPagination
          prevIcon={"Previous"}
          nextIcon={"Next"}
          //   selectComponentClass={Select}
          //   showQuickJumper
          //   showSizeChanger
          defaultPageSize={50}
          //   defaultCurrent={5}
          total={150}
          locale={localeInfo}
        />
      </div>
    </div>
  );
};
export default Order;
