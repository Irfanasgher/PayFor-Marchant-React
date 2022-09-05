import React from 'react';

import CreatableSelect from 'react-select/creatable';

class MyCreatableSelect extends React.Component {


    handleChange = (value) => {
      // this is going to call   and manually update values.topcis
      this.props.onChange(this.props.label, value);
    };

    handleBlur = () => {
      // this is going to call setFieldTouched and manually update touched.topcis
      this.props.onBlur(this.props.label, true);
    };

    
    render() {
      // console.log(this.props)
      // console.log(this.props.error)
      return (
        <>
         {/* <label htmlFor={this.props.label} className="font-weight-bold">{this.props.label} </label>  */
         }
          <CreatableSelect
            id={this.props.label}
            options={this.props.options}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            value={this.props.value}
            isLoading={this.props.isLoading}
            isMulti={this.props.isMulti}
            // isMulti
          />
         
        </>
      );
    }
  }

  export default MyCreatableSelect;