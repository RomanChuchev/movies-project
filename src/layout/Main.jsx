import React, { useState } from "react";
import { Movies } from "../components/Movies";
import Search from "../components/Search";
import Spinner from "../components/spinner";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchMovies = (str, type = "all") => {
    setLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=347de6a3&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setMovies(data.Search);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <main className="container content">
      <Search searchMovies={searchMovies} />
      {loading ? <Spinner /> : <Movies movies={movies} />}
    </main>
  );
};

export default Main;
