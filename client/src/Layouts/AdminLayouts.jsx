import React, { useEffect } from "react";

import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const AdminLayouts = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.users);
  console.log(user);

  useEffect(() => {
    if (!user || user.role !== "admin") {
      navigate("/login");
    }
  }, [user]);
  return (
    <>
      <Outlet />
    </>
  );
};

export default AdminLayouts;
