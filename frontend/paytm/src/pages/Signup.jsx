import React, { useState } from 'react'
import Heading from '../components/Heading' 
import SubHeading from '../components/SubHeading';
import InputBox from '../components/InputBox' 
import Button from '../components/Button' 
import BottomWarning from '../components/BottomWarning' 
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label="Sign up"/>
        <SubHeading label="Enter your information to create an account"/>
        <InputBox onChange={e=>{
          setFirstName(e.target.value);
        }} label={"First Name"} placeholder="John"/>
        <InputBox onChange={e=>{
          setLastName(e.target.value);
        }}  label={"Last Name"} placeholder="Doe"/>
        <InputBox onChange={e=>{
          setUsername(e.target.value);
        }}  label={"Email"} placeholder="john@example.com"/>
        <InputBox onChange={(e)=>{
          setPassword(e.target.value);
        }}  label={"Password"} placeholder="12345"/>
        <div className='pt-4'>
        <Button onClick={async()=>{
         const response = await axios.post("https://paytm-backend-g7eh.onrender.com/api/v1/user/signup",{
        //  const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
            username,
            firstName,
            lastName,
            password,
          });
          localStorage.setItem("token", response.data.token)
          navigate("/dashboard")
          
        }} label={"Signup"}/>
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"signin"} to={"/signin"} />
    </div>
        </div>
    </div>
   
  )
}

export default Signup