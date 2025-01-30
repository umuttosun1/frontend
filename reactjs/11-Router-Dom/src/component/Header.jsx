import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div style={{ marginLeft: "10px", color: "aliceblue" }}>UYGULAMA</div>
      <div>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/product">
          Product
        </Link>
        <Link className="link" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Header;
