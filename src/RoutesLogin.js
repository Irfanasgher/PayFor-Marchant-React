import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { withRouter } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

import { LeftSidebar } from "./layout-blueprints";
const Login = lazy(() => import("./pages-components/SignUp-Stepper/LoginPage"));
const SignUp = lazy(() => import("./pages-components/SignUp-Stepper/index"));
const Dashboard = lazy(() => import("./pages-components/Dashboard/Overview"));
const InstoreLink = lazy(() => import("./pages-components/InstoreLink"));
const Clients = lazy(() => import("./pages-components/Clients/Client"));
const ClientDetail = lazy(() =>
  import("./pages-components/Clients/ClientDetail")
);
const Customers = lazy(() => import("./pages-components/Customers/Customer"));
const CustomerDetail = lazy(() =>
  import("./pages-components/Customers/CustomerDetail")
);
const Orders = lazy(() => import("./pages-components/Orders/order"));
const OrderDetail = lazy(() => import("./pages-components/Orders/OrderDetail"));
const User = lazy(() => import("./pages-components/Setting/User"));
const EditUser = lazy(() => import("./pages-components/Setting/EditUser"));

const RoutesLogin = () => {
  const SuspenseLoading = () => {
    return (
      <>
        <div className="d-flex align-items-center flex-column vh-100 justify-content-center text-center py-3">
          <div className="d-flex align-items-center flex-column px-4">
            <ScaleLoader color={"#0115d0"} loading={true} />
          </div>
          <div className="text-muted font-size-xl text-center pt-3">
            Please wait while we load the live preview examples
            <span className="font-size-lg d-block text-dark">
              This live preview instance can be slower than a real production
              build!
            </span>
          </div>
        </div>
      </>
    );
  };
  return (
    <AnimatePresence>
      <Suspense fallback={<SuspenseLoading />}>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/Login" component={Login} exact />
          <Route path="/SignUp" component={SignUp} exact />
          <LeftSidebar>
            <Switch>
              {/* <Route path="/" component={Dashboard} exact /> */}
              <Route path="/dashboard" component={Dashboard} exact />
              <Route path="/instore-link" component={InstoreLink} exact />
              <Route path="/clients" component={Clients} exact />
              <Route
                path="/clients/client-detail/:id"
                component={ClientDetail}
                exact
              />
              <Route path="/customers" component={Customers} exact />
              <Route
                path="/customers/customer-detail"
                component={CustomerDetail}
                exact
              />
              <Route path="/orders" component={Orders} exact />
              <Route
                path="/orders/order-detail"
                component={OrderDetail}
                exact
              />
              <Route path="/user" component={User} exact />
              <Route path="/user/edit-user" component={EditUser} exact />
            </Switch>
          </LeftSidebar>
        </Switch>
      </Suspense>
    </AnimatePresence>
  );
};

export default withRouter(RoutesLogin);
