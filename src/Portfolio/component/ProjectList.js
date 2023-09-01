import React from "react";

const ProjectList = ({ projects, selectedProject, handleProjectSelect }) => {
  return (
    <div className="project-list">
      <h3>Список проектов</h3>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <div
              className={`project-item ${selectedProject === project ? "active" : ""}`}
              onClick={() => handleProjectSelect(project)}
            >
              {project.heading}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
