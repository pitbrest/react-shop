function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="page-footer teal">
      <div className="footer-copyright teal">
        <div className="container">
          © {currentYear} Copyright
          <a className="grey-text text-lighten-4 right"
            href="https://github.com/pitbrest"
            target="_blank"
            rel="noreferrer">pitbrest</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
