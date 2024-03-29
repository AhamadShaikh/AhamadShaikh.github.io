import React from 'react'
import "./about.css"
// import me2 from "../../assets/about-me2.jpg"
import me2 from "./me2.jpg"
import { FaAward } from "react-icons/fa"
import { FaGraduationCap } from "react-icons/fa"
import { VscFolderLibrary } from "react-icons/vsc"

const About = ({ theme }) => {
  return (
    <section id="about" className='about section'>
      <h5 className={theme === "dark" ? "text-dark" : "text-light"}>Get to Know</h5>
      <h2 id='about.about.section'>About Me</h2>

      <div className="container about_container">
        {/* <div className="about_me"> */}
        <div className="about_me-image">
          <img className='home-img' src={me2} alt="Ahamad Shaikh" />
        </div>

        <div className="about_content">
          <div className="about_cards">


            <article className='about_card'>
              <FaGraduationCap className='about_icon' />
              <h5>Education</h5>
              <small>B.E. (Mechanical Engg.) - 2022</small>
            </article>

            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>0-1 Years
                {/* Working */}
              </small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>7 Completed</small>
            </article>

          </div>

          <p id="user-detail-intro" className={theme === "dark" ? "text-dark" : "text-light"}>

            Experienced Frontend Developer blending design expertise with technical proficiency. Passionate about crafting elegant, user-centric interfaces, I am a highly motivated professional seeking continuous growth through challenges and opportunities. Proficient in HTML, CSS, JavaScript, React, Redux, TypeScript, Node, Express, and MongoDB, I excel in efficiently managing intricate projects with a focus on clean and intuitive design solutions.
          </p>
          {/* 
          <a href="https://drive.google.com/file/d/1is9F5UCUO1z3uppfyedD8HuOITFlC-XF/view?usp=drive_link" id='resume-button-2' target="_blank"> My Resume</a> */}
        </div>
      </div>
    </section>
  )
}

export default About


