import React from "react";
import "../styles/foto.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BreadCrumb from "../components/BreadCrumb";
import hpTime from "../images/Timeturner_01.webp";
import { useEffect } from "react";

function Foto() {
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
  return (
    <>
      <Navbar />
      <BreadCrumb name={"Foto"} link={"/foto"} />
      <main className="foto-m">
        <section className="foto-hero">
          <div></div>
        </section>
        <section className="foto-wrt">
          <h1>
            Useremo questa pagina per condividere le foto <br /> del matrimonio
            una volta ricevute dal nostro <br /> fotografo.
          </h1>
        </section>
        <section className="foto-gal-sec">
          <div className="foto-gal-container">
            <div className="foto-gal">
              <div className="foto-item">
                <img src={hpTime} alt="hp-foto" />
              </div>
              <div className="foto-item">
                <img src={hpTime} alt="hp-foto" />
              </div>
              <div className="foto-item">
                <img src={hpTime} alt="hp-foto" />
              </div>
              <div className="foto-item">
                <img src={hpTime} alt="hp-foto" />
              </div>
              <div className="foto-item coming">
                <h1>
                  Coming <br /> Soon
                </h1>
              </div>
              <div className="foto-item">
                <img src={hpTime} alt="hp-foto" />
              </div>
              <div className="foto-item">
                <img src={hpTime} alt="hp-foto" />
              </div>
              <div className="foto-item">
                <img src={hpTime} alt="hp-foto" />
              </div>
              <div className="foto-item">
                <img src={hpTime} alt="hp-foto" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Foto;
