// import React, { useState } from 'react'
// import "./navbar.css"
import { BsMoonFill } from 'react-icons/bs';
// import { Button } from "@chakra-ui/react"
// export const Navbar = ({ handleTheme, theme }) => {
//     return (
//         <div id='nav-menu'>
//             <div className={theme === "dark" ? "dark" : "light"}>
//                 <div id="user-detail-name"><h2>Ahamad Shaikh</h2></div>
//                 <div className='theme-container'>
//                     <div className="hireme"> <a href="#contact" className='hire' >Hire Me ➥</a></div>
//                     <BsMoonFill className='theme-change' onClick={handleTheme} h="20px" />
//                 </div>
//             </div>
//         </div>
//     )
// }

import resume from "../../assets/Ahamad-Shaikh-Resume.pdf" 

import React from "react";
import { Link } from "react-scroll";
import { FaSun, FaMoon } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import {
    useColorMode,
    Flex,
    IconButton,
    Box,
    Text,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerBody,
    useDisclosure,Button
} from "@chakra-ui/react";

export const Navbar = ({handleTheme,theme}) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Flex
            id="nav-menu"
            pos={"sticky"}
            w={"100%"}
            h={"80px"}
            align={"center"}
            justify={"space-between"}
            top={"0"}
            p={{
                base: "0rem 1rem",
                sm: "0rem 1rem",
                md: "0rem 2rem",
                lg: "0rem 5rem",
                xl: "0rem 5rem",
                "2xl": "0rem 5rem",
            }}
            zIndex={"1"}
            bg={colorMode === "light" ? "white" : "black"}
            boxShadow={
                "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
            }
        >
            {/* first */}
            <Box
                display={{
                    base: "block",
                    sm: "block",
                    md: "none",
                    lg: "none",
                    xl: "none",
                    "2xl": "none",
                }}
            >
                <IconButton icon={<GiHamburgerMenu />} size={"sm"} onClick={onOpen} />

                <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerBody
                            p={{
                                base: "1rem 1rem",
                                sm: "1rem 1rem",
                                md: "2rem 2rem",
                                lg: "2rem 5rem",
                                xl: "2rem 5rem",
                                "2xl": "2rem 5rem",
                            }}
                            bg={colorMode === "light" ? "white" : "black"}
                        >
                            <Link to="home" spy={true} smooth={true} onClick={onClose}>
                                <Text
                                    className="nav-link home"
                                    fontSize={"2xl"}
                                    bg="linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)"
                                    bgClip="text"
                                >
                                    Home
                                </Text>
                            </Link>

                            <Link to="about" spy={true} smooth={true} onClick={onClose}>
                                <Text
                                    className="nav-link about"
                                    fontSize={"2xl"}
                                //   bgGradient="linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)"
                                //   bgClip="text"
                                >
                                    About Me
                                </Text>
                            </Link>

                            <Link to="skills" spy={true} smooth={true} onClick={onClose}>
                                <Text
                                    className="nav-link skills"
                                    fontSize={"2xl"}
                                //   bgGradient="linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)"
                                //   bgClip="text"
                                >
                                    Skills
                                </Text>
                            </Link>

                            <Link to="projects" spy={true} smooth={true} onClick={onClose}>
                                <Text
                                    className="nav-link projects"
                                    fontSize={"2xl"}
                                //   bgGradient="linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)"
                                //   bgClip="text"
                                >
                                    Projects
                                </Text>
                            </Link>

                            <Link to="contact" spy={true} smooth={true} onClick={onClose}>
                                <Text
                                    className="nav-link contact"
                                    fontSize={"2xl"}
                                //   bgGradient="linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)"
                                //   bgClip="text"
                                >
                                    Contact
                                </Text>
                            </Link>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>

            {/* second */}
            <Box
                fontWeight={"extrabold"}
                fontSize={{
                    base: "2xl",
                    sm: "2xl",
                    md: "2xl",
                    lg: "3xl",
                    xl: "3xl",
                    "2xl": "3xl",
                }}
            // bgGradient="linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)"
            // bgClip="text"
            >
                Ahamad Shaikh
            </Box>

            {/* third */}
            <Flex
                w={"60%"}
                align={"center"}
                justify={"space-between"}
            // display={{
            //   base: "flex",
            //   sm: "flex",
            //   md: "flex",
            //   lg: "flex",
            //   xl: "flex",
            //   "2xl": "flex",
            // }}
            // display={"flex"}
            >
                <Link to="home" spy={true} smooth={true}>
                    <Text
                        className="nav-link home"
                        fontSize={{
                            base: "1xl",
                            sm: "1xl",
                            md: "1xl",
                            lg: "2xl",
                            xl: "3xl",
                            "2xl": "3xl",
                        }}
                        cursor={"pointer"}
                    // _hover={{
                    //   bgGradient: "linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)",
                    //   bgClip: "text",
                    // }}
                    >
                        Home
                    </Text>
                </Link>

                <Link to="about" spy={true} smooth={true}>
                    <Text
                        className="nav-link about"
                        fontSize={{
                            base: "1xl",
                            sm: "1xl",
                            md: "1xl",
                            lg: "2xl",
                            xl: "3xl",
                            "2xl": "3xl",
                        }}
                        cursor={"pointer"}
                    // _hover={{
                    //   bgGradient: "linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)",
                    //   bgClip: "text",
                    // }}
                    >
                        About Me
                    </Text>
                </Link>

                <Link to="skills" spy={true} smooth={true}>
                    <Text
                        className="nav-link skills"
                        fontSize={{
                            base: "1xl",
                            sm: "1xl",
                            md: "1xl",
                            lg: "2xl",
                            xl: "3xl",
                            "2xl": "3xl",
                        }}
                        cursor={"pointer"}
                    // _hover={{
                    //   bgGradient: "linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)",
                    //   bgClip: "text",
                    // }}
                    >
                        Skills
                    </Text>
                </Link>

                <Link to="projects" spy={true} smooth={true}>
                    <Text
                        className="nav-link projects"
                        fontSize={{
                            base: "1xl",
                            sm: "1xl",
                            md: "1xl",
                            lg: "2xl",
                            xl: "3xl",
                            "2xl": "3xl",
                        }}
                        cursor={"pointer"}
                    // _hover={{
                    //   bgGradient: "linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)",
                    //   bgClip: "text",
                    // }}
                    >
                        Projects
                    </Text>
                </Link>

                <Link to="contact" spy={true} smooth={true}>
                    <Text
                        className="nav-link contact"
                        fontSize={{
                            base: "1xl",
                            sm: "1xl",
                            md: "1xl",
                            lg: "2xl",
                            xl: "3xl",
                            "2xl": "3xl",
                        }}
                        cursor={"pointer"}
                    // _hover={{
                    //   bgGradient: "linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)",
                    //   bgClip: "text",
                    // }}
                    >
                        Contact
                    </Text>
                </Link>
            </Flex>

            {/* fourth */}
            <Box
                id="resume-button-1"
                display={{
                    base: "none",
                    sm: "none",
                    md: "block",
                    lg: "block",
                    xl: "block",
                    "2xl": "block",
                }}
                onClick={() => {
                    window.open(
                        "https://drive.google.com/file/d/1is9F5UCUO1z3uppfyedD8HuOITFlC-XF/view?usp=drive_link"
                    );
                }}
            >
                {" "}
                <a id="resume-link-1" href={resume} download={"Ahamad-Shaikh-Resume"}>
                    <Button className="button nav-link resume">Resume</Button>
                </a>
            </Box>

            {/* fifth */}
            <BsMoonFill className='theme-change' onClick={handleTheme} h="20px" />
        </Flex>
    );
};

