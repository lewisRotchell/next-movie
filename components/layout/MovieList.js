import React from "react";
import classes from "./MovieList.module.scss";

const MovieList = ({ movies }) => {
  return (
    <ul className={classes.movieList}>
      {movies.map((movie) => (
        <li>{movie.title}</li>
      ))}
    </ul>
  );
};

export default MovieList;
