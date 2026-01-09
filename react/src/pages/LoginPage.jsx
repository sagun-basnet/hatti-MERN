import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const init = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(init);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email === "") {
      return alert("Email must be filled");
    }

    if (formData.password.length < 7) {
      return alert("password should contain min 8 char");
    }

    console.log(formData);
    setFormData(init);
    navigate("/");
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
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
          value={formData.email}
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
