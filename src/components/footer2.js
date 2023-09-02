import "./styles.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import logoImage from '../scss/img/logo.png'
import { Link } from "react-router-dom"; // Импортируем Link
export default function App() {
    const StyleFont = {
      color: "white", 
      textDecoration: "none", 
      marginBottom: "10px"
      };
      const StyleA = {
        color: "white",
        textDecoration: "none",
        marginBottom: "10px"
      }
    const socialSites = [
        {
          link: "https://twitter.com/cincinnaticodes",
          icon: "icon-social-facebook"
        },
        {
          link: "https://twitter.com/cincinnaticodes",
          icon: "icon-social-twitter"
        },
        {
          link: "https://www.instagram.com/gispro.kg/?hl=ru",
          icon: "icon-social-instagram"
        },
      
      ];
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#044883",
        width: "auto",
        Height: "20px",
        paddingLeft: "100px",
        paddingRight: "100px",
        paddingTop: "80px",
      }}
    >
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5  border-top" >
        <div className="col mb-3">
         <a href="/">
         <img
            className="logoFooter"
            src={logoImage}
            style={{width: "200px", marginBottom: "100px"
        }}
          /></a> 
        </div>
        <div className="col mb-4 ">
          <h5 className="title-menu-1">Меню</h5>
          <ul className="nav flex-column">

            <li className="nav-item mb-2">
              <a href="https://www.leaz.co/faq/"   className="title-menu-2">
                О нас
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="title-menu-2">
                Карты
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-4">
          <h5 className="title-menu-1">Информации</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2" >
              <a href="#" className="title-menu-2" >
                Новости
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="title-menu-2">
                Вакансии
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="title-menu-2">
                Статьи
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-4">
          <h5 className="title-menu-1">Контакты</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
            <a className="title-menu-2"
              href="mailto:igispro.kgz@gmail.com"
            >
              <p> igispro.kgz@gmail.com</p>
            </a>
            </li>
            <li className="nav-item mb-2">
              <a href="https://2gis.kg/bishkek/geo/15763234351132482?m=74.593827%2C42.851893%2F16" className="title-menu-2">
              ул. Токтоналиева 4Б, 2 эт., каб 1 
              </a>
            </li>
            <li className="nav-item mb-2">
              <p className="title-menu-2">г. Бишкек</p>
            </li>
          </ul>
        </div>
        <ul className="list-inline mb-5">
              {socialSites.map((site, index) => (
                <li className="list-inline-item" key={`social_${index}`}>
                  <a className="social-link rounded-circle text-white mr-3" href={site.link}>
                    <i className={site.icon} />
                  </a>
                </li>
              ))}
            </ul>
      </footer>
    </div>
  );
}
