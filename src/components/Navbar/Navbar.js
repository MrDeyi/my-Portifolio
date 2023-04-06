import React from 'react'
import './Navbar.css'
import {Link, link} from 'react-scroll'
import { useState } from 'react';
import {HiMenuAlt4,HiX} from 'react-icons/hi';
import {motion} from 'framer-motion';
import profileimg from '../../assets/headerImage.png'


function Navbar() {
    const [toggle, setToggle] = useState(false);
  return (
    <header className='nav__header'>
        <div className='navBar__profile'>
            <img className='nav__img' src={profileimg}/>
            <h3>Mandilake Deyi</h3>
        </div>
        <nav className='nav_nav'>
            <ul className='nav__ul'>
            {['home','about','work','skills','contact'].map(
          (item)=>(<li className='nav__li' key={`link-${item}`}>
            <div>
              
            </div>
            
            <Link to={item} spy={true} smooth={true} offset={50} duration={500}>{item}</Link>
          </li>)
        )}
            </ul>

            {/*This is for Mobile Devices */}

            <div className='app__navbar-menu'>
           <HiMenuAlt4 onClick={()=>setToggle(true)} />
           {
            toggle && (
              <motion.div  whileInView={{x:[300,0]}} transition={{duration:0.85,ease:'easeOut'}}>
               <HiX onClick={()=>setToggle(false)} />
             <ul> 
               {['home','about','work','skills','contact'].map(
          (item)=>(<li key={{item}}>
            
            <a href={`#${item}`} onClick={()=>setToggle(false)}>{item}</a>
          </li>)
                )}

          </ul>
              </motion.div>
            )
           }
      </div>

        </nav>
    </header>
  )
}

export default Navbar