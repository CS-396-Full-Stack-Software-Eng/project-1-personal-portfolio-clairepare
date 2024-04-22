"use client"
import React, {useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
    {
        id: 1,
        title: "Wildcat Connect",
        description: "Surveyed the campus community to highlight a need that students on campus actually face. Created Wildcat Connect which centralized event information for campus organizations, as there was no up-to-date hub where organizations can post and manage events for the community to see. Integrated GitHub for version control, enhancing team collaboration. Applied Vitest and Cypress for comprehensive testing, ensuring application reliability. Adopted continuous integration for improved development efficiency.",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "NU Campus Kitchen",
        description: "A collaboration with NU Campus Kitchens, a group dedicated to reclaiming dining hall food waste and distributing to the Evanston community, on creating an app managing their internal database. NU Fridge was born, seamlessly tracking the inventory from each dining hall, variables like expiration and quantity, and notifying which food to package next. Provided dynamic analytics related to pounds of food, meals served, and other preferred metrics.",
        image: "/images/projects/2.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 3,
        title: "FitNU",
        description: "Designed and implemented FitNU: an app designed to seamlessly connect the NU community with like-minded individuals who want to exercise together. Spearheaded full-stack development of campus applications using React, Node.js, and Firebase, focusing on enhancing campus engagement. Implemented Agile and Swarm methodologies for efficient 3-week sprint cycles Interchanged swarm cycles with comprehensive user testing, crafting detailed testing materials, task scenarios, and showing the app to gym-goers all around campus.",
        image: "/images/projects/3.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 4,
        title: "Bubbles: Smart Laundry Symbol Recognition",
        description: "Bubbles is an innovative web application that streamlines the laundry process through advanced image recognition technology. Developed using React for a responsive front-end and powered by Firebase for real-time data handling and authentication, Bubbles offers a user-friendly interface that takes the guesswork out of laundry care. By leveraging state-of-the-art object detection algorithms, Bubbles identifies multiple laundry symbols in a single scan, decoding complex care instructions with ease. Users simply upload a photo of the care label on their garments, and the app provides a clear, concise summary of the washing, drying, ironing, and bleaching guidelines recommended by the manufacturer.",
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
    <section id="projects" className="py-6">
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
        <div className="flex flex-wrap justify-center gap-4">
            {filteredProjects.map(
            (project) => <div key={project.id} className="w-full xl:w-1/2 max-w-xs">
                <ProjectCard
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.image}
                                gitUrl={project.gitUrl}
                                previewUrl={project.previewUrl}/>
            </div>
            )}
        </div>
    </section>
  )
}

export default ProjectsSection