import React from "react";
import "../styles/story.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BreadCrumb from "../components/BreadCrumb";
import bot1 from "../images/Ornament_02.webp";

function Story() {
  return (
    <>
      <Navbar />
      <BreadCrumb name={"La Nostra Storia"} link={"/ln_storia"} />
      <main>
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
                </div>
                <div className="tline-item right">
                  <div className="blank"></div>
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
                </div>
                <div className="tline-item right">
                  <div className="blank"></div>
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
