import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Row,
  Col,
  Table,
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
import Switch from "rc-switch";
import {
  UpdateAssetByID,
  enableAssetByID,
  disableAssetByID,
} from "../../actions";
import { useDispatch } from "react-redux";

const AssetsDetail = (props) => {
  const [updateModal, setUpdateModal] = useState(false);
  const updateToggle = () => setUpdateModal(!updateModal);

  const [name, setName] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [description, setDescription] = useState();
  const [value, setValue] = useState();
  const [id] = useState();

  const dispatch = useDispatch();

  // const handleUpdateToggle = (data) => {
  //   setName(data.name_asset);
  //   setSerialNumber(data.serial_number_asset);
  //   setDescription(data.detail_asset);
  //   setValue(data.value_asset);
  //   setId(data.id_asset);

  //   updateToggle();
  // };

  const updatePolicy = (e) => {
    e.preventDefault();

    const data = {
      name_asset: name,
      serial_number_asset: serialNumber,
      detail_asset: description,
      value_asset: value,
    };
    if (
      name.length > 0 &&
      description.length > 0 &&
      serialNumber.length > 0 &&
      value.length > 0
    ) {
      dispatch(UpdateAssetByID(data, id, props.companyId));
    } else {
      alert("All fields must be filled");
    }
    updateToggle();
  };

  const handleToggle = (data) => {
    if (data?.is_enable === true) {
      dispatch(disableAssetByID(data.id_asset, props.companyId));
    } else {
      dispatch(enableAssetByID(data.id_asset, props.companyId));
    }
  };
  return (
    <div>
      <Table
        responsive
        className="table-alternate-spaced text-nowrap mb-0 mt-4"
      >
        <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
          <tr>
            <th className="text-left pl-4 p-3">Name</th>
            <th className="text-center p-3">Serial Number</th>
            <th className="text-center p-3">Detail</th>
            <th className="text-center p-3">Value</th>
            <th className="text-center p-3">Type</th>
            <th className="text-center p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {props?.data?.map((asset, key) => {
            // console.log("policy view", policy);
            return (
              <tr key={key}>
                <td className="text-left pl-4 p-3">
                  <span>{asset?.name_asset}</span>
                </td>
                <td className="text-center p-3">
                  <span>{asset?.serial_number_asset}</span>
                </td>
                <td className="text-center p-3">
                  <span>{asset?.detail_asset}</span>
                </td>
                <td className="text-center p-3">
                  <span>{asset?.value_asset}</span>
                </td>
                <td className="text-center p-3">
                  <span>{asset?.asset_type?.name_asset_type}</span>
                </td>
                <td className="text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    {/* <Button
                      onClick={() => handleUpdateToggle(asset)}
                      style={{
                        background: "#3B74F9",
                        color: "#fff",
                      }}
                      className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <FontAwesomeIcon
                        icon={["far", "edit"]}
                        className="font-size-sm"
                      />
                    </Button> */}
                    <div className="ml-2">
                      <Switch
                        checked={asset?.is_enable}
                        onClick={() => handleToggle(asset)}
                        className="switch-medium toggle-switch-second"
                      />
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
        <Modal
          zIndex={2000}
          centered
          scrollable
          isOpen={updateModal}
          toggle={updateToggle}
        >
          <ModalHeader toggle={updateToggle}>Update Policy</ModalHeader>
          <ModalBody>
            <form onSubmit={updatePolicy}>
              <Container>
                <div className="py-4">
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label className="font-weight-bold" for="">
                          Asset Name
                        </Label>
                        <Input
                          type="text"
                          name=""
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                          placeholder="Enter Name..."
                        />
                      </FormGroup>
                    </Col>
                    <Col md="12">
                      <FormGroup>
                        <Label className="font-weight-bold" for="">
                          Serial Number
                        </Label>
                        <Input
                          type="text"
                          name=""
                          value={serialNumber}
                          onChange={(e) => {
                            setSerialNumber(e.target.value);
                          }}
                          placeholder="Serial Number..."
                        />
                      </FormGroup>
                    </Col>
                    <Col md="12">
                      <FormGroup>
                        <Label className="font-weight-bold" for="">
                          Asset Detail
                        </Label>
                        <Input
                          type="text"
                          name=""
                          value={description}
                          onChange={(e) => {
                            setDescription(e.target.value);
                          }}
                          placeholder="Detail..."
                        />
                      </FormGroup>
                    </Col>
                    <Col md="12">
                      <FormGroup>
                        <Label className="font-weight-bold" for="">
                          Asset Value
                        </Label>
                        <Input
                          type="text"
                          name=""
                          value={value}
                          onChange={(e) => {
                            setValue(e.target.value);
                          }}
                          placeholder="Value..."
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
                  onClick={updateToggle}
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
      </Table>
    </div>
  );
};

export default AssetsDetail;
