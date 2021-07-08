export async function getMovies() {
  let newReleasesUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-GB&page=1&region=GB`;
  let popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-GB&page=1&region=GB`;
  let topRatedMoviesUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-GB&page=1&region=GB`;

  const urls = [newReleasesUrl, popularMoviesUrl, topRatedMoviesUrl];

  try {
    let data = await Promise.all(
      urls.map((url) => fetch(url).then((response) => response.json()))
    ).catch((error) => console.log(error));
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieById(movieId) {
  const res =
    await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-GB
`);
  const data = await res.json();
  return data;
}

//make a function to get cast and director
export async function getCast(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.API_KEY}&language=en-GB`
  );
  const data = await res.json();

  //Get cast
  let cast = data.cast;
  let director = data.crew.find((e) => e.job === "Director") || "";
  return {
    cast,
    director,
  };
  // return data;
}
