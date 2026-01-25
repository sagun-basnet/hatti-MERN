import { Link } from "react-router-dom";
import Button from "./Button";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <nav className="h-20 bg-blue-500 flex justify-between px-4 items-center">
      <h1>LOGO</h1>
      <ul className="flex gap-4">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/service">
          <li>Services</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
      {currentUser ? (
        <h1 className="font-bold text-lg">{currentUser.username}</h1>
      ) : (
        <div className="flex gap-4">
          <Button text={"Login"} color={"blue"} />
          <Button text={"Register"} color={"red"} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
