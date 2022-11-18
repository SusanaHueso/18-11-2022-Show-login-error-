import React from "react";
import { CustomCard } from "../../Components/CustomCard/CustomCard";
import "./Register.css";

export const Register = () => {
  const title = "Sign up";
  const use = "Register";
  return (
    <div className="loginDesign">
      <CustomCard title={title} use={use} />
    </div>
  );
};
