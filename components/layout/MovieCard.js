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
      <picture>
        <source
          media="(max-width: 419px)"
          srcSet={`https://image.tmdb.org/t/p/w154/${details.poster_path}`}
        />
        <source
          media="(min-width: 420px)"
          srcSet={`https://image.tmdb.org/t/p/w185/${details.poster_path}`}
        />
        <img
          src={`https://image.tmdb.org/t/p/w185/${details.poster_path}`}
          alt=""
        />
      </picture>
    </div>
  );
};

export default MovieCard;
