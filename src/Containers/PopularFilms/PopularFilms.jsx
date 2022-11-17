import React, { useEffect, useState } from "react";
import "./PopularFilms.css";
import axios from "axios";

const PopularFilms = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    setMovies();
  }, []);
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d`
    );
    const data = await response.json();
    setMovies(data.results);
    console.log(data);
  };
  return <div className="popularFilmsDesign">PopularFilms</div>;
};
export default PopularFilms;
