import "./styles.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import logoImage from '../scss/img/logo.png'

export default function App() {
    const iconStyle = {
        width: "35px", // Укажите желаемую ширину
        height: "35px", // Укажите желаемую высоту
      };
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
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div className="col mb-3">
         <a href="/">
         <img
            className="logoFooter"
            src={logoImage}
            style={{width: "200px", marginBottom: "100px"
        }}
          /></a> 
  <div className="text-a">
            <a
              href="igispro.kgz@gmail.com"
              style={{ color: "white", textDecoration: "none", marginBottom: "10px" }}
            >
              <p> igispro.kgz@gmail.com</p>
            </a>

            <p> ул. Токтоналиева 4Б, 2 эт., каб 1 </p>

            <p> г. Бишкек</p>
          </div>

      <p style={{color: "white", fontSize: "11px" }} className="3">
        Copyright &copy; Gispro company 2023
      </p>
        </div>

        <div className="col mb-4"></div>

        <div className="col mb-4">
          <h5 className="title-menu-1">Меню</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="https://www.leaz.co/" className="title-menu-2">
                Accueil
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="https://www.leaz.co/faq/" className="title-menu-2">
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
            <li className="nav-item mb-2">
              <a href="#" className="title-menu-2">
                CGU Leaz
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="title-menu-2">
                Mentions légales
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="title-menu-2">
                Politique de confidentialité
              </a>
            </li>
          </ul>
        </div>
        <div className="col mb-4">
        <ul className="list-inline mb-5">
      {socialSites.map((site,index)=>(
        <li className="list-inline-item" key={`social_${index}`}>
          <a className="social-link rounded-circle text-white mr-3" href={site.link}>
            <i className={site.icon} />
          </a>
        </li>
      ))}
      </ul>
    
        </div>
      </footer>
    </div>
  );
}
