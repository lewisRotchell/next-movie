import Head from "next/head";
import MovieCarousel from "../components/layout/MovieCarousel";
import { getMovies } from "../helpers/api-util";

export default function Home({ newReleases, popularMovies, topRatedMovies }) {
  return (
    <>
      <Head>
        <title>Next Movie</title>
        <meta
          name="description"
          content="Browse all of your favourite movies in the same place"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <section className="section-padding">
        <MovieCarousel movies={newReleases} title={"New Releases"} />
        <MovieCarousel movies={popularMovies} title={"Most Popular"} />
        <MovieCarousel movies={topRatedMovies} title={"Top Rated"} />
      </section>
    </>
  );
}

export async function getStaticProps() {
  const data = await getMovies();

  return {
    props: {
      newReleases: data[0].results,
      popularMovies: data[1].results,
      topRatedMovies: data[2].results,
    },
    revalidate: 1800,
  };
}
