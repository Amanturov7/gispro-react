import React, { useEffect } from "react";
import "../../scss/stylesDetails.scss";
import servicesData from "../../data/ServicesData.json"; // Импортируем JSON-файл

const ServicesDetails = () => {
  useEffect(() => {
  }, []);

  return (
    <section id="Services" className="callout1">
      <div className="container text-center">
        <ul className="services">
          {servicesData.map((service, i) => (
            <li className="services__item" key={service.header}>
              <h3>{service.header}</h3>
              <p>{service.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServicesDetails;
