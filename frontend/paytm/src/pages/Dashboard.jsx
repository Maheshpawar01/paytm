import React from 'react'
import Appbar from '../components/Appbar'
import Balance from '../components/Balance'
import Users from '../components/Users'
import Navbar from '../components/Navbar'
function Dashboard() {
  return (
    <div className='w-[95%] mx-auto'>
        <Navbar/>
        <Appbar/>
        <div>
            <Balance value={"10,000"}/>
            <Users/>
        </div>
    </div>
  )
}

export default Dashboard