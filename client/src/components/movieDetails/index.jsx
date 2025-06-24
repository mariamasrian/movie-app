import React, { useState } from "react";
import style from "./style.module.scss";

export const MovieDetails = ({ movie }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!movie) return null;

  const toggleDescription = () => setIsExpanded((prev) => !prev);

  return (
    <div className={style.movieDetails}>
      <img
        src={movie.imageUrl}
        alt={movie.title}
        className={style.detailPoster}
      />
      <h3 className={style.detailTitle}>{movie.title}</h3>
      <p className={style.detailYear}>{movie.year}</p>
      <p className={style.detailGenre}>{movie.genre}</p>

      <p
        className={`${style.detailDescription} ${
          isExpanded ? style.expanded : ""
        }`}
        onClick={toggleDescription}
      >
        {movie.description}
        {!isExpanded && <span className={style.readMore}>...more</span>}
      </p>
    </div>
  );
};
