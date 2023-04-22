import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaCodepen } from 'react-icons/fa';


const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://www.linkedin.com/in/drubaker26/" target="blank">
            <BsLinkedin />
          </a>
        </div> 
        <div>
          <a href="https://github.com/druskiii/" target="blank">
            <BsGithub />
          </a>
        </div> 
        <div>
          <a href="https://codepen.io/collection/zxRPob" target="blank">
            <FaCodepen />
          </a>
        </div> 
    </div>
  )
}

export default SocialMedia