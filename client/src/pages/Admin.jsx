import React, { useEffect } from "react";
import api from "../servies/api";

const Admin = () => {
  useEffect(() => {
    const GetUsers = async () => {
      try {
        const request = await api.get("/admin/getuser");
        const response = request.data;
        // console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    GetUsers();
  }, []);
  return <div>Admin</div>;
};

export default Admin;
