import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Pricing from "./pages/Pricing";
import Unauthorized from "./pages/Unauthorized";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>This is a host app</h1>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/pricing")}>Pricing</button>
      <button onClick={() => navigate("/auth/login")}>Login</button>
      <button onClick={() => navigate("/auth/logout")}>Logout</button>
      <button onClick={() => navigate("/products")}>Products</button>
      <button onClick={() => navigate("/products/:123")}>
        product details
      </button>
      <button onClick={() => navigate("/unauthorized")}>Unauthorized</button>
      <button onClick={() => navigate("/sdf")}>Page not Found</button>
      <hr />

      <Routes>
        {/* home routes */}
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />

        {/* auth routes */}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/logout" element={<Logout />} />

        {/* product routes */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />

        {/* common routes */}
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
