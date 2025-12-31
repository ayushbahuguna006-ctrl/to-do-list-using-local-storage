import React from 'react'
import { FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
       {/* header */}
            <div className='flex justify-between md:px-10 bg-gradient-to-r from-purple-600 to-violet-400 p-4 items-center'>
                <div className='flex'><p className='font-mono text-2xl text-white'>TO-DO</p><p><FaClipboardList className='text-orange-300 mt-1 ml-2 text-2xl' />
      </p></div>
               <div className='flex'> <Link to="/" className='font-mono text-base border-black border-2 pt-1 px-3 text-white rounded-md hover:cursor-pointer hover:bg-violet-900'> HOME</Link>
                <Link to="/about" className='font-mono  border-black border-2 p-1 px-2 hover:cursor-pointer  hover:bg-violet-900 text-white rounded-md ml-10'> ABOUT</Link></div>
             </div>
    </div>
  )
}

export default Navbar
