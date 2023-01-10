import React from "react";
import "../styles/wedding.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BreadCrumb from "../components/BreadCrumb";
import { useEffect } from "react";
import bot1 from "../images/Ornament_02.webp";
import scroll from "../images/Scroll_01.webp";
import iban from "../images/IBAN.png";

function Nozze() {
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
      <BreadCrumb name={"Lista Nozze"} link={"/lista_nozze"} />
      <main className="wedding-m">
        <section className="nozze">
          <div className="nozze-container">
            <div className="nozze-main">
              <div className="nozze-header">
                <img src={scroll} alt="hm" />
                <h1>Lista Nozze</h1>
              </div>
              <div className="cont-1">
                <p>
                  Non abbiamo una lista nozze! <br /> Quello che conta veramente
                  è festeggiare la nostra unione insieme a chi amiamo. <br />
                  <br /> La destinazione del nostro viaggio di nozze però è
                  molto lontana: se volete, potete aiutarci a <br />{" "}
                  raggiungerla.
                </p>
              </div>
              <div className="iban-area">
                <img src={iban} alt="iban-marta-alessandro" />
                <h1>
                  Intestatari: <br />
                  Marta Bizzarro e Alessandro Baiano IBAN: <br />
                  IT96F0623068020000057203211 <br /> BANCA: CREDIT AGRICOLE
                  ITALIA <br /> Piazza Ganganelli, 10, 47822 <br />{" "}
                  Santarcangelo di Romagna RN
                </h1>
              </div>
              <div className="cont-2">
                <p>
                  ...Dopo aver letto l'IBAN, ci manderete a “quel paese”? <br />{" "}
                  Nessun problema, ecco quelli che abbiamo scelto: <br />{" "}
                  Egitto, Spagna, Madagascar, Stati Uniti!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Nozze;
