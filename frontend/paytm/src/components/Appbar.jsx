import React from 'react'

function Appbar() {
  return (
        <div className='shadow h-14 flex justify-between'>
            <div className='font-bold flex justify-center h-full mt-3'>
                Hi, Welcome back <span className='font-bold text-blue-500'>&nbsp;'Name'</span>
            </div>
            <div className='flex'>
                <div className="flex flex-col justify-center h-full mr-4">
                    User name
                </div>
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className='flex flex-col justify-center h-full text-xl'>
                        M
                    </div>
                </div>
            </div>
        </div>
    
  )
}

export default Appbar