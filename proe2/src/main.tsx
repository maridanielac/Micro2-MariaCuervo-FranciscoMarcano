import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter,RouterProvider, } from "react-router-dom";
import HomePage from './Pages/HomePage.tsx';
import ClubPage from './Pages/ClubPage.tsx';
import ClubDetail from './Pages/ClubDetail.tsx';
import Vpage from './Pages/Vpage.tsx';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div><HomePage/></div>,
//   },
//   {
//     path: "/clubs",
//     element: <div><ClubPage/></div>,
//   },
//   {
//     path: "/clubs:id",
//     element: <div><ClubDetail/></div>,
//   },
//   {
//     path: "/games",
//     element: <div><Vpage/></div>,
//   },
  
// ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>,
)
