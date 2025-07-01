import { fetchMovies, searchMovies } from "./actions";

export const reducers = {
  setSelectedMovie: (state, action) => {
    state.selectedMovie = action.payload;
  },
};

export const extraReducers = (builder) => {
  builder
    .addCase(fetchMovies.pending, (state) => {
      state.status = "loading";
    })
    .addCase(fetchMovies.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.state = action.payload;
    })
    .addCase(fetchMovies.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    })
    .addCase(searchMovies.pending, (state) => {
      state.status = "loading";
    })
    .addCase(searchMovies.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.state = action.payload;
    })
    .addCase(searchMovies.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
};
