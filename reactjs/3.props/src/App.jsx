import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Product from "./Product";
import Container from "./container";

function App() {
  return (
    // <div>
    //   <Product productName="Ayakkabi" price={3200} />
    //   <hr />
    //   <Product productName="Pantolon" price={900} />
    // </div>
    <div>
      <Container>
        <Product productName="telefon " price={20500} />
        <hr />
        <Product productName="pc " price={15000} />
      </Container>
    </div>
  );
}

export default App;
