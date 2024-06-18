import React from "react";
import { CiDark, CiLight } from "react-icons/ci";
import "../styles/ThemeToggle.css";

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? <CiDark size={24} /> : <CiLight size={24} />}
    </button>
  );
};

export default ThemeToggle;
