import React from 'react'
import { motion } from "framer-motion"
import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"


const Hero = () => {
  return (
    <section className=' relative w-full h-screen mx-auto'>
       <div className= {`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        {/* ITEM 1 WITHIN THE COL DIV */}
        <div className=' flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        
        {/* ITEM 2 WITHIN THE COL DIV */}
        <div>
          <h1 className = {`${styles.heroHeadText} text-white`}> Hi There, I'm <span className='text-[#915eff]'>D'Yaa</span> </h1>
          <p className = {`${styles.heroSubText} mt-2 text-white-100`}>Dynamic and motivated individual that builds and manages projects 
          from concept to designing all the way to completion. 
          <br/> I utilize my experience to always increase my knowledge whilst offering value. </p>
        </div>
       </div>

          {/* ITEM 3 of screen UNDER THE DIC OF COLUMNS
          first three.js canvas model*/}
          <ComputersCanvas/>

    </section>
  )
}

export default Hero