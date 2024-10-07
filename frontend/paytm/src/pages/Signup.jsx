import React from 'react'
import Heading from '../components/Heading' 
import SubHeading from '../components/SubHeading';
import InputBox from '../components/InputBox' 
import Button from '../components/Button' 
import BottomWarning from '../components/BottomWarning' 

function Signup() {
  return (
<div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label="Sign up"/>
        <SubHeading label="Enter your information to create an account"/>
        <InputBox label={"First Name"} placeholder="John"/>
        <InputBox label={"Last Name"} placeholder="Doe"/>
        <InputBox label={"Email"} placeholder="john@example.com"/>
        <InputBox label={"Password"} placeholder="12345"/>
        <div className='pt-4'>
        <Button label={"Signup"}/>
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"signin"} to={"/signin"} />
    </div>
        </div>
    </div>
   
  )
}

export default Signup