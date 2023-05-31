import React, { useState } from 'react'
import "./navbar.css"
import { BsMoonFill } from 'react-icons/bs';
import { Button } from "@chakra-ui/react"
export const Navbar = ({ handleTheme, theme }) => {
    return (
        <div id='nav-menu'>
            <div className={theme === "dark" ? "dark" : "light"}>
                <div id="user-detail-name"><h2>Ahamad Shaikh</h2></div>
                <div className='theme-container'>
                    <div className="hireme"> <a href="#contact" className='hire' >Hire Me ➥</a></div>
                    <BsMoonFill className='theme-change' onClick={handleTheme} h="20px" />
                </div>
            </div>
        </div>
    )
}
