import React from "react";
import "../styles/navbar.scss";

const Navbar = () => {
  return (
    <header>
      <nav>
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
            <a href="/rsvp">RSVP</a>
          </li>
          <li className="nav-item">
            <a href="/foto">Foto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
