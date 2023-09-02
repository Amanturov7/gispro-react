import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectList.css"; // Импортируйте файл со стилями

const ProjectList = ({ projects, selectedProject }) => {
  const navigate = useNavigate();

  const handleProjectSelect = (projectId) => {
    console.log('Selected projectId:', projectId);
    navigate(`/portfolioPage/${projectId}`);
  };

  return (
    <div className="project-list">
      <h3>Список проектов</h3>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <div
              className={`project-item ${selectedProject === project ? "activeList" : ""}`}
              onClick={() => handleProjectSelect(project.id)} 
            >
              {project.title}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
