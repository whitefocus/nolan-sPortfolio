import React from "react"
import { faCss3, faGit, faGitAlt, faHtml5, faJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./index.scss"

export default function Skills() {
  let [toggled, setToggled] = React.useState(false) 

  function toggle(){
    if(toggled){
      document.querySelector('.other-skills').style.right = "0px"
      document.querySelector(".toggleBtn").style.transform = "rotate(180deg)"
      document.querySelector('.skills-boxes').style.filter = 'blur(8px)'

    }else{
      document.querySelector('.other-skills').style.right = "-200px"
      document.querySelector(".toggleBtn").style.transform = "rotate(0deg)"
      document.querySelector('.skills-boxes').style.filter = 'blur(0px)'
    }
    setToggled(prev => !prev)
  }

  return (
    <div className="skills container" >
      <div className="main-header">
      <p className="head">Skills</p>
      <p className="sub-head">What can you do</p>
      </div>
      <div className="skills-boxes">
        <div className="skill-box">
          <div className="skill-info">
        <FontAwesomeIcon icon={faHtml5} className="skill-icon html" />
            <p>HTML</p>
          </div>
        <p className="skill-desc">The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.</p>
        </div>
        <div className="skill-box">
          <div className="skill-info">
            <FontAwesomeIcon icon={faCss3} className="skill-icon css" />
          <p>CSS</p>
          </div>
        <p className="skill-desc">Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.</p>
        </div>
        <div className="skill-box">
        <div className="skill-info">
            <FontAwesomeIcon icon={faJs} className="skill-icon js" />
        <p>JavaScript</p>
          </div>
        <p className="skill-desc">JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.</p>
        </div>
        <div className="skill-box">
        <div className="skill-info">
            <FontAwesomeIcon icon={faReact} className="skill-icon react" />
        <p>React</p>
          </div>
        <p className="skill-desc">React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.</p>
        </div>
        <div className="skill-box">
        <div className="skill-info">
            <FontAwesomeIcon icon={faSass} className="skill-icon sass" />
        <p>Sass</p>
          </div>
        <p className="skill-desc">Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets.</p>
        </div>
        <div className="skill-box">
        <div className="skill-info">
            <FontAwesomeIcon icon={faGitAlt} className="skill-icon git" />
        <p>Git</p>
          </div>
        <p className="skill-desc">Git is a version control system, usually used for coordinating work among programmers collaboratively developing source code during software development.</p>
        </div>
        
      </div>
      <div className="other-skills">
        <div className="toggleS" onClick={toggle}>
          <p>Other Qualities</p>
          <div className="toggleBtn"><FontAwesomeIcon icon={faArrowLeft} /></div>
        </div>
        <div className="other-skills-box">
        <p>Other Qualities:</p>
        <ul className="other-skills-list">
          <li className="small-skill" >-~75 WPM Typing Speed</li>
          <li className="small-skill" >-Disciplined</li>
          <li className="small-skill" >-Responsible</li>
          <li className="small-skill" >-Fast Learner</li>
        </ul>
        </div>
      </div>
    </div>
  )
}