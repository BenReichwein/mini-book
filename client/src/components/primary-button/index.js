import React from "react";
import "./styles.css";

// "primeBtn-medium", "primeBtn-large"

const PrimaryButton = ({ text, type, onClick, buttonSize, style }) => {

  return (
    <button
      className={`primeBtn ${buttonSize}`}
      onClick={onClick}
      style={style}
      type={type}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
