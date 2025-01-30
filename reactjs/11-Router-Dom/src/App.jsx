import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./component/Header";
import Company from "./pages/CompanyAbout";
import Worker from "./pages/WorkerAbout";
import ProductDetails from "./pages/ProductDetails";

function App() {
  //Aboutun altindaki childrenlari render etmek icin outlet componenti kullanilir
  // Outlet, parentin sayfasinin sonunda tanimlanir
  //Childrenlerin basina asla "/"" koyma ayri bir sayfa olarak anlar
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="company" element={<Company />} />
          <Route path="worker" element={<Worker />} />
        </Route>
        <Route path="/product" element={<Products />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
    //   <Route path="/product-details/:id" element={<ProductDetails />} />  Buradaki :id bir degisken oldugunu temsil ediyor
  );
}

export default App;
