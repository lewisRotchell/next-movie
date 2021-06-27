import React from "react";
import { getMovieById, getMovies } from "../helpers/api-util";
import classes from "../styles/MoviePage.module.scss";

const MovieDetailPage = ({ selectedMovie }) => {
  const {
    title,
    backdrop_path,
    poster_path,
    overview,
    genres,
    director,
    releaseDate,
    runTime,
    cast,
  } = selectedMovie;
  console.log(selectedMovie);
  return (
    <section className={classes.MovieDetailPage}>
      <header>
        <img
          className={classes.movieBackdrop}
          src={`https://image.tmdb.org/t/p/w780/${backdrop_path}`}
          alt=""
        />
      </header>

      <div className={`section-padding ${classes.movieDetailsContainer}`}>
        <img
          className={classes.moviePoster}
          src={`https://image.tmdb.org/t/p/w92/${poster_path}`}
          alt=""
        />
        <h1>{title}</h1>
        <p>{overview}</p>
        <ul>
          <li>genres mapped here</li>
        </ul>
        <p>Directored By </p>
        <p> Release Date: {releaseDate}</p>
        <p> Run Time: {runTime}</p>
        <p>Cast</p>
      </div>
    </section>
  );
};

export async function getStaticProps(context) {
  const movieId = context.params.movieId;

  const movie = await getMovieById(movieId);

  return {
    props: {
      selectedMovie: movie,
    },
  };
}

export async function getStaticPaths() {
  const movies = await getMovies();

  const bigMovieArray = [
    ...movies[0].results,
    ...movies[1].results,
    ...movies[2].results,
  ];

  const paths = bigMovieArray.map((movie) => ({
    params: { movieId: movie.id.toString() },
  }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default MovieDetailPage;
