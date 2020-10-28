import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";

import App from "./pages/Index";
import Accommodations from "./pages/Accommodations";
import Company from "./pages/Company";
import FAQ from "./pages/Faq";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";

import "./global.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/accommodations" component={Accommodations} />
        <Route path="/company" component={Company} />
        <Route path="/faq" component={FAQ} />
        <Route path="/partners" component={Partners} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
