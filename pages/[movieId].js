import React from "react";
import Link from "next/link";
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
    release_date,
    runtime,
    cast,
  } = selectedMovie;
  console.log(selectedMovie);

  // const backgroundImg = {
  //   backgroundImage: `url(https://image.tmdb.org/t/p/w780/${backdrop_path})`,
  // };

  return (
    <section
      style={{
        "--img": `url('https://image.tmdb.org/t/p/w300/${backdrop_path}')`,
        "--img-md": `url('https://image.tmdb.org/t/p/w780/${backdrop_path}')`,
        "--img-lg": `url('https://image.tmdb.org/t/p/w1280/${backdrop_path}')`,
      }}
      className={`${classes.MovieDetailPage}`}
    >
      <div className={`section-padding ${classes.movieDetailsContainer}`}>
        <nav className={classes.backButton}>
          <Link href="/">Back!</Link>
        </nav>

        <img
          className={classes.moviePoster}
          src={`https://image.tmdb.org/t/p/w154/${poster_path}`}
          alt=""
        />
        <h1>{title}</h1>
        <div className={classes.movieInfo}>
          <p>{release_date.slice(0, 4)}</p>
          <ul className={classes.genres}>
            {genres.length > 1
              ? genres
                  .slice(0, 2)
                  .map((genre, index, arr) => (
                    <li key={genre.id}>{`${genre.name}${
                      index === 0 ? ", " : ""
                    }`}</li>
                  ))
              : genres[0].name}
          </ul>
          <p>{runtime} mins</p>
        </div>

        <p>{overview}</p>

        <p>Directed By </p>

        <p>Cast</p>
        <ul></ul>
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
