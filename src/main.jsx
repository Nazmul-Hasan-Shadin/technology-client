import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import { Toaster } from 'react-hot-toast';
import AuthProviders from './AuthProviders/AuthProviders'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 



    <AuthProviders>


     <RouterProvider router={router}/>
   
  

     <Toaster></Toaster>
      
    </AuthProviders>
    

     
  </React.StrictMode>,
)
