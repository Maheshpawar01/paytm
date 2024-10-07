import React from 'react'

function InputBox({label, placeholder}) {
  return (
    <div>
        <div className='text-sm font-medium text-left py-2'>
            {label}
        </div>
        <input type="text" placeholder={placeholder} className='w-full px-2 py-1 border rounded border-slate-400' />
    </div>
  )
}


export default InputBox