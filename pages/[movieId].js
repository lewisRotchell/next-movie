import React from "react";
import { getMovieById, getMovies } from "../helpers/api-util";

const MovieDetailPage = ({ selectedMovie }) => {
  const { title, description, genres, director, releaseDate, runTime, cast } =
    selectedMovie;
  console.log(selectedMovie);
  return (
    <section>
      {/* <header></header>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        <li>genres mapped here</li>
      </ul>
      <p>Directored By </p>
      <p> Release Date: {releaseDate}</p>
      <p> Run Time: {runTime}</p>
      <p>Cast</p> */}
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
    fallback: false,
  };
}

export default MovieDetailPage;
