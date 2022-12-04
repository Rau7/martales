import React from "react";
import "../styles/bread_crumb.scss";

const BreadCrumb = () => {
  return (
    <div className="bread-crumb">
      <div className="links">
        <ul className="bread-crumb-list">
          <li>
            <a href="Home">Home</a>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </li>
          <li>
            <a href="#page">RSVP</a>
          </li>
        </ul>
      </div>
      <div className="page-title">
        <h1>RSVP</h1>
      </div>
    </div>
  );
};

export default BreadCrumb;
