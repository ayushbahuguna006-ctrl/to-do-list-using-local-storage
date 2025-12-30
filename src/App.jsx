import { useState } from 'react'
import './App.css'
import { FaClipboardList } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

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
       
      <div className='flex justify-center '> <div className='border-black border backdrop-blur-md min-h-[60vh]  w-[90%] rounded-lg md:w-1/2 lg:w-1/3  mt-10 bg-purple-300 '>
      {/*add button*/}
      <div className='p-10 flex md:justify-evenly justify-between'><input type="text" value={task} onChange={(e)=>settask(e.target.value)} className='border border-black w-45 md:w-1/2 p-1 rounded-lg font-semibold' /><button className='border-2 bg-blue-200
       p-1 rounded-lg ' onClick={handleclick} ><IoMdAdd className='w-8'/></button></div>
       <div>{tasks.map((item,index)=>{return  <label><p style={{textDecoration:ischecked[index]?"line-through":""}} className="px-10 font-medium rounded-lg text-lg text-black text-start mt-2"> <input type="checkbox" className='accent-white' onClick={()=>handlecheck(index)}/> {item.toUpperCase()}</p></label>})}</div>
         {/* delete button */}





       </div>
       </div>










    </>
  )
}

export default App
