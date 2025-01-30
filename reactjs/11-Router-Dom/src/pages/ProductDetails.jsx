import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import Urun from "../component/Urun";

function ProductDetails() {
  // useparams urlde girilen degiskeni yakalamak icin kullanilir

  const { id } = useParams();

  return (
    <div>
      <h1>Product Details</h1>
      <hr />
      {products &&
        products.map((product) => {
          if (product.id == id) {
            return <Urun product={product} />;
          }
        })}
    </div>
  );
}

export default ProductDetails;
