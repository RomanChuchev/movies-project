import React, { Component } from "react";
import { Movies } from "../components/Movies";
import Search from "../components/Search";
import Spinner from "../components/spinner";

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: false,
    };

    this.searchMovies = this.searchMovies.bind(this);
  }

  searchMovies(str, type = "all") {
    this.setState({ loading: true });
    fetch(
      `https://www.omdbapi.com/?apikey=347de6a3&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {loading ? <Spinner /> : <Movies movies={movies} />}
      </main>
    );
  }
}
