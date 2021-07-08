import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import classes from "../../styles/SearchPage.module.scss";
import MovieList from "../../components/layout/MovieList";
import BackButton from "../../components/button/BackButton";

const searchPage = () => {
  const router = useRouter();
  const [loadedMovies, setLoadedMovies] = useState("");
  const [totalResults, setTotalResults] = useState("");

  const filterMovies = router.query.slug;

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/search/movie?api_key=17e4ebec642c3b3c9a470f722d2ff89e&language=en-GB&query=${filterMovies}&page=1&include_adult=false`
  );

  useEffect(() => {
    if (data && filterMovies !== undefined) {
      setLoadedMovies(data.results);
      setTotalResults(data.total_results);
      console.log(totalResults);
      console.log(data);
    }
  }, [data]);

  if (!loadedMovies) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }

  if (totalResults === 0) {
    return (
      <>
        <BackButton />
        <h1>No Search Results for {filterMovies}</h1>
      </>
    );
  }
  return (
    <section className={`section-padding ${classes.searchPage} `}>
      <h1>Search results for "{filterMovies}"</h1>
      <BackButton />
      <MovieList
        movies={loadedMovies.filter(
          (movie) => movie.backdrop_path !== null && movie.poster_path !== null
        )}
      />
    </section>
  );
};

export default searchPage;
