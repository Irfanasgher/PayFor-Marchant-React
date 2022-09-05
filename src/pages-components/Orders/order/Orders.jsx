import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import RcPagination from "rc-pagination";
import localeInfo from "rc-pagination/lib/locale/en_US";
// import Select from "rc-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Table,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormGroup,
  Input,
} from "reactstrap";
import DatePicker from "react-datepicker";
import Select from "react-dropdown-select";
import { useDispatch, useSelector } from "react-redux";
import {
  FaBoxes,
  // FaPlus,
  FaSearch,
  FaCalendarAlt,
} from "react-icons/fa";
import { GetAllOrder, GetAllOrderByStoreID } from "../../../actions";

const Orders = () => {
  const [disabled] = useState(false);
  const [selectValues, setSelectValues] = useState([]);
  const [searchable] = useState(true);
  const [labelField] = useState("username");
  const [valueField] = useState("email");
  const [startDate, setStartDate] = useState(new Date());

  console.log("EmployeeDirectory", selectValues);

  const dispatch = useDispatch();
  const history = useHistory();

  const { user } = useSelector((state) => state.LoginReducer);

  useEffect(() => {
    if (user.role === "merchant") {
      dispatch(GetAllOrderByStoreID(user.store_id.id));
    } else {
      dispatch(GetAllOrder());
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const order = useSelector((state) => state.OrderReducer);
  console.log("orders", order);
  const [orders, setOrder] = useState(order.orders);

  useEffect(() => {
    setOrder(order.orders);
  }, [order.orders]); // eslint-disable-line react-hooks/exhaustive-deps

  const options = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      phone: "1-463-123-4447",
      website: "ramiro.info",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      phone: "493-170-9623 x156",
      website: "kale.biz",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      phone: "(254)954-1289",
      website: "demarco.info",
    },
    {
      id: 6,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
      phone: "(775)976-6794 x41206",
      website: "conrad.com",
    },
  ];

  // const handleToggle = (data) => {
  //   if (data?.empDetail.is_enable_employee_info === true) {
  //     dispatch(disableEmployeeListID(data?.empDetail.id_employee_info));
  //   } else {
  //     dispatch(enableEmployeeListByID(data?.empDetail.id_employee_info));
  //   }
  // };

  // const clientData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  var itemName =
    orders?.itemDetail?.length > 0 && orders?.itemDetail[0]?.item_name;
  return (
    <div id="employeeDirectory">
      <div className="addOrganization mb-1 d-flex align-items-center justify-content-between p-5">
        <div className="app-page-title--first">
          <div className="app-page-title--iconbox d-50">
            <div className="d-70 d-flex align-items-center justify-content-center">
              <FaBoxes className="icon" />
            </div>
          </div>
          <div className="app-page-title--heading">
            <h1>Orders</h1>
          </div>
        </div>
        {/* <Button color="primary" onClick={() => history.push("/dashboard")}>
          <span className="btn-wrapper--icon">
            <FaPlus className="icon" />
          </span>
          <span className="btn-wrapper--label">Generate New Order</span>
        </Button> */}
      </div>
      <div className="p-5">
        <div className="p-3 tableContainer1 m-1 selct-pepl">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <div className="select-container">
                <FormGroup style={{ marginBottom: "0" }}>
                  <InputGroup className="input-group-seamless">
                    <Input placeholder="Search" type="search" />
                    <InputGroupAddon addonType="append">
                      <InputGroupText>
                        <FaSearch className="icon" />
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </FormGroup>
              </div>
              <div className="select-container ml-3">
                <Select
                  options={options}
                  placeholder="Payout Status"
                  searchable={searchable}
                  disabled={disabled}
                  labelField={labelField}
                  valueField={valueField}
                  // values={[options.find((opt) => opt.username === "Kamren")]}
                  onChange={(values) => setSelectValues(values)}
                />
              </div>
              <div className="select-container ml-3">
                <Select
                  options={options}
                  placeholder="Payment Status"
                  searchable={searchable}
                  disabled={disabled}
                  labelField={labelField}
                  valueField={valueField}
                  // values={[options.find((opt) => opt.username === "Kamren")]}
                  onChange={(values) => setSelectValues(values)}
                />
              </div>
              <div className="select-container ml-3">
                <Select
                  options={options}
                  placeholder="Source"
                  searchable={searchable}
                  disabled={disabled}
                  labelField={labelField}
                  valueField={valueField}
                  // values={[options.find((opt) => opt.username === "Kamren")]}
                  onChange={(values) => setSelectValues(values)}
                />
              </div>
            </div>
            <div className="select-container ml-3">
              <Button
                size="sm"
                color="first"
                className="d-flex align-items-center justify-content-between"
              >
                Run
                <span className="ml-4">
                  <FontAwesomeIcon
                    icon={["fas", "arrow-circle-right"]}
                    className="mx-auto"
                  />
                </span>
              </Button>
            </div>
          </div>
          <div
            className="d-flex align-items-center justify-content-between"
            style={{ marginTop: "10px" }}
          >
            <div className="d-flex align-items-center">
              <div className="select-container">
                <Select
                  options={options}
                  placeholder="Location"
                  searchable={searchable}
                  disabled={disabled}
                  labelField={labelField}
                  valueField={valueField}
                  // values={[options.find((opt) => opt.username === "Kamren")]}
                  onChange={(values) => setSelectValues(values)}
                />
              </div>
              <div className="select-container ml-3">
                <Select
                  options={options}
                  placeholder="Payment Method"
                  searchable={searchable}
                  disabled={disabled}
                  labelField={labelField}
                  valueField={valueField}
                  // values={[options.find((opt) => opt.username === "Kamren")]}
                  onChange={(values) => setSelectValues(values)}
                />
              </div>
              <div className="select-container ml-3">
                <Select
                  options={options}
                  placeholder="Order Status"
                  searchable={searchable}
                  disabled={disabled}
                  labelField={labelField}
                  valueField={valueField}
                  // values={[options.find((opt) => opt.username === "Kamren")]}
                  onChange={(values) => setSelectValues(values)}
                />
              </div>
            </div>
            <div className="select-container">
              <DatePicker
                className="form-control"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                customInput={
                  <Button
                    size="sm"
                    block
                    color="first"
                    className="d-flex align-items-center justify-content-between"
                  >
                    <span className="btn-wrapper--label">Date</span>
                    <span className="btn-wrapper--icon">
                      <FaCalendarAlt className="icon" />
                    </span>
                  </Button>
                }
              />
            </div>
          </div>
        </div>
        {/* <div className="tableContainer m-1" style={{ padding: "0px" }}>
          <Tables11 />
        </div> */}
        <br />
        <div className="pt-3 pb-3 tableContainer m-1">
          <Table
            responsive
            className="table-alternate-spaced text-nowrap mb-0"
            style={{ margin: "0px" }}
          >
            <thead className="font-size-sm">
              <tr>
                <th className="text-left p-3 pl-4">ORDER ID</th>
                <th className="text-center p-3">Invoice/Order No</th>
                <th className="text-center p-3">NAME</th>
                <th className="text-center p-3">MERCHANT</th>
                {/* <th className="text-center p-3">MERCHANT ID</th>
                <th className="text-center p-3">Location</th>
                <th className="text-center p-3">LOCATION ID</th> */}
                <th className="text-center p-3">ORDER PRICE</th>
                <th className="text-center p-3">1ST INSTALLMENT</th>
                {/* <th className="text-center p-3">PRODUCTS</th> */}
                {/* <th className="text-center p-3">PAYOUT STATUS</th> */}
                {/* <th className="text-center p-3">PAYMENT STATUS</th> */}
                <th className="text-center p-3">ORDER STATUS</th>
                {/* <th className="text-center p-3">Refund</th> */}
                <th className="text-center p-3">DATE</th>
                {/* <th className="text-center p-3">CREATED BY</th> */}
                {/* <th className="text-center p-3">SOURCE</th> */}
                <th className="text-center p-3">Product Name</th>
                {/* <th className="text-center p-3">SKU</th> */}
                <th className="text-center p-3">Product PRICE</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((data, key) => {
                var arr = data?.createdAt;
                var date = arr?.split("T");
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
                          pathname: "/orders/order-detail",
                          state: { data },
                        })
                      }
                    >
                      <span>{data?.order_nop_id}</span>
                    </td>

                    <td className="text-center">
                      <span style={{ textTransform: "capitalize" }}>
                        {data?.user?.first_name} {data?.user?.last_name}
                      </span>
                    </td>
                    <td className="text-center">
                      <span style={{ textTransform: "capitalize" }}>
                        {data?.store?.name}
                      </span>
                    </td>
                    {/* <td className="text-center">
                  <span>Mushq</span>
                </td>
                <td className="text-center">
                  <span>3213124</span>
                </td>
                <td className="text-center">
                  <span>LHR</span>
                </td>
                <td className="text-center">
                  <span>2342342</span>
                </td> */}
                    <td className="text-center">
                      <span>{data.price}</span>
                    </td>
                    <td className="text-center">
                      <span>
                        {data?.installmentPayout?.length > 0 &&
                          data?.installmentPayout[0]?.installment_amount}
                      </span>
                    </td>
                    {/* <td className="text-center">
                  <span>1</span>
                </td> */}
                    {/* <td className="text-center">
                  <span>
                    {orders?.installmentPayout?.length > 0 &&
                      (orders?.installmentPayout[0]?.is_paid
                        ? "Paid"
                        : "Not Paid")}
                  </span>
                </td> */}
                    <td className="text-center">
                      <span>
                        {data?.is_completed ? "Completed" : "Pending"}
                      </span>
                    </td>
                    {/* <td className="text-center">
                  <span>Shipped</span>
                </td>
                <td className="text-center">
                  <span>Requested</span>
                </td> */}
                    <td className="text-center">
                      <span>{date?.length > 0 && date[0]}</span>
                    </td>
                    {/* <td className="text-center">
                  <span>Irfan Asgher</span>
                </td> */}
                    {/* <td className="text-center">
                  <span>In-Store</span>
                </td> */}
                    <td className="text-center">
                      <span title={itemName.toString()}>
                        {data?.itemDetail?.length > 0 &&
                          data?.itemDetail[0]?.item_name.replace(
                            /^(.{10}[^\s]*).*/,
                            "$1"
                          )}
                      </span>
                    </td>
                    {/* <td className="text-center">
                  <span>42121311</span>
                </td> */}
                    <td className="text-center">
                      <span>
                        {data?.itemDetail?.length > 0 &&
                          data?.itemDetail[0]?.item_price}
                      </span>
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
export default Orders;
