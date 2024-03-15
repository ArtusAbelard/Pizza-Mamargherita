import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Details from './assets/Compoments/Details.jsx'
import store from './App/Store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter , RouterProvider  } from 'react-router-dom'
import Panier from './assets/Compoments/Panier.jsx'

const router = createBrowserRouter([
  {
    path: '/Pizza-Mamargherita',
    element: 
      <App></App>                                                                                                                                                                                                                                                                  
  },
  {
    path: '/Details/:id',
    element: 
     <Details></Details>                                                                                                                                                                                                                                                                 
  },
  {
    path: '/Panier',
    element: 
     <Panier></Panier>                                                                                                                                                                                                                                                              
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
