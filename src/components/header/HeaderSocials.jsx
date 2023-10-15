import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
import { AiFillYoutube } from "react-icons/ai";
import { BsInstagram } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.instagram.com/_divyam_kashyap_/" target="_blank" rel="noreferrer"><BsInstagram /></a>
      <a href="https://www.linkedin.com/in/divyam-kashyap-9233b9220/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/Dk-2812" target="_blank" rel="noreferrer"><IoLogoGithub /></a>
    </div>
  )
}

export default HeaderSocials