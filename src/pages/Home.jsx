import React from "react";
import "../styles/home.scss";
import top1 from "../images/Ornament_01.webp";
import bot1 from "../images/Ornament_02.webp";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CountdownTimer from "../components/CountdownTimer";
import couple_02 from "../images/Couple_02.webp";
import pot from "../images/Logo_01.webp";

function Home() {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  return (
    <>
      <Navbar />

      <main>
        <section className="hero-sec">
          <div className="hero-bg"></div>
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
            <div className="date-area">
              <CountdownTimer targetDate={dateTimeAfterThreeDays} />
            </div>
          </div>
        </section>
        <section className="couple-sec">
          <div className="couple-cont">
            <div className="couple-main-img"></div>
            <div className="couple-area">
              <h1>
                “Non possiamo scegliere il nostro <br /> destino, ma possiamo
                scegliere <br />
                le persone”
              </h1>
              <div className="main-couple">
                <div className="img-box">
                  <img src={couple_02} alt="marta-and-alessandro" />
                </div>
                <div className="wedding-cards">
                  <div className="card-item">
                    <div className="card-img">
                      <img src={pot} alt="marts" />
                    </div>
                    <div className="card-wrt">
                      <p>
                        L'amore è quando la felicità di un'altra <br /> persona
                        è più importante della tua. <br />
                        <br /> (H. Jackson Brown)
                      </p>
                      <div className="card-divider"></div>
                      <div className="card-footer">
                        <p>Alessandro Baiano</p>
                        <span>Sposo</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-item v2">
                    <div className="card-img">
                      <img src={pot} alt="marts" />
                    </div>
                    <div className="card-wrt">
                      <p>
                        È in questo che consiste il vero amore: lasciare che{" "}
                        <br /> una persona sia ciò che davvero è. La maggior{" "}
                        <br /> parte delle persone ti ama per quello che
                        pretendono tu sia. <br />
                        <br /> (Jim Morrison)
                      </p>
                      <div className="card-divider"></div>
                      <div className="card-footer">
                        <p>Marta Bizzarro</p>
                        <span>Sposa</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="seperator-sec"></section>
        <section className="ben-sec">
          <div className="ben-container">
            <div className="benvenuti">
              <div className="ben-header">
                <h1>Benvenuti</h1>
                <img src={bot1} alt="marta-alessandro-ornament" />
              </div>
              <div className="ben-grid">
                <div className="ben-item">
                  <div className="ben-img-area img1"></div>
                  <div className="ben-nav-btn-area">
                    <a href="#" className="ben-nav-link">
                      La Nostra Storia
                    </a>
                  </div>
                </div>
                <div className="ben-item">
                  <div className="ben-img-area img2"></div>
                  <div className="ben-nav-btn-area">
                    <a href="#" className="ben-nav-link">
                      La Nostre Foto
                    </a>
                  </div>
                </div>
                <div className="ben-item">
                  <div className="ben-img-area img3"></div>
                  <div className="ben-nav-btn-area">
                    <a href="#" className="ben-nav-link">
                      Il Gran Giorno
                    </a>
                  </div>
                </div>
              </div>
              <div className="ben-wrt">
                <h2>
                  “E da allora sono perché tu sei, e da allora sei, <br /> sono
                  e siamo, e per amore sarò, sarai, saremo”
                </h2>
                <h1>Pablo Neruda</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="home-rsvp-sec">
          <div className="home-rsvp-container">
            <div className="hrsvp">
              <h1>Non vediamo l'ora di festeggiare insieme!</h1>
              <p>
                Si prega gentilmente di rispondere all'invito entro e non oltre
                il 31 Gennaio 2023, per motivi organizzativi.{" "}
              </p>
              <div className="hrsvp-btn-area">
                <a href="#" className="hrsvp-btn">
                  RSVP {">"}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
