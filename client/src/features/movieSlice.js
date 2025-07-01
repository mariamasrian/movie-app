import { createSlice } from "@reduxjs/toolkit";
import { reducers, extraReducers } from "./reducers";

const initialState = {
  state: [],
  status: "",
  error: null,
  selectedMovie: null,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers,
  extraReducers,
});

export const { setSelectedMovie } = movieSlice.actions;
export default movieSlice.reducer;
