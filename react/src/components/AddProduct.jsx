import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";

const AddProduct = () => {
  const init = {
    id: "",
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  };
  const [formData, setFormData] = useState(init);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    setIsLoading(true);
    await axios
      .post("https://fakestoreapi.com/products", formData)
      .then((res) => {
        console.log(res);
        toast.success("Product add successfully.");
        setFormData(init);
        setIsLoading(false);
      })
      .catch((er) => {
        console.log(er);
        toast.error("Error while adding product.");
      });
  };
  return (
    <div className="h-screen grid place-items-center">
      <form
        onSubmit={handleSubmit}
        className="w-[40rem] shadow-2xl flex flex-col gap-4 p-8 rounded-lg"
      >
        <h1 className="text-3xl font-bold">Add Product</h1>
        <input
          onChange={handleChange}
          value={formData.id}
          className="border-2 p-2 rounded-lg w-full"
          type="number"
          name="id"
          id=""
          placeholder="Enter Id"
        />
        <input
          onChange={handleChange}
          value={formData.title}
          className="border-2 p-2 rounded-lg w-full"
          type="text"
          name="title"
          id=""
          placeholder="Enter title"
        />
        <input
          onChange={handleChange}
          value={formData.price}
          className="border-2 p-2 rounded-lg w-full"
          type="number"
          name="price"
          id=""
          placeholder="Enter price"
        />
        <textarea
          onChange={handleChange}
          value={formData.description}
          className="border-2 p-2 rounded-lg w-full"
          name="description"
          id=""
          placeholder="Enter product description"
        ></textarea>
        <select
          onChange={handleChange}
          value={formData.category}
          name="category"
          id=""
          className="p-2 border-2 rounded-lg"
        >
          <option value="">--Select Category</option>
          <option value="cloth">Clothes</option>
          <option value="electronic">Electronic</option>
          <option value="furniture">Furniture</option>
        </select>
        <input
          onChange={handleChange}
          value={formData.image}
          className="border-2 p-2 rounded-lg w-full"
          type="text"
          name="image"
          id=""
          placeholder="Enter image url"
        />
        <input
          type="submit"
          value={`${isLoading ? "Loading...." : "Submit"}`}
          className="w-full p-2 px-4 bg-blue-600 cursor-pointer text-white"
        />
      </form>
    </div>
  );
};

export default AddProduct;
