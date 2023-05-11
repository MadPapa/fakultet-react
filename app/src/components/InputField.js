import React from "react";

const InputField = ({ type, placeholder }) => {
  const handleFocus = (evnet) => {
    evnet.target.style.outline = "none";
  };

  return <input type={type} placeholder={placeholder} onFocus={handleFocus} />;
};

export default InputField;
