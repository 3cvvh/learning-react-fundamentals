import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import HomePage from './pages/HomePage';
import "./style.css";
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
const route = createBrowserRouter([
  {
    path:"/",
    element:<HomePage />
  },
  {
    path:"/register",
    element:<RegisterPage />
  },
  {
    path:"/login",
    element:<LoginPage />
  },
  {
    path:"/products",
    element:<ProductPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>,
)
