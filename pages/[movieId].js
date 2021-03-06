import React, { useEffect, useState } from "react";
import Head from "next/head";
import { getCast, getMovieById, getMovies } from "../helpers/api-util";
import classes from "../styles/MoviePage.module.scss";
import BackButton from "../components/button/BackButton";
import Loading from "../components/layout/Loading";

const MovieDetailPage = ({ selectedMovie, people }) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  });

  if (!selectedMovie || !people) {
    return <Loading />;
  }

  const {
    title,
    backdrop_path,
    poster_path,
    overview,
    genres,
    release_date,
    runtime,
  } = selectedMovie;

  const { cast } = people;

  const { crew } = people;

  const director = crew.find((person) => person.job === "Director");

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={overview} />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <section
        style={{
          "--img": `url('https://image.tmdb.org/t/p/w300/${backdrop_path}')`,
          "--img-md": `url('https://image.tmdb.org/t/p/w780/${backdrop_path}')`,
          "--img-lg": `url('https://image.tmdb.org/t/p/w1280/${backdrop_path}')`,
        }}
        className={`${classes.MovieDetailPage} ${fadeIn ? classes.fadeIn : ""}`}
      >
        <div className={`section-padding ${classes.movieDetailsContainer}`}>
          <BackButton />

          <img
            className={classes.moviePoster}
            src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
            alt={title}
          />
          <h1>{title}</h1>
          <div className={classes.movieInfo}>
            <p className={classes.releaseDate}>{`${release_date.slice(
              0,
              4
            )}`}</p>
            <ul className={classes.genres}>
              {genres.length > 1
                ? genres
                    .slice(0, 2)
                    .map((genre, index) => (
                      <li key={genre.id}>{`${genre.name}${
                        index === 0 ? ", " : ""
                      }`}</li>
                    ))
                : genres === 0
                ? genres[0].name
                : ""}
            </ul>
            <p>{runtime} mins</p>
          </div>
          <p className={classes.plotSummaryTitle}>Plot Summary</p>
          <p>{overview}</p>

          <div className={classes.starring}>
            <p>
              {" "}
              <span className={classes.subtitle}>Starring : </span>
            </p>
            <ul>
              {cast.length >= 1
                ? cast
                    .slice(0, 4)
                    .map((actor, index) => (
                      <li key={actor.id}>{`${actor.name}${
                        index !== 3 ? ", " : ""
                      } `}</li>
                    ))
                : cast[0].name}
            </ul>
          </div>

          <p>
            <span className={classes.subtitle}>Director : </span>{" "}
            {director.name}
          </p>

          <ul></ul>
        </div>
      </section>
    </>
  );
};

export async function getStaticProps(context) {
  const movieId = context.params.movieId;

  const movie = await getMovieById(movieId);

  const people = await getCast(movieId);

  return {
    props: {
      selectedMovie: movie,
      people: people,
    },
    revalidate: 1800,
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
    paths,
    fallback: true,
  };
}

export default MovieDetailPage;
