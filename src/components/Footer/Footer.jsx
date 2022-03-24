import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-title">Made by Atul Pant</p>
        <div className="social-media">
          <a href="https://github.com/AtulPant2704" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/atulpant27" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/AtulPant2704" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p className="footer-end">© 2022 CheckMate Designs</p>
      </div>
    </footer>
  );
};

export { Footer };
