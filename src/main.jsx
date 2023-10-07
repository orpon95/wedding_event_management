import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Gallery from './components/Gallery/Gallery.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path: "/About",
        element: <About></About>
      },
      {
        path : "/Gallery",
        element:<Gallery></Gallery>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
