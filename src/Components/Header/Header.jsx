import React from "react";
import "./Header.css";
// best practice!
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();

  return (
    <div className="headerDesign">
      <div
        className="linkDesign"
        onClick={() =>
          setTimeout(() => {
            navigate("/");
          }, 750)
        }
      >
        Home
      </div>
      <div
        className="linkDesign"
        onClick={() =>
          setTimeout(() => {
            navigate("/PopularFilms");
          }, 750)
        }
      >
        PopularFilms
      </div>
    </div>
  );
};
export default Header;
