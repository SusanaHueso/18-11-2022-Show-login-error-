import React from "react";
import "./Home.css";

import image from "/Users/susana.huesodevis/Documents/GeeksHubs exercises/11-11-2022-Technical-Test-Basic/src/images/image.jpg";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const Home = () => {
  return (
    <div className="homeDesign" style={{ backgroundImage: `url(${image})` }}>
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
    </div>
  );
};
