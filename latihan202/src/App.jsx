import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/loginPage";
import Product from "./pages/product";
import  ProtectedRoute  from "./hooks/protectedRoute";
import CartPage from "./pages/CartPage";
import {Provider} from "react-redux";
import storeRedux from "./redux/store";
const App = () => {
  return (
      <Provider store={storeRedux}>
    <BrowserRouter>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/product" element={<Product />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
    </BrowserRouter>
      </Provider>
  )
}

export default App