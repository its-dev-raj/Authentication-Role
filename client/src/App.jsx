import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import  Login  from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashbord" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
