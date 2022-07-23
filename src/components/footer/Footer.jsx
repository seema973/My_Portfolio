import React from 'react'
import './Footer.css'
import {FaFacebookSquare ,FaInstagram} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Seema Choudhary</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://facebook.com" target="_blank"><FaFacebookSquare/></a>
        <a href="https://www.instagram.com/__grenze__/" target="_blank"><FaInstagram/></a>
        <a href="https://www.linkedin.com/in/grenze/" target="_blank"><BsLinkedin/></a>
      </div>

      <div className="footer_thanks">
        <strong>Thank You! For visiting my Website.</strong>
      </div>
    </footer>
  )
}

export default Footer
