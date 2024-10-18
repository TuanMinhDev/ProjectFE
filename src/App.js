import "./assets/scss/themes.scss";
import Layout from "./layouts";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart"
import History from "./pages/History"
import Product from "./pages/Product"
import User from "./pages/User"
import Announce from "./pages/Announce"
import Welcome from "./login";
import Login from "./login/Login";
import Register from "./login/Register";
const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Welcome/>}>
        <Route index element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
      </Route>
  
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="cart" element={<Cart />} />
    <Route path="history" element={<History />} />
    <Route path="announce" element={<Announce />} /> 
    <Route path="product" element={<Product />} />
    <Route path="user" element={<User />} />
  </Route>
</Routes>
  );
};

export default App;
