import { Movie } from "../models/Movie.js";

export const resolvers = {
  Query: {
    async getallMovies() {
      try {
        const movies = await Movie.find();
        return movies;
      } catch (error) {
        throw new Error("Failed to fetch movies.");
      }
    },

    async getMovieByName(_, args) {
      try {
        const movie = await Movie.findOne({ title: args.title });
        if (!movie) {
          throw new Error("Movie not found.");
        }
        return movie;
      } catch (error) {
        throw new Error(`Failed to fetch movie with title ${args.title}.`);
      }
    },

    async createMovie(_, args) {
      try {
        const movie = new Movie({
          age_certification: args.movie.age_certification,
          description: args.movie.description,
          genres: args.movie.genres,
          id: args.movie.id,
          imdb_score: args.movie.imdb_score,
          production_countries: args.movie.production_countries,
          release_year: args.movie.release_year,
          runtime: args.movie.runtime,
          title: args.movie.title,
          type: args.movie.type,
        });
        return await movie.save();
      } catch (error) {
        throw new Error("Failed to create movie.");
      }
    },
  },
  Mutation: {
    async deleteMovieById(_, args) {
      try {
        const deletedMovie = await Movie.findOneAndDelete({ id: args.id });
        if (!deletedMovie) {
          throw new Error(`Movie with ID ${args.id} not found.`);
        }
        return await Movie.find();
      } catch (error) {
        throw new Error(`Failed to delete movie with ID ${args.id}.`);
      }
    },

    async deleteMovieByTitle(_, args) {
      try {
        const deletedMovie = await Movie.findOneAndDelete({ title: args.title });
        if (!deletedMovie) {
          throw new Error(`Movie with title ${args.title} not found.`);
        }
        return await Movie.find();
      } catch (error) {
        throw new Error(`Failed to delete movie with title ${args.title}.`);
      }
    },
    async updateMovie(_, args) {
      try {
        const movie = await Movie.findOneAndUpdate(
          { title: args.title },
          args.movie,{ new: true }
        );
        return movie;
      } catch (error) {
        throw new Error(`Failed to update movie with title ${args.title}.`);
      }
    },
  },
};
