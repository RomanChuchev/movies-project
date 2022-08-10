function Footer() {
  return (
    <footer className="bg-dark text-start text-white">
      <div className="footer-copyright ">
        <div className="position-relative">
          <div className="container p-2 ">
            © {new Date().getFullYear()} Copyright Text
          </div>
          <a
            className="btn btn-outline-light btn-floating m-1 position-absolute top-0 end-0"
            target="_blank"
            href="https://github.com/RomanChuchev"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
