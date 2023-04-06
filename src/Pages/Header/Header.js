import React from 'react'
import './Header.css'
import headerimg from '../../assets/headerImage.png'
import circle from '../../assets/circle.svg'
import js from '../../assets/javascript.png'
import node from '../../assets/node.png'
import react from '../../assets/react.png'
import flutter from '../../assets/flutter.png'
import { motion } from 'framer-motion'
import im2 from '../../assets/2.png'

const scaleVarients={
    whileInView:{
        scale:[0,1],
        opacity:[0,1],
        transition:{
            duration:1,
            ease:'easeInOut'
        }
    }
}
function Header() {

  return (
    <div id='home' className=' header__container'>
      <div className='header__info'>
        <motion.div 
        whileInView={{x:[-100,0],opacity:[0,1]}}
        transition={{duration:3}}
        className='info__header'
        >
            <div className='info_container'>
               <div className='badge-cmp app__flex'>
                 <span>👋</span>
                 <div style={{marginLeft:20}}>
                    <p className='p-text'>Hello, I am</p>
                    <h1 className='head-text'>Mandilake</h1>
                 </div>
               </div>

               <div className='tag-cpm app__flex'>
               <p className='p-text'>Web & Mobile Developer</p>
               <p className='p-text'><span>🎓</span> Graduate at</p>
               <p className='p-text'><span>🏫</span>University of Witswatersrand </p>
               </div>

            </div>

        </motion.div>

        <motion.div 
        whileInView={{opacity:[0,1]}}
        transition={{duration:0.5,delayChildren:0.5}}
        className='app__header_img'
        >
           {/*<img src={headerimg} alt='profile'/>*/} 
           {/*transition={{duration:1,ease:'easeInOut'}}*/}
            <motion.img
              whileInView={{scale:[0,1]}}
              
              className='overlay_circle'
              src={im2}
             
            />

        </motion.div>
        <motion.div
        variants={scaleVarients}
        whileInView={scaleVarients.whileInView}
        className='app__header-circles'
        >
         {[node ,react,flutter].map((circle,index)=>(
            <div className='circle-cmp app__flex' key={circle}>
              <img src={circle} alt='circle'/>
            </div>
         ))}
        </motion.div>
        
      </div>
      
    </div>
  )
}

export default Header