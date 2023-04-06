import React from 'react'
import './About.css';
import{ motion} from 'framer-motion'
import { useState,useEffect } from 'react';
import dm from '../../assets/1.png'
import { db } from '../../config/firebase';
import { getDocs,collection, doc } from 'firebase/firestore';

function About() {

  const [paragraph,setParagraph] = useState([]);
  const  aboutMecollection=collection(db,"About_Me");

   useEffect(()=>{
      const getParagraph = async()=>{
       try{
        const data = await getDocs(aboutMecollection);
        const filteredData=data.docs.map((doc)=>({...doc.data(),id:data.id}));
        setParagraph(filteredData);
       }catch(error){
        console.error(error);
       }
      }
      getParagraph();
   },[])

  return (
    <div  id='about' className='About-container'>
       <h1 className='About-header' >About Me</h1>
        <div className='About-wrapper'>
        <img src={dm} height={200}/>
        <div className='paragraph'>
           {paragraph.map((para)=>(
            <p>{para.paragraph}</p>
           ))}
        </div>

       </div>


    </div>
  )
}

export default About