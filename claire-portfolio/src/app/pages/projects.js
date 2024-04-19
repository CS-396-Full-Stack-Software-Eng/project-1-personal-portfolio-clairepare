// pages/projects.js
import React from 'react';
import RootLayout from '../../components/layout/layout';
import { projectsData } from '../data/projectsData';

const Projects = () => {
    return (
        <RootLayout>
            <div className="projects-container">
                <h1>My Projects</h1>
                <div className="project-list">
                    {projectsData.map((project, index) => (
                        <div key={index} className="project-card">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .projects-container {
                    padding: 20px;
                    text-align: center;
                }
                .project-list {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 20px;
                }
                .project-card {
                    width: 300px;
                    padding: 15px;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
                }
            `}</style>
        </RootLayout>
    );
};

export default Projects;
