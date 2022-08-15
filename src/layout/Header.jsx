function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <h1 className="navbar-brand">React Movies</h1>
        <a
          className="btn btn-secondary btn-header"
          target="_blank"
          href="https://github.com/RomanChuchev"
          role="button"
        >
          Repo
        </a>
      </div>
    </nav>
  );
}

export { Header };
