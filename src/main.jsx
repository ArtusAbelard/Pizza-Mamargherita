import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Details from './assets/Compoments/Details.jsx'

import { createBrowserRouter , RouterProvider , Link } from 'react-router-dom'



const router = createBrowserRouter([
  {
    path: '/Home',
    element: 
      <App></App>                                                                                                                                                                                                                                                                  
  },
  {
    path: '/Details/:id',
    element: 
     <Details></Details>                                                                                                                                                                                                                                                                 
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
