// import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { useState } from 'react';
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'

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
      <Header theme={theme} />
      <Nav />
      <About theme={theme} />
      <Experience theme={theme} />
    </div>
  );
}

export default App;
