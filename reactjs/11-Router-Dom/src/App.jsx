import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./component/Header";
import Company from "./pages/CompanyAbout";
import Worker from "./pages/WorkerAbout";
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
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
