import React, { useState } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";
import { useContext } from "react";

const MovieList = () => {
  const [movies, setMovie] = useContext(MovieContext);
  return (
    <div>
      {movies.map((movie) => (
        <div className="movie" key={movie.id}>
          <Movie movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
