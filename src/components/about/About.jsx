import React from 'react'
import AboutPic from "../../assets/profile.png";

import "./about.css";

const About = () => {
    return (
      <>
      <div className="about-container">
        <div className="about-pic-container">
          <img src={AboutPic} alt="aboutPic" className='about-pic'/>
        </div>
        <div className="about-details-container">
          <p className='about-details'>
          <span className='marker about-large'>Hi</span> there, I am <span className='about-name'><span className='marker'>Arun</span>anda Panigrahi</span>.
          I have pursued B.tech in <span className='marker'>Computer Science</span> and Engineering
          with a passion for <span className="marker">Web development</span> and <span className="marker">Competitive programming</span> 💗.
          I am always looking for new challenges and opportunities to learn and grow.
          In my spare time, I enjoy playing <span className="marker">video games</span>,
          hiking, and spending time with my <span className="marker">friends</span> and <span className="marker">family</span>.
          </p>
        </div>
      </div>
      </>
    )
}

export default About

/*
<>
      <section id="about">
        <div className="section-container">
          <div className="section__pic-container">
            <img src={AboutPic} alt="AboutPicture" className="about-pic"/>
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img src={ExperiencePic} alt="ExperiencePic" className="icon" />
                <h3>Experience</h3>
                <p>2+ years <br />Frontend Development</p>
              </div>
              <div className="details-container">
                <img src={EducationPic} alt="EducationPic" className="icon" />
                <h3>Education</h3>
                <p>B.Sc. Bachelors Degree<br />M.Sc. Masters Degree</p>
              </div>
            </div>
            <div className="text-container">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
                reprehenderit et laborum, rem, dolore eum quod voluptate
                exercitationem nobis, nihil esse debitis maxime facere minus sint
                delectus velit in eos quo officiis explicabo deleniti dignissimos.
                Eligendi illum libero dolorum cum laboriosam corrupti quidem,
                reiciendis ea magnam? Nulla, impedit fuga!
              </p>
            </div>
          </div>
        </div>
    </section>
    </>
*/