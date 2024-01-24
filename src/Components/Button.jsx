import React from "react";
import "../Stylesheets/Button.css";

const Button = ({ text, clickButton, handleOnClick }) => {
  return (
    <button 
    className={clickButton ? "click-button" : "reset-button"}
    onClick={handleOnClick}>
        {text}
    </button>
  );
};

export default Button;
