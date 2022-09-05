import React from "react";
import { Row, Col, Form, Label, FormGroup, Input } from "reactstrap";

const UnitDetail = (props) => {
  return (
    <div>
      {props?.data?.map((data, key) => {
        return (
          <Form key={key}>
            <Row className="p-5">
              <Col md="12">
                <FormGroup>
                  <Label for="" className="font-weight-bold">
                    {data.name_location}
                  </Label>
                </FormGroup>
              </Col>
              <Col md="12">
                <FormGroup>
                  <Label for="">Address</Label>
                  <Input
                    type="email"
                    readOnly
                    defaultValue={data?.address1_location}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="">Country</Label>
                  <Input
                    type="text"
                    readOnly
                    defaultValue={
                      data?.tehsil?.district?.division?.state?.country
                        ?.name_country
                    }
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="">Province/State</Label>
                  <Input
                    type="text"
                    readOnly
                    defaultValue={
                      data?.tehsil?.district?.division?.state?.name_state
                    }
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="">City</Label>
                  <Input
                    type="text"
                    readOnly
                    defaultValue={data?.city?.name_city}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="">Location/Office Code</Label>
                  <Input
                    type="text"
                    readOnly
                    defaultValue={data?.code_location}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="">Official Email Address </Label>
                  <Input
                    type="email"
                    readOnly
                    defaultValue={data?.email_location}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="">Phone</Label>
                  <Input
                    type="text"
                    readOnly
                    defaultValue={data?.phone_location}
                  />
                </FormGroup>
              </Col>
            </Row>
            <div className="divider" />
          </Form>
        );
      })}
    </div>
  );
};

export default UnitDetail;
