import { useState } from 'react'
import './App.css'
import { FaClipboardList } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { IoIosPlayCircle } from "react-icons/io";

function App() {
  const [task,settask]=useState("")
  const [tasks,settasks]=useState([])
  const [ischecked,setischecked]=useState([])
  const handlecheck=(index)=>{
    setischecked(
    ischecked.map((item,i)=>{ return i===index?!item:item}))

  }
  const handleclick=()=>{
    if(task.trim()===""){
          return
    }
    else{
      settasks([...tasks,task])
      setischecked([...ischecked,false])
      settask("")
      
    }
  }
  return (
    <>
    {/* header */}
      <div className='flex justify-between md:px-10 bg-violet-500 p-4 items-center'>
          <div className='flex'><p className='font-mono text-2xl text-white'>TO-DO</p><p><FaClipboardList className='text-orange-300 mt-1 ml-2 text-2xl' />
</p></div>
         <div className='flex'> <p className='font-mono text-base border-black border-2 pt-1 px-3 text-white rounded-md hover:cursor-pointer hover:bg-violet-900'>HOME</p>
          <p className='font-mono  border-black border-2 p-1 px-2 hover:cursor-pointer  hover:bg-violet-900 text-white rounded-md ml-10'>ABOUT</p></div>
       </div>


      {/* main body */}
       
      <div className='min-h-screen flex flex-col justify-center items-center bg-stone-100  '> 
      
      
      <button id='ani1' className='bg-yellow-500 h-20 mb-10 border rounded-2xl hover:bg-white '><IoIosPlayCircle className='w-20 active:w-18 active:h-18 h-20' /></button>
       <p id='ani2' className='font-mono text-xl text-black' >MAKE YOUR DAY WORTH LIVING</p>
     
      
       </div>
       










    </>
  )
}

export default App
