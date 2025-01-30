import React from "react";
import { useNavigate } from "react-router-dom";

function Urun({ product }) {
  const { id, name, price } = product;
  //usenavigate urle yonlendirmek icin kullanilarn bir hooksdur
  const navigate = useNavigate();
  return (
    <div style={{ margin: "15px", backgroundColor: "lavenderblush" }}>
      <div>Product Details</div>
      <h3>Name : {name}</h3>
      <h3>Price : {price}</h3>
      <button onClick={() => navigate("/product-details/" + id)}>
        Show Details
      </button>
      <hr />
    </div>
  );
}

export default Urun;
