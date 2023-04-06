import React from 'react'
import './Work.css';
import amazon from '../../assets/amazon.png';
import { useState,useEffect } from 'react';
import { db } from '../../config/firebase';
import { getDocs,collection, doc } from 'firebase/firestore';
function Work() {

  const [workings,setworkings] = useState([]);
  const  workcollection=collection(db,"Work");

   useEffect(()=>{
      const getWork = async()=>{
       try{
        const data = await getDocs(workcollection);
        const filteredData=data.docs.map((doc)=>({...doc.data(),id:data.id}));
        setworkings(filteredData);
       }catch(error){
        console.error(error);
       }
      }
      getWork();
   },[])

  return (
    <div  id='work' className='work-container'>
      <h1>My Projects</h1>
      <div className='all-cards'>

      {workings.map((working)=>(
           

           <div className='work-card'>
           <img src={working.image}/>
           <div className='work-content'>
               <h2>{working.title}</h2>
               <p className='work-description'>{working.description}</p>
                <p><span className='tech-use'>Tech Use:</span>
                {working.tech}
                </p>
                <div className='work-controls'>
                  <a href={working.live}>
                  <button>
                    See Live
                   </button>
                  </a>
                   <a href={working.code}>
                   <button className='srcCode'>
                    Source Code
                   </button>
                   </a>
                   
                </div>
           </div>
         </div>


           ))}



        

       
       
       
      
   
      </div>


    </div>
  )
}

export default Work