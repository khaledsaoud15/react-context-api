import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 80px",
        height: "80px",
        background: "#00faea",
      }}
    >
      <h3>Khaled</h3>
      <p>Movie List: {movies.length}</p>
    </div>
  );
};

export default Nav;
