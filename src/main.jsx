import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
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
import ErrorPage from './components/ErrorPage/ErrorPage';
import Blog from './components/Blog/Blog';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Navigate to='/country/0'></Navigate>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
    ]
  },
  
  {
    path: 'country',
    element: <CountryLayout></CountryLayout>,
    children: [
      {
        path: ':id',
        element: <CountryChefs></CountryChefs>,
        loader: ({ params }) => fetch(`https://grand-master-chef-server-mdsahil32.vercel.app/countries/${params.id}`)
      },
    ]
  },
  {
    path: 'chefs',
    element: <DetailLayout></DetailLayout>,
    children: [
      {
        path: ':id',
        element: <PrivateRoute><ChefDetail></ChefDetail></PrivateRoute>,
        loader: ({ params }) => fetch(`https://grand-master-chef-server-mdsahil32.vercel.app/chefs/${params.id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  
)
