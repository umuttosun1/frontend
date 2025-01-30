import React from "react";
import Urun from "../component/Urun";
import { products } from "../data/products";

function Products() {
  return (
    <div>
      {products &&
        products.map((product) => <Urun key={product.id} product={product} />)}
    </div>
  );
}

export default Products;
