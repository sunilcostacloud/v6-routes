import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import PersonsList from "./pages/PersonsList";
import PersonDetails from "./pages/PersonDetails";

const App = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>This is a host app</h1>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/auth/login")}>Login</button>
      <button onClick={() => navigate("/auth/logout")}>Logout</button>
      <button onClick={() => navigate("/products")}>Products</button>
      <button onClick={() => navigate("/products/:123")}>
        product details
      </button>
      <button onClick={() => navigate("/persons-list")}>Persons List</button>
      <button onClick={() => navigate("/persons-list/:456")}>
        Person details
      </button>
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/logout" element={<Logout />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/persons-list" element={<PersonsList />} />
        <Route path="/persons-list/:id" element={<PersonDetails />} />
      </Routes>
    </>
  );
};

export default App;
