import React from "react";
import classes from "./MovieCard.module.scss";
import Link from "next/link";

const MovieCard = ({ details }) => {
  return (
    <div className={classes.movieCard}>
      <Link href={`/${details.id}`}>
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
            alt={details.title}
          />
        </picture>
      </Link>
    </div>
  );
};

export default MovieCard;
