import React, { useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios'

function SendMoney() {
  const [searchParams] = useSearchParams()
  const id = searchParams.get("id")
  const name= searchParams.get("name")
  const [amount, setAmount] = useState("")
  const navigate = useNavigate()
  return (
    <div className='flex justify-center h-screen bg-gray-100'>
      <div className="h-full flex flex-col justify-center">
        <div className='border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg'>
          <div className='flex flex-col space-y-1.5 p-6'>
            <h2 className="text-3xl font-bold text-center">Send Money</h2>
          </div>

          <div className="p-6">
            <div className='flex items-center space-x-4'>
              <div className='w-12 h-12 rounded-full bg-green-500 flex items-center justify-center'>
                <span className='text-2xl text-white'>{name[0].toUpperCase()}</span></div>
              <h3 className='text-2xl font-semibold'>{name.toUpperCase()}</h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70' for="amount">Amount(in Rs)</label>
                <input 
                onChange={e=>{
                  setAmount(e.target.value)
                }}
                type="Number" 
                id='amount'
                className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm'
                placeholder='Enter amount'
                 />
              </div>
              <button
              onClick={()=>{
                  axios.post("https://paytm-backend-g7eh.onrender.com/api/v1/account/transfer",{
                  // axios.post("http://localhost:3000/api/v1/account/transfer",{
                    to:id,
                    amount
                  },{
                    headers:{
                      Authorization: 'Bearer '+ localStorage.getItem("token")
                    }
                  }
                  )
                  // Navigate back to the dashboard
                        navigate("/dashboard")
                  // Show alert
                    alert("Transaction Complete");

    }}
               className='justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-10 py-2 w-full bg-green-500 text-white'>Initiate Transfer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SendMoney