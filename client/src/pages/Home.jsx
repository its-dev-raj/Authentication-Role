import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-18 w-full bg-gray-500">
      <div className="flex gap-4 justify-center items-center h-18 text-white font-semibold cursor-pointer">
        <Link to={"/login"}>
          <p>Signup</p>
        </Link>

        <Link to={"/register"}>
          <p>register</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
