import React from "react";
import "../styles/wedding.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BreadCrumb from "../components/BreadCrumb";
import { useEffect } from "react";

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
      <Navbar />
      <BreadCrumb name={"Foto"} link={"/foto"} />
      <main></main>
      <Footer />
    </>
  );
}

export default Wedding;
