import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  getCompanyList,
  UpdateCompanyByID,
  enableCompany,
  disableCompany,
} from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Switch from "rc-switch";
import {
  Row,
  Table,
  Col,
  Label,
  FormGroup,
  Input,
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import "./CompanyViews.scss";

export default function CompanyViews(props) {
  const location = useLocation();
  console.log("PRops data:", location);

  const [updateModal, setUpdateModal] = useState(false);
  const updateModalToggle = () => setUpdateModal(!updateModal);

  const [companyName, setCompanyName] = useState("");
  const [companyNote, setCompanyNote] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyPhone, setCompanyPhone] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [companyId, setCompanyId] = useState();

  const orgId = props.orgIdPass;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanyList(orgId));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleUpdateModalToggle = (data) => {
    setCompanyName(data.name_company);
    setCompanyNote(data.note_company);
    setCompanyEmail(data.email_company);
    setCompanyPhone(data.phone_company);
    setCompanyWebsite(data.url_website_company);
    setCompanyId(data.id_company);

    updateModalToggle();
  };
  console.log("companyId", companyId);

  const updateComp = (e) => {
    e.preventDefault();

    const data = {
      name_company: companyName,
      note_company: companyNote,
      email_company: companyEmail,
      phone_company: companyPhone,
      url_website_company: companyWebsite,
    };
    if (
      companyName?.length > 0 &&
      companyNote?.length > 0 &&
      companyEmail?.length > 0 &&
      companyPhone?.length > 0 &&
      companyWebsite?.length > 0
    ) {
      dispatch(UpdateCompanyByID(data, companyId, orgId));
    } else {
      alert("All fields must be filled");
    }
    getCompanyList(orgId);
    updateModalToggle();
  };

  const handleToggle = (data) => {
    if (data.is_enable_company === true) {
      dispatch(disableCompany(data.id_company, orgId));
    } else {
      dispatch(enableCompany(data.id_company, orgId));
    }
  };

  const history = useHistory();
  const { company } = useSelector((state) => state.CompanyReducer);
  console.log("companyeeeeeeeeeee", company);
  return (
    <div id="companies">
      <div className="addOrganization mb-1 d-flex align-items-center justify-content-between p-5">
        <div className="editContainer">
          <span className="btn-wrapper--icon">
            {/* <FontAwesomeIcon icon={["fas", "edit"]} color={"#fff"} /> */}
          </span>
        </div>
        <div className="d-flex align-items-center">
          <div
            className="box d-flex align-items-center justify-content-center"
            style={{ overflow: "hidden" }}
          >
            <img
              src={
                location?.state?.singleOrganization?.url_logo_organization
                  ?.length > 0
                  ? location?.state?.singleOrganization?.url_logo_organization
                  : "/logo-2.png"
              }
              // src={
              //   location?.state?.org?.icon?.length > 0
              //     ? `data:image/jpeg;base64,${location?.state?.org?.icon.replaceAll(
              //         "data:image/png;base64,",
              //         ""
              //       )}`
              //     : "/logo-2.png"
              // }
              style={{
                width: "80%",
                // height: "90%",
                objectFit: "contain",
                // borderRadius: "50%",
              }}
              alt="logo"
            />
          </div>
          <div className="ml-5 app-page-title--heading">
            <h1 className="organizationName">
              {location?.state?.singleOrganization?.name_organization}
            </h1>
            <div className="d-flex align-items-center">
              <p className="owner">Owner Name:</p>
              <p className="owner ml-1">
                {location?.state?.singleOrganization?.name_owner_organization}
              </p>
            </div>
            <div className="d-flex align-items-center">
              <p className="owner">Contact No:</p>
              <p className="owner ml-1">
                {location?.state?.singleOrganization?.phone_organization}
              </p>
            </div>
            <div className="d-flex">
              <p className="owner">Email Address:</p>
              <p className="owner ml-1">
                {location?.state?.singleOrganization?.email_organization}
              </p>
            </div>

            <div className="d-flex align-items-center">
              <p className="owner">Address:</p>
              <p className="owner ml-1">
                {
                  location?.state?.singleOrganization?.locations[0]
                    ?.name_location
                }
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex align-items-center">
            <p className="owner">Website:</p>
            <p className="owner ml-1">
              {location?.state?.singleOrganization?.url_website_organization}
            </p>
          </div>
          <div className="d-flex align-items-center">
            <p className="owner">Code# :</p>
            <p className="owner ml-1">
              {location?.state?.singleOrganization?.code_organization}
            </p>
          </div>
          <div className="d-flex align-items-center">
            <p className="owner">NTN# :</p>
            <p className="owner ml-1">
              {location?.state?.singleOrganization?.ntn_organization}
            </p>
          </div>
          <Button
            // href="#"
            size="m"
            className="m-2 py-3"
            // onClick={toggle2}
            // color="primary"
            style={{
              backgroundColor: "#00C74E",
              color: "#fff",
              borderColor: "#00C74E",
              boxShadow: "none",
            }}
          >
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon icon={["fas", "file-download"]} />
            </span>
            <span className="btn-wrapper--label ml-3">Download</span>
            <span className="btn-wrapper--icon ml-3">
              <FontAwesomeIcon icon={["fas", "angle-down"]} />
            </span>
          </Button>
        </div>
      </div>

      <Modal
        zIndex={2000}
        centered
        scrollable
        isOpen={updateModal}
        toggle={updateModalToggle}
      >
        <ModalHeader toggle={updateModalToggle}>
          Update company's detail
        </ModalHeader>
        <ModalBody>
          <form onSubmit={updateComp}>
            <Container>
              <div className="py-4">
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Company Name
                      </Label>
                      <Input
                        type="text"
                        name=""
                        value={companyName}
                        onChange={(e) => {
                          setCompanyName(e.target.value);
                        }}
                        placeholder="Enter Name..."
                      />
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Company Email
                      </Label>
                      <Input
                        type="email"
                        name=""
                        value={companyEmail}
                        onChange={(e) => {
                          setCompanyEmail(e.target.value);
                        }}
                        placeholder="Enter Email..."
                      />
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Ph#
                      </Label>
                      <Input
                        type="text"
                        name=""
                        value={companyPhone}
                        onChange={(e) => {
                          setCompanyPhone(e.target.value);
                        }}
                        placeholder="Ph#..."
                      />
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Website
                      </Label>
                      <Input
                        type="text"
                        name=""
                        value={companyWebsite}
                        onChange={(e) => {
                          setCompanyWebsite(e.target.value);
                        }}
                        placeholder="Website..."
                      />
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Company Details
                      </Label>
                      <Input
                        type="textarea"
                        name=""
                        value={companyNote}
                        onChange={(e) => {
                          setCompanyNote(e.target.value);
                        }}
                        placeholder="Add details about your company"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </Container>
            <div className="divider mt-5 mb-4" />

            <ModalFooter>
              <Button
                color="link"
                className="btn-link-dark"
                onClick={updateModalToggle}
              >
                Close
              </Button>{" "}
              <Button color="primary" type="submit" className="ml-auto">
                Submit
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </Modal>
      <div className="p-5">
        <div className="pt-3 pb-3 tableContainer m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Listed Companies</b>
            </div>
          </div>
          <Table responsive className="table-alternate-spaced text-nowrap mb-0">
            <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
              <tr>
                <th className="text-left p-3 pl-4">Company</th>
                <th className="text-center p-3">Email</th>
                <th className="text-center p-3">Country</th>
                <th className="text-center p-3">City</th>
                <th className="text-center p-3">Ph#</th>
                <th className="text-center p-3">Website</th>
                <th className="text-center p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {company?.map((comp, key) => {
                // console.log("viresafkdjakfjd", comp);
                return (
                  <tr key={key + 1}>
                    <td className="text-left pl-4">
                      <span>{comp.name_company}</span>
                    </td>
                    <td className="text-center">
                      <span>{comp.email_company}</span>
                    </td>

                    <td className="text-center">
                      <span>
                        {
                          comp?.locations[0]?.tehsil?.district?.division?.state
                            ?.country?.name_country
                        }
                      </span>
                    </td>
                    <td className="text-center">
                      <span>{comp?.locations[0]?.city?.name_city}</span>
                    </td>
                    <td className="text-center">
                      <span>{comp.phone_company}</span>
                    </td>
                    <td className="text-center">
                      <span>{comp.url_website_company}</span>
                    </td>
                    <td className="text-center">
                      <div className="d-flex align-items-center justify-content-center">
                        <Button
                          onClick={() => {
                            comp.is_enable_company &&
                              history.push({
                                pathname: `/dashboard/AddCompanyDetails/${comp.id_company}`,
                                state: { add: props?.add },
                              });
                          }}
                          style={{
                            background: "#00c74e",
                            color: "#fff",
                            cursor: !comp.is_enable_company
                              ? "not-allowed"
                              : "",
                          }}
                          className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                        >
                          <FontAwesomeIcon
                            icon={["far", "eye"]}
                            className="font-size-sm"
                          />
                        </Button>
                        <Button
                          onClick={() => handleUpdateModalToggle(comp)}
                          style={{ background: "#3B74F9", color: "#fff" }}
                          className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                        >
                          <FontAwesomeIcon
                            icon={["far", "edit"]}
                            className="font-size-sm"
                          />
                        </Button>
                        <div className="ml-2">
                          <Switch
                            checked={comp.is_enable_company}
                            onClick={() => handleToggle(comp)}
                            className="switch-medium toggle-switch-second"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {props.add && (
            <div className="d-block d-md-flex align-items-center justify-content-center">
              <Button
                href="#/"
                size="m"
                className="m-2"
                onClick={() => {
                  // updateModalToggle();
                  history.push({
                    pathname: `/dashboard/Organization/AddCompany/${orgId}`,
                    state: { orgId: orgId },
                  });
                }}
                color="primary"
              >
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={["fas", "plus"]} />
                </span>
                <span className="btn-wrapper--label">Add Company</span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
