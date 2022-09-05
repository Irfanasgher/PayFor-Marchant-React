import React, { useEffect, useState } from "react";
import Select from "react-select";
import clsx from "clsx";
import { useLocation } from "react-router-dom";

import {
  getAllStates,
  getAllCompanyData,
  getAllCountries,
  postLocationForm,
} from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Row,
  Table,
  Col,
  Card,
  Label,
  FormGroup,
  Input,
  Container,
  CardHeader,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  TabContent,
  TabPane,
} from "reactstrap";

import PerfectScrollbar from "react-perfect-scrollbar";
import stock1 from "../../assets/images/stock-photos/stock-1.jpg";
import { Grid, List } from "react-feather";

export default function UnitDetails(props) {
  const location = useLocation();
  // console.log(location);
  const { state } = location;

  const [modal2, setModal2] = useState(false);
  const toggle2 = () => setModal2(!modal2);

  const [unitCode] = useState(location?.state?.unitCode);
  const [unitName] = useState(location?.state?.unitName);
  const [unitNote] = useState(location?.state?.unitNote);
  const unitId = props.match.params.id;

  const [nameDivision, setNameDivision] = useState("");
  const [nameDistrict, setNameDistrict] = useState("");
  const [nameTehsil, setNameTehsil] = useState("");
  const [nameCity, setNameCity] = useState("");
  const [nameLocation, setNameLocation] = useState("");
  const [codeLocation, setCodeLocation] = useState("");
  const [noteLocation, setNoteLocation] = useState("");
  const [addressLocation1, setAddressLocation1] = useState("");
  const [addressLocation2, setAddressLocation2] = useState("");
  const [countryName, setCountryName] = useState("");
  const [stateName, setStateName] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const dispatch = useDispatch();

  const { getAllCompanyListData } = useSelector(
    (state) => state.CompanyReducer
  );
  const unit = getAllCompanyListData?.unit;

  const unitDetail =
    unit &&
    unit.filter((u, iu) => {
      return u?.unitDetail?.id_unit === parseInt(props?.match?.params?.id);
    })[0].unitDetail;

  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getAllCompanyData(props.match.params.compid));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { countriesData } = useSelector((state) => state.CompanyReducer);
  const addLocation = () => {
    const data = {
      name_division: nameDivision,
      name_district: nameDistrict,
      name_tehsil: nameTehsil,
      name_city: nameCity,
      name_location: nameLocation,
      code_location: codeLocation,
      address1_location: addressLocation1,
      address2_location: addressLocation2,
      postal_code_location: postalCode,
      note_location: noteLocation,
      state_id: stateName.value,
      unitId: unitId,
    };
    dispatch(postLocationForm(data));
  };

  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);

  const toggleSidebarMenu = () => setIsSidebarMenuOpen(!isSidebarMenuOpen);

  const option = [
    countriesData?.map((pdes) => {
      var value = pdes.id_country;
      var label = pdes.name_country;
      return { value, label };
    }),
  ];

  const handleChange = (countryName) => {
    setCountryName(countryName);
    dispatch(getAllStates(countryName.value));
  };
  const handleChangee = (stateName) => {
    setStateName(stateName);
  };

  const { statesData } = useSelector((state) => state.CompanyReducer);

  const options = [
    statesData?.map((pdes) => {
      var value = pdes.id_state;
      var label = pdes.name_state;
      return { value, label };
    }),
  ];

  return (
    <>
      <div className="d-flex d-lg-none p-4 order-0 justify-content-end align-items-center">
        <Button
          onClick={toggleSidebarMenu}
          size="sm"
          color="primary"
          className="p-0 btn-icon d-40"
        >
          <FontAwesomeIcon icon={["fas", "ellipsis-v"]} />
        </Button>
      </div>
      <div className="app-inner-content-layout--main bg-white p-0">
        <PerfectScrollbar>
          <CardHeader className="d-block text-center text-sm-left d-sm-flex justify-content-between rounded-0 bg-white px-5 py-4 border-bottom">
            <div className="font-weight-bold display-4 mb-3 mb-sm-0">
              Projects
            </div>
          </CardHeader>
          <div className="px-5 pt-5">
            <Card className="d-block d-md-flex text-center text-md-left card-box p-4 align-items-center bg-secondary justify-content-between flex-row">
              <div className="d-block d-md-flex align-items-center">
                <Button
                  href="#/"
                  size="sm"
                  className="m-2"
                  onClick={toggle2}
                  color="primary"
                >
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={["fas", "plus"]} />
                  </span>
                  <span className="btn-wrapper--label">Add Location</span>
                </Button>
              </div>
              <Modal
                zIndex={2000}
                centered
                scrollable
                isOpen={modal2}
                toggle={toggle2}
              >
                <ModalHeader toggle={toggle2}>
                  Provide company's detail
                </ModalHeader>
                <ModalBody>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      addLocation();
                    }}
                  >
                    <Container>
                      <div className="text-uppercase font-weight-bold text-primary pt-4 font-size-sm">
                        Add Location
                      </div>
                      <div className="py-4">
                        <Row>
                          <Col md="12">
                            <FormGroup>
                              <Label className="font-weight-bold" for="">
                                Location Name
                              </Label>
                              <Input
                                type="text"
                                name=""
                                id=""
                                onChange={(e) => {
                                  setNameLocation(e.target.value);
                                }}
                                placeholder="Enter an organization name..."
                              />
                            </FormGroup>
                          </Col>

                          <Col md="12">
                            <FormGroup>
                              <Label className="font-weight-bold" for="">
                                Location Code
                              </Label>
                              <Input
                                type="text"
                                name=""
                                id=""
                                onChange={(e) => {
                                  setCodeLocation(e.target.value);
                                }}
                                placeholder="Enter an organization name..."
                              />
                            </FormGroup>
                          </Col>

                          <Col md="12">
                            <FormGroup>
                              <Label className="font-weight-bold" for="">
                                Location Note
                              </Label>
                              <Input
                                type="text"
                                name=""
                                id=""
                                onChange={(e) => {
                                  setNoteLocation(e.target.value);
                                }}
                                placeholder="Enter an organization name..."
                              />
                            </FormGroup>
                          </Col>

                          <Col md="12">
                            <FormGroup>
                              <Label className="font-weight-bold" for="">
                                Country Name
                              </Label>
                              <Select
                                value={countryName}
                                onChange={handleChange}
                                options={option[0]}
                              />
                            </FormGroup>
                          </Col>

                          <Col md="12">
                            <FormGroup>
                              <Label className="font-weight-bold" for="">
                                State Name
                              </Label>
                              <Select
                                value={stateName}
                                onChange={handleChangee}
                                options={options[0]}
                              />
                            </FormGroup>
                          </Col>

                          <Col md="12">
                            <FormGroup>
                              <Label className="font-weight-bold" for="">
                                Division Name
                              </Label>
                              <Input
                                type="text"
                                name=""
                                id=""
                                onChange={(e) => {
                                  setNameDivision(e.target.value);
                                }}
                                placeholder="Add details about your organization"
                              />
                            </FormGroup>
                          </Col>

                          <Col md="12">
                            <FormGroup>
                              <Label className="font-weight-bold" for="">
                                District Name
                              </Label>
                              <Input
                                type="text"
                                name=""
                                id=""
                                onChange={(e) => {
                                  setNameDistrict(e.target.value);
                                }}
                                placeholder="Add details about your organization"
                              />
                            </FormGroup>
                          </Col>

                          <Col md="12">
                            <FormGroup>
                              <Label className="font-weight-bold" for="">
                                Tehsil Name
                              </Label>
                              <Input
                                type="text"
                                name=""
                                id=""
                                onChange={(e) => {
                                  setNameTehsil(e.target.value);
                                }}
                                placeholder="Add details about your organization"
                              />
                            </FormGroup>
                          </Col>

                          <Col md="12">
                            <FormGroup>
                              <Label className="font-weight-bold" for="">
                                City Name
                              </Label>
                              <Input
                                type="text"
                                name=""
                                id=""
                                onChange={(e) => {
                                  setNameCity(e.target.value);
                                }}
                                placeholder="Add details about your organization"
                              />
                            </FormGroup>
                          </Col>
                          <Col md="12">
                            <FormGroup>
                              <Label className="font-weight-bold" for="">
                                Postal Code
                              </Label>
                              <Input
                                type="text"
                                name=""
                                id=""
                                onChange={(e) => {
                                  setPostalCode(e.target.value);
                                }}
                                placeholder="Add details about your organization"
                              />
                            </FormGroup>
                          </Col>
                          <Col md="12">
                            <FormGroup>
                              <Label className="font-weight-bold" for="">
                                Address 1
                              </Label>
                              <Input
                                type="textarea"
                                name=""
                                id=""
                                onChange={(e) => {
                                  setAddressLocation1(e.target.value);
                                }}
                                placeholder="Add details about your organization"
                              />
                            </FormGroup>
                          </Col>

                          <Col md="12">
                            <FormGroup>
                              <Label className="font-weight-bold" for="">
                                Address 2
                              </Label>
                              <Input
                                type="textarea"
                                name=""
                                id=""
                                onChange={(e) => {
                                  setAddressLocation2(e.target.value);
                                }}
                                placeholder="Add details about your organization"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                    </Container>

                    <ModalFooter>
                      <Button
                        color="link"
                        className="btn-link-dark"
                        onClick={toggle2}
                      >
                        Close
                      </Button>{" "}
                      <Button
                        color="primary"
                        type="submit"
                        className="ml-auto"
                        onClick={toggle2}
                      >
                        Submit
                      </Button>
                    </ModalFooter>
                  </form>
                </ModalBody>
              </Modal>
              <div>
                <div className="btn-group">
                  <Button
                    className={clsx("d-40 p-0 btn-icon btn-animated-icon-sm", {
                      active: activeTab === "1",
                    })}
                    onClick={() => {
                      toggle("1");
                    }}
                    color="primary"
                  >
                    <span className="btn-wrapper--icon d-20 d-flex align-items-center justify-content-center">
                      <Grid />
                    </span>
                  </Button>
                  <Button
                    className={clsx("d-40 p-0 btn-icon btn-animated-icon-sm", {
                      active: activeTab === "2",
                    })}
                    onClick={() => {
                      toggle("2");
                    }}
                    color="primary"
                  >
                    <span className="btn-wrapper--icon d-20 d-flex align-items-center justify-content-center">
                      <List />
                    </span>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <div className="p-5">
                <Row>
                  <div className="col-md-4">
                    <button
                      style={{
                        backgroundColor: "#f8f9ff",
                        border: "none",
                        padding: "0px",
                        margin: "0px",
                      }}
                      className="card m-3 shadow-sm-dark card-box-hover-rise"
                    >
                      <img src={stock1} className="card-img-top" alt="..." />

                      <div className="p-3 bg-secondary rounded-bottom p-xl-4">
                        <h3>
                          {" "}
                          {state !== undefined
                            ? unitName
                            : unitDetail?.name_unit}
                        </h3>
                        <p className="text-left opacity-8 mt-4 mb-0">
                          {state !== undefined
                            ? unitNote
                            : unitDetail?.note_unit}
                          <br />
                          {state !== undefined
                            ? unitCode
                            : unitDetail?.code_unit}
                        </p>
                      </div>
                    </button>
                  </div>
                </Row>
              </div>
            </TabPane>
            <TabPane tabId="2">
              <div className="p-5">
                <Table
                  responsive
                  className="table-alternate-spaced text-nowrap mb-0"
                >
                  <thead className="bg-white font-size-sm">
                    <tr>
                      <th className="bg-white text-left px-4">Unit</th>
                      <th className="bg-white text-center">
                        Organization Note
                      </th>
                      <th className="bg-white text-center">
                        Organization Code
                      </th>
                      <th className="bg-white text-center">Location</th>
                      <th className="bg-white text-right px-4"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4">
                        <div className="d-flex align-items-center">
                          <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-plum-plate">
                            <FontAwesomeIcon
                              icon={["far", "bell"]}
                              className="font-size-xxl"
                            />
                          </div>
                          <div>
                            <div className="font-weight-bold">{unitName}</div>
                            <div className="opacity-7">Today's analytics</div>
                          </div>
                        </div>
                      </td>

                      <td className="text-center">
                        <span>{unitNote}</span>
                      </td>

                      <td className="text-center">
                        <span>{unitCode}</span>
                      </td>

                      <td className="text-center">
                        <span>{unitCode}</span>
                      </td>
                    </tr>

                    <tr className="divider"></tr>
                  </tbody>
                </Table>
              </div>
            </TabPane>
          </TabContent>
        </PerfectScrollbar>
      </div>
    </>
  );
}
