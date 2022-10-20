import axios from 'axios'
import React,{useState} from 'react'
import Navbar from '../components/Navbar/Navbar'
import Form from '../components/Form/Form'
import { useNavigate } from 'react-router-dom'
export default function AddUser() {
    const navigate=useNavigate()
    const [userDetails,setUserDetails]=useState({name:'',email:'',cell:'',age:0})
    const [message,setMessage]=useState('')
    const handleInput=(e)=>{
        let key=e.target.name;
        let value=e.target.value;
        setUserDetails({
            ...userDetails,
            [key]:value
        })
    }
   
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(userDetails.email.length<1){
           setMessage('Email should be non-empty.')
           return
        }
        if(!isValidEmail(userDetails.email)){
            setMessage("Email must be a valid email.")
            return
        }
        if(userDetails.age<18 || userDetails.age>60){
            setMessage("Age must be between 18-60 years.")
            return
        }
        setMessage("")

        const result=await axios.post('/adduser',{...userDetails})
        if(!result.data.error && result.data.message==="success"){
             setMessage("Successfully Added in database.")
             setTimeout(()=>{
                navigate('/viewusers')
             },1000)          
           return
        }
        else{
          setMessage(result.data.message)
        }
    }
    return (

<div>
    <Navbar/>
    <Form  handleInput={handleInput} handleSubmit={handleSubmit} message={message}/>

    </div>
  )
}
