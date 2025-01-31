import React, { useState } from "react";
import "../css/Header.css";
import { BsFillBasket2Fill } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";
import { CiLight } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Header() {
  const [theme, setTheme] = useState(false);

  const navigate = useNavigate();
  const changeTheme = () => {
    const root = document.getElementById("root");
    setTheme(!theme);
    if (!theme) {
      root.style.backgroundColor = "rgba(0, 0, 0, 0.86)";
      root.style.color = "white";
    } else {
      root.style.backgroundColor = "white";
      root.style.color = "black";
    }
    setTheme(!theme);
  };
  return (
    <div className="header">
      <div className="flex-row">
        <img
          onClick={() => navigate("/")}
          className="logo"
          src="./src/image/logo.png"
          alt=""
        />
        <p className="logo-text">Nba-Commerce</p>
      </div>
      <div className="flex-row">
        <input
          className={`input-${theme}`}
          type="text"
          placeholder="Search Something"
        />
        <div>
          <IoMdSearch className="icons" />
          {theme ? (
            <CiLight className="icons" onClick={changeTheme} />
          ) : (
            <FaRegMoon className="icons" onClick={changeTheme} />
          )}
          <BsFillBasket2Fill className="icons" />
        </div>
      </div>
    </div>
  );
}

export default Header;
