import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
import './index.css'
import { createBrowserRouter,RouterProvider, } from "react-router-dom";
import HomePage from './Pages/HomePage.tsx';
import ClubPage from './Pages/ClubPage.tsx';
import ClubDetail from './Pages/ClubDetail.tsx';
import Vpage from './Pages/Vpage.tsx';
import Header from './navegacion/Header.tsx';
import AllClubPages from './Pages/AllClubPages.tsx';
import LoginPage from './Pages/LoginPage.tsx'
import RegisterPage from './Pages/RegisterPage.tsx'
import ProfilePage from './Pages/ProfilesPage.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <div><HomePage/></div>,
  },
  {
    path: "/clubs",
    element: <div><ClubPage/></div>,
  },
  {
    path: "/clubs:id",
    element: <div><ClubDetail/></div>,
  },
  {
    path: "/games",
    element: <div><Vpage/></div>,
  },
  {
    path: "/he",
    element: <div><Header/></div>,
  },
  {
    path: "/fire",
    element: <div><AllClubPages nombre={undefined || ""} descripcion={undefined || ""} videojuegos={undefined || []}/></div>,
  },
  {
    path: "/Login",
    element: <div><LoginPage/></div>,
  },
  {
    path: "/Register",
    element: <div><RegisterPage /></div>,
  },
  {
    path: "/Profile",
    element: <div><ProfilePage /></div>,
  },
  
 ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} /> 
  </React.StrictMode>,
)