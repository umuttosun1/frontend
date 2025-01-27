import React from "react";

function Product({ productName, price }) {
  return (
    <div>
      <div>URUN BILGILERI</div>

      <div>
        <div>Isim : {productName}</div>
        <div>Fiyat : {price} $</div>
      </div>
    </div>
  );
}

export default Product;
