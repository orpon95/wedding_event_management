import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Card from './components/card/card.jsx';
import Banner from './components/Banner/Banner.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import Details from './components/Details/Details.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import Error from './components/Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/About",
        element: <PrivateRoute><About></About></PrivateRoute>
      },
      {
        path: "/Gallery",
        element: <PrivateRoute><Gallery></Gallery></PrivateRoute>,
      },
      {
        path: "/Card",
        element: <Card></Card>,
      },
      {
        path: "/Banner",
        element: <Banner></Banner>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/Register",
        element: <Register></Register>,
      },
      {
        path: "/Details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ()=>fetch("/data.json")
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
