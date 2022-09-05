import React, { useState } from "react";
import {
  Row,
  Col,
  Label,
  FormGroup,
  Input,
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
} from "reactstrap";
import { FaRegEdit } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import Switch from "rc-switch";
import Select from "react-dropdown-select";

import "./Location.scss";

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
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
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
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    phone: "210.067.6132",
    website: "elvis.io",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    phone: "024-648-3804",
    website: "ambrose.net",
  },
];
const Location = () => {
  const [addLocation, setAddLocation] = useState(false);
  const addLocationToggle = () => setAddLocation(!addLocation);
  const clientData = [1, 2, 3, 4];

  const [selectValues, setSelectValues] = useState([]);

  // const setValues = (selectValues) => setSelectValues({ selectValues });

  console.log("selectValues", selectValues);
  return (
    <div className="contactDetail m-5 p-5">
      <div className="d-flex justify-content-between align-items-center">
        <div className="information">
          <h1>Location</h1>
        </div>
      </div>
      <br />
      <div className="tableContainer2">
        <Table
          responsive
          className="table-alternate-spaced text-nowrap mb-0"
          style={{ margin: "0px" }}
        >
          <thead className="font-size-sm">
            <tr>
              <th className="text-left p-3 pl-4">Location</th>
              <th className="text-left p-3">Employees</th>
              <th className="text-center p-3">code</th>
              <th className="text-center p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {clientData.map((data, key) => {
              return (
                <tr key={key}>
                  <td className="text-left pl-4">
                    <span>Gulberg 3</span>
                  </td>
                  <td className="text-left d-flex align-items-center">
                    <div className="m-2 p-2 tableButtonContainer d-flex align-items-center justify-content-between">
                      <span className="btn-wrapper--label">Raja Bilal</span>
                      <span className="btn-wrapper--icon ml-3">
                        <GrFormClose className="icon" />
                      </span>
                    </div>
                    <div className="m-2 p-2 tableButtonContainer d-flex align-items-center justify-content-between">
                      <span className="btn-wrapper--label">Raja Bilal</span>
                      <span className="btn-wrapper--icon ml-3">
                        <GrFormClose className="icon" />
                      </span>
                    </div>
                    <div className="m-2 p-2 tableButtonContainer d-flex align-items-center justify-content-between">
                      <span className="btn-wrapper--label">Raja Bilal</span>
                      <span className="btn-wrapper--icon ml-3">
                        <GrFormClose className="icon" />
                      </span>
                    </div>
                  </td>
                  <td className="text-center">
                    <span>00325</span>
                  </td>
                  <td className="text-center">
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="ml-2">
                        <Switch
                          // checked={true}
                          // onClick={() => handleToggle(data)}
                          className="switch-small toggle-switch-second"
                        />
                      </div>
                      <Button className="ml-2 update-button rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                        <FaRegEdit className="icon" />
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <br />
      <Button outline color="primary" onClick={() => addLocationToggle()}>
        Add Location
      </Button>
      <Modal
        zIndex={2000}
        size="xl"
        centered
        scrollable
        isOpen={addLocation}
        toggle={addLocationToggle}
      >
        <ModalHeader toggle={addLocationToggle}>Add Location</ModalHeader>
        <ModalBody style={{ height: "500px" }}>
          <form>
            <Container>
              <div className="py-4">
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label>Title</Label>
                      <Input type="text" />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label>Code</Label>
                      <Input type="text" />
                    </FormGroup>
                  </Col>
                  {/* <Col md="6">
                    <FormGroup>
                      <Label>Please select the option</Label>
                      <Input type="text" />
                    </FormGroup>
                  </Col> */}
                  <Col lg="12" className="location">
                    <Label>Please select the option</Label>
                    <Select
                      options={options}
                      placeholder="Select peoples..."
                      addPlaceholder={"+ Add"}
                      searchable={true}
                      multi={true}
                      disabled={false}
                      labelField={"username"}
                      valueField={"email"}
                      // values={[
                      //   options.find((opt) => opt.username === "Delphine"),
                      // ]}
                      onChange={(values) => setSelectValues(values)}
                    />
                  </Col>
                </Row>
              </div>
            </Container>
            {/* <div className="divider mt-5 mb-4" /> */}

            <ModalFooter className="m-5 d-flex align-items-center justify-content-center">
              <Button
                color="primary"
                // type="submit"
                className="ml-auto"
                style={{ width: "185px" }}
                onClick={() => addLocationToggle()}
              >
                Save
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default Location;
