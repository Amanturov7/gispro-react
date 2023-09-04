import React, { useEffect } from "react";
import "../../scss/stylesDetails.scss";
import servicesData from "../../data/ServicesData.json"; // Импортируем JSON-файл

const ServicesDetails = () => {
  useEffect(() => {}, []);

  return (
    <section id="Services" className="callout1">
      <div className="container text-center">
        <ul className="services">
          {servicesData.map((service, i) => (
            <li className="services__item" key={service.header}>
              <h3>{service.header}</h3>
              <p>{service.body}</p>
              {service.bodyLi && (
                <ul >
                  {service.bodyLi.split(";").map((item, index) => (
                    <li   style={{textAlign: "left"}} key={index}>
                      <p> {item.trim()}</p>
                      </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <a   className="btn btn-dark btn-lg mt-5" href="/Комплексное_ИТ_обследование_Формирование_полной_картины_ИТ_инфраструктуры.pdf" download>Скачать Презентацию</a>
      </div>
    </section>
  );
};

export default ServicesDetails;
