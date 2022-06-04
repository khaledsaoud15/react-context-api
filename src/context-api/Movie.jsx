import React from "react";

const Movie = ({ movie, key }) => {
  return (
    <div key={key}>
      <h1>{movie.name}</h1>
      <p>{movie.price}</p>
    </div>
  );
};

export default Movie;
