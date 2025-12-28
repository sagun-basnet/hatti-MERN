import Button from "./components/Button";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

const App = () => {
  const name = "Jhon";
  return (
    <>
      {/* <h1 className="flex underline p-[] text-[#ffffff] bg-blue-500">Hello</h1> */}
      <Navbar user={name} />
      <Login />
      <Register />
      {/* <Button text={"Click"} color={"blue"} />
      <Button text={"Login"} color={"red"} />
      <Button text={"Register"} color={"yellow"} />
      <Button text={"More"} color={"red"} /> */}
    </>
  );
};

export default App;
