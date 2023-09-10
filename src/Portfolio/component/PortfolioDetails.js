import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ProjectList from '../component/ProjectList'
import "./PortfolioDetails.css"; 

import portfolioItems from "../../data/Project.json";
import MyNavbar from "../../components/MyNavbar";
import FooterSection from "../../components/footer2";


const PortfolioDetails = () => {
  const navigate = useNavigate();

  const { projectId } = useParams();
  console.log('Received projectId:', projectId); 

  const handleProjectSelect = (projectId) => {
    console.log('Selected projectId:', projectId); 
    navigate(`/portfolioPage/${projectId}`);
  };

  const projectIdNumber = parseInt(projectId, 10);

  const selectedProject = portfolioItems.find((project) => project.id === projectIdNumber);

  if (!selectedProject) {
    return <div>Проект не найден</div>;
  }

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
          {/* <p className="project-description">{selectedProject.works}</p> */}

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
   <a className="project-link" href={selectedProject.url} target="_blank" rel="noopener noreferrer" style={{ marginTop: "50px"}}>
            Посмотреть карты
          </a>
        </div>
        
      </div>
      
      <FooterSection />  
    </div>
  );
};

export default PortfolioDetails;
