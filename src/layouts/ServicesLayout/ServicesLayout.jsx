import React from "react";
import Menubar from "../../pages/Menubar/Menubar";
import { Outlet } from "react-router-dom";
const ServicesLayout = () => {
  return (
    <div>
      <Menubar></Menubar>
      <Outlet></Outlet>
    </div>
  );
};

export default ServicesLayout;
