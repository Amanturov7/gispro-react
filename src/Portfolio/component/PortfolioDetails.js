// src/Portfolio/component/PortfolioDetails.js

import React from "react";

const PortfolioDetails = ({ project }) => {
  if (!project) {
    return <div>Проект не найден</div>;
  }

  return (
    <div className="project-details">
      <h3>{project.heading}</h3>
      <img src={project.imgSrc} alt={project.heading} />
      <p>{project.description}</p>
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        Подробнее
      </a>
    </div>
  );
};

export default PortfolioDetails;
