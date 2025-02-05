import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../Firebase";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const navigate = useNavigate();
  const logout = async () => {
    toast.success("Cikis yapiliyor");
    setTimeout(() => {
      signOut(auth);
      navigate("/auth");
    }, 2000);
  };
  return (
    <div className="navbar">
      <div className="navbar-left"> FIREBASE</div>
      <div onClick={logout} className="navbar-right">
        Cikis Yap
      </div>
    </div>
  );
}

export default Navbar;
