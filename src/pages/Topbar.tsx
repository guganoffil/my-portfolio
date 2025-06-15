import React from 'react'
import GSLOGO from "../assets/images/GS_logo.png";
const Topbar:React.FC = () => {
  return (
    <nav className='w-full text-white text-lg font-semibold flex justify-between items-center p-3' >
    <div><img src={GSLOGO} alt="" className='h-10 w-10' /></div>
    <div className='flex space-x-5'>
      <p className='cursor-pointer px-3 py-1'></p>
      <p className='cursor-pointer px-3 py-1'></p>
      <button type="button" className='bg-white rounded-full text-black px-3 py-1 cursor-pointer active:bg-gray-300'  onClick={() => window.location.href = 'tel:+918098707177'}>Contact</button>
    </div>
    </nav>
  )
}

export default Topbar
