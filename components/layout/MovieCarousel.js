import React from "react";
import classes from "./MovieCarousel.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Scrollbar, A11y } from "swiper";
import Link from "next/link";

import SwiperCore, { Navigation, A11y } from "swiper/core";

SwiperCore.use([Navigation, A11y]);

const NewReleases = ({ movies, title }) => {
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
        a11y={{
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
        }}
        breakpoints={{
          1200: {
            slidesPerGroup: 4,
          },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide className={classes.swiperSlide} key={movie.id}>
            {/* <picture>
              <source
                media="(max-width: 419px)"
                srcSet={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
              />
              <source
                media="(min-width: 420px)"
                srcSet={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
              /> */}
            <Link href={`/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default NewReleases;
