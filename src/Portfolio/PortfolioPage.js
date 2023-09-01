// src/Portfolio/PortfolioPage.js

import React, { useState } from "react";
import ProjectList from "./component/ProjectList";
import PortfolioDetails from "./component/PortfolioDetails"; // Импортируйте компонент PortfolioDetails
import portfolioItems from "../data/Project.json"; // Импортируйте данные из JSON файла

const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            {/* Передайте функцию handleProjectSelect в компонент ProjectList */}
            <ProjectList
              projects={portfolioItems}
              selectedProject={selectedProject}
              handleProjectSelect={handleProjectSelect}
            />
          </div>
          <div className="col-md-9">
            {selectedProject ? (
              // Отображение выбранного проекта с использованием PortfolioDetails
              <PortfolioDetails project={selectedProject} />
            ) : (
              // Отображение текста "Выберите проект", если проект не выбран
              <div>
                <h2>Выберите проект</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
