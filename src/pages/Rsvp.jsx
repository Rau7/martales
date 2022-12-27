import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BreadCrumb from "../components/BreadCrumb";
import "../styles/rsvp.scss";
import { useEffect } from "react";
import broom from "../images/Broom_01.webp";
import owl from "../images/Owl_01.webp";
import bus from "../images/bus.webp";
import bot1 from "../images/Ornament_02.webp";

const Rsvp = () => {
  useEffect(() => {
    var footer = document.querySelector("footer");
    var header = document.querySelector("header");
    var main = document.querySelector("main");
    var body = document.querySelector("body");
    footer.style.opacity = 1;
    main.style.opacity = 1;
    header.style.opacity = 1;
    body.style.backgroundImage = "none";
    body.style.overflow = "scroll";
    body.style.overflowX = "hidden";
    body.style.position = "relative";
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleBoxes);
    handleBoxes();
    return () => {
      window.removeEventListener("scroll", handleBoxes);
    };
  }, []);

  function handleBoxes() {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
      const triggerPoint = (window.innerHeight / 5) * 4;
      const boxTop = box.getBoundingClientRect().top - 225;

      if (boxTop < triggerPoint) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  }

  return (
    <>
      <Navbar />
      <BreadCrumb name={"RSVP"} link={"/rsvp"} />
      <main className="rsvp-m">
        <section className="rsvp-mes-sec">
          <div className="rsvp-mes-container">
            <div className="mes-grid">
              <div className="mes-form"></div>
              <div className="mes-info">
                <div className="mes-header">
                  <p>Il Matrimonio di </p>
                  <h2>Alessandro & Marta</h2>
                  <div className="mes-sep"></div>
                  <h3>30 Aprile 2023</h3>
                </div>
                <div className="mes-mid">
                  <h2>Antico Borgo di Sutri</h2>
                  <p>S.S. Cassia Km 46,7, 01015 Sutri VT, Italy</p>
                </div>
                <div className="mes-footer">
                  <p>
                    Si prega gentilmente di rispondere all'invito entro e non
                    oltre il 31 Gennaio 2023, per motivi organizzativi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="tp-sec">
          <div className="tp-cont">
            <div className="tp-header">
              <h1>Come Raggiungere La Location</h1>
              <img src={bot1} alt="location-footer" />
            </div>
            <div className="tp-list">
              <div className="tp-item-img-left">
                <img src={bus} alt="bus" className="bus box" />
                <div className="tp-item-wrt">
                  <h1>Con Mezzi Pubblici</h1>
                  <p>
                    La location è raggiungibile da vari
                    <br />
                    autobus, sia da Roma, che dal Viterbese
                    <br />
                    (raggiungibile con il treno regionale, con
                    <br />
                    partenza da Roma Termini, Roma
                    <br />
                    MeTiburtina o Roma Ostiense.)
                  </p>
                </div>
              </div>
              <div className="tp-item-img-right">
                <div className="tp-item-wrt">
                  <h1>In Macchina</h1>
                  <p>
                    Dalla provincia di Modena:
                    <br />
                    Tramite l'autostrada A1 direzione Bologna/Firenze
                    <br />
                    Dalla provincia di Napoli:
                    <br />
                    Tramite l'autostrada A1/E45
                    <br />
                    Dala provincia di Roma:
                    <br />
                    Grande raccordo Anulare da via
                    <br />
                    Nomentana e Salaria, prendere Ssbis
                    <br />
                    verso via delle Cassie
                  </p>
                </div>
                <img src={broom} alt="broom" className="broom box" />
              </div>
              <div className="tp-item-img-left">
                <img src={owl} alt="owl" className="owl box" />
                <div className="tp-item-wrt">
                  <h1>In Aero</h1>
                  <p>
                    La location dista 80 km
                    <br />
                    dall'aereoporto Internazionale
                    <br />
                    Leonardo da Vinci di Fiumicino di Roma,
                    <br />
                    71 km dall'aereoporto di Ciampino
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="add-sec">
          <div className="add-container">
            <div className="add-info">
              <div className="add-wrt">
                <h2>Antico Borgo di Sutri</h2>
                <p>S.S. Cassia Km 46,7, 01015 Sutri VT, Italy</p>
              </div>
              <div className="add-btn">
                <a href="#" className="a-btn">
                  Visita la Location
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="team-sec">
          <div className="team-cont">
            <div className="team-header">
              <h1>Pernottamento</h1>
              <img src={bot1} alt="location-footer" />
            </div>
            <div className="team-wrt">
              <p>
                Per chi avesse necessità di pernottamento per il giorno
                30/04/2023, ci contatti direttamente ai seguenti numeri:
                <br />
                Marta 340 667 87 05
                <br />
                Alessandro 338 801 08 67
                <br />
                <br />
                Per chi desiderasse fermarsi qualche giorno in più, per
                apprezzare le meraviglie della zona,
                <br />
                vi elenchiamo degli ottimi B&B vicini, che vi sapranno far
                sentire come 'a casa':
                <br />
                <br />
                Life B&B
                <br />
                Via Cassia km 44,900 - 01015 Sutri (Lazio, Italia),
                <br />
                Contatto: 347 779 2072
                <br />
                Bed and Breakfast Romantica Evasione
                <br />
                Via Delle Cicogne 18 – Sutri (vt) – 01015 Italia,
                <br />
                Contatto: 324 9842870
                <br />
                <br />
                B&B Le Terrecotte
                <br />
                Strada vicinale, Località Pian Porciano, 01015 Sutri VT,
                <br />
                Contatto: 0761 600 879 / 339 6937 241
                <br />
                <br />
                B&B Notti d'Oriente
                <br />
                via Giuseppe Garibaldi,01015, Sutri, VT,
                <br />
                Contatto: 339 465 19 55
              </p>
            </div>
          </div>
        </section>
        <section className="foot-area"></section>
      </main>
      <Footer />
    </>
  );
};

export default Rsvp;
