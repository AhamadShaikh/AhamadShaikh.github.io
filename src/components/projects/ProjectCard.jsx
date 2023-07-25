import React from 'react'

const ProjectCard = ({image, title, github, demo,tech_stack, description}) => {
    return (
        <div className="project-card">
            <div className="project-card-image">
                <img src={image} alt="" />
            </div>
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <p className="project-tech-stack">Tech-Stack : {tech_stack}</p>
            <div className="project_card-cta">
                <a href={github} className='project-github-link' target="_blank">Github</a>
                <a href={demo} className="project-deployed-link" target="_blank">Live Demo</a>
            </div>
        </div>
    )
}

export default ProjectCard