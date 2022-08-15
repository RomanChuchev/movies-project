import React, { useState } from "react";

const Search = ({ searchMovies = Function.prototype }) => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const handleKey = (event) => {
    if (event.key === "Enter") {
      searchMovies(search, type);
    }
  };

  const handleFilter = (event) => {
    setType(event.target.dataset.type);
    searchMovies(search, event.target.dataset.type);
  };

  return (
    <div className="row">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          id="search"
          aria-describedby="emailHelp"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />
        <button
          className="btn btn-primary"
          onClick={() => searchMovies(search, type)}
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
            onChange={handleFilter}
            checked={type === "all"}
          />
          <span>All</span>
        </div>

        <div className="form-check search-btn">
          <input
            className="form-check-input"
            type="radio"
            name="type"
            data-type="movie"
            onChange={handleFilter}
            checked={type === "movie"}
          />
          <span>Movie</span>
        </div>

        <div className="form-check search-btn">
          <input
            className="form-check-input"
            type="radio"
            name="type"
            data-type="series"
            onChange={handleFilter}
            checked={type === "series"}
          />
          <span>Serials</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
