import React from "react";

export const users = [
  {
    username: "umutsn_",
    password: "umut1234",
  },
  {
    username: "ecetsn",
    password: "ece1234",
  },
];

function Login() {
  // fragment <> </>
  return (
    <div>
      <div>
        <p>Kullanici adiniz</p>
        <input type="text" />
      </div>
      <div>
        <p>Sifreniz</p>
        <input type="text" />
      </div>
      <button>Giris yap</button>
    </div>
  );
}

export default Login;
