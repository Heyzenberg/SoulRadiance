import React from 'react'
import './Links.scss';
import {BsGithub, BsLinkedin, BsFacebook, BsInstagram} from 'react-icons/bs';


const Links = () => {
  return (
    <div className="Links">
        <a href="https://github.com/Heyzenberg" target='_blank'><BsGithub/></a>
        <a href="https://www.linkedin.com/in/evgeny-murenets-330bbb24b/" target='_blank'><BsLinkedin/></a>
        <a href="https://www.facebook.com/profile.php?id=100034688316896" target='_blank'><BsFacebook/></a>
        <a href="https://www.instagram.com/erik_meys/" target='_blank'><BsInstagram/></a>                
    </div>
  )
}

export { Links };
