import "./assets/scss/themes.scss";
import Layout from "./layouts";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart"
import History from "./pages/History"
import Product from "./pages/Product"
import User from "./pages/User"

const App = () => {
  return (
    <Routes>
      <Route>
        
      </Route>
  
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="cart" element={<Cart />} />
    <Route path="history" element={<History />} />
    <Route path="announce" element={<History />} /> 
    <Route path="product" element={<Product />} />
    <Route path="user" element={<User />} />
  </Route>
</Routes>
  );
};

export default App;
