import React, { useEffect, useState } from "react";
import { useHistory, Link, useLocation } from "react-router-dom";
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
import {
  createCustomValues,
  GetAllCustomField,
  addOrganization,
  getOrganizationList,
  getSingleOrganization,
  enableOrganization,
  disableOrganization,
  UpdateOrganizationByID,
  getCompanyList,
} from "../../actions";
import "./OrganizationViews.scss";

export default function OrganizationViews(props) {
  let a = JSON.parse(localStorage.getItem("userData"));
  // console.log("local data", a.organization.value_employee_allocation);
  const orgID = a?.organization?.value_employee_allocation;
  const Owner = a?.rabc?.role?.name_role;

  const [addModal, setAddModal] = useState(false);
  const addModalToggle = () => setAddModal(!addModal);

  const [customModal, setCustomModal] = useState(false);
  const customModalToggle = () => setCustomModal(!customModal);

  const [updateModal, setUpdateModal] = useState(false);
  const updateModalToggle = () => setUpdateModal(!updateModal);

  const [organizationName, setOrganizationName] = useState("");
  const [organizationCode, setOrganizationCode] = useState("");
  const [image, setImage] = useState();

  const [updateOrganizationName, setUpdateOrganizationName] = useState("");
  const [
    updateOrganizationOwnerName,
    setUpdateOrganizationOwnerName,
  ] = useState("");
  const [updateOrganizationPhone, setUpdateOrganizationPhone] = useState("");
  const [updateOrganizationWebsite, setUpdateOrganizationWebsite] = useState(
    ""
  );
  // const [updateOrganizationIcon, setUpdateOrganizationIcon] = useState("");
  const [updateOrganizationId, setUpdateOrganizationId] = useState();

  const dispatch = useDispatch();
  const location = useLocation();

  console.log("locationsssss", location.pathname);

  useEffect(() => {
    dispatch(getOrganizationList());
    dispatch(getSingleOrganization(orgID));

    Owner === "Owner" &&
      dispatch(getCompanyList(orgID)).then((c) => {
        c?.length === 0 &&
          history.push({
            pathname: `/dashboard/Organization/AddCompany/${orgID}`,
            state: { orgId: orgID },
          });
      });

    dispatch(GetAllCustomField());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let baseURL = "";
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        baseURL = reader.result;
        // console.log("base url", baseURL);
        resolve(baseURL);
      };
    });
  };

  const handleFileInputChange = (e) => {
    getBase64(e.target.files[0])
      .then((result) => {
        // const str = result.replaceAll("data:image/jpeg;base64,", "");
        setImage(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addOrg = (e) => {
    e.preventDefault();

    const data = {
      name_organization: organizationName,
      code_organization: organizationCode,
      icon: image,
    };
    console.log("dsafhaaaaaaaaaa", data);
    if (
      organizationName.length > 0 &&
      organizationCode.length > 0 &&
      image.length > 0
    ) {
      dispatch(addOrganization(data));
    } else {
      alert("All fields must be filled");
    }
    addModalToggle();
    // customModalToggle();
  };

  const handleUpdateModal = (org) => {
    setUpdateOrganizationName(org.name_organization);
    setUpdateOrganizationOwnerName(org.name_owner_organization);
    setUpdateOrganizationPhone(org.phone_organization);
    setUpdateOrganizationWebsite(org.url_website_organization);
    setUpdateOrganizationId(org.id_organization);

    updateModalToggle();
  };

  const updateOrg = (e) => {
    e.preventDefault();

    const data = {
      name_organization: updateOrganizationName,
      name_owner_organization: updateOrganizationOwnerName,
      phone_organization: updateOrganizationPhone,
      url_website_organization: updateOrganizationWebsite,
    };
    if (
      updateOrganizationName.length > 0 &&
      updateOrganizationOwnerName.length > 0 &&
      updateOrganizationPhone.length > 0 &&
      updateOrganizationWebsite.length > 0
      // updateOrganizationIcon.length > 0
    ) {
      dispatch(UpdateOrganizationByID(data, updateOrganizationId, orgID));
    } else {
      alert("All fields must be filled");
    }
    updateModalToggle();
  };

  const handleToggle = (data) => {
    if (data?.is_enable_organization === true) {
      dispatch(disableOrganization(data?.id_organization, orgID));
    } else {
      dispatch(enableOrganization(data?.id_organization, orgID));
    }
  };

  const history = useHistory();

  // const { organizations, organizationData, singleOrganization } = useSelector(
  const { organizationData, singleOrganization } = useSelector(
    (state) => state.OrganizationReducer
  );
  const { customFieldData } = useSelector((state) => state.OrganizationReducer);

  // console.log("organizationData", organizations);

  const formSubmit = (e) => {
    e.preventDefault();
    var inputfields = document
      .getElementById("formDataControl")
      .querySelectorAll("input");

    const data = [];
    for (let i = 0; i < inputfields.length; i++) {
      // console.log(
      //   inputfields[i].name,
      //   inputfields[i].value,
      //   inputfields[i].type,
      //   inputfields[i].id
      // );
      data.push({
        custom_field_id: inputfields[i].id,
        company_id: organizationData?.company?.id_company,
        entered_custom_value:
          inputfields[i].type === "file" ? image : inputfields[i].value,
      });
    }

    // console.log("array", { mydata: data });
    dispatch(createCustomValues({ mydata: data }));
    customModalToggle();
  };

  console.log("singleOrganization", singleOrganization);
  return (
    <div id="organization">
      <div className="addOrganization mb-1 d-flex align-items-center justify-content-between p-5">
        <div className="app-page-title--first">
          <div className="app-page-title--iconbox d-70">
            <div className="d-70 d-flex align-items-center justify-content-center">
              <FontAwesomeIcon
                icon={["far", "building"]}
                style={{ fontSize: "20px", color: "#3C44B1" }}
                className="display-2"
              />
            </div>
          </div>
          <div className="app-page-title--heading">
            <h1 style={{ color: "#3A3D65" }}>Organization</h1>
          </div>
        </div>
        {props.add && (
          <div className="d-block d-md-flex align-items-center">
            <Link to="/dashboard/Organization/addOrganization">
              <Button
                // href="#/"
                size="m"
                className="m-2 py-3"
                onClick={addModalToggle}
                color="primary"
              >
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={["fas", "plus"]} />
                </span>
                <span className="btn-wrapper--label">Add Organization</span>
              </Button>
            </Link>
          </div>
        )}
      </div>

      <Modal
        zIndex={2000}
        size={"lg"}
        centered
        scrollable
        isOpen={customModal}
        toggle={customModalToggle}
      >
        <ModalHeader toggle={customModalToggle}>
          Provide organization's detail
        </ModalHeader>
        <ModalBody>
          <form onSubmit={formSubmit} method="post">
            <Container id="formDataControl">
              <div className="py-4">
                <Row>
                  {customFieldData?.map((data, index) => {
                    return (
                      <Col md="6" key={index}>
                        <FormGroup>
                          <Label className="font-weight-bold" for="">
                            {data.name_custom_field}
                          </Label>
                          <Input
                            type={data?.type_custom_field}
                            name={data?.name_custom_field.replace(" ", "")}
                            id={data?.id_custom_field}
                            onChange={(e) => {
                              data?.type_custom_field === "file" &&
                                handleFileInputChange(e);
                            }}
                            required={data?.is_required}
                          />
                        </FormGroup>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </Container>
            <div className="divider mt-5 mb-4" />

            <ModalFooter>
              <Button
                color="link"
                className="btn-link-dark"
                onClick={customModalToggle}
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

      <Modal
        zIndex={2000}
        centered
        scrollable
        isOpen={addModal}
        toggle={addModalToggle}
      >
        <ModalHeader toggle={addModalToggle}>
          Provide organization's detail
        </ModalHeader>
        <ModalBody>
          <form onSubmit={addOrg}>
            <Container>
              {/* <div className="text-uppercase font-weight-bold text-primary pt-4 font-size-sm">
                Add organization
              </div> */}
              <div className="py-4">
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Organization Name
                      </Label>
                      <Input
                        type="text"
                        name=""
                        id=""
                        onChange={(e) => {
                          setOrganizationName(e.target.value);
                        }}
                        placeholder="Enter name..."
                      />
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Organization Code
                      </Label>
                      <Input
                        type="text"
                        name=""
                        id=""
                        onChange={(e) => {
                          setOrganizationCode(e.target.value);
                        }}
                        placeholder="Add code..."
                      />
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Organization Image
                      </Label>
                      <Input
                        type="file"
                        name=""
                        id=""
                        onChange={(e) => {
                          handleFileInputChange(e);
                        }}
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
                onClick={addModalToggle}
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

      <Modal
        zIndex={2000}
        centered
        scrollable
        isOpen={updateModal}
        toggle={updateModalToggle}
      >
        <ModalHeader toggle={updateModalToggle}>
          Update organization's detail
        </ModalHeader>
        <ModalBody>
          <form onSubmit={updateOrg}>
            <Container>
              <div className="py-4">
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Organization Name
                      </Label>
                      <Input
                        type="text"
                        name=""
                        id=""
                        onChange={(e) => {
                          setUpdateOrganizationName(e.target.value);
                        }}
                        placeholder="Enter name..."
                        value={updateOrganizationName}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Organization Owner Name
                      </Label>
                      <Input
                        type="text"
                        name=""
                        id=""
                        onChange={(e) => {
                          setUpdateOrganizationOwnerName(e.target.value);
                        }}
                        placeholder="Add Owner Name"
                        value={updateOrganizationOwnerName}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Organization Phone Number
                      </Label>
                      <Input
                        type="text"
                        name=""
                        id=""
                        onChange={(e) => {
                          setUpdateOrganizationPhone(e.target.value);
                        }}
                        placeholder="Add Number"
                        value={updateOrganizationPhone}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Organization Website
                      </Label>
                      <Input
                        type="text"
                        name=""
                        id=""
                        onChange={(e) => {
                          setUpdateOrganizationWebsite(e.target.value);
                        }}
                        placeholder="Add Website"
                        value={updateOrganizationWebsite}
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
              <b>Organization</b>
            </div>
          </div>
          <Table responsive className="table-alternate-spaced text-nowrap mb-0">
            <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
              <tr>
                <th
                  className="text-left p-3 pl-4"
                  style={{ marginLeft: "50px" }}
                >
                  Organization
                </th>
                <th className="text-center p-3">Owner</th>
                <th className="text-center p-3">Country</th>
                <th className="text-center p-3">City</th>
                <th className="text-center p-3">Ph#</th>
                <th className="text-center p-3">Website</th>
                <th className="text-center p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* {organizations.map((org, key) => {
                return ( */}
              <tr>
                {/* <td
                          className="text-left p-3 pl-4"
                          style={{ width: "5%" }}
                        >
                          <CustomInput
                            type="checkbox"
                            id={org.id_organization}
                            className="align-self-start"
                            label="&nbsp;"
                          />
                        </td> */}
                <td className="text-left pl-4">
                  <span>{singleOrganization?.name_organization}</span>
                </td>
                <td className="text-center">
                  <span>{singleOrganization?.name_owner_organization}</span>
                </td>
                <td className="text-center">
                  <span>
                    {singleOrganization?.locations?.length > 0 &&
                      singleOrganization?.locations[0]?.tehsil?.district
                        ?.division?.state?.country?.name_country}
                  </span>
                </td>
                <td className="text-center">
                  <span>
                    {singleOrganization?.locations?.length > 0 &&
                      singleOrganization?.locations[0]?.city?.name_city}
                  </span>
                </td>
                <td className="text-center">
                  <span>{singleOrganization?.phone_organization}</span>
                </td>
                <td className="text-center">
                  <span>{singleOrganization?.url_website_organization}</span>
                </td>

                <td className="text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <Button
                      onClick={() => {
                        singleOrganization?.is_enable_organization &&
                          history.push({
                            pathname: `${location.pathname}/Company/${singleOrganization?.id_organization}`,
                            state: { singleOrganization },
                          });
                      }}
                      style={{
                        background: "#00c74e",
                        color: "#fff",
                        cursor: !singleOrganization?.is_enable_organization
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
                      onClick={() => handleUpdateModal(singleOrganization)}
                      style={{ background: "#3B74F9", color: "#fff" }}
                      className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <FontAwesomeIcon
                        icon={["far", "edit"]}
                        className="font-size-sm"
                      />
                    </Button>
                    {/* <Button
                              style={{ background: "#FF0000", color: "#fff" }}
                              className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                            >
                              <FontAwesomeIcon
                                icon={["far", "trash-alt"]}
                                className="font-size-sm"
                              />
                            </Button> */}
                    <div className="ml-2">
                      <Switch
                        checked={singleOrganization?.is_enable_organization}
                        onClick={() => handleToggle(singleOrganization)}
                        // className="switch-small toggle-switch-square toggle-switch-first"
                        className="switch-medium toggle-switch-second"
                      />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
