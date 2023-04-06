
import './Footer.css';
import emailpic from '../../assets/email.png'
import mobile from '../../assets/mobile.png'
import { useState,useEffect } from 'react';
import { db } from '../../config/firebase';
import { getDocs,collection, doc } from 'firebase/firestore';

function Footer() {
    const [formData,setForm] =useState({name:'',email:'',message:''});
    const [isFormsubmitted,setIsFromSubmitted]=useState(false);
    const [loadding , setloading]=useState(false);
    const {name ,email,message} = formData;

    const [contactings,setContactings] = useState([]);
    const  contactcollection=collection(db,"Contact");

    useEffect(()=>{
        const getContacts = async()=>{
         try{
          const data = await getDocs(contactcollection);
          const filteredData=data.docs.map((doc)=>({...doc.data(),id:data.id}));
          setContactings(filteredData);
         }catch(error){
          console.error(error);
         }
        }
        getContacts();
     },[])

    const handleChangeInput=(e)=>{
        const {name,value}=e.target;

        setForm({...formData,[name]:value});
    }

    const handleSubmit=()=>{
        setloading(true);
        const Contact={
            _type:'contact',
            name:formData.name,
            email:formData.email,
            message:formData.message,
        }
    }

  return (
    <div  id='contact' className='footer-container'>
        <h1>Contact Me</h1>
       <div className='footer-cards'>

       {contactings.map((contact)=>(
            <div className='footer-card'>
            <img src={contact.image} width={100} height={100}/>
            <a href={`${contact.method}:${contact.link}`} className='p-text'>{contact.link}</a>
         </div>
           ))}
               
       </div>


    <div className='footer-form'>

        
        <div className='footer-inputs'>
           <input className='p-text' type="email" placeholder='Your email' value={email} name="email" onChange={handleChangeInput}/>
        </div>
        <div className='textdiv'>
            <textarea
            className='para'
            placeholder='your Message'
            value={message}
            name={message}
            onChange={handleChangeInput}
            rows={4}
            />
        </div>
        <button type='button' className='formbtn'onClick={handleSubmit}>{loadding ? 'Sending...': 'Send'}</button>

    </div>

    </div>
  )
}

export default Footer