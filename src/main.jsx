import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {

  RouterProvider
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <div className='container mx-auto bg-slate-300 items-center '>
         <RouterProvider router={router} />  
      </div>
         
    
   
  </React.StrictMode>,
)
