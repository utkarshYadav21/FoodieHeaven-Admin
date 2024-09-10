import React, { useState } from "react";
import orders from "/download.jpeg";
const Orders = () => {
  const [orderStatus, setOrderStatus] = useState("Food Processing");

  const handleStatusChange = (event) => {
    setOrderStatus(event.target.value);
  };

  // Example order data
  const order = {
    id: 1,
    items: [
      { name: "Greek Salad", quantity: 2 },
      { name: "Peri Peri Rolls", quantity: 3 },
    ],
    totalItems: 5,
    totalAmount: "$65",
    customer: {
      name: "Avinash Kumar",
      address: "GreatStack, Whitefield, Bangalore, Karnataka, 560066",
      phone: "9876543210",
    },
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Order Page</h2>
      <div className="border border-gray-300 p-6 rounded-md bg-white flex  items-center justify-between gap-10">
        <div className="w-32">
          <img src={orders} className="w-28 h-auto" />
        </div>
        <div className="w-full">
          <div className="flex justify-between mb-4 items-center">
            <p className="font-bold mb-1">
              {order.items.map((item, index) => (
                <span key={index}>
                  {item.name} x {item.quantity}
                  {index !== order.items.length - 1 && ", "}
                </span>
              ))}
            </p>
            <p className="text-gray-500">Items: {order.totalItems}</p>
            <p className="text-gray-500">{order.totalAmount}</p>
            <div>
              <select
                value={orderStatus}
                onChange={handleStatusChange}
                className="border border-gray-300 rounded-md p-2"
              >
                <option value="Food Processing">Food Processing</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>
          <div className="border-t border-gray-300 pt-4">
            <p className="font-bold">{order.customer.name}</p>
            <p>{order.customer.address}</p>
            <p>{order.customer.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
