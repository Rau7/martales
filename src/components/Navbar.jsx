import React from "react";
import "../styles/navbar.scss";
import { useEffect } from "react";

const Navbar = () => {
  const openCloseNav = () => {
    var x = document.querySelector(".navbar-mob");
    document.querySelector(".container").classList.toggle("change");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };

  useEffect(() => {
    var x = document.querySelector(".navbar-mob");
    if (x.style.display === "block" || x.style.display === "") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }, []);

  return (
    <header>
      <nav className="h-n">
        <ul className="nav-list">
          <li className="nav-item active">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/ln_storia">La Nostria Storia</a>
          </li>
          <li className="nav-item">
            <a href="/il_matrimonio">Il Matrimonio</a>
          </li>
          <li className="nav-item">
            <a href="/lista_nozze">Lista Nozze</a>
          </li>
          <li className="nav-item">
            <a href="/rsvp">RSVP</a>
          </li>
          <li className="nav-item">
            <a href="/foto">Foto</a>
          </li>
        </ul>
      </nav>
      <div className="nav-mob">
        <div className="nav-mob-nav">
          <div className="nav-mob-ham">
            <div className="container" onClick={() => openCloseNav()}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-mob">
        <div className="nav-mob-con">
          <div className="nav-mob-black" onClick={() => openCloseNav()}>
            <nav className="nav-mob-l">
              <ul className="mob-nav-list">
                <li className="nav-item active">
                  <a href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a href="/ln_storia">La Nostria Storia</a>
                </li>
                <li className="nav-item">
                  <a href="/il_matrimonio">Il Matrimonio</a>
                </li>
                <li className="nav-item">
                  <a href="/lista_nozze">Lista Nozze</a>
                </li>
                <li className="nav-item">
                  <a href="/rsvp">RSVP</a>
                </li>
                <li className="nav-item">
                  <a href="/foto">Foto</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="ball-load">
        <div className="cont">
          <div>
            <input
              type="checkbox"
              name="checkbox"
              id="animate"
              defaultChecked
            />
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
      </div>
    </header>
  );
};

export default Navbar;
