import React from 'react'
import { BsLinkedin } from "react-icons/bs"
import { BsGithub } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io";
// import { FiInstagram } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";

import "./home.css"


const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/ahamad-shaikh-142322250/" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com/AhamadShaikh" target="_blank"><BsGithub /></a>
      <a href="https://twitter.com/AHAMADSHAIKH11" target="_blank"><IoLogoTwitter /></a>
      <a href="https://www.facebook.com/ahamad.shaikh.796/" target="_blank"><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocials