import React from 'react'
import "./home.css"
import resume from "../../assets/Ahamad-Shaikh-Resume.pdf";

const CTA = () => {
  return (
    // <div className="cta">
    //   <a href="https://drive.google.com/file/d/1is9F5UCUO1z3uppfyedD8HuOITFlC-XF/view?usp=drive_link" id='resume-button-1' target="_blank"> My Resume</a>
    //   <a href="#contact" className='btn btn-primary'> Let's Talk</a>
    // </div>
    <div className="cta"
      id="resume-button-2"
      onClick={() => {
        window.open(
          // "https://drive.google.com/file/d/1is9F5UCUO1z3uppfyedD8HuOITFlC-XF/view?usp=drive_link"
          "https://drive.google.com/file/d/17-KcP46x3lGS-VdOBMb1y4I3AmUs2OEJ/view?usp=drive_link"
        );
      }}
    >
      {" "}
      <a id="resume-link-2" href={resume} download={"Ahamad-Shaikh-Resume"}>
        <button className="button">Resume</button>
      </a>
    </div>
  )
}

export default CTA