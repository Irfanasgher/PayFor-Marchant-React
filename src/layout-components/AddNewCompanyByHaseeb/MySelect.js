import React from 'react';
import Select from "react-select";

class MySelect extends React.Component {
    handleChange = (value) => {
      // this is going to call setFieldValue and manually update values.topcis
      this.props.onChange(this.props.label, value);
    };

    handleBlur = () => {
      // this is going to call setFieldTouched and manually update touched.topcis
      this.props.onBlur(this.props.label, true);
    };

    
    render() {
      // console.log(this.props.error)
      return (
        <>
          <label htmlFor={this.props.label} className="font-weight-bold">{this.props.label} </label>
          <Select
            id={this.props.label}
            options={this.props.options}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            value={this.props.value}
            isLoading={this.props.isLoading}
            isMulti={this.props.isMulti}
            // isMulti
          />
          {!!this.props.error && this.props.touched && (
            <div style={{ color: "red", marginTop: ".5rem", fontSize: "14px" }}>
              {this.props.error.includes(`.nullable()`) ? 'Please Select One' : this.props.error}
            </div>
          )}
        </>
      );
    }
  }

  export default MySelect;