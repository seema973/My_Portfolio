import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/grenze/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/seema973" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/__grenze__/  " target="_blank"><AiFillInstagram/></a>
    </div>
  )
}

export default HeaderSocials
