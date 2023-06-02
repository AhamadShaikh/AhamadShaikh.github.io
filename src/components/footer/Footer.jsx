import React from 'react'
import "./footer.css"
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className='footer_logo'>Ahamad Shaikh</a>

      <ul className='permalinks' >
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Experience</a></li>
      <li><a href="#projects">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/ahamad.shaikh.796/" target="_blank "><FaFacebookF /></a>
        <a href="https://www.instagram.com/shaikhahamad_786/" target="_blank "><FiInstagram /></a>
        <a href="https://twitter.com/AHAMADSHAIKH11" target="_blank "><IoLogoTwitter /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Ahamad shaikh. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
