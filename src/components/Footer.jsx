import React from "react";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-cont">
          <div className="footer-links">
            <nav>
              <ul className="nav-list">
                <li className="nav-item active">
                  <a href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a href="/ln_storia">La Nostra Storia</a>
                </li>
                <li className="nav-item">
                  <a href="/il_matrimonio">Il Matrimonio</a>
                </li>
                <li className="nav-item">
                  <a href="/lista_nozze">Lista Nozze</a>
                </li>
                <li className="nav-item">
                  <a href="/rsvp">RSVP</a>
                </li>
                <li className="nav-item">
                  <a href="/foto">Foto</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer-writing">
            <p className="f-part">
              Non so dove vada la <br /> mia strada, ma cammino <br /> meglio
              quando la mia <br /> mano stringe la tua.
            </p>
            <p className="s-part">
              <br /> Alfred de Musset
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
