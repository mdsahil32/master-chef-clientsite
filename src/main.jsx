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
import DetailLayout from './DetailsLayout/DetailLayout';
import ChefDetail from './DetailsLayout/ChefDetail';
import Login from './Login/Login/Login';
import Register from './Login/Register/Register';
import AuthProvider from './Providers/AuthProvider';
import PrivateRoute from './PrivateRoutes/PrivateRoute';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Navigate to='/country/0'></Navigate>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: 'country',
    element: <CountryLayout></CountryLayout>,
    children: [
      {
        path: ':id',
        element: <CountryChefs></CountryChefs>,
        loader: ({ params }) => fetch(`http://localhost:5000/countries/${params.id}`)
      }
    ]
  },
  {
    path: 'chefs',
    element: <DetailLayout></DetailLayout>,
    children: [
      {
        path: ':id',
        element: <PrivateRoute><ChefDetail></ChefDetail></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/chefs/${params.id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
