import "./App.css";
import Home from "./pages/user/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddProduct from "./pages/admin/AddProduct";
import AddShop from "./pages/admin/AddShop";
import Dashboard from "./pages/admin/Floors";
import Products from "./pages/admin/Products";
import Shops from "./pages/admin/Shops";
import UserProduct from "./pages/user/products";
import { Route, Routes } from "react-router-dom";
import AllProducts from "./pages/admin/AllProducts";
import ProductDetail from "./pages/user/ProductDetail";
import Cart from "./pages/user/Cart";
import MainHeader from "./components/header/MainHeader";
import Footer from "./sections/user/Footer";
import ConfirmOrder from "./pages/user/confirmOrder";

function App() {
  return (
    <>      
       
        <Routes>
       <Route path="/login" element={<Login />} />
       <Route path="/signup" element={<Signup />} />
       <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/shops" element={<Shops />} />
       <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/addshop" element={<AddShop />} />
        <Route path="/allProducts" element={<AllProducts />} />
        <Route path="/products" element={<Products />} />


        <Route path="/" element={<Home />} />
        <Route path="userProducts/:id" element={<UserProduct />} />     
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/confirmorder" element={<ConfirmOrder />} />
       </Routes>
        
      
       
    </>
  );
}




export default App;
