import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="w-full h-18 bg-gray-400 flex justify-center items-center">
      <Link to={"/"}>
        <h1 className="text-xl font-semibold cursor-pointer">HOME</h1>
      </Link>
    </div>
  );
};

export default Dashboard;
