import React from "react";
import ReactDOM from "react-dom";
// import * as Sentry from "@sentry/react";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Sentry.init({
//     dsn: "https://4d92ce79c9fb41d58cf4475dd8e04165@o388020.ingest.sentry.io/5448598",

//     // We recommend adjusting this value in production, or using tracesSampler
//     // for finer control
//     tracesSampleRate: 1.0,
//   });

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
