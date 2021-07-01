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
      {/* <div className={classes.backgroundImg}>
        <img
          className={classes.movieBackdrop}
          src={`https://image.tmdb.org/t/p/w780/${backdrop_path}`}
          alt=""
        />
      </div> */}

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
        <ul className={classes.genres}>
          {genres.map((genre, index, arr) => (
            <li key={genre.id}>
              {genre.name}
              {index !== arr.length - 1 ? ", " : ""}
            </li>
          ))}
        </ul>
        <p>{overview}</p>

        <p>Directed By </p>
        <p> Release Date: {release_date}</p>
        <p> Run Time: {runtime} mins</p>
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
