import React from "react";
import classes from "./MovieCard.module.scss";
import { useRouter } from "next/router";

const MovieCard = ({ details }) => {
  const router = useRouter();

  const handleClick = (movieId) => {
    router.push(`/${movieId}`);
  };
  return (
    <div onClick={() => handleClick(details.id)} className={classes.movieCard}>
      <img
        src={`https://image.tmdb.org/t/p/w185/${details.poster_path}`}
        alt=""
      />
    </div>
  );
};

export default MovieCard;
