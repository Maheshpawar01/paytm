import React from 'react'
import Appbar from '../components/Appbar'
import Balance from '../components/Balance'
import Users from '../components/Users'
import Navbar from '../components/Navbar'
function Dashboard() {
  return (
    <div className='w-[95%] mx-auto flex'>
      <div className='w-[5%] border-r border-gray-300'>
        <Navbar />
      </div>
      <hr />
        <div className='w-[90%] ml-4'>
        <Appbar/>
            <Balance value={"10,000"}/>
            <Users/>
        </div>
    </div>
  )
}

export default Dashboard