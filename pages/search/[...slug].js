import React, { useEffect, useState } from "react";
import Head from "next/head";
import useSWR from "swr";
import { useRouter } from "next/router";
import classes from "../../styles/SearchPage.module.scss";
import MovieList from "../../components/layout/MovieList";
import BackButton from "../../components/button/BackButton";
import Loading from "../../components/layout/Loading";

const searchPage = () => {
  const router = useRouter();
  const [loadedMovies, setLoadedMovies] = useState("");
  const [totalResults, setTotalResults] = useState("");

  const filterMovies = router.query.slug;

  console.log(process.env.NEXT_PUBLIC_API_KEY);

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-GB&query=${filterMovies}&page=1&include_adult=false`
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
        <Loading />
      </>
    );
  }

  if (totalResults === 0) {
    return (
      <>
        <Head>
          <title>{`No search results for ${filterMovies}`}</title>
          <meta
            name="description"
            content={`No search results for ${filterMovies}`}
          />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <BackButton />
        <h1>No Search Results for {filterMovies}</h1>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>{`Search results for ${filterMovies}`}</title>
        <meta
          name="description"
          content={`Search results for ${filterMovies}`}
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <section className={`section-padding ${classes.searchPage} `}>
        <h1>Search results for "{filterMovies}"</h1>
        <BackButton />
        <MovieList
          movies={loadedMovies.filter(
            (movie) =>
              movie.backdrop_path !== null && movie.poster_path !== null
          )}
        />
      </section>
    </>
  );
};

export default searchPage;
