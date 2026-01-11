import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const APIPage = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const fetchValue = await axios.get("https://fakestoreapi.com/products");
    // console.log(fetchValue.data);
    setData(fetchValue.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-screen grid grid-cols-5 gap-2 place-items-center">
      {data.map((item, index) => {
        return (
          <Link to={`/products/${item.id}`}>
            <div key={index} className=" w-50 border-2 flex flex-col gap-4 p-2">
              <div className="h-30">
                <img className="w-full h-full" src={item.image} alt="" />
              </div>
              <h1>{item.title.slice(0, 18)}...</h1>
              <p>{item.description.slice(0, 30)}...</p>
              <span>Price: {item.price}</span>
              <h2>Category: {item.category}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default APIPage;
