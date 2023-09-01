import React, { useState, useEffect } from "react";
import portfolioItems from "../data/Project.json";
import { useNavigate } from "react-router-dom";

const PortfolioSection = () => {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate(); // Инициализируем функцию навигации

  useEffect(() => {
    const handleScroll = () => {
      const portfolioSection = document.getElementById("portfolio");
      if (portfolioSection && window.scrollY > portfolioSection.offsetTop - 500) {
        setAnimate(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const lastFourProjects = portfolioItems.slice(-4);

  const redirectToPortfolioPage = (index) => {
    navigate(`/portfolioPage/${index}`); // Используем navigate для перехода
  };

  return (
    <section className="content-section" id="portfolio">
      <div className="container">
        <div className="content-section-heading text-center">
          <h3 className="text-secondary mb-0">Портфолио</h3>
          <h2 className={`mb-5 ${animate ? "fade-in visible" : "fade-in"}`}>
            Недавние работы
          </h2>
        </div>
        <div className="row no-gutters">
          {lastFourProjects.map((project, index) => (
            <div
              className={`col-lg-6 ${animate ? "fade-in visible" : "fade-in"}`}
              key={`portfolio_item_${index}`}
              onClick={() => redirectToPortfolioPage(index)}
            >
              <div className="portfolio-item">
                <span className="caption">
                  <span className="caption-content">
                    <h2>{project.heading}</h2>
                    <p className="mb-0">{project.description}</p>
                  </span>
                </span>
                <img className="img-fluid" src={project.imgSrc} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
