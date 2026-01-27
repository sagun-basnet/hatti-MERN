import axios from "axios";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const user = {
    email: "jhone@gmail.com",
    username: "jhone",
    password: "12345678",
  };
  
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("userData")) || null,
  );

  const login = async (data) => {
    try {
      const res = await axios.post("https://fakestoreapi.com/auth/login", data);
      console.log(res);
      setCurrentUser(user);
      localStorage.setItem("userToken", res.data.token);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("userData", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("userData");
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };
