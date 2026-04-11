import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import Index from './pages/IndexPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from "./pages/Products";
import 'flowbite';
import DetailProductPage from "./pages/detailProductPage"
import { Provider } from "react-redux";
import store from "./redux/store";
const router = createBrowserRouter([
  {
    path:"/",
    element:<Index />,
    errorElement:<><h1>sorry</h1></>
  },
  {
    path:"/detailProduct/:id",
    element:<DetailProductPage />
  },
  {
    path:"/login",
    element:<Login />
  },
  {
    path:"/register",
    element:<Register />
  },
  {
    path:"/products",
    element:<Products />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>,
)
