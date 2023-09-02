import React, { useState, useEffect } from "react";
import ProjectList from "./component/ProjectList";
import PortfolioDetails from "./component/PortfolioDetails";
import portfolioItems from "../data/Project.json";
import MyNavbar from "../components/MyNavbar";
import FooterSection from "../components/footer2";
import { useNavigate } from "react-router-dom";

const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  // Функция для обработки выбора проекта
  const handleProjectSelect = (projectId) => {
    setSelectedProject(projectId);
    navigate(`/portfolioPage/${projectId}`);
  };

  // Прокрутка страницы в начало при изменении selectedProject
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedProject]);

  return (
    <div>
      <MyNavbar />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <ProjectList
              projects={portfolioItems}
              selectedProject={selectedProject}
              handleProjectSelect={handleProjectSelect}
            />
          </div>
          <div className="col-md-9">
            {selectedProject ? (
              <PortfolioDetails projectId={selectedProject} />
            ) : (
              <div>
                <h2>Выберите проект</h2>
              </div>
            )}
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default PortfolioPage;
