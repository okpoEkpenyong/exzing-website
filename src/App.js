import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";

import { CollapsibleNav } from "./_Navbar";

import "./App.css";
import { MessageProvider } from "./context/MessageProvider";
import Partners from "./Partner";
import Product from "./Product";
import { ContactForm } from "./ContactForm";
import Service from "./Service";

function App() {
  return (
    <>
      <MessageProvider>
        <CollapsibleNav />
        <div className="navbar-custom-3">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/contact" component={ContactForm} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/partners" component={Partners} />
            <Redirect to="/" />
          </Switch>
        </div>
      </MessageProvider>
    </>
  );
}

export default App;
