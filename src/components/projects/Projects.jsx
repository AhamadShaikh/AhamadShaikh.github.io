import React from 'react'
import "./projects.css"
import IMG1 from "../../assets/IMG1.png"
import IMG2 from "../../assets/IMG2.png"
import IMG3 from "../../assets/IMG3.png"
import IMG4 from "../../assets/IMG4.png"
import ProjectCard from './ProjectCard'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Health Kart Clone",
    tech_stack:"HTML, CSS, JavaScript",
    github: "https://github.com/AhamadShaikh/brainy-thread-7805",
    demo: "https://shiny-platypus-02a9a9.netlify.app/"
  },
  {
    id: 2,
    image: IMG2,
    title: "IndiaMart Clone",
    tech_stack:"HTML, CSS, JavaScript",
    github: "https://github.com/sinnu1908/radioactive-song-3321",
    demo: "https://harmonious-gaufre-6b8992.netlify.app/"
  }, {
    id: 3,
    image: IMG3,
    title: "LYST Clone",
    tech_stack:"HTML, CSS, JavaScript, React.js, ChakraUI",
    github: "https://github.com/AhamadShaikh/maxed-tiger-1503",
    demo: "https://project-fashion-mart.netlify.app/"
  }, {
    id: 4,
    image: IMG4,
    title: "Behance Health Care Medical Service WordPress Website",
    tech_stack:"HTML, CSS, JavaScript, React.js, ChakraUI",
    github: "https://github.com/AhamadShaikh/moving-scent-7843",
    demo: "https://lifeline-project.netlify.app/"
  }
]

const Projects = ({theme}) => {
  return (
    <section id="projects">
      {/* <h5 className={theme === "dark"? "text-dark":"text-light"}>My Recent Work</h5> */}
      <h2>Projects</h2>

      <div className="container projects_container">
        {
          data.map((ele) => {
            return <ProjectCard key={ele.id} {...ele} />
          })
        }
      </div>
    </section>
  )
}

export default Projects
