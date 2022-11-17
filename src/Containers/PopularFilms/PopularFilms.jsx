import React, { useEffect, useState } from "react";
import "./PopularFilms.css";
import axios from "axios";

const PopularFilms = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d`
    );
    const data = await response.json();
    setMovies(data.results);
    //["poster_path"] to access the path
  };
  console.log(movies);
  /*      {movies.map(
          (movie) => <img
          src={
            "https://image.tmdb.org/t/p/w500" + movie["poster_path"]
          }
        ></img>  
        )} */

  return (
    <div className="popularFilmsDesign">
      <React.Fragment>
        {movies.map((movie) => (
          <img
            src={"https://image.tmdb.org/t/p/w500" + movie["poster_path"]}
          ></img>
        ))}
      </React.Fragment>
    </div>
  );
};
export default PopularFilms;
