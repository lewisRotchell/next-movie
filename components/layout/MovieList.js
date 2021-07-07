import React from "react";
import MovieCard from "./MovieCard";
import classes from "./MovieList.module.scss";

const MovieList = ({ movies }) => {
  return (
    <ul className={classes.movieList}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} details={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
