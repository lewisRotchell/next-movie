import React from "react";
import classes from "./MovieCard.module.scss";

const MovieCard = ({ details }) => {
  return (
    <div className={classes.movieCard}>
      <img
        src={`https://image.tmdb.org/t/p/w300/${details.backdrop_path}`}
        alt=""
      />
    </div>
  );
};

export default MovieCard;
