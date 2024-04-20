"use client"
import React, {useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
    {
        id: 1,
        title: "Project 1",
        description: "Project 1 Description",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "Project 2",
        description: "Project 2 Description",
        image: "/images/projects/2.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 3,
        title: "Project 3",
        description: "Project 3 Description",
        image: "/images/projects/3.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 4,
        title: "Project 4",
        description: "Project 4 Description",
        image: "/images/projects/4.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 5,
        title: "Project 5",
        description: "Project 5 Description",
        image: "/images/projects/5.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    }
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    }

    const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));

  return (
    <div>
        <h2 className="text-center text-4xl font-bold text-white">
            My Projects
        </h2>
        <dib className="text-white flex flex-row justify-center items-center gap-2 py-6">
            <ProjectTag 
                onClick={handleTagChange} 
                name="All" 
                isSelected={tag === "All"}/>
            <ProjectTag 
                onClick={handleTagChange} 
                name="Web" 
                isSelected={tag === "Web"}/>
            <ProjectTag 
                onClick={handleTagChange} 
                name="Mobile" 
                isSelected={tag === "Mobile"}/>
        </dib>
        <div>
            {filteredProjects.map(
            (project) => <ProjectCard 
                            key={project.id} 
                            title={project.title} 
                            description={project.description} 
                            imgUrl={project.image} 
                            gitUrl={project.gitUrl} 
                            previewUrl={project.previewUrl}/>
            )}
        </div>
    </div>
  )
}

export default ProjectsSection