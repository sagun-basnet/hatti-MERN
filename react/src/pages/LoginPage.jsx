import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../context/authContext";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const init = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(init);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email === "") {
      return alert("Email must be filled");
    }

    if (formData.password.length < 5) {
      return alert("password should contain min 8 char");
    }
    try {
      const res = await login(formData);
      console.log(res);
      navigate("/");
      console.log(formData);
      setFormData(init);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-screen grid place-items-center">
      <form
        onSubmit={handleSubmit}
        className="p-8 flex flex-col gap-4 shadow-2xl w-100"
      >
        <h1 className="text-4xl text-center font-bold">Login</h1>
        <input
          className="p-2 w-full border-2 rounded-md"
          type="text"
          placeholder="Enter username"
          name="username"
          onChange={handleChange}
          value={formData.username}
          required
        />
        <input
          className="p-2 w-full border-2 rounded-md"
          type="password"
          placeholder="Enter password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          required
        />
        <input
          className="bg-blue-500 p-2 px-4 rounded-md font-bold text-white"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default LoginPage;
