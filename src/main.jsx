import React from 'react'
import ReactDOM from 'react-dom/client'
 
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LayOut from './LayOut/LayOut.jsx';
import Home from './Pages/HomePage/Home/Home.jsx';
 const router = createBrowserRouter([
  {
    path: "/",
     element: <LayOut></LayOut>,
     children: [
       {
         path: "/",
         element : <Home></Home>
      }
    ]
   },
   
   
]);
<RouterProvider router={router} />
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container max-w-full '>
      <RouterProvider router={router} />
   </div>
  </React.StrictMode>,
)
