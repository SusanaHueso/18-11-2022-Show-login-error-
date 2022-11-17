import React, { useEffect, useState } from "react";
import "./PopularFilms.css";

import { Card } from "react-bootstrap";
const PopularFilms = () => {
  const [movies, setMovies] = useState([]);
  const [movieInfo, setMovieInfo] = useState(false);
  const [id, setID] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);
  const getMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d`
    );
    const data = await response.json();
    setMovies(data.results);
    //["poster_path"] to access the path
  };
  console.log(movies);
  /*     <Popup trigger={<button> Trigger</button>} position="right center">
          <div>Popup content here !!</div>
        </Popup>
         */
  const handleClick = (movie, alt) => {
    setMovieInfo(!movieInfo);
    setID(alt);
    console.log("clicked", movie);
  };
  return (
    <div className="popularFilmsDesign">
      <React.Fragment>
        {movies.map((movie) => (
          <div className="imageAndInfo">
            <>
              <img
                src={"https://image.tmdb.org/t/p/w500" + movie["poster_path"]}
                alt={movie["poster_path"]}
                onClick={() => handleClick(movie, movie["poster_path"])}
              ></img>

              {movieInfo && id === movie["poster_path"] && (
                <div className=" movieInfo">
                  <Card className="welcomeCardFilm" style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>
                        <b>{movie["original_title"]}</b>
                      </Card.Title>
                      <Card.Text>
                        <p>{movie["release_date"]}</p>
                        <p>{movie["overview"]}</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              )}
            </>
          </div>
        ))}
      </React.Fragment>
    </div>
  );
};
export default PopularFilms;
