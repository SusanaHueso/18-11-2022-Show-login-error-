import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./CustomCard.css";

export const CustomCard = (props) => {
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
          Email: <input type="text" name="email" />
          PassWord: <input type="text" name="password" />
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
