import React, { useState } from "react";
import { IoMdImages } from "react-icons/io";

const AdminPanel = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "Salad",
    price: "",
  });
  const [selectedImage, setSelectedImage] = useState("");

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (event) => {
    const file = event;
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // This works correctly to display the image.
    }
  };

  const handleImageClick = () => {
    setSelectedImage(""); // This clears the selected image.
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Added:", product, image);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-2xl font-bold mb-6">Add Product</h2>

        {/* Image Upload */}
        <div className="flex flex-col items-center mb-4">
          <div className="mt-4 flex justify-center flex-col items-center">
            {selectedImage ? (
              <div className="w-[6rem] h-[6rem] flex items-center justify-center  object-cover cursor-pointer hover:scale-105 hover:border hover:border-gray-300 rounded-lg">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="w-[6rem] h-[6rem] object-cover rounded-md "
                  onClick={handleImageClick}
                />
              </div>
            ) : (
              <label
                htmlFor="imageInput"
                className="flex flex-col items-center justify-center w-[8rem] h-[6rem] border-2 border-dashed bg-[#F1F7FF] border-gray-300 rounded-lg cursor-pointer "
              >
                <IoMdImages size={48} className="text-[#004AAD]" />
                <input
                  type="file"
                  id="imageInput"
                  name="image"
                  className="hidden"
                  onChange={(e) => {
                    console.log(e.target.files[0]);
                    if (e.target.files && e.target.files[0])
                      handleImageChange(e.target.files[0]);
                  }}
                />
              </label>
            )}
          </div>
        </div>

        {/* Product Name */}
        <div>
          <label className="block text-gray-700">Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Type here"
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>

        {/* Product Description */}
        <div>
          <label className="block text-gray-700">Product Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Write content here"
            className="w-full p-2 border border-gray-300 rounded mt-1 h-24"
          />
        </div>

        {/* Product Category and Price */}
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-gray-700">Product Category</label>
            <select
              name="category"
              value={product.category}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            >
              <option value="Salad">Salad</option>
              <option value="Soup">Soup</option>
              <option value="Main Course">Main Course</option>
              <option value="Dessert">Dessert</option>
            </select>
          </div>

          <div className="w-1/2">
            <label className="block text-gray-700">Product Price</label>
            <input
              type="text"
              name="price"
              value={product.price}
              onChange={handleChange}
              placeholder="$25"
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminPanel;
