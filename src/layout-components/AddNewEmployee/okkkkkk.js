import React, { Component } from "react";
import clsx from "clsx";
// import Loki from "./src";
import Loki from "./src";
// import {withRouter} from "react-router-dom"
// import { toast, Zoom } from "react-toastify";
// import FaUser from 'react-icons/lib/fa/user';
// import FaLock from 'react-icons/lib/fa/lock';
// import FaEnvelope from 'react-icons/lib/fa/envelope';
import LineDefinitionForm from "./steps/LineDefinitionForm/LineDefinitionForm";
import ProductDefinitionForm from "./steps/ProductDefinitionForm";
import ShippingDetailForm from "./steps//ShippingDetailForm";
import { addProduct, redirectProduct } from "../../../actions/ProductAction";
import { connect } from "react-redux";
import { HashLoader } from "react-spinners";
import BlockUi from "react-block-ui";
import { withRouter } from "react-router";
class LivePreviewExample extends Component {
  state = {
    productIdToSave: this.props.history?.location?.state?.productId,
    user: {
      //line_definition Fields
      manufacturer_list: "",
      line_list: "",
      // product_definition Fields
      name_product: "",
      short_description_product: "",
      full_description_product: "",
      admin_notes_product: "",
      id_parent_grouped_product: 0,
      meta_keywords_product: "",
      meta_description: "",
      meta_title_product: "",
      design_code_product: "",
      manufacturer_code_product: "",
      product_type: "",
      id_unit_of_measure: "",
      gtin_code_product: "",
      available_date: "",
      select_categories: "",
      number_of_items_product: 0,
      // Shipping_Detail Form
      free_shipping_product: false,
      ship_separately_product: false,
      not_returnable_product: false,
      enable_sales_product: false,
      enable_preorder_product: false,
      no_days_before_ship_product: 0,
      average_cost_product: 0,
      last_cost_product: 0,
      msrp_product: 0,
      weight_product: 0,
      length_product: 0,
      width_product: 0,
      height_product: 0,
      //Tags
      // select_tags: "",
    },
  };
  _mergeValues(values) {
    console.log(values, "online 69 merge value");
    this.setState({
      user: {
        ...this.state.user,
        ...values,
      },
    });
  }
  _finishWizard() {
    console.log(
      this.state.user,
      this.props.history?.location?.state?.productId,
      "this.props.history?.location?.state?.productId"
    );
    const catArr = [];
    const a = this.state?.user?.select_categories.map((cat, arr) => {
      catArr.push({
        id_category: parseInt(cat.value),
        id_line: parseInt(this.state.user.line_list.value),
        id_manfacturer: parseInt(this.state.user.manufacturer_list.value),
        manufacturer_code_product: this.state.user.manufacturer_list.label,
        design_code_product: this.state.user.design_code_product,
      });
    });
    const manufacturer_code_product = catArr[0]["manufacturer_code_product"];
    delete catArr[0]["manufacturer_code_product"];
    // const tagArr = [];
    // const b = this.state?.user?.select_tags.map((tag, arr) => {
    //   tagArr.push({
    //     id_product_tag: parseInt(tag.value),
    //     name_proudct_tag: tag.label,
    //   });
    // });
    // const data = JSON.stringify(this.state.user);
    const data = {
      id_product_type:
        this.props.history?.location?.state?.productId === undefined
          ? parseInt(this.state.user.product_type.value)
          : 30,
      id_line: parseInt(this.state.user.line_list.value),
      id_manfacturer: parseInt(this.state.user.manufacturer_list.value),
      name_product: this.state.user.name_product,
      short_description_product: this.state.user.short_description_product,
      full_description_product: this.state.user.full_description_product,
      admin_notes_product: this.state.user.admin_notes_product,
      id_parent_grouped_product:
        this.props.history?.location?.state?.productId === undefined
          ? parseInt(this.state.user.id_parent_grouped_product)
          : this.props.history?.location?.state?.productId,
      meta_keywords_product: this.state.user.meta_keywords_product,
      meta_description: this.state.user.meta_description,
      meta_title_product: this.state.user.meta_title_product,
      design_code_product: this.state.user.design_code_product,
      manufacturer_code_product: manufacturer_code_product,
      gtin_code_product: this.state.user.gtin_code_product,
      free_shipping_product: this.state.user.free_shipping_product,
      ship_separately_product: this.state.user.ship_separately_product,
      no_days_before_ship_product: parseInt(
        this.state.user.no_days_before_ship_product
      ),
      not_returnable_product: this.state.user.not_returnable_product,
      enable_sales_product: this.state.user.enable_sales_product,
      average_cost_product: parseInt(this.state.user.average_cost_product),
      last_cost_product: parseInt(this.state.user.last_cost_product),
      msrp_product: parseInt(this.state.user.msrp_product),
      id_unit_of_measure: parseInt(this.state.user.id_unit_of_measure.value),
      weight_product: parseInt(this.state.user.weight_product),
      length_product: parseInt(this.state.user.length_product),
      width_product: parseInt(this.state.user.width_product),
      height_product: parseInt(this.state.user.height_product),
      available_date_product: this.state.user.available_date,
      enable_preorder_product: this.state.user.enable_preorder_product,
      number_of_items_product: parseInt(
        this.state.user.number_of_items_product
      ),
      all_DTO_category_product_mapping_dto: catArr,
      // product_tag_dto: tagArr,
    };
    this.props.dispatch(addProduct(data));
    localStorage.removeItem("ShippingDetail-form");
    localStorage.removeItem("LineAdd-form");
    localStorage.removeItem("ProductDetail-form");
    console.log("after dispatch of addProduct");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState, "next props, next state");
    console.log(this.props, this.state, "this.props, this.state");
    const { isProductAdded, recentAddedProduct } = nextProps;
    console.log(isProductAdded, "isProductAdded");
    if (isProductAdded) {
      this.props.dispatch(redirectProduct());
      console.log("in the if redirect");
      if (recentAddedProduct !== null) {
        this.props.history.push(`/ProductEdit/${recentAddedProduct}`);
      } else {
        this.props.history.push("/Products");
      }
      return true;
    }
    return false;
  }
  render() {
    const customSteps = [
      {
        label: "Line and Manufacturer Information",
        number: "1",
        component: <LineDefinitionForm form={this.state.user} />,
      },
      {
        label: "Product Information",
        number: "2",
        component: <ProductDefinitionForm form={this.state.user} />,
      },
      {
        label: "Shipping Information",
        number: "3",
        component: <ShippingDetailForm form={this.state.user} />,
      },
    ];
    const CustomRenderer = ({ steps, currentStep, goTo, isComplete }) => {
      const steps123 = steps.map((step, index) => {
        const isActive = currentStep === index + 1;
        const isNext = currentStep < index + 1;
        const isDisabled = !isActive && !isComplete;
        return (
          <li key={index} className={clsx("card-box", { current: isActive })}>
            <a
              href={"/#"}
              // onClick={handleClick}
              className={clsx({ disabled: isNext })}
              // disabled={!!isNext}
              onClick={(event) => {
                event.preventDefault();
                if (isDisabled) {
                  return;
                }
                // goTo(step.index);
              }}
              // className={`LokiStep-Link ${isDisabled && "disabled"}`}
              disabled={isDisabled}
            >
              <div className="label">{step.label}</div>
              <div className="step-indicator">{step.number}</div>
            </a>
          </li>
        );
      });
      return (
        <div className="vertical ">
          <ul className="steps-indicator">{steps123}</ul>
        </div>
      );
    };
    return (
      <>
        <BlockUi
          className="p-5"
          tag="div"
          blocking={this.props?.isProductAdding}
          loader={
            <HashLoader
              color={"#68E1C9"}
              loading={this.props?.isProductAdding}
            />
          }
        >
          <div className="card card-box">
            <div className="card-header">
              <div className="card-header--title">
                <b>Add New Product</b>
              </div>
            </div>
            <div className="wizard vertical">
              <Loki
                steps={customSteps}
                onNext={this._mergeValues.bind(this)}
                onBack={this._mergeValues.bind(this)}
                onFinish={this._finishWizard.bind(this)}
                renderSteps={(props) => (
                  <CustomRenderer steps={customSteps} {...props} />
                )}
                noActions
              />
            </div>
          </div>
        </BlockUi>
      </>
    );
  }
}
const mapStateToProps = (state) => state.ProductReducer;
export default connect(mapStateToProps, null)(withRouter(LivePreviewExample));
