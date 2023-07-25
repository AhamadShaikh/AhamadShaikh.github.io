import React from 'react'
import "./projects.css"
import IMG1 from "../../assets/IMG1.png"
import IMG2 from "../../assets/IMG2.png"
import IMG3 from "../../assets/IMG3.png"
import IMG4 from "../../assets/IMG4.png"
import IMG5 from "../../assets/IMG5.png"
import ProjectCard from './ProjectCard'

const data = [
  // {
  //   id: 1,
  //   image: IMG1,
  //   title: "Health Kart Clone",
  //   tech_stack: "HTML, CSS, JavaScript",
  //   github: "https://github.com/AhamadShaikh/brainy-thread-7805",
  //   demo: "https://shiny-platypus-02a9a9.netlify.app/",
  //   description: "HealthKart is a e-commerce shopping website where users can buy products related to health and fitness."
  // },
  {
    id: 1,
    image: IMG2,
    title: "IndiaMart Clone",
    tech_stack: "HTML, CSS, JavaScript",
    github: "https://github.com/sinnu1908/radioactive-song-3321",
    demo: "https://harmonious-gaufre-6b8992.netlify.app/",
    description: "The IndiaMart Clone script is a sophisticated Open Source B2B marketplace. It is a ready-to-use platform that can be tailor to your specific needs."
  }, {
    id: 2,
    image: IMG3,
    title: "LYST Clone",
    tech_stack: "HTML, CSS, JavaScript, React.js, ChakraUI",
    github: "https://github.com/AhamadShaikh/maxed-tiger-1503",
    demo: "https://project-fashion-mart.netlify.app/",
    description: "Lyst is a fashion technology company, and premium shopping app. This is a react-redux based project in which we have cloned an e-commerce shopping website."
  },
   {
    id: 3,
    image: IMG4,
    title: "Behance Health Care Medical Service WordPress Website",
    tech_stack: "HTML, CSS, JavaScript, React.js, ChakraUI",
    github: "https://github.com/AhamadShaikh/moving-scent-7843",
    demo: "https://lifeline-project.netlify.app/",
    description: "Behance is the world's largest creative network for showcasing and discovering creative work."
  },
  {
    id: 4,
    image: IMG5,
    title: "Skill Hub",
    tech_stack: "HTML, CSS, JavaScript, React.js, Redux, ChakraUI, Postman, Node.js, Express, MongoDB",
    github: "https://github.com/Ak-nut-47/greasy-sofa-2441",
    demo: "https://nemskillhub.netlify.app/",
    description: "Skill Hub is an online learning and teaching marketplace with over 213000 courses and 62 million students. Learn programming, marketing, data science and more."
  }
]

const Projects = ({ theme }) => {
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
