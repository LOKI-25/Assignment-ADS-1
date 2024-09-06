import { model, Schema } from "mongoose";

const MovieSchema = new Schema({
  age_certification: String,
  description: String,
  genres: [String],
  id: String,
  imdb_score: Number,
  production_countries: [String],
  release_year: Number,
  runtime: Number,
  title: String,
  type: String
});

export const Movie = model("netflixes", MovieSchema);
