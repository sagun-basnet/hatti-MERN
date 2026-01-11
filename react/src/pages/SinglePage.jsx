import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const { id } = useParams();
  console.log(parseInt(id));

  const [data, setData] = useState({});
  const fetchData = async () => {
    await axios
      .get(`https://fakestoreapi.com/products/${parseInt(id)}`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="h-100">
        <img className="w-full h-full" src={data.image} alt="" />
      </div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <span>Price: {data.price}</span>
      <h2>Category: {data.category}</h2>
    </div>
  );
};

export default SinglePage;
