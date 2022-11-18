import React from "react";
import "./Home.css";
import { useNavigate } from "react-router";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const Home = () => {
  let navigate = useNavigate();
  return (
    <div className="homeDesign">
      <div>
        <Button
          className="loginButton"
          onClick={() => {
            navigate("/Login");
          }}
        >
          Login
        </Button>
        <Button
          className="registerButton"
          onClick={() => {
            navigate("/Register");
          }}
        >
          Register
        </Button>
      </div>
    </div>
  );
};
