import { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';


const router=createBrowserRouter(
[{
path:"/",
element:<>
<Navbar/>
<Home/>
</>

},{
path:"/main",
element:<>
<Navbar/>
<Main/>
</>

},{
path:"/about",
element:<>
<Navbar/>
<About/>
</>

}]





)

function App() {
  
  return (
    <>
   
     <RouterProvider router={router}/>



    </>
  )
}

export default App
