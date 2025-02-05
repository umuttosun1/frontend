import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../Firebase";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = response.user;
      if (user) {
        toast.success("Kullanici olusturuldu");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="auth">
      <h3 className="auth-header">Giris Yap / Kaydol</h3>
      <div className="input-div">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email adres"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="Sifre"
        />
      </div>
      <div>
        <button className="btn-google">
          <FaGoogle style={{ marginTop: "3px" }} />
          Google ile Giris
        </button>
        <button className="btn-login">Giris Yap</button>
        <button onClick={register} className="btn-register">
          Kayit ol
        </button>
      </div>
    </div>
  );
}

export default Auth;
