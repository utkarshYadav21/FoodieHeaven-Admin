import React from "react";

const ListDishes = () => {
  const foodItems = [
    {
      id: 1,
      name: "Greek Salad",
      category: "Salad",
      price: "$12",
      image: "https://via.placeholder.com/50", // Placeholder image
    },
    {
      id: 2,
      name: "Veg Salad",
      category: "Salad",
      price: "$18",
      image: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      name: "Clover Salad",
      category: "Salad",
      price: "$16",
      image: "https://via.placeholder.com/50",
    },
    {
      id: 4,
      name: "Chicken Salad",
      category: "Salad",
      price: "$24",
      image: "https://via.placeholder.com/50",
    },
    {
      id: 5,
      name: "Lasagna Rolls",
      category: "Rolls",
      price: "$14",
      image: "https://via.placeholder.com/50",
    },
    {
      id: 6,
      name: "Peri Peri Rolls",
      category: "Rolls",
      price: "$12",
      image: "https://via.placeholder.com/50",
    },
    {
      id: 7,
      name: "Chicken Rolls",
      category: "Rolls",
      price: "$20",
      image: "https://via.placeholder.com/50",
    },
  ];

  const handleDelete = (id) => {
    console.log("Delete item with ID:", id);
    // Implement your delete logic here
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Foods List</h2>
      <div
        className="h-[32rem] overflow-y-auto"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className=" bg-gray-100 text-center">
              <th className="px-6 py-4 text-left">Image</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {foodItems.map((item) => (
              <tr
                key={item.id}
                className="border-t text-center h-20 overflow-y-auto"
                style={{ scrollbarWidth: "none" }}
              >
                <td className="px-6 py-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.category}</td>
                <td className="px-6 py-4">{item.price}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-500 font-bold text-lg"
                  >
                    x
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListDishes;
