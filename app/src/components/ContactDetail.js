import React from "react";
import InputField from "./InputField";

const ContactDetail = () => {
  return (
    <div className="section-2">
      <div className="left">
        <InputField type="text" placeholder="Imię" />
        <InputField type="text" placeholder="Data urodzenia" />
        <InputField type="text" placeholder="Numer telefonu" />
      </div>
      <div className="right">
        <InputField type="text" placeholder="Nazwisko" />
        <InputField type="text" placeholder="Pesel" />
        <InputField type="text" placeholder="Miasto" />
      </div>
    </div>
  );
};

export default ContactDetail;
