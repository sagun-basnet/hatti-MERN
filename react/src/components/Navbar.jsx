import Button from "./Button";

const Navbar = ({ user }) => {
  // console.log(user);

  return (
    <nav className="h-20 bg-blue-500 flex justify-between px-4 items-center">
      <h1>LOGO</h1>
      <ul className="flex gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>

        {user && <li>Go to Dashboard</li>}
      </ul>
      {user ? (
        <h2 className="text-xl">{user}</h2>
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
