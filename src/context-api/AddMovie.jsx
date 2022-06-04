import React, { useContext, useState } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [movies, setMovies] = useContext(MovieContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [
      ...prevMovies,
      {
        name,
        price,
      },
    ]);
    updateInputs();
  };
  const updateInputs = () => {
    setName("");
    setPrice("");
  };

  return (
    <div>
      <form onSubmit={addMovie}>
        <input
          type="text"
          name="name"
          placeholder="Add movie name"
          value={name}
          onChange={updateName}
        />
        <input
          type="text"
          name="price"
          placeholder="Add movie price"
          value={price}
          onChange={updatePrice}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddMovie;
