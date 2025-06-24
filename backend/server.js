import dotenv from "dotenv";
import express from "express";
import axios from "axios";
import cors from "cors";
import { TMDB } from "./api";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Movie Search
app.get("/api/movies/search", async (req, res) => {
  const query = req.query.q;
  try {
    const response = await axios.get(`${TMDB}/search/movie`, {
      params: {
        api_key: API_KEY,
        query,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching movies" });
  }
});

// Movie Details
app.get("/api/movies/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${TMDB}/movie/${id}`, {
      params: {
        api_key: API_KEY,
      },
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Movie not found" });
  }
});

// notes storage
let movieNotes = {};

// Save user note
app.post("/api/notes", (req, res) => {
  const { movieId, note } = req.body;
  movieNotes[movieId] = note;
  res.json({ success: true });
});

// Get user note
app.get("/api/notes/:movieId", (req, res) => {
  const note = movieNotes[req.params.movieId] || "";
  res.json({ note });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
