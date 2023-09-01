import React from "react";
import {Navbar, Nav} from 'react-bootstrap'
import logoImage from "../scss/img/logo.png"; // Путь к вашему логотипу
// 
const MyNavbar = () => {
  const logoStyle = {
    width: "60px",
    height: "auto",
    marginLeft: "15%"
  };
  return (
    <Navbar bg="light" expand="lg" sticky="top">
    <Navbar.Brand href="/" className="mx-2">
      <span className="nav-brand">
        <img
          src={logoImage}
          alt="Gispro"
          className="nav-logo"
          style={logoStyle}
        />
      </span>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="navbar-nav ml-auto mx-auto text-center navbar-links js-scroll-trigger" >
        <Nav.Link href="/#about" className="js-scroll-trigger">О нас</Nav.Link>
        <Nav.Link href="/#services" className="js-scroll-trigger">Услуги</Nav.Link>
        <Nav.Link href="/#contact" className="js-scroll-trigger">Связаться</Nav.Link>
        <Nav.Link href="/#portfolio" className="js-scroll-trigger">Портфолио</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}
export default MyNavbar
