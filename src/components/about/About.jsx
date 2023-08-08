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
              <small>BE Mech - 2022</small>
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
              <small>4 Completed</small>
            </article>

          </div>

          <p id="user-detail-intro" className={theme === "dark" ? "text-dark" : "text-light"}>
            Frontend Developer with a background in design and development. I have a passion for creating clean and intuitive designs. I am a self-motivated and self-driven individual who is always looking for new challenges and opportunities.My proficiency in a wide range of programming languages, frameworks, and technologies using HTML,CSS,JavaScript,React,Redux,TypeScript,Node,Express and MongoDB allows me to tackle complex projects with ease and efficiency.
          </p>
{/* 
          <a href="https://drive.google.com/file/d/1is9F5UCUO1z3uppfyedD8HuOITFlC-XF/view?usp=drive_link" id='resume-button-2' target="_blank"> My Resume</a> */}
        </div>
      </div>
    </section>
  )
}

export default About


