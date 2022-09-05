import React from "react";
import RcPagination from "rc-pagination";
import localeInfo from "rc-pagination/lib/locale/en_US";
import { Table } from "reactstrap";

const Customer = ({ data }) => {
  return (
    <div className="pt-3 pb-3 tableContainer3 m-1">
      <div className="card-header pr-2">
        <div className="card-header--title">
          <b>Customers</b>
        </div>
      </div>
      <Table
        responsive
        className="table-alternate-spaced text-nowrap mb-0"
        style={{ margin: "0px" }}
      >
        <thead className="font-size-sm">
          <tr>
            <th className="text-left p-3 pl-4">Sr. No</th>
            <th className="text-center p-3">Customers Name</th>
            <th className="text-center p-3">Customers i'd</th>
            <th className="text-center p-3">Customers email</th>
            <th className="text-center p-3">Phone Number</th>
            <th className="text-center p-3">Customers Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.store?.orderDetail?.map((item, key) => {
            return (
              <tr key={key}>
                <td className="text-left pl-4">
                  <span>{key}</span>
                </td>
                <td className="text-center">
                  <span style={{ textTransform: "capitalize" }}>
                    {item.user?.first_name} {item.user?.last_name}
                  </span>
                </td>

                <td className="text-center">
                  <span>{item.id}</span>
                </td>
                <td className="text-center">
                  <span>Zaraali@payfor.com</span>
                </td>
                <td className="text-center">
                  <span>{item.user.phone_number}</span>
                </td>
                <td className="text-center">
                  <span>Active</span>
                </td>
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
export default Customer;
