import React from 'react'
import './About.css'
import ME from '../../Assets/me-about.png'
import {FaUniversity} from 'react-icons/fa'
import {MdComputer} from 'react-icons/md'
import {TbFilePencil} from 'react-icons/tb'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaUniversity className='about_icon'/>
              <h5>University</h5>
              <small>Netaji Subhas University of Technolgy</small>
            </article>
            <article className="about_card">
              <MdComputer className='about_icon'/>
              <h5>Branch</h5>
              <small>B.tech in Computer Engineering</small>
            </article>
            <article className="about_card">
              <TbFilePencil className='about_icon'/>
              <h5>Marks</h5>
              <small>Aggregarte CGPA is 6.90 till 4th sem</small>
            </article>
          </div>
          <p>
            Hello there! My name is Seema Choudhary. I'm student and pursuing my graduation in B.tech(Computer Engineering) from Netaji Subhas University of Technology .
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
