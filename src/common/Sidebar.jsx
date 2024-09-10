import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate("");
  return (
    <div className="w-[15%] bg-gray-100 p-6">
      <h1
        className="text-orange-600 font-bold text-2xl mb-8 cursor-pointer"
        onClick={() => navigate("/")}
      >
        FoodieHeaven
      </h1>
      <ul className="space-y-6">
        <li className="text-lg font-medium text-gray-700">
          <button
            className="focus:outline-none"
            onClick={() => navigate("/add")}
          >
            Add Dishes
          </button>
        </li>
        <li className="text-lg font-medium text-gray-700">
          <button
            className="focus:outline-none"
            onClick={() => navigate("/list")}
          >
            List Dishes
          </button>
        </li>
        <li className="text-lg font-medium text-gray-700">
          <button
            className="focus:outline-none"
            onClick={() => navigate("/orders")}
          >
            Orders
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
