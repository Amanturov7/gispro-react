import React from "react";

const Header = () => (
  <header className="masthead d-flex" id="home">
    <div className="container text-center my-auto" style={style}>
    
      <div className="hero-content">
      <h1 className="mb-1">Roberto Soriano</h1>
      <h3 className="mb-5">
        <em>Full stack web developer</em>
      </h3>
      <div className="hero-btn">
      <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">
        Get to know me
      </a>
      </div>
    </div>
    </div>

    <div className="overlay" />
  </header>
);
export default Header;

const style = {
  padding: "10px",
  // backgroundColor: '#007bff',
  borderRadius: "20px"
};
