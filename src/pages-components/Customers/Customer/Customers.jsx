import React, { useEffect } from "react";
import RcPagination from "rc-pagination";
import localeInfo from "rc-pagination/lib/locale/en_US";
import { Table } from "reactstrap";
import { FaUsers } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCustomer, GetAllCustomerByStoreID } from "../../../actions";

const Customers = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { customers } = useSelector((state) => state.CustomerReducer);
  const { user } = useSelector((state) => state.LoginReducer);

  useEffect(() => {
    if (user.role === "merchant") {
      dispatch(GetAllCustomerByStoreID(user.store_id.id));
    } else {
      dispatch(GetAllCustomer());
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  console.log("dataaaaa", customers);
  return (
    <div id="customers">
      <div className="addOrganization mb-1 d-flex align-items-center justify-content-between p-5">
        <div className="app-page-title--first">
          <div className="app-page-title--iconbox d-50">
            <div className="d-70 d-flex align-items-center justify-content-center">
              <FaUsers className="icon" />
            </div>
          </div>
          <div className="app-page-title--heading">
            <h1>Customers</h1>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="pt-3 pb-3 tableContainer m-1">
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
              {customers?.map((data, key) => {
                return (
                  <tr key={key}>
                    <td className="text-left pl-4">
                      <span>{key + 1}</span>
                    </td>
                    <td
                      className="text-center"
                      style={{ textDecoration: "underline", cursor: "pointer" }}
                      onClick={() =>
                        history.push({
                          pathname: "/customers/customer-detail",
                          state: { data },
                        })
                      }
                    >
                      <span style={{ textTransform: "capitalize" }}>
                        {data.user.first_name} {data.user.last_name}
                      </span>
                    </td>

                    <td className="text-center">
                      <span>{data.user.id}</span>
                    </td>
                    <td className="text-center">
                      <span>{data.user?.account?.email}</span>
                    </td>
                    <td className="text-center">
                      <span>{data.user.phone_number}</span>
                    </td>
                    <td className="text-center">
                      <span>{data?.user?.status ?? ""}</span>
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
      </div>
    </div>
  );
};
export default Customers;
