import React from "react";
import { useRouter } from "next/router";
import classes from "./MovieCarousel.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation } from "swiper/core";

SwiperCore.use([Navigation]);

const NewReleases = ({ movies, title }) => {
  const router = useRouter();

  const handleClick = (movieId) => {
    router.push(`/${movieId}`);
  };

  return (
    <section className={`section ${classes.carousel}`}>
      <h2>{title}</h2>
      <Swiper
        className={classes.swiperContainer}
        spaceBetween={20}
        slidesPerView={"auto"}
        navigation
        freeMode={true}
        freemodefluid="true"
        breakpoints={{
          1200: {
            slidesPerGroup: 4,
          },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide
            onClick={() => handleClick(movie.id)}
            className={classes.swiperSlide}
            key={movie.id}
          >
            {/* <picture>
              <source
                media="(max-width: 419px)"
                srcSet={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
              />
              <source
                media="(min-width: 420px)"
                srcSet={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
              /> */}
            <img
              src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
              alt={movie.title}
            />
            {/* </picture> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default NewReleases;
