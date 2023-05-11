import React from "react";
import InputField from "./InputField";

const LoginData = () => {
  return (
    <div className="section-1">
      <div className="left">
        <InputField type="text" placeholder="Email" />
        <InputField type="text" placeholder="Powtórz hasło" />
      </div>
      <div className="right">
        <InputField type="text" placeholder="Hasło" />
        <InputField type="text" placeholder="Numer indeksu" />
      </div>
    </div>
  );
};

export default LoginData;
