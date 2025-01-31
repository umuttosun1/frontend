import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedProduct } from "../redux/slices/ProductSlice";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import "../css/product.css";

function ProductDetails() {
  const { id } = useParams();
  const { products, selectedProduct } = useSelector((store) => store.product);

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count !== 0) setCount(count - 1);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = () => {
    products &&
      products.map((product) => {
        if (product.id == id) {
          dispatch(setSelectedProduct(product));
        }
      });
  };

  return (
    <div className="flex-row">
      <div>
        <img
          style={{
            width: "400px",
            height: "400px",
            marginTop: "100px",
            marginRight: "100px",
          }}
          src={selectedProduct.image}
          alt=""
        />
      </div>
      <div>
        <h1>{selectedProduct.title}</h1>
        <p>{selectedProduct.description}</p>
        <h3>{selectedProduct.price} $</h3>
        <div
          style={{
            alignItems: "center",
            display: "flex",
          }}
        >
          <span style={{ fontSize: "30px" }}>{count}</span>
          <CiSquarePlus
            style={{
              fontSize: "40px",
              cursor: "pointer",
              marginRight: "10px",
              marginLeft: "10px",
            }}
            onClick={increment}
          />
          <CiSquareMinus
            style={{ fontSize: "40px", cursor: "pointer" }}
            onClick={decrement}
          />
        </div>
        <div>
          <button className="add-basket">Add to basket</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
