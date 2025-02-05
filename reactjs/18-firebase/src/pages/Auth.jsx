import React from "react";

function Auth() {
  return (
    <div className="auth">
      <h3 className="auth-header">Giris Yap / Kaydol</h3>
      <div className="input-div">
        <input type="text" placeholder="Email adres" />
        <input type="text" placeholder="Sifre" />
      </div>
      <div>
        <button className="btn-login">Giris Yap</button>
        <button className="btn-register">Kayit ol</button>
      </div>
    </div>
  );
}

export default Auth;
