<div className='border-black border backdrop-blur-md h-100  w-[90%] rounded-lg md:w-1/2 lg:w-1/3 mt-10  bg-purple-300 '>
      {/*add button*/}
      <div className='p-10 flex md:justify-evenly justify-between '><input type="text" value={task} onChange={(e)=>settask(e.target.value)} className='outline-none border border-black w-45 md:w-1/2 p-1 rounded-lg font-semibold' /><button className='border-2 bg-blue-400
       p-1 rounded-lg ' onClick={handleclick} ><IoMdAdd className='w-8'/></button></div>
       <div>{tasks.map((item,index)=>{return  <p style={{textDecoration:ischecked[index]?"line-through":""}} className="px-10 font-medium mt-2 text-base text-black text-start border-y-1 border-white p-2"><label> <input type="checkbox"  onClick={()=>handlecheck(index)}/> {item.toUpperCase()}</label></p>})}</div>
         {/* delete button */}





       </div>