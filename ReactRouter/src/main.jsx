import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import RegisterPage from './pages/RegisterPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Index from './pages/index.jsx'

const Route = createBrowserRouter([
  {
    path:"/",
    element:<Index></Index>,
    errorElement:<ErrorPage></ErrorPage>
  },
  {
    path:"/login",
    element:<LoginPage></LoginPage>
  },
  {
    path:"/register",
    element:<RegisterPage></RegisterPage>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Route} ></RouterProvider>
  </StrictMode>,
)
