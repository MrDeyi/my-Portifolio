import React from 'react'
import './Skills.css';
import {motion} from 'framer-motion'

import ReactTooltip from 'react-tooltip'
import { useState,useEffect } from 'react';
import { db } from '../../config/firebase';
import { getDocs,collection, doc } from 'firebase/firestore';

function Skills() {

    const [skillings,setSkillings] = useState([]);
    const  skillscollection=collection(db,"Skills");
  
     useEffect(()=>{
        const getWork = async()=>{
         try{
          const data = await getDocs(skillscollection);
          const filteredData=data.docs.map((doc)=>({...doc.data(),id:data.id}));
          setSkillings(filteredData);
         }catch(error){
          console.error(error);
         }
        }
        getWork();
     },[])

  return (
    <div  id='skills' className='Skills-container'>
      <h1>Skills & experience with:</h1>
      <div className='skills-contant'>

      {skillings.map((skill)=>(
           <motion.div
           whileInView={{opacity:[0,1]}}
           transition={{duration:0.5}}
           className='skill'
          >
              <div className='content'>
                  <div>
                  <img src={skill.image}/>
                  </div>
                  <p>{skill.title}</p>
              </div>
  
          </motion.div>
           ))}

        

        

      </div>
    </div>
  )
}

export default Skills;