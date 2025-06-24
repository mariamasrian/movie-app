import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import style from "./style.module.scss";

const breakpoints = {
  320: {
    slidesPerView: 1,
  },
  640: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 4,
  },
};

export const TrendingMovies = ({ movies, onMovieSelect }) => {
  return (
    <section className={style.trendingSection}>
      <h2 className={style.sectionTitle}>Trending Movies</h2>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={20}
        breakpoints={breakpoints}
        className={style.mySwiper}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div
              className={style.movieCard}
              onClick={() => onMovieSelect(movie)}
            >
              <img
                src={movie.imageUrl}
                alt={movie.title}
                className={style.moviePoster}
              />
              <h3 className={style.movieTitle}>{movie.title}</h3>
              <p className={style.movieYear}>{movie.year}</p>
              <p className={style.movieRating}>⭐ {movie.rating}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
