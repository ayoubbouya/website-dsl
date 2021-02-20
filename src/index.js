import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Service from "./Services/Services";
import Product from "./Product/Product";
import Technology from "./Technology/Technology";
import About from "./About/About";
import Team from "./About-team/Team";
import Clients from "./Clients/Clients";
import Partner from "./Partner/Partner";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/service" component={Service} />
        <Route path="/product" component={Product} />
        <Route path="/technology" component={Technology} />
        <Route path="/about" component={About} />
        <Route path="/team" component={Team} />
        <Route path="/clients" component={Clients} />
        <Route path="/partner" component={Partner} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
