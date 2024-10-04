// ColorChangingButton.jsx
import { useState } from "react";

const ColorChangingButton = () => {
  const [color, setColor] = useState("blue"); // Initial state

  const handleClick = () => {
    setColor((prevColor) => (prevColor === "blue" ? "red" : "blue")); // Toggle color on click
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: color,
        color: "white",
        padding: "10px 20px",
        border: "none",
        cursor: "pointer",
      }}
    >
      Click me to change color
    </button>
  );
};

export default ColorChangingButton;
