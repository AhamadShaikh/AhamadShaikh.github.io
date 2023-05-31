import React from 'react'
import "./nav.css"
import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
// import { RiServiceLine } from "react-icons/ri"
// import { BiMessageSquareDetail } from "react-icons/bi"
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#nav-menu")
  return (
    <div>
      <nav>
        <a href="#nav-menu" onClick={() => setActiveNav('#nav-menu')} className={activeNav === "#nav-menu" ? "active" : ""}><AiOutlineHome /></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "active" : ""} ><AiOutlineUser /></a>
        <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === "#skills" ? "active" : ""}><BiBook /></a>
        {/* <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav ==="#contact" ? "active" : ""}><BiMessageSquareDetail /></a> */}
      </nav>
    </div>
  )
}

export default Nav
