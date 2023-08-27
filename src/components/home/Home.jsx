import React from 'react'
import "./home.css";
import ProfilePic from "../../assets/profile.png";
import Linkedin from "../../assets/linkedin.png";
import Github from "../../assets/github.png";

const Home = () => {
    return (
      <section id="profile">
        <div className="section__pic-container">
          <img src={ProfilePic} alt="profilePicture" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Arunanda <span className='marker'>Panigrahi</span></h1>
          <p className="section__text__p2">
            Web <span className='marker'>Developer</span> <span className='marker1'>|</span> Competitive <span className='marker'>Programmer</span>
          </p>
          <div className="btn-container">
            <button className="btn btn-color-2" onClick={()=> console.log("download CV")}>Download CV</button>
          </div>
          <div id="socials-container">
            <a href="https://github.com/arun1118"  target="_blank" rel="noreferrer">
              <img src={Github} alt="My Github profile" className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/arunanda-panigrahi-991756169/" target="_blank" rel="noreferrer">
              <img src={Linkedin} alt="My LinkedIn profile" className="icon" />
            </a>
          </div>
        </div>
      </section>
    )
}

export default Home