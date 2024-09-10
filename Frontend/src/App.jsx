import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./common/Sidebar";
import Navbar from "./common/Navbar";
import AddDishes from "./pages/AddDishes";
import ListDishes from "./pages/ListDishes";
import Orders from "./pages/Orders";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="w-[85%]">
          <Navbar />
          <div className="px-10 py-4">
            <Routes>
              <Route path="/add" element={<AddDishes />} />
              <Route path="/list" element={<ListDishes />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/" element={<p>Welcome to the Admin Dashboard</p>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
