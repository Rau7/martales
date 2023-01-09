import React from "react";
import "../styles/story.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BreadCrumb from "../components/BreadCrumb";
import bot1 from "../images/Ornament_02.webp";
import couple_05 from "../images/Couple_05.webp";
import pot from "../images/Logo_01.webp";
import { useEffect } from "react";

function Story() {
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
      <BreadCrumb name={"La Nostra Storia"} link={"/ln_storia"} />
      <main className="story-m">
        <section className="story-hero">
          <div></div>
        </section>
        <section className="couple-sec">
          <div className="couple-cont">
            <div className="couple-area">
              <h1>
                “E’ impossibile creare o imitare <br /> l’Amore”
              </h1>
              <div className="main-couple">
                <div className="img-box">
                  <img src={couple_05} alt="marta-and-alessandro" />
                </div>
                <div className="wedding-cards">
                  <div className="card-item">
                    <div className="card-img">
                      <img src={pot} alt="marts" />
                    </div>
                    <div className="card-wrt">
                      <p>
                        Non voglio che mia figlia segua le mie orme. <br />{" "}
                        Voglio che prenda il sentiero accanto a me e <br /> vada
                        oltre ciò che avrei mai potuto immaginare.
                        <br />
                      </p>
                      <div className="card-divider"></div>
                      <div className="card-footer">
                        <p>Marcella</p>
                        <span>Madre della Sposa</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-item v2">
                    <div className="card-img">
                      <img src={pot} alt="marts" />
                    </div>
                    <div className="card-wrt">
                      <p>
                        La famiglia è il posto dove l'amore non <br /> finisce
                        mai, al massimo si moltiplica.
                        <br />
                      </p>
                      <div className="card-divider"></div>
                      <div className="card-footer">
                        <p>Maria</p>
                        <span>Madre dello Sposo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cpl-tline-sec">
          <div className="cpl-header">
            <h1>Come ci siamo conosciuti</h1>
            <img src={bot1} alt="marta-alessandro-ornament" />
          </div>
          <div className="cpl-tline-container">
            <div className="cpl-tline">
              <div className="tline">
                <div className="tline-item left">
                  <div className="img-area">
                    <div className="img-bg c1"></div>
                    <h1>L'incontro</h1>
                    <p className="fp">
                      Alessandro e Marta si sono conosciuti nel 2019, tramite
                      degli amici in comune nella città in cui entrambi
                      vivevano, Santarcangelo di Romagna.
                    </p>
                    <p className="sp">
                      E' stato un vero colpo di fulmine! Dal 29 Agosto 2019,
                      infatti, non hanno più smesso di vedersi ed a novembre
                      hanno iniziato un percorso di vita insieme: la convivenza!
                    </p>
                  </div>
                  <div className="tline-ind">
                    <div className="he">
                      <div className="big-line"></div>
                      <h1>2019</h1>
                    </div>
                  </div>
                  <div className="empty-div"></div>
                </div>
                <div className="tline-item right">
                  <div className="empty-div"></div>
                  <div className="tline-ind">
                    <div className="he">
                      <h1>2020</h1>
                    </div>
                  </div>
                  <div className="img-area">
                    <div className="img-bg c2"></div>
                    <h1>La convivenza</h1>
                    <p className="fp">
                      Non sono mancate le difficoltà, lei disordinata, creativa
                      ed impulsiva, lui preciso, ed a volte quasi metodico e
                      ponderato.
                    </p>
                    <p className="sp">
                      Ma si sa, gli opposti si attraggono e con il tempo i loro
                      caratteri si sono smussati fino a coincidere come due
                      perfetti tasselli di un puzzle.
                    </p>
                    <p className="tp">
                      Alessandro innamorato della Formula 1, Marta dell'arte
                      pittorica, si sono supportati durante il lockdown a suon
                      di rombi di motore e tanti dipinti.
                    </p>
                  </div>
                </div>
                <div className="tline-item left">
                  <div className="img-area">
                    <div className="img-bg c3"></div>
                    <h1>Riccardo</h1>
                    <p className="fp">
                      Ma la loro creazione più grande è stata Riccardo, nato il
                      21 Marzo 2021, che ha impresso indelebilmente nei loro
                      cuori il vero significato di Famiglia.
                    </p>
                  </div>
                  <div className="tline-ind">
                    <div className="he">
                      <h1>2021</h1>
                    </div>
                  </div>
                  <div className="empty-div"></div>
                </div>
                <div className="tline-item right">
                  <div className="empty-div"></div>
                  <div className="tline-ind">
                    <div className="he">
                      <h1>2022</h1>
                    </div>
                  </div>
                  <div className="img-area">
                    <div className="img-bg c4"></div>
                    <h1>Famiglia</h1>
                    <p className="fp">
                      Essere una famiglia era da tempo il sogno di entrambi e
                      coronarlo ha riempito di gioia e amore i loro cuori.
                      Lasciato Santarcangelo per Sassuolo, Marta e Alessandro si
                      sono resi conto della mancanza di un ultimo importante
                      passo nella loro vita insieme...
                    </p>
                  </div>
                </div>
                <div className="tline-item left">
                  <div className="img-area">
                    <div className="img-bg c5"></div>
                    <h1>Matrimonio</h1>
                    <p className="fp">
                      Ed eccoli qui, a distanza di quattro anni, a coronare un
                      altro sogno, quello di una vita insieme da marito e
                      moglie. Entrambi appassionati di Harry Potter, hanno
                      voluto rendere omaggio a questa meravigliosa saga,
                      rendendola il tema del loro giorno speciale...perciò
                      prendete le vostre bacchette, vi aspetta un matrimonio
                      magico!
                    </p>
                  </div>
                  <div className="tline-ind">
                    <div className="he">
                      <h1>2023</h1>
                    </div>
                  </div>
                  <div className="empty-div"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Story;
