function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;

  return (
    <div className="card text-white bg-dark mb-3" id={id}>
      <div>
        {poster === "N/A" ? (
          <img className="card-img-top" />
        ) : (
          <img className="card-img-top" src={poster} />
        )}
      </div>

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="card-text position-relative">
          <div className="position-absolute top-0 start-0">{year}</div>
          <div className="position-absolute top-0 end-0">{type}</div>
        </div>
      </div>
    </div>
  );
}
export { Movie };
