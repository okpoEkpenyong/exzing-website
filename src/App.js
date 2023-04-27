import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { MessageProvider } from "./context/MessageProvider";
import { Home } from "./components/Home";
import CollapsibleNavs from "./components/navbars/collapsible";
import { Services } from "./components/Service";
import { Partner } from "./components/Partner";
import Product from "./components/Product";
import { ContactForm } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <MessageProvider>
        <BrowserRouter>
          <CollapsibleNavs />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route exact path="/about" element={About} /> */}
            <Route path="/service" element={<Services />} />
            <Route path="/partners" element={<Partner />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </MessageProvider>
    </>
  );
}

export default App;
