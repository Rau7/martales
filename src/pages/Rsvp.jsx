import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BreadCrumb from "../components/BreadCrumb";
import "../styles/rsvp.scss";

const Rsvp = () => {
  return (
    <>
      <Navbar />
      <BreadCrumb name={"RSVP"} link={"/rsvp"} />
      <div className="form-container">
        <div className="form">
          <form>
            <h2>Ci sarai?</h2>
            <label htmlFor="name">Name</label>
            <input name="name" type="text" placeholder="Nome Completo" />
            <label htmlFor="email">Email</label>
            <input name="email" type="email" placeholder="Indirizzo email" />
            <label htmlFor="number">Numero di Partecipanti</label>
            <select name="number" placeholder="Numero totale">
              <option value={null}>Numero totale</option>
              <option value={"1"}>1</option>
              <option value={"2"}>2</option>
              <option value={"3"}>3</option>
              <option value={"4"}>4</option>
            </select>
            <label htmlFor="text-area">Note</label>
            <textarea
              name="text-area"
              id="text-area"
              cols="20"
              rows="5"
              placeholder="Includere eventuali allergie o intolleranze alimentari, etc..."
            />
            <button>RSVP</button>
          </form>
        </div>
        <div className="info">
          <h2>Il Matrimonio di</h2>
          <h1>Alessandro & Marta</h1>
          <hr />
          <p className="date">30 Aprile 2023</p>
          <h2>Antico Borgo di Sutri</h2>
          <span>S.S. Cassia Km 46,7, 01015 Sutri VT, Italy</span>
          <p className="note">
            Si prega gentilmente di rispondere all'invito entro e non oltre il
            31 Gennaio 2023, per motivi organizzativi.
          </p>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Rsvp;
