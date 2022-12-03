import React from "react";
import "../styles/home.scss";
import "../styles/navbar.scss";
import "../styles/footer.scss";
import top1 from "../images/Ornament_01.webp";
import bot1 from "../images/Ornament_02.webp";
import footerbg from "../images/footer-bg.webp";

function Home() {
  return (
    <>
      <header>
        <nav>
          <ul className="nav-list">
            <li className="nav-item active">
              <a href="/">Home</a>
            </li>
            <li className="nav-item">
              <a href="#">La Nostria Storia</a>
            </li>
            <li className="nav-item">
              <a href="#">Il Matrimonio</a>
            </li>
            <li className="nav-item">
              <a href="#">RSVP</a>
            </li>
            <li className="nav-item">
              <a href="#">Foto</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero-sec">
          <div className="hero-container">
            <div className="hero">
              <img
                src={top1}
                className="top-img"
                alt="marta-alessandro-ornament"
              />
              <div className="hero-names">
                <h1>
                  Alessandro <br /> & <br />
                  Marta
                </h1>
              </div>
              <img
                src={bot1}
                className="bot-img"
                alt="marta-alessandro-ornament"
              />
              <div className="hero-welcome">
                <h2>Si Siposano!</h2>
                <h3>30 Aprile 2023</h3>
                <h4>Antico Borgo di Sutri</h4>
              </div>
            </div>
          </div>
        </section>
      </main>
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
                    <a href="#">La Nostria Storia</a>
                  </li>
                  <li className="nav-item">
                    <a href="#">Il Matrimonio</a>
                  </li>
                  <li className="nav-item">
                    <a href="#">RSVP</a>
                  </li>
                  <li className="nav-item">
                    <a href="#">Foto</a>
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
    </>
  );
}

export default Home;
