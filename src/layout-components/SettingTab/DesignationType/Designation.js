import React, { useState } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { postUnitDetail, createDesignation } from "../../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "reactstrap";
import "./index.css";

/**
 * @author
 * @function Step2
 **/

const Designation = (props) => {
  // let [next, setNext] = useState(true);
  const {
    // Formik HOC props
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    // Loki props
    backLabel,
    nextLabel,
    onBack,
    cantBack,
  } = props;

  const dispatch = useDispatch();
  // console.log("orhhhhjj", props);
  const { companyId } = useSelector((state) => state.CompanyReducer);
  // console.log("haseeb", companyId);

  const addDesignation = () => {
    const data = {
      // company_id: companyId,
      // name_unit: values.nameUnit,
      // code_unit: values.codeUnit,
      // note_unit: values.noteUnit,
      name_designation_type: values.nameDesignationType,
      note_designation_type: values.noteDesignationType,
    };
    // console.log("hhhhh");

    dispatch(createDesignation(data));
  };

  return (
    <div className="">
      <div className="px-4 pt-4">
        <h5 className="font-size-xl font-weight-bold">Add Designation </h5>
      </div>

      <form onSubmit={handleSubmit} className=" py-2 px-4 d-flex flex-column">
        <div className="row">
          <div className="form-group cstm_select col-md-6">
            <Input
              type="text"
              name="nameDesignationType"
              placeholder={"Unit Name"}
              onChange={handleChange}
              value={values.nameDesignationType}
              onBlur={handleBlur}
              error={errors.nameDesignationType}
            />
            {errors.nameDesignationType && touched.nameDesignationType && (
              <div
                style={{ color: "red", fontSize: "14px", marginTop: "0.5rem" }}
              >
                Please enter any company name to proceed
              </div>
            )}
          </div>
        </div>

        <div className="row">
          <div className="form-group cstm_select col-md-12">
            <Input
              type="textarea"
              name="noteDesignationType"
              placeholder={"Note"}
              onChange={handleChange}
              value={values.noteDesignationType}
              onBlur={handleBlur}
              error={errors.noteDesignationType}
            />
            {errors.noteDesignationType && touched.noteDesignationType && (
              <div
                style={{ color: "red", fontSize: "14px", marginTop: "0.5rem" }}
              >
                {errors.noteDesignationType}
              </div>
            )}
          </div>
        </div>
        <div className="button-group my-3">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onBack}
            disabled={isSubmitting || cantBack}
          >
            {backLabel}
          </button>
          {/* <button
            type="button"
            className="btn btn-primary ml-1 next-button"
            // disabled={isSubmitting}
            onClick={() => {
              addComp();
            }}
          >
            Submit
          </button> */}
          <button
            type="submit"
            className="btn btn-primary ml-1 next-button"
            disabled={isSubmitting}
            onClick={() => {
              addDesignation();
            }}
          >
            {nextLabel}
          </button>
        </div>
      </form>
    </div>
  );
};
export default withFormik({
  mapPropsToValues: (props) => ({
    // nameUnit: props.form.nameUnit,
    // codeUnit: props.form.codeUnit,

    // noteUnit: props.form.noteUnit,
    nameDesignationType: props.form.nameDesignationType,
    noteDesignationType: props.form.noteDesignationType,
  }),

  validationSchema: Yup.object().shape({
    nameDesignationType: Yup.string().required(),

    noteDesignationType: Yup.string().required(),
  }),

  handleSubmit: (values, { props }) => {
    props.onNext(values);
  },
})(Designation);
