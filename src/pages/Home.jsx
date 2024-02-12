import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>This is home page</h1>
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
    </>
  );
};

export default Home;
