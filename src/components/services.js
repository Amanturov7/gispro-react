import React, { useState, useEffect } from "react";
import { Link } from 'react-scroll';
import GeodesistIcon from '../scss/img/geodesitIcon.png'
import vectorIcon from '../scss/img/vectorIcon.png'
import digitalmapIcon from '../scss/img/digitalmapIcon.png'

// ... остальной код остается без изменений


const ServicesOffered = [
  {
    title: "Векторизация карт",
    description: "векторизация (оцифровка) различных картографических материалов",
    icon: <img src={vectorIcon} alt="Векторизация карт" className="service-icon-img" style={{ maxWidth: "60px" }} />

  },
  {
    title: "Разработка цифровых карт",
    description: "разработка электронно-цифровых карт и размещение в интернет пространстве",
    icon: <img src={digitalmapIcon} alt="Разработка цифровых карт" className="service-icon-img" style={{ maxWidth: "60px" }} />
  },
  {
    title: "Моделирование",
    description: "3D моделирование, движения геоморфологических опасностей",
    icon: "fas fa-cube"
  },
  {
    title: "Съемка и обучение",
    description: "сьемка и обучение эксплуатации с новейшими геодезическими приборами,а также инженерно - геодезическое изыскание и разработка методик",
    icon: <img src={GeodesistIcon} alt="Съемка и обучение" className="service-icon-img" style={{ maxWidth: "100px" }} />
  },
  {
    title: "Web - разработка",
    description: "разработка программного обеспечения и дизайн информационных систем на основе ГИС",
    icon: "fas fa-globe"
  },
  {
    title: "Консультации",
    description: "консультационные услуги для разработки и проектирование полного комплекса системы ЦОД;",
    icon: "fas fa-globe"
  },
  {
    title: "Техническая поддержка",
    description: "техническая поддержка ИКТ продуктов и их обновление",
    icon: "fas fa-globe"
  },
  {
    title: "Тренинги",
    description: "проведение тренингов, семинаров по ГИС и ИКТ технологиям",
    icon: "['fas', 'people-arrows']"
  }
];
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
    <section className="content-section services blue-container text-white text-center" id="services">
      <div className="container" style={{ transform: "skewY(1deg)" }}>
        <div className="content-section-heading">
          <h2 className={`mb-5`} >Наши услуги</h2>
        </div>
        <div className="row" >
          {ServicesOffered.map((service, index) => (
            <div
              className={`col-lg-3 col-md-6 mb-5 mb-lg-0 ${animate ? 'fade-in visible' : 'fade-in'}`}
              key={`service_${index}`}
            >
              <span className="service-icon rounded-circle mx-auto mb-3">
                {service.icon}
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
            to="portfolio" // Идентификатор элемента, к которому нужно прокрутить
            smooth={true}
            duration={500}
            className="btn btn-dark btn-lg mt-5"
          >
            Недавние работы
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSections;