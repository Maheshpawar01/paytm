import React from 'react'
import { FcSimCardChip } from "react-icons/fc";
import { RiMastercardFill } from "react-icons/ri";


function Balance({value}) {
  return (
    <div className='p-6 bg-gradient-to-r from-blue-400  to-cyan-400 rounded-lg shadow-lg'>
      <div>
        <h1 className='text-white text-lg font-semibold'>Balance</h1>
        <h1 className='text-white text-2xl font-bold'>₹10000</h1>
      </div>

      <div className='mt-2 mb-5'>
      <FcSimCardChip size={'30px'} />
      </div>

      <div className='flex justify-between items-center'>
        <h1 className='text-white text-sm font-medium'>User Name</h1>
        <RiMastercardFill size={'30px'} className='text-white' />

      </div>

    </div>

    // <div className='flex'>
    //     <div className='font-bold text-lg'>
    //         Your Balance
    //     </div>
    //     <div className='font-semibold ml-4 text-lg'>
    //         Rs {value}
    //     </div>
    // </div>
  )
}

export default Balance