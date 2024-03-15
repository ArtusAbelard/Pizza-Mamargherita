import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Details from './assets/Compoments/Details.jsx'
import store from './App/Store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter , RouterProvider  } from 'react-router-dom'

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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
