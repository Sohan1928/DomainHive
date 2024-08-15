import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Page/Nav";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div className="font-family bg-cyan-300">
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
