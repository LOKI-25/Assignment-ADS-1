import { gql } from "apollo-server";

export const typeDefs = gql`
     type Movie {
        age_certification: String
        description: String
        genres: [String]
        id: String
        imdb_score: Float
        production_countries: [String]
        release_year: Int
        runtime: Int
        title: String
        type: String
     }

     input MovieInput {
        age_certification: String!
        description: String!
        genres: [String!]!
        id: String!
        imdb_score: Float!
        production_countries: [String!]!
        release_year: Int!
        runtime: Int!
        title: String!
        type: String!
     }

     input UpdatedMovieInput {
        description: String
        runtime: Int
        genres: [String]
        imdb_score: Float
     }
        

     type Query {
         getallMovies: [Movie],
         getMovieByName(title: String!): Movie,
         createMovie(movie: MovieInput): Movie
     }

     type Mutation{
        deleteMovieById(id:ID!): [Movie],
        deleteMovieByTitle(title:String!):[Movie]
        updateMovie(title:String!,movie:UpdatedMovieInput!):Movie
     }

`;
