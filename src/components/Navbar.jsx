import React , { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { styles } from "../styles"
import { navLinks } from "../Constants/index"
import { logo, menu, close } from "../assets/index"

import LOGO from "../assets/logo.png"

const Navbar = () => {

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      /* w-full: this class sets the width of the element to 100% of its container.
        flex: this class applies the Flexbox layout to the element, allowing its child elements to be arranged in a flexible and responsive way.
        items-center: this class centers the child elements vertically within the Flexbox container.
        py-5: this class applies padding of 5 pixels on the y-axis (top and bottom) to the element.
        fixed: this class fixes the position of the element to the viewport, so it remains in the same place even when the user scrolls the page.
        top-0: this class positions the element at the top of its container.
        z-20: this class sets the z-index of the element to 20, which determines its position in the vertical stacking order of elements on the page.
        bg-primary: this class sets the background color of the element to a color called "primary".
      */
      className= {  `${styles.paddingX}  w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
          <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
              <Link 
                to = "/"
                className = 'flex items-center gap-2'
                onClick = {() => {
                  setActive("");
                  window.scrollTo(0,0);
                }}
              >
                <img src = {LOGO} className = 'w-9 h-9 object-contain m-[10px]' alt='logo' />
                {/* &nbsp; => white space */}
                <p className = 'text-white text-[18px] font-bold cursor-pointer flex' >D'Yaa &nbsp;<span className = 'sm:block hidden'>Alyassin</span></p>
              </Link>

               {/*  we are creating the WEB navigation bar */}
              <ul className = 'list-none hidden sm:flex  gap-10'>
                {navLinks.map((link) => (
                  <li key={link.id} 
                  // using the key we want to check whether the links are active 
                    className = {`${active === link.title ? "text-white" : "text-secondary"}
                    hover:text-white text-[18px] font-medium curser-pointer`}
                    onClick={() => setActive(link.title)}>

                    <a href = {`${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>

              <div>DA</div>

              {/*  we are creating the mobile navigation bar */}
              <div className='sm:hidden flex flex-1 justify-end items-center'>
                  <img 
                  /* CHECKING AND TOGGLING BETWEEN CLOSE AND OPEN MENU */
                  src = {toggle ? close : menu}
                  alt = 'menu'
                  placeholder = 'menu'
                  className = 'w-[28px] h-[28px]'
                  onClick = {() => setToggle(!toggle)}/>

                  {/* SETTING UP ACTUAL MENU  */}
                  <div className={`${!toggle ? 'hidden' : 'flex'}  p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                      <ul className = 'list-none flex justify-end items-start flex-col gap-4  gap-10'>
                        {navLinks.map((link) => (
                          <li key={link.id} 
                          // using the key we want to check whether the links are active 
                            className = {`${active === link.title ? "text-white" : "text-secondary"}
                           font-poppins font-medium cursor-pointer text-[16px]`}
                            onClick={() => {
                              setToggle(!toggle)
                              setActive(link.title)}
                            }>

                            <a href = {`${link.id}`}>{link.title}</a>
                          </li>
                        ))}
                    </ul>
                  </div>
              </div>


          </div>
    </nav>
  )
}

export default Navbar