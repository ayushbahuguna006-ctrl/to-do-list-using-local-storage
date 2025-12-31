import React, { useEffect } from 'react';
import { useState } from 'react';
import { IoMdAdd } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

function Main() {
     const [task,settask]=useState("")
      const [tasks,settasks]=useState([])
      const [ischecked,setischecked]=useState([])
      const handlecheck=(index)=>{
       const updatedchecks= ischecked.map((item,i)=>{ return i===index?!item:item})
       setischecked(updatedchecks);
       localStorage.setItem("checks",JSON.stringify(updatedchecks))
    
      }
      useEffect(()=>{
        const store=localStorage.getItem("list")
        const storecheck=localStorage.getItem("checks")
        if(store){
                settasks(JSON.parse(store))
        }
        if(storecheck){
            setischecked(JSON.parse(storecheck))
        }
      },[])
      const handleadd=()=>{
        if(task.trim()===""){
              return}
        for(let i=0;i<tasks.length;i++){if(tasks[i].toLowerCase().trim()===task.toLowerCase().trim()){alert("TASK IS BEING REPEATED");return;}}
          

          const updatedtask=[...tasks,task]
          localStorage.setItem("list",JSON.stringify(updatedtask))
          settasks([...tasks,task])
         const updatedChecks = [...ischecked, false];
setischecked(updatedChecks);
localStorage.setItem("checks", JSON.stringify(updatedChecks));
          settask("")
     }
     const handledelete = (index) => {
  const updatedTasks = tasks.filter((item, i) => i !== index);
  const updatedChecks = ischecked.filter((item, i) => i !== index);

  settasks(updatedTasks);
  setischecked(updatedChecks);

  localStorage.setItem("list", JSON.stringify(updatedTasks));
  localStorage.setItem("checks", JSON.stringify(updatedChecks));
};
  return (
    <div className='flex items-center min-h-screen justify-center bg-stone-200'>
      <div className='border-black border backdrop-blur-md h-100  w-[90%] rounded-lg md:w-1/2 lg:w-1/3 mt-10  bg-purple-300 '>
      {/*add button*/}
      <div className='p-10 flex md:justify-around justify-between '><input type="text" placeholder='TASK' value={task} onChange={(e)=>settask(e.target.value)} className='outline-none  hover:border-blue-500 hover:w-55 transition-all duration-100 border border-black w-45 md:w-1/2 p-1 pl-4 rounded-lg font-semibold' /><button className='border-2 bg-blue-400
       p-1 rounded-lg' onClick={handleadd} ><IoMdAdd className='w-8 active:h-3 w-3'/></button></div>
       <div>{tasks.map((item,index)=>{return  <p style={{textDecoration:ischecked[index]?"line-through":""}} className="px-10 flex justify-between font-mono mt-2 text-base text-black text-start border-y-1 border-white p-2"><label> <input type="checkbox"   checked={ischecked[index] || false}
  onClick={()=>handlecheck(index)}/> {item.toUpperCase()}</label>  
       
       
       {/* delete button */}
       
       <button onClick={()=>handledelete(index)}><MdDeleteForever className='mt-0.5 h-6 active:h-6 active:w-5 w-6 text-red-600 hover:text-red-800'/></button></p>})}</div>
       





       </div>
    </div>
  )
}

export default Main
