import React from "react";

import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
const AdminLayouts = () => {
  const user = useSelector((state) => state.auth);
  console.log(user);
  return (
    <>
      <Outlet />
    </>
  );
};

export default AdminLayouts;
