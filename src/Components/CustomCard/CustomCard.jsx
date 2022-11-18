import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./CustomCard.css";

export const CustomCard = (props) => {
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const errorHandler = (e) => {
    let content = "";
    if (e.target.type === "email") {
      if (e.target.value.length === 0) {
        content = "Email field is empty";
      }
      setError({
        ...error,
        ["email"]: content,
      });
    }
    if (e.target.type === "password") {
      if (e.target.value.length === 0) {
        content = "Password field is empty";
      }

      setError({
        ...error,
        ["password"]: content,
      });
    }
    console.log(error);
  };
  return (
    <Card className="welcomeCard" style={{ width: "18rem" }}>
      <Card.Img
        className="card-img-top"
        variant="top"
        src="https://www.jblearning.com/images/default-source/icons/home-page/quote-avater.png"
      />
      <Card.Body>
        <Card.Title>
          <b>{props.title}</b>
        </Card.Title>
        <Card.Text className="cardText" align="left">
          Email:{" "}
          <input type="email" name="email" onBlur={(e) => errorHandler(e)} />{" "}
          <div>{error.email}</div>
          PassWord:{" "}
          <input
            type="password"
            name="password"
            onBlur={(e) => errorHandler(e)}
          />
             <div>{error.password}</div>
          <div>
            <Button className="nextButton" variant="primary">
              Next
            </Button>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
