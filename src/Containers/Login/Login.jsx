import React from "react";
import { CustomCard } from "../../Components/CustomCard/CustomCard";
import "./Login.css";
export const Login = () => {
  const title = "Sign in";
  const use = "Login";
  return (
    <div className="loginDesign">
      <CustomCard title={title} use={use} />
    </div>
  );
};
