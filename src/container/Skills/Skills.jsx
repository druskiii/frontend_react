import React, { useEffect, useState } from 'react';
import { animate, motion } from 'framer-motion';
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css"; 

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Skills.scss';

const Skills = () => {
  const [experience, setExperience] = useState([]) 
  const [skills, setSkills] = useState([]) 


  useEffect(() => {
    const query = '*[_type == "experiences"] | order(year desc)';
    const skillsQuery = `*[_type == "skills"]`

    client.fetch(query)
      .then((data) => {

        console.log(data);
        setExperience(data);
      })
    client.fetch(skillsQuery)
    .then((data) => {
      setSkills(data);
    })
    
  }, [])

  return (
    <>
      <h2 className='head-text'>Skills & Experience</h2>
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills?.map((skills) => (
            <motion.div 
              whileInView={{opacity: [0, 1]}}
              transition={{ duration: 0.5}}
              className="app__skills-item app__flex"
              key={skills.name}
              >
                <div className='app__flex' style={{ backgroundColor: skills.bgColor}}>
                  <img src={urlFor(skills.icon)} alt="skill-name" />
                </div>

                <p className='p-text'>{skills.name}</p>
            </motion.div>
          ))}
          </motion.div>

          <motion.div className='app__skills-exp'>

           {experience?.map((experience) => (
              <motion.div
                className='app__skills-exp-item'
                key={experience.year}
                >
                    <div className='app__skills-exp-year'>
                      <p className='bold-text'>{experience.year}</p>
                    </div>
                      <motion.div className='app__skills-exp-works'>
                        {experience.works.map((work) => (
                        <>
                        <motion.div
                          whileInView={{opacity: [0, 1]}}
                          transition={{ duration: 0.5}}
                          className="app__skills-exp-work"
                          data-tooltip-id={work.name}       // In place of data for and data tip
                          data-tooltip-content={work.desc}
                          key={skills.name}
                          >
                            <h4 className='bold-text'>{work.name}</h4>
                            <p className='p-text'>{work.company}</p>
                        </motion.div>

                        <Tooltip
                          id={work.name}
                          effect="solid"
                          // arrowColor="#fff" * Must style in css for React v5 *
                          className="skills-tooltip"
                         />
                      </>
                  ))}
                </motion.div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  "app__whitebg"
  );