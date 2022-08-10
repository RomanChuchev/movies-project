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
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div className="row">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            id="search"
            aria-describedby="emailHelp"
            placeholder="Search"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            className="btn btn-primary"
            onClick={() =>
              this.props.searchMovies(this.state.search, this.state.type)
            }
          >
            Search
          </button>
        </div>

        <div className="btn-group" role="group">
          <div className="form-check search-btn">
            <input
              className="form-check-input"
              type="radio"
              name="type"
              data-type="all"
              onChange={this.handleFilter}
              checked={this.state.type === "all"}
            />
            <span>All</span>
          </div>

          <div className="form-check search-btn">
            <input
              className="form-check-input"
              type="radio"
              name="type"
              data-type="movie"
              onChange={this.handleFilter}
              checked={this.state.type === "movie"}
            />
            <span>Movie</span>
          </div>

          <div className="form-check search-btn">
            <input
              className="form-check-input"
              type="radio"
              name="type"
              data-type="series"
              onChange={this.handleFilter}
              checked={this.state.type === "series"}
            />
            <span>Serials</span>
          </div>
        </div>
      </div>
    );
  }
}
