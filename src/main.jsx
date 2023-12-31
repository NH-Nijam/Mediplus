import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout.jsx/Layout';
import Home from './components/Pages/Homes/Home';
import Login from './components/Pages/Login';
import BookAppoin from './components/Pages/BookAppoin';

const router =createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/SignUp',
        element:<Login />
      },
      {
        path:'/bookappoin',
        element:<BookAppoin/>
      }
    ]
  }
])

export  const Authcontext = createContext()

const App = ({children})=>{
  const [auth, setAuth] = useState({})
 

  return <Authcontext.Provider value={[auth, setAuth]}>
    {
      children
    }
  </Authcontext.Provider>
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App>
      <RouterProvider router={router}/>
  </App>,
)

