import { createAsyncThunk } from "@reduxjs/toolkit";
import { tmdb } from "../api/tmdb";

const movieMapper = (results) =>
  results.map((movie) => ({
    id: movie.id,
    title: movie.title,
    year: movie.release_date?.split("-")[0] || "N/A",
    rating: movie.vote_average,
    imageUrl: `https://image.tmdb.org/t/p/w200${movie.poster_path}`,
    detailImageUrl: `https://image.tmdb.org/t/p/w300${movie.poster_path}`,
    genre: "Not provided by API",
    description: movie.overview,
  }));

// Fetch trending movies
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await tmdb.get("/trending/movie/week");
  return movieMapper(response.data.results);
});

// Search movies by query
export const searchMovies = createAsyncThunk(
  "movies/searchMovies",
  async (searchTerm) => {
    const response = await tmdb.get("/search/movie", {
      params: {
        query: searchTerm,
      },
    });

    return movieMapper(response.data.results);
  }
);
