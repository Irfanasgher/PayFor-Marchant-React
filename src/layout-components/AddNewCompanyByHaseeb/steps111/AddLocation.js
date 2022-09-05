import React from "react";

import {
  Row,
  Col,
  CardBody,
  Card,
  CardTitle,
  FormText,
  Form,
  CustomInput,
  Label,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import "./index.css"
export default function AddLocation() {
  return (
    <>
     
            <Card className="card-box mb-5">
              <CardBody>
                <CardTitle className="font-weight-bold font-size-lg mb-4">
                  Controls Types
                </CardTitle>
                <Form>
                  {/*first row start */}
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        {/* <Label htmlFor="exampleEmail">Email</Label> */}
                        <Input
                          type="email"
                          name="email"
                          id="exampleEmail"
                          placeholder="with a placeholder"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        {/* <Label htmlFor="examplePassword">Password</Label> */}
                        <Input
                          type="password"
                          name="password"
                          id="examplePassword"
                          placeholder="password placeholder"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  {/*first row end */}
                  {/*second row start */}

                  <Row>
                    <Col md="4">
                    <FormGroup>
                        {/* <Label htmlFor="exampleSelect">Select</Label> */}
                        <Input type="select" name="select" id="exampleSelect">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md="4">
                    <FormGroup>
                        {/* <Label htmlFor="exampleSelect">Select</Label> */}
                        <Input type="select" name="select" id="exampleSelect">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        {/* <Label htmlFor="examplePassword">Password</Label> */}
                        <Input
                          type="password"
                          name="password"
                          id="examplePassword"
                          placeholder="password placeholder"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  {/*second row end */}
                  {/*Third row start */}

                  <Row>
                    <Col md="6">
                      <FormGroup>
                        {/* <Label htmlFor="exampleEmail">Email</Label> */}
                        <Input
                          type="email"
                          name="email"
                          id="exampleEmail"
                          placeholder="with a placeholder"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        {/* <Label htmlFor="exampleSelect">Select</Label> */}
                        <Input type="select" name="select" id="exampleSelect">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        {/* <Label htmlFor="exampleSelect">Select</Label> */}
                        <Input type="select" name="select" id="exampleSelect">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  {/*Third row end */}
                
                
                 
                  <FormGroup>
                    {/* <Label htmlFor="exampleText">Text Area</Label> */}
                    <Input type="textarea" name="text" id="exampleText"  placeholder="Description"/>
                  </FormGroup>
                
                  <div className="back-and-next-button-div">
                    <Button color="primary" className="mt-1 back-button">
                      Back
                    </Button>
                    <Button color="primary" className="mt-1">
                      Next
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
        
    </>
  );
}
