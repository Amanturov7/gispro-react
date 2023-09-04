import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import ServicesOffered from '../data/services.json';
import vectorIcon from '../scss/img/vectorIcon.png';
import digitalmapIcon from '../scss/img/digitalmapIcon.png';
import GeodesistIcon from '../scss/img/geodesitIcon.png';
import WevDevIcon from '../scss/img/webDev.png';
import threedIcon from '../scss/img/3dIcon.png';
import consultIcon from '../scss/img/consultIcon.png';
import treningIcon from '../scss/img/treningIcon.png';
import supportIcon from '../scss/img/supportIcon.png';




import './ServicesSections.css'; // Import the CSS file

const ServicesSections = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById("services");
      if (servicesSection && window.scrollY > servicesSection.offsetTop - 500) {
        setAnimate(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="content-section  blue-container text-white text-center" id="services">
      <div className="container" style={{ transform: "skewY(1deg)" }}>
        <div className="content-section-heading">
          <h2 className={`mb-5`}>Наши услуги</h2>
        </div>
        <div className="row">
          {ServicesOffered.map((service, index) => (
            <div
              className={`col-lg-3 col-md-6 mb-5 mb-lg-0  ${animate ? 'fade-in visible' : 'fade-in'}`}
              key={`service_${index}`}
            >
              <span className="service-icon rounded-circle mx-auto mb-3  service-block ">
                {service.id === 1 && (
                  <img
                    src={vectorIcon}
                    alt={service.title}
                    className="service-icon-img"
                    style={{ maxWidth: service.maxWidth }}
                  />
                )}
                {service.id === 2 && (
                  <img
                    src={digitalmapIcon}
                    alt={service.title}
                    className="service-icon-img"
                    style={{ maxWidth: service.maxWidth }}
                  />
                )}
                {service.id === 3 && (
                   <img
                   src={threedIcon}
                   alt={service.title}
                   className="service-icon-img"
                   style={{ maxWidth: service.maxWidth }}
                 />
                )}
                {service.id === 4 && (
                  <img
                    src={GeodesistIcon}
                    alt={service.title}
                    className="service-icon-img"
                    style={{ maxWidth: service.maxWidth }}
                  />
                )}
                {service.id === 5 && (
                 <img
                 src={WevDevIcon}
                 alt={service.title}
                 className="service-icon-img"
                 style={{ maxWidth: service.maxWidth }}
               />
                )}
                 {service.id === 6 && (
                 <img
                 src={consultIcon}
                 alt={service.title}
                 className="service-icon-img"
                 style={{ maxWidth: service.maxWidth }}
               />
                )}
                 {service.id === 7 && (
                 <img
                 src={supportIcon}
                 alt={service.title}
                 className="service-icon-img"
                 style={{ maxWidth: service.maxWidth }}
               />
                )}
                 {service.id === 8 && (
                 <img
                 src={treningIcon}
                 alt={service.title}
                 className="service-icon-img"
                 style={{ maxWidth: service.maxWidth }}
               />
                )}
                {/* Add more conditions for other services */}
              </span>
              <h4>
                <strong>{service.title}</strong>
              </h4>
              <p className="text-faded mb-0">{service.description}</p>
            </div>
          ))}
        </div>
        <div>
          <Link
            to="/servicesPage" // Replace with the actual path to ServicesPage component
            className="btn btn-dark btn-lg mt-5"
          >
            Перейти к услугам
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSections;
