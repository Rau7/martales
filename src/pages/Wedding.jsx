import React from "react";
import "../styles/wedding.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BreadCrumb from "../components/BreadCrumb";
import { useEffect } from "react";
import bot1 from "../images/Ornament_02.webp";
import scroll from "../images/Scroll_01.webp";
import iban from "../images/IBAN.png";

function Wedding() {
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
      <div className="ball-load">
        <div>
          <input type="checkbox" name="checkbox" id="animate" defaultChecked />
          <label htmlFor="animate">
            <div className="snitch">
              <div className="obj">
                <div className="body">
                  <div className="flourish" />
                  <div className="flourish" />
                  <div className="flourish" />
                  <div className="flourish">
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                  </div>
                  <div className="flourish">
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                  </div>
                </div>
                <div className="l joint" />
                <div className="l wing">
                  <div className="feather" />
                  <div className="feather" />
                  <div className="feather" />
                </div>
                <div className="r joint" />
                <div className="r wing">
                  <div className="feather" />
                  <div className="feather" />
                  <div className="feather" />
                </div>
              </div>
              <div className="shadow" />
            </div>
          </label>
        </div>
      </div>
      <Navbar />
      <BreadCrumb name={"Il Matrimonio"} link={"/il_matrimonio"} />
      <main className="wedding-m">
        <section className="wedding-hero">
          <div></div>
        </section>
        <section className="wedding-location">
          <div className="wedding-location-container">
            <div className="w-loc">
              <div className="w-loc-header">
                <h1>La Location</h1>
                <img src={bot1} alt="ornament" />
              </div>
              <p>
                Per non rovinarvi la sorpresa, vi diamo giusto qualche
                informazione sul luogo del nostro “Si”:
              </p>
              <div className="loc-list">
                <div className="loc-item">
                  <p>
                    Ci troviamo ne La Tuscia, uno splendido <br /> territorio,
                    pieno di storia e ricordi. <br /> Proprio in questo luogo
                    medioevale, <br /> chiamato Sutri. Nelle vicinanze, <br />{" "}
                    su la via Cassia, sorge l'hotel a <br /> 4 stelle Antico
                    Borgo di Sutri.
                  </p>
                  <div className="loc-img-1"></div>
                </div>
                <div className="loc-item-rev">
                  <div className="loc-img-2"></div>
                  <p>
                    Incastonato in 8 ettari di terreno, offre molteplici <br />
                    possibilità per organizzare un evento da sogno. <br />{" "}
                    L'hotel dispone di 22 camere, per un totale di 50 <br />{" "}
                    posti letto, allietati dal verde che circonda e <br />{" "}
                    rasserena questa magica location.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="divider"></section>
        <section className="wed-tline-sec">
          <div className="wed-header">
            <h1>Il Gran Giorno</h1>
            <img src={bot1} alt="marta-alessandro-ornament" />
          </div>
          <div className="wed-tline-container">
            <div className="wed-tline">
              <div className="tline">
                <div className="tline-item left">
                  <div className="img-area">
                    <div className="img-bg c1"></div>
                    <h1>La Cerimonia</h1>
                    <p className="fp">
                      La cerimonia sarà celebrata nella chiesa consacrata Nostra
                      Signora di Lourdes, sita all'interno della location
                      stessa.
                    </p>
                  </div>
                  <div className="tline-ind">
                    <div className="he">
                      <div className="big-line"></div>
                      <h1>10:30</h1>
                    </div>
                  </div>
                </div>
                <div className="tline-item right">
                  <div className="blank"></div>
                  <div className="tline-ind">
                    <div className="he">
                      <h1>11:30</h1>
                    </div>
                  </div>
                  <div className="img-area">
                    <div className="img-bg c2"></div>
                    <h1>Aperitivo</h1>
                    <p className="fp">
                      A seguire aperitivo variegato all’aria aperta (tempo
                      permettendo)
                    </p>
                  </div>
                </div>
                <div className="tline-item left">
                  <div className="img-area">
                    <div className="img-bg c3"></div>
                    <h1>Ricevimento</h1>
                    <p className="fp">
                      Per concludere, gli sposi vi invitano a proseguire i
                      festeggiamenti all’interno per un ricevimento da non
                      dimenticare!
                    </p>
                  </div>
                  <div className="tline-ind">
                    <div className="he">
                      <h1>13:00</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="seperator"></section>
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
        <section className="w-rsvp-sec">
          <div className="w-rsvp-container">
            <div className="wrsvp">
              <h1>Non vediamo l'ora di festeggiare insieme!</h1>
              <p>
                Si prega gentilmente di rispondere all'invito entro e non oltre
                il 31 Gennaio 2023, per motivi organizzativi.{" "}
              </p>
              <div className="wrsvp-btn-area">
                <a href="#" className="wrsvp-btn">
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

export default Wedding;
