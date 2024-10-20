import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-indigo-900 text-white py-5'>
        <div className="logo">
            <span className='font-bold text-3xl mx-8'>iTask</span>
        </div>
      <ul className="flex gap-20 mx-11">
        <li className='cursor-pointer hover:font-bold transition-all text-3xl'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all text-3xl'>Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar