import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Select  from 'react-select';
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
import {
  getAllCountries,
} from "../../../actions";
import "./index.css"

  export default function BasicDetails(props) {

    const {
      // Formik HOC props
      values,
      touched,
      errors,
      isSubmitting,
      // handleChange,
      handleBlur,
      handleSubmit,
      setFieldValue,
      setFieldTouched,
  
      // Loki props
      backLabel,
      nextLabel,
      onBack,
      onNext,
      cantBack,
      isInFinalStep,
    } = props;

  const [countryName,setCountryName] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { countriesData } = useSelector((state) => state.CompanyReducer);

  const option = [
    countriesData?.map((pdes) => {
      var value = pdes.id_country;
      var label = pdes.name_country;
      return { value, label };
    }),
  ];
  const options = [
      { value: '1', label: 'Lahore' },
      { value: '2', label: 'Karachi' },
      { value: '3', label: 'Sheikhupura' }
  ];
  const timeoptions = [
    { value: '1', label: 'UST' },
    { value: '2', label: 'PST' },
    { value: '3', label: 'SST' }
];
  const handleChange = (countryName) => {  
    setCountryName(countryName); 
};
  return (
    <>
     
            <Card className="card-box mb-5">
              <CardBody>
                <CardTitle className="font-weight-bold font-size-lg mb-4">
                  Controls Types
                </CardTitle>
                <form onSubmit={handleSubmit}>
                  {/*first row start */}
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        {/* <Label htmlFor="exampleEmail">Email</Label> */}
                        <Input
                          type="text"
                          name="compName"
                          id="compName"
                          placeholder="Company Name"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        {/* <Label htmlFor="examplePassword">Password</Label> */}
                        <Input
                          type="text"
                          name="legalName"
                          id="legalName"
                          placeholder="Legal Name"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  {/*first row end */}
                  {/*second row start */}

                  <Row>
                    <Col md="6">
                      <FormGroup>
                        {/* <Label htmlFor="exampleEmail">Email</Label> */}
                        <Input
                          type="text"
                          name="code"
                          id="code"
                          placeholder="Code"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        {/* <Label htmlFor="examplePassword">Password</Label> */}
                        <Input
                          type="text"
                          name="ntn"
                          id="ntn"
                          placeholder="NTN #"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  {/*second row end */}
                  {/*Third row start */}

                  <Row>
                    <Col md="4">
                      <FormGroup>
                        {/* <Label htmlFor="exampleEmail">Email</Label> */}
                        <Input
                          type="text"
                          name="address"
                          id="address"
                          placeholder="Address"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        {/* <Label htmlFor="exampleSelect">Select</Label> */}
                        <Select
                            placeholder={"Country"}
                            value={countryName}
                            onChange={handleChange}
                            options={option[0]}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        {/* <Label htmlFor="exampleSelect">Select</Label> */}
                        <Select
                            placeholder={"City"}
                           
                            
                            options={options}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  {/*Third row end */}
                  {/*forth row start */}
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        {/* <Label htmlFor="exampleEmail">Email</Label> */}
                        <Input
                          type="number"
                          name="phone"
                          id="phone"
                          placeholder="Phone #"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        {/* <Label htmlFor="examplePassword">Password</Label> */}
                        <Input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Email Address"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  {/*forth row end */}
                  {/*fifth row start */}
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        {/* <Label htmlFor="exampleEmail">Email</Label> */}
                        <Input
                          type="text"
                          name="website"
                          id="website"
                          placeholder="Website"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        {/* <Label htmlFor="exampleSelect">Select</Label> */}
                        
                        <Select
                            placeholder={"Time Zone"}
                            options={timeoptions}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  {/*fifth row end */}
                  {/* sixth row start */}
                  <Row>
                    <Col md="9">
                      <FormGroup>
                        {/* <Label htmlFor="exampleFile">File</Label> */}
                        <span> Company Logo </span>
                        <span>
                          {" "}
                          <Input
                            type="file"
                            name="file"
                            id="exampleFile"
                          />{" "}
                        </span>
                        {/* <FormText color="muted">
                          This is some placeholder block-level help text for the
                          above input. It's a bit lighter and easily wraps to a
                          new line.
                        </FormText> */}
                      </FormGroup>
                    </Col>
                    <Col md="3">
                      <FormGroup>
                        {/* <Label htmlFor="exampleSelect">Select</Label> */}
                        <CustomInput
                    className="mb-3"
                    type="checkbox"
                    id="exampleCustomCheckbox"
                    label="Active"
                  />
                      </FormGroup>
                    </Col>
                  </Row>
                  {/* sixth row end */}
                 
                  <FormGroup>
                    {/* <Label htmlFor="exampleText">Text Area</Label> */}
                    <Input type="textarea" name="text" id="exampleText"  placeholder="Description"/>
                  </FormGroup>
                
                  {/* <div className="back-and-next-button-div"> */}
                    {/* <Button color="primary" className="mt-1 back-button">
                      Back
                    </Button>
                    <Button color="primary" className="mt-1">
                      Next
                    </Button> */}

<div className="button-group my-3">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={()=>{props.onBack(values)}}
            disabled={isSubmitting || cantBack}
          >
            {backLabel}
          </button>
          <button
            type="button"
            className="btn btn-primary ml-1"
            onClick={()=>{props.onNext(values)}}
            disabled={isSubmitting}
          >
            {nextLabel}
          </button>
        </div>
                  {/* </div> */}
                </form>
              </CardBody>
            </Card>
        
    </>
  );
}
