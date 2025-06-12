import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="w-full px-12 h-screen bg-gray-400">
      <div className="w-40">
        <Link to={"/"}>
          <h1 className="text-xl font-semibold cursor-pointer">HOME</h1>
        </Link>
      </div>

      <h1 className="text-center font-semibold text-lg">
        WELCOME TO DESHBOAED
      </h1>
    </div>
  );
};

export default Dashboard;
