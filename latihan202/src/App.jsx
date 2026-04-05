import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/loginPage";
import Product from "./pages/product";
import  ProtectedRoute  from "./hooks/protectedRoute";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/login" element={<LoginPage />}/>
      <Route element={<ProtectedRoute >
      <Route path="/product" element={<Product />} />
      </ProtectedRoute>}>
      </Route>
      <Route path="/product" element={<Product />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App