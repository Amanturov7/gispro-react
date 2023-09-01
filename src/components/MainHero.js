import React from "react";
import { Link } from 'react-scroll';

const MainHero = () => (
  <section className="hero" id="home">
    <div className="hero__layer"></div>
    <div className="hero__content">
      <h1 className="hero__heading">
       <span className="hero__heading--name">Gis</span>Pro
       <br />
      </h1>
      <Link to="about" smooth={true} duration={500} className="btn btn-primary btn-lg js-scroll-trigger" id="cta">
        Подробнее
      </Link>
    </div>
  </section>
);

export default MainHero;