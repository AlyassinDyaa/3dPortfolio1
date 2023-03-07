import React from 'react'
import Tilt from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { services } from "../Constants"
import { fadeIn , textVariant } from "../Utils/motion"
import { SectionWrapper } from '../HOC'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className={`xs:w-[250px] w-full`}>
      <motion.div
        variants={fadeIn("right", "spring", 0.1*{index}, 0.75)}
        //ADDING CARD BORDER AND LOCATION
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        {/* SETTING UP MOTION TILT OF CARD */}
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}

        //SETTING UP CARD WIDTH AND HEIGHT
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          {/*ADDING CARD ELEMENTS TITLE AND ICON
          - IF I WANTED TO ADD MORE ELEMENTS 
          1- ADD ELEMENT IN SERVICES IN THE INDEX.JS
          2- ADD MORE PARAMETERS TO SERVICECARD */}
            <img src={icon} alt={title} 
            className='w-16 h-16 object-contain'/>
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {

  return (
    <>
    {/* THE TITLE AND SUBTITLE */}
    <motion.div
        variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
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
    <div className='mt-20 flex flex-wrap justify-content-center gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")
