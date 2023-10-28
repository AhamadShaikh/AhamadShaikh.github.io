import React from 'react'
import "./skills.css"
import { BsPatchCheckFill } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { SiRedux } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { SiPostman } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import javaScript from "../../assets/javaScript.png"
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import react from "../../assets/react.png"
import redux from "../../assets/redux.png"
import node from "../../assets/node.png"
import git from "../../assets/git.png"
import mongoDB from "../../assets/mongoDB.png"
import postman from "../../assets/postman.png"
import chakra from "../../assets/chakra.png"
import express from "../../assets/express.png"


const Skills = ({ theme }) => {
  return (
    <div id="skills">
      <h5 className={theme === 'dark' ? 'text-dark' : 'text-light'}style={{fontSize:'22px',color:"#4DB5FF",marginBottom:"30px"}}>My Skills</h5>
      {/* <h2>My Skills</h2> */}

      <div className="container skill_container">
        <div className="skill-frontend">
          <h3>Frontend Development</h3>
          <div className="skill_content">

            <article className="skills-card">
              {/* <BsPatchCheckFill className='skill_details-icon' /> */}
              <div className='skill-container'>
                <h4 className="skills-card-name">HTML</h4>
                <img className="skills-card-img" src={html} alt="" />
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>

            <article className="skills-card">
              {/* <BsPatchCheckFill className='experience_details-icon' /> */}
              <div className='skill-container'>
                  <h4 className="skills-card-name">CSS</h4>
                  <img className="skills-card-img" src={css} alt="" />
                </div>
            </article>

            <article className="skills-card">
              {/* <BsPatchCheckFill className='skill_details-icon' /> */}
                <div className='skill-container'>
                  <h4 className="skills-card-name">JavaScript</h4>
                  <img className="skills-card-img" src={javaScript} alt="" />
                </div>
                {/* <small className='text-light'>Experienced</small> */}
            </article>

            <article className="skills-card">
              {/* <BsPatchCheckFill className='skill_details-icon' /> */}
              <div className='skill-container'>
                  <h4 className="skills-card-name">React</h4>
                  <img className="skills-card-img" src={react} alt="" />
                </div>
            </article>

            <article className="skills-card">
              {/* <BsPatchCheckFill className='skill_details-icon' /> */}
              <div className='skill-container'>
                  <h4 className="skills-card-name">Redux</h4>
                  <img className="skills-card-img" src={redux} alt="" />
                </div>
            </article>

            <article className="skills-card">
              {/* <BsPatchCheckFill className='skill_details-icon' /> */}
              <div className='skill-container'>
                  <h4 className="skills-card-name">Chakra UI</h4>
                  <img className="skills-card-img" src={chakra} alt="" />
                </div>
            </article>

          </div>
        </div>

        {/* backend detials now  */}

        <div className="skill_backend">
          <h3>Backend Developement</h3>
          <div className="skill_content">

            <article className='experience_details'>
              {/* <BsPatchCheckFill className='experience_details-icon' /> */}
              {/* <div>
                <h4>Node JS</h4> */}
                {/* <small className='text-light'>Experienced</small> */}
              {/* </div> */}
              <div className='skill-container'>
                  <h4 className="skills-card-name">Node.js</h4>
                  <img className="skills-card-img" src={node} alt="" />
                </div>
            </article>

            <article className="skills-card">
              {/* <BsPatchCheckFill className='skill_details-icon' /> */}
              <div className='skill-container'>
                  <h4 className="skills-card-name">Git</h4>
                  <img className="skills-card-img" src={git} alt="" />
                </div>
            </article>

            <article className="skills-card">
              {/* <BsPatchCheckFill className='skill_details-icon' /> */}
              <div className='skill-container'>
                  <h4 className="skills-card-name">Postman</h4>
                  <img className="skills-card-img" src={postman} alt="" />
                </div>
            </article>

            <article className="skills-card">
              {/* <BsPatchCheckFill className='skill_details-icon' /> */}
              <div className='skill-container'>
                  <h4 className="skills-card-name">MongoDB</h4>
                  <img className="skills-card-img" src={mongoDB} alt="" />
                </div>
            </article>

            <article className="skills-card">
              {/* <BsPatchCheckFill className='skill_details-icon' /> */}
              <div className='skill-container'>
                  <h4 className="skills-card-name">Express.js</h4>
                  <img className="skills-card-img" src={express} alt="" />
                </div>
            </article>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
