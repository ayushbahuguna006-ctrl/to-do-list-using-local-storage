import React from 'react';
import { IoIosPlayCircle } from "react-icons/io";
import { Link } from "react-router-dom";



function Home() {
  return (
    <div>
      


      {/* main body */}
       
      <div className='min-h-screen flex flex-col justify-center items-center bg-stone-100  '> 
      
      
      <button id='ani1' className='bg-yellow-500 h-20 mb-10 border rounded-2xl hover:bg-white '><Link to="/main"><IoIosPlayCircle          className='w-20 active:w-18 active:h-18 h-20' /></Link></button> 
       <p id='ani2' className='font-mono text-xl text-black' >MAKE YOUR DAY WORTH LIVING</p>
     
      
       </div>
       
    </div>
  )
}

export default Home
