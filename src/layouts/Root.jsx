import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Page/Nav";

const Root = () => {
  return (
    <div className="font-family bg-cyan-300">
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
