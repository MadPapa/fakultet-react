import React from "react";
import LoginData from "../components/LoginData";
import ContactDetail from "../components/ContactDetail";
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";
import TermsAgreement from "../components/TermsAgreement";
import PrimaryButton from "../components/PrimaryButton";
import LoginLink from "../components/LoginLink";
import ArrowLeft from "../components/ArrowLeft";

const RegisterForm = () => {
  return (
    <div className="container">
      <ArrowLeft />
      <Header1 text="Rejestracja" />
      <Header2 text="Dane logowania" />
      <LoginData />
      <Header2 text="Dane kontaktowe" />
      <ContactDetail />
      <TermsAgreement />
      <PrimaryButton text="Zarejestruj"/>
      <LoginLink />
    </div>
  );
};

export default RegisterForm;
