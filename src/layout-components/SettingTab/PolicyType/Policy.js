import React, { useEffect } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { getAllCountries, createPolicy } from "../../../actions";
import { useDispatch } from "react-redux";
import { Input } from "reactstrap";
import "./index.css";
/**
 * @author
 * @function Step2
 **/

const Policy = (props) => {
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
  useEffect(() => {
    dispatch(getAllCountries());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const addPolicy = () => {
    const data = {
      name_policy_type: values.namePolicyType,
      code_policy_type: values.codePolicyType,
    };
    if (values.namePolicyType && values.codePolicyType) {
      dispatch(createPolicy(data));
    }
  };

  return (
    <div className="">
      <div className="px-4 pt-4">
        <h5 className="font-size-xl font-weight-bold">Add Policy</h5>
      </div>

      <form onSubmit={handleSubmit} className=" py-2 px-4 d-flex flex-column">
        <div className="row">
          <div className="form-group cstm_select col-md-6">
            <Input
              type="text"
              name="namePolicyType"
              placeholder={"Policy Name"}
              onChange={handleChange}
              value={values.namePolicyType}
              onBlur={handleBlur}
              error={errors.namePolicyType}
            />
            {errors.namePolicyType && touched.namePolicyType && (
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
              name="codePolicyType"
              placeholder={"Code"}
              onChange={handleChange}
              value={values.codePolicyType}
              onBlur={handleBlur}
              error={errors.codePolicyType}
            />
            {errors.codePolicyType && touched.codePolicyType && (
              <div
                style={{ color: "red", fontSize: "14px", marginTop: "0.5rem" }}
              >
                {errors.codePolicyType}
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
            type="submit"
            className="btn btn-primary ml-1 next-button"
            disabled={isSubmitting}
            onClick={() => {
              addPolicy();
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
    namePolicyType: props.form.namePolicyType,
    codePolicyType: props.form.codePolicyType,
  }),
  validationSchema: Yup.object().shape({
    namePolicyType: Yup.string().required(),
    codePolicyType: Yup.number().positive().required(),
  }),
  handleSubmit: (values, { props }) => {
    props.onNext(values);
  },
})(Policy);
