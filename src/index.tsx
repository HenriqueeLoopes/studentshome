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
        <Route path="/accommodations" exact component={Accommodations} />
        <Route path="/company" exact component={Company} />
        <Route path="/faq" exact component={FAQ} />
        <Route path="/partners" exact component={Partners} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
