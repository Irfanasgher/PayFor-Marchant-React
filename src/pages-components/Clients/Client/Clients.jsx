import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import RcPagination from "rc-pagination";
import localeInfo from "rc-pagination/lib/locale/en_US";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Switch from "rc-switch";
import {
  Table,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormGroup,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import DatePicker from "react-datepicker";
import Select from "react-dropdown-select";
import { useDispatch, useSelector } from "react-redux";
import {
  FaUserFriends,
  // FaPlus,
  FaSearch,
  FaCalendarAlt,
} from "react-icons/fa";
import { GetAllClient } from "../../../actions";

const Clients = () => {
  const [open, setOpen] = useState(false);
  const modalToggle = () => setOpen(!open);

  const [disabled] = useState(false);
  const [selectValues, setSelectValues] = useState([]);
  const [searchable] = useState(true);
  const [labelField] = useState("username");
  const [valueField] = useState("email");
  const [startDate, setStartDate] = useState(new Date());

  console.log("EmployeeDirectory", selectValues);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(GetAllClient());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { clients } = useSelector((state) => state.ClientReducer);
  console.log("clients", clients);
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

  return (
    <div id="client">
      <Modal
        zIndex={2000}
        centered
        scrollable
        isOpen={open}
        toggle={modalToggle}
      >
        <ModalHeader toggle={modalToggle} style={{ border: "0" }}></ModalHeader>
        <ModalBody>
          <form>
            <div className="p-2 text-center">
              <h4 className="heading">
                Are you sure you <br />
                want to disable this client?
              </h4>
            </div>
            <div className="p-4 d-flex align-items-center justify-content-center">
              <Button
                color="primary"
                // type="submit"
                style={{ width: "155px" }}
                onClick={() => modalToggle()}
              >
                Yes
              </Button>
              <Button
                outline
                color="primary"
                className="ml-auto"
                style={{ width: "155px" }}
                onClick={() => modalToggle()}
              >
                No
              </Button>
            </div>
          </form>
        </ModalBody>
      </Modal>
      <div className="addOrganization mb-1 d-flex align-items-center justify-content-between p-5">
        <div className="app-page-title--first">
          <div className="app-page-title--iconbox d-50">
            <div className="d-70 d-flex align-items-center justify-content-center">
              <FaUserFriends className="icon" />
            </div>
          </div>
          <div className="app-page-title--heading">
            <h1>Clients</h1>
          </div>
        </div>
        {/* <Button color="primary" onClick={() => history.push("/dashboard")}>
          <span className="btn-wrapper--icon">
            <FaPlus className="icon" />
          </span>
          <span className="btn-wrapper--label">Add New Client</span>
        </Button> */}
      </div>
      <div className="p-5">
        <div className="p-3 tableContainer1 m-1 selct-pepl">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <div className="select-container">
                <Select
                  options={options}
                  placeholder="By Brand"
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
                  placeholder="By Creation"
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
                  placeholder="By Sale"
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
              <div className="select-container ml-3">
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
                <th className="text-left p-3 pl-4">Sr. No</th>
                <th className="text-center p-3">Client Name</th>
                <th className="text-center p-3">Code</th>
                <th className="text-center p-3">Created Date</th>
                <th className="text-center p-3">Owned By </th>
                <th className="text-center p-3">Sale</th>
                <th className="text-center p-3">Location</th>
                <th className="text-center p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((data, key) => {
                var arr = data?.createdAt;
                var date = arr?.split("T");
                return (
                  <tr key={key}>
                    <td className="text-left pl-4">
                      <span>{data.id}</span>
                    </td>
                    <td
                      className="text-center"
                      style={{ textDecoration: "underline", cursor: "pointer" }}
                      onClick={() => {
                        history.push({
                          pathname: `/clients/client-detail/${data.id}`,
                        });
                      }}
                    >
                      <span style={{ textTransform: "capitalize" }}>
                        {data.company_name}
                      </span>
                    </td>

                    <td className="text-center">
                      <span>{data.registration_number}</span>
                    </td>
                    <td className="text-center">
                      <span>{date?.length > 0 && date[0]}</span>
                    </td>
                    <td className="text-center">
                      <span style={{ textTransform: "capitalize" }}>
                        {data?.client[0].contact_name}
                      </span>
                    </td>
                    <td className="text-center">
                      <span>{data.expected_sale}</span>
                    </td>
                    <td className="text-center">
                      <span title={data.address}>
                        {data.address?.replace(/^(.{10}[^\s]*).*/, "$1")}
                      </span>
                    </td>
                    <td className="text-center">
                      <div className="d-flex align-items-center justify-content-center">
                        <div className="ml-2">
                          <Switch
                            checked={data.is_active}
                            onClick={() => modalToggle()}
                            className="switch-small toggle-switch-second"
                          />
                        </div>
                      </div>
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
export default Clients;
