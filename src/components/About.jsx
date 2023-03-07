import React from 'react'
import Tilt from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { services } from "../Constants"
import { fadeIn , textVariant } from "../Utils/motion"

const ServiceCard = ({index, title, icon}) => {
  return (
    <p>{title}</p>
  )
}

const About = () => {

  return (
    <>
    {/* THE TITLE AND SUBTITLE */}
    <motion.div
        variants={textVariant()}>
      <p className = {styles.sectionSubText}>Introduction</p>
      <h2 className = {styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    {/* DESCRIPTION */}
    <motion.p 
      variants={fadeIn("","",0.1, 1)}
      className='mt-4 text-secondary, text-[17px] max-w-3xl leading-[30px] pt-3 pb-3'>
          Dynamic and motivated individual that builds and manages projects 
          from concept to designing all the way to completion. 
          I utilize my experience to always increase my knowledge whilst offering value.
    </motion.p>

    {/* THE CARDS */}
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
    </div>
    </>
  )
}

export default About