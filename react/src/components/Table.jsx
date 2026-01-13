import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Table = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const fetchValue = await axios.get("https://fakestoreapi.com/products");
    // console.log(fetchValue.data);
    setData(fetchValue.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await axios
      .delete(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res);
        toast.success("Item deleted successfully.");
        fetchData();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error while Deleting Item.");
      });
  };

  const handleEdit = (id) => {
    navigate(`/edit-item/${id}`);
  };

  return (
    <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default p-8">
      <table className="w-full text-sm text-left rtl:text-right text-body border-2">
        <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
          <tr>
            <th scope="col" className="px-6 py-3 font-medium">
              ID
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Title
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Price
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Description
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Category
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Image
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr
                className="bg-neutral-primary border-b border-default"
                key={index}
              >
                <td className="px-6 py-4">{item.id}</td>
                <td className="px-6 py-4">{item.title}</td>
                <td className="px-6 py-4">Rs. {item.price}</td>
                <td className="px-6 py-4">{item.description}</td>
                <td className="px-6 py-4">{item.category}</td>
                <td className="px-6 py-4">
                  <img src={item.image} alt="Image" />
                </td>
                <td className="px-6 py-4 flex gap-4 justify-center items-center">
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="p-2 rounded-md text-white bg-blue-500 cursor-pointer"
                  >
                    <BiEdit />
                  </button>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2 rounded-md text-white bg-red-500 cursor-pointer"
                  >
                    <BiTrash />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
