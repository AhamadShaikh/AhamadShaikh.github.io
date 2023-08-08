// import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { useState } from 'react';
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Home from './components/home/Home'
import Nav from './components/nav/Nav'
import Projects from './components/projects/Projects';
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer"
// import GitHubStats from './components/github/GitHubStats';
import {Github} from "../src/components/Github"

function App() {
  const [theme, setTheme] = useState("dark")
  console.log(theme)

  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }
  return (
    <div className={theme === "light" ? "light-theme" : "dark-theme"}>
      <Navbar handleTheme={handleTheme} theme={theme} />
      <Home theme={theme} />
      <Nav />
      <About theme={theme} />
      <Skills theme={theme} />
      <Projects />
      {/* <GitHubStats/> */}
      <Github theme={theme}/>
      <Contact theme={theme}/>
      <Footer/>
    </div>
  );
}

export default App;
