import React from "react";
import Header from "./Component/Header";
import { Route, Routes, Router } from "react-router-dom";
import Cart from "./Component/Cart";
import Product from "./Component/Product";
import Footer from "./Component/Footer";

const App = () => {
  console.log(`App`);
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Product />} />;
        <Route path="/cart" element={<Cart />} />;
      </Routes>
      <Footer />
    </>
  );
};

export default App;
