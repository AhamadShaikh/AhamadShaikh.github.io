import React from 'react'
import "./experience.css"
import { BsPatchCheckFill } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { SiRedux } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { SiPostman } from "react-icons/si";
import { SiMongodb } from "react-icons/si";


const Experience = ({theme}) => {
  return (
    <section id="skills">
      <h5 className={theme === 'dark' ? 'text-dark':'text-light'}>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container skill_container">
        <div className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="skill_content">

            <article className='skill_details'>
              <BsPatchCheckFill className='skill_details-icon' />
              <div>
                <h4>HTML <AiFillHtml5 color='red' /></h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>

            <article className='skill_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>CSS <SiCss3 color='blue' /></h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>

            <article className='skill_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>JavaScript <SiJavascript color='yellow' mr="10px" /></h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>

            <article className='skill_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>React <GrReactjs color='skyblue' /></h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>

            <article className='skill_details'>
              <BsPatchCheckFill className='skill_details-icon' />
              <div>
                <h4>Redux <SiRedux color="purple" /></h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>

          </div>
        </div>

        {/* backend detials now  */}

        <div className="skill_backend">
          <h3>Backend Developement</h3>
          <div className="skill_content">

            {/* <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article> */}

            <article className='skill_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Git <BsGit color="red" /></h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>

            <article className='skill_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Postman <SiPostman color="orange" /></h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>

            <article className='skill_details'>
              <BsPatchCheckFill className='skill_details-icon' />
              <div>
                <h4>MongoDB{"  "} <SiMongodb color="green" /></h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
