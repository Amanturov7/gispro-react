import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

function AboutSection() {
  const [animate, setAnimate] = useState(false);

  const scrollToServices = () => {
    scroll.scrollTo("services");
  };

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection && window.scrollY > aboutSection.offsetTop - 500) {
        setAnimate(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="about" className="content-section">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2>
              GisPro – это многопрофильная компания,
              специализирующийся в направлениях как ГИС технологии, а также ИТ
              технологии.
            </h2>
            <p className={`lead mb-5 fade-in ${animate ? "visible" : ""}`}>
              На сегодняшний день наша компания разрабатывает и реализует
              проекты, на которых работает большое количество квалифицированных
              специалистов. Структура нашей компании дает возможность
              оказывать своим партнерам весь спектр услуг, от разработки
              концепции объекта, его проектирования, моделирования в полном
              комплекте для реализации на результат.
            </p>
            <button
              className={`btn btn-dark btn-lg js-scroll-trigger fade-in ${
                animate ? "visible" : ""
              }`}
              onClick={scrollToServices}
            >
              Почему мы?
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
