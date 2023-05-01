import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Main from './Main/Main';
import CountryLayout from './CountryLayout/CountryLayout';
import CountryChefs from './CountryChefs/CountryChefs';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element: <Navigate to='/countries/0'></Navigate>
      }
    ]
  },
  {
    path:'countries',
    element: <CountryLayout></CountryLayout>,
    children:[
     {
      path:':id',
      element: <CountryChefs></CountryChefs>,
      loader:({params})=> fetch(`http://localhost:5000/countries/${params.id}`)
     }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
