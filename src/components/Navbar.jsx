import React , { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { styles } from "../styles"
import { navLinks } from "../Constants/index"
import { logo, menu, close } from "../assets/index"

import LOGO from "../assets/logo.png"

const Navbar = () => {

  const [active, setActive] = useState("")

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
                <img src = {logo} className = 'w-9 h-9 object-contain' alt='logo' />
                <p className = 'text-white text-[18px] font-bold cursor-pointer' >D'Yaa <span className = 'sm:block hidden'>Alyassin</span></p>
              </Link>
          </div>
    </nav>
  )
}

export default Navbar