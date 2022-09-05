import React, { useState } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { postUnitDetail } from "../../../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "reactstrap";
import "./index.css";

/**
 * @author
 * @function Step2
 **/

const Unit = (props) => {
  let [next, setNext] = useState(true);
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

  const addComp = () => {
    const data = {
      company_id: companyId,
      name_unit: values.nameUnit,
      code_unit: values.codeUnit,
      note_unit: values.noteUnit,
    };
    // console.log("hhhhh");
    setNext(false);
    dispatch(postUnitDetail(data));
  };

  return (
    <div className="wizard-steps horizontal p-3">
      <div className="px-4 pt-4">
        <h5 className="font-size-xl font-weight-bold">Unit detail </h5>
      </div>

      <form onSubmit={handleSubmit} className=" py-2 px-4 d-flex flex-column">
        <div className="row">
          <div className="form-group cstm_select col-md-6">
            <Input
              type="text"
              name="nameUnit"
              placeholder={"Unit Name"}
              onChange={handleChange}
              value={values.nameUnit}
              onBlur={handleBlur}
              error={errors.nameUnit}
            />
            {errors.nameUnit && touched.nameUnit && (
              <div
                style={{ color: "red", fontSize: "14px", marginTop: "0.5rem" }}
              >
                Please enter any company name to proceed
              </div>
            )}
          </div>
          <div className="form-group cstm_select col-md-6">
            <Input
              type="text"
              name="codeUnit"
              placeholder={"Code"}
              onChange={handleChange}
              value={values.codeUnit}
              onBlur={handleBlur}
              error={errors.codeUnit}
            />
            {errors.codeUnit && touched.codeUnit && (
              <div
                style={{ color: "red", fontSize: "14px", marginTop: "0.5rem" }}
              >
                {errors.codeUnit}
              </div>
            )}
          </div>
        </div>

        <div className="row">
          <div className="form-group cstm_select col-md-12">
            <Input
              type="textarea"
              name="noteUnit"
              placeholder={"description"}
              onChange={handleChange}
              value={values.noteUnit}
              onBlur={handleBlur}
              error={errors.noteUnit}
            />
            {errors.noteUnit && touched.noteUnit && (
              <div
                style={{ color: "red", fontSize: "14px", marginTop: "0.5rem" }}
              >
                {errors.noteUnit}
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
          <button
            type="button"
            className="btn btn-primary ml-1 next-button"
            // disabled={isSubmitting}
            onClick={() => {
              addComp();
            }}
          >
            Submit
          </button>
          <button
            type="submit"
            className="btn btn-primary ml-1 next-button"
            disabled={next}
            // onClick={() => {
            //   props.onNext();

            // }}
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
    nameUnit: props.form.nameUnit,
    codeUnit: props.form.codeUnit,

    noteUnit: props.form.noteUnit,
  }),

  validationSchema: Yup.object().shape({
    nameUnit: Yup.string().required(),
    codeUnit: Yup.number().positive().required(),

    noteUnit: Yup.string().required(),
  }),

  handleSubmit: (values, { props }) => {
    props.onNext(values);
  },
})(Unit);
