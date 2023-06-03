import React from 'react'
import "./nav.css"
import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { GrProjects } from "react-icons/gr"
import { BiMessageSquareDetail } from "react-icons/bi"
import { useState } from "react";
import { Tooltip } from '@chakra-ui/react'

const Nav = () => {
  // const [activeNav, setActiveNav] = useState("#")
  return (
    <div id="nav-menu">
      <nav >
        <a href="#" className="nav-link.home">
          <AiOutlineHome />
          </a>
        <a href="#about" className="nav-link.about" ><AiOutlineUser /></a>
        <a href="#skills" className="nav-link.skill" ><BiBook /></a>
        <a href="#contact" className="nav-link.contact" ><BiMessageSquareDetail /></a>
        <a href="#projects" className="nav-link.projects" ><GrProjects/></a>
        {/* <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav ==="#contact" ? "active" : ""}><BiMessageSquareDetail /></a>
        <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav ==="#projects" ? "active" : ""}><GrProjects/></a> */}
      </nav>
    </div>
  )
}

export default Nav
