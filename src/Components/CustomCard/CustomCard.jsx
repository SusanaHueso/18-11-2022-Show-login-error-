import React from "react";
import Card from "react-bootstrap/Card";
import "./CustomCard.css";

export const CustomCard = () => {
  return (
    <Card className="welcomeCard" style={{ width: "18rem" }}>
      <Card.Img
        className="card-img-top"
        variant="top"
        src="https://www.jblearning.com/images/default-source/icons/home-page/quote-avater.png"
      />
      <Card.Body>
        <Card.Title>
          <b>Welcome to Rotten Potatoes</b>
        </Card.Title>
        <Card.Text Style={{ textalign: "centre" }}>
          <>Log in and watch thousands of movies!</>
          <p></p>
          <Button variant="primary">Log In</Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
