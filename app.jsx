import React from "react";
import ReactDOM from "react-dom/client";
import { Header, Body, Footer } from "./src/components";
const AppLayout = () => {
  
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
