import React from "react";
import Image from "next/image";
import classes from "./MovieCarousel.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.css";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/core";

// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const NewReleases = ({ movies, title }) => {
  console.log(movies);
  return (
    <section className={`section ${classes.carousel}`}>
      <h2>{title}</h2>
      <Swiper
        className={classes.swiperContainer}
        spaceBetween={14}
        slidesPerView={"auto"}

        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {movies.map((movie) => (
          <SwiperSlide className={classes.swiperSlide} key={movie.id}>
            {/* <img src={`https://image.tmdb.org/t/p/w92/${movie.poster_path}`} /> */}
            <picture>
              <source
                media="(max-width: 799px)"
                srcSet={`https://image.tmdb.org/t/p/w92/${movie.poster_path}`}
              />
              <source
                media="(min-width: 800px)"
                srcSet={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
              />
              <img
                src={`https://image.tmdb.org/t/p/w92/${movie.poster_path}`}
                alt=""
              />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default NewReleases;
