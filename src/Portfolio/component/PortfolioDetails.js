import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ProjectList from '../component/ProjectList'
import "./PortfolioDetails.css"; 

import portfolioItems from "../../data/Project.json";
import MyNavbar from "../../components/MyNavbar";
import FooterSection from "../../components/footer2";
import MapComponent from "../../components/MapComponent";

const PortfolioDetails = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const projectIdNumber = parseInt(projectId, 10);
  const selectedProject = portfolioItems.find((project) => project.id === projectIdNumber);
  const [isMapVisible, setIsMapVisible] = useState(false);

  if (!selectedProject) {
    return <div>Проект не найден</div>;
  }

  const handleProjectSelect = (projectId) => {
    navigate(`/portfolioPage/${projectId}`);
  };

  const toggleMapVisibility = () => {
    setIsMapVisible(!isMapVisible);
  };

  return (
    <div>
      <MyNavbar />
      <div className="container-details">
        <ProjectList
          projects={portfolioItems}
          selectedProject={selectedProject}
          handleProjectSelect={handleProjectSelect}
        />
        <div className="project-details">
          <h3 className="project-heading">{selectedProject.heading}</h3>
          <img className="project-image" src={selectedProject.imgSrc} alt={selectedProject.heading} />
          <p className="project-description">{selectedProject.description}</p>
          
          {selectedProject.works && (
            <div>
              <h4>Работы:</h4>
              <ul>
                {selectedProject.works.split(';').map((work, index) => (
                  <li key={index} className="work-item" style={{ listStyleType: 'disc', marginLeft: "20px" }}>
                    {work.trim()}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <button onClick={toggleMapVisibility} className="project-link">
            {isMapVisible ? "Скрыть карту" : "Показать карту"}
          </button>

          {isMapVisible && <MapComponent layers={selectedProject.layers} />}

        </div>
      </div>
      <FooterSection />  
    </div>
  );
};

export default PortfolioDetails;
