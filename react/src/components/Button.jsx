import React from "react";

const Button = ({ text, color }) => {
  return (
    <button
      style={{ backgroundColor: `${color}` }}
      className={`p-2 px-4 rounded-md`}
    >
      {text}
    </button>
  );
};

export default Button;
