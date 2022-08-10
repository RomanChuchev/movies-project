import { Component } from "react";

export default class Search extends Component {
  state = {
    search: "",
    type: "all",
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (event) => {
    this.setState(() => ({ type: event.target.dataset.type }), () => {
       this.props.searchMovies(this.state.search, this.state.type);
    });

  };

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            className="validate"
            placeholder="Search"
            id="search"
            type="text"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            className="btn search-btn"
            onClick={() => this.props.searchMovies(this.state.search, this.state.type)}
          >
            Search
          </button>
        </div>

        <div className="row">
          <label className="col s4">
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="all"
              onChange={this.handleFilter}
              checked={this.state.type === 'all'}
            />
            <span>All</span>
          </label>

          <label className="col s4">
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              onChange={this.handleFilter}
              checked={this.state.type === 'movie'}
            />
            <span>Movie</span>
          </label>

          <label className="col">
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="series"
              onChange={this.handleFilter}
              checked={this.state.type === 'series'}
            />
            <span>Serials</span>
          </label>
        </div>
      </div>
    );
  }
}
