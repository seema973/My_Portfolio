import React from 'react'
import './Skills.css'
import {AiFillHtml5} from 'react-icons/ai'
import {FaCss3Alt, FaNode, FaReact, FaFileCode, FaBootstrap } from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {SiCplusplus, SiMongodb, SiVisualstudiocode} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'
import {BsGithub} from 'react-icons/bs'


const Skills = () => {
  return (
    <section id='skills'>
      <h5>What Skill I Have?</h5>
      <h2>My Skills</h2>
      <div className="container skill_container">
        <div className="skill_webd">
          <h3>Web Development</h3>
          <div className="skill_content">
            <article className="skill_details">
               <AiFillHtml5 className = 'skill_details-icon'/>
                <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className="skill_details">
               <FaCss3Alt className = 'skill_details-icon'/>
                <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
                </div>
            </article>
            <article className="skill_details">
               <IoLogoJavascript className = 'skill_details-icon'/>
                <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
                </div>
            </article>
            <article className="skill_details">
               <FaBootstrap className = 'skill_details-icon'/>
                <div><h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
                </div>
            </article>
            <article className="skill_details">
               <FaReact className = 'skill_details-icon'/>
                <div>
                <h4>React.js</h4>
                <small className='text-light'>Intermediate</small>
                </div>
            </article>
            <article className="skill_details">
               <FaNode className = 'skill_details-icon'/>
                <div>
                <h4>Node.js</h4>
                <small className='text-light'>Intermediate</small>
                </div>
            </article>
          </div>
        </div>
        {/* End for WebD  */}

        <div className="skill_lang">
          <h3>Languages, Databases and Other</h3>
          <div className="skill_content">
          <article className="skill_details">
               <SiCplusplus className = 'skill_details-icon'/>
                <div>
                <h4>C/C++</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className="skill_details">
               <GrMysql className = 'skill_details-icon'/>
                <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
                </div>
            </article>
            <article className="skill_details">
               <SiMongodb className = 'skill_details-icon'/>
                <div><h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
                </div>
            </article>
            <article className="skill_details">
               <FaFileCode className = 'skill_details-icon'/>
                <div><h4>Data Structures and Algorithm</h4>
                <small className='text-light'>Intermediate</small>
                </div>
            </article>
            <article className="skill_details">
               <BsGithub className = 'skill_details-icon'/>
                <div>
                <h4>Git & Github</h4>
                <small className='text-light'>Intermediate</small>
                </div>
            </article>
            <article className="skill_details">
               <SiVisualstudiocode className = 'skill_details-icon'/>
                <div>
                <h4>VSCode</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Skills
