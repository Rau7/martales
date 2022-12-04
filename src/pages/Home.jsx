import React from "react";
import "../styles/home.scss";
import top1 from "../images/Ornament_01.webp";
import bot1 from "../images/Ornament_02.webp";
import footerbg from "../images/footer-bg.webp";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
