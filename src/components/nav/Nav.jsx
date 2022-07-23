import React from 'react'
import './Nav.css'
import {FaHome} from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'
import {GiBrain} from 'react-icons/gi'
import {RiFolderUserFill} from 'react-icons/ri'
import {MdMessage} from 'react-icons/md'
import {useState} from 'react'

const Nav = () => {
  const[activeNav,setActiveNav] =useState('#');
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')}className={activeNav==='#'?'active':''}  ><FaHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')}className={activeNav==='#about'?'active':''}><AiOutlineUser/></a>
      <a href="#skills" onClick={()=> setActiveNav('#skills')}className={activeNav==='#skills'?'active':''}><GiBrain/></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')}className={activeNav==='#portfolio'?'active':''}><RiFolderUserFill  /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')}className={activeNav==='#contact'?'active':''}><MdMessage/></a>
    </nav>
  )
}

export default Nav
