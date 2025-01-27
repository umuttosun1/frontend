import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let a = 15;
  const firstname = "umut";

  let vize1 = 60;
  let vize2 = 90;
  let isimler = ["umut", "tosun", "emrah"];

  return (
    <div>
      <p>Ortalama : {(vize1 + vize2) / 2}</p>
      {(vize1 + vize2) / 2 >= 50 ? <p> Dersten gectin</p> : <p>Kaldin bra</p>}
      {isimler.map((isim, index) => (
        <div
          style={{
            backgroundColor: "pink",
            border: "1px solid black",
          }}
          key={index}
        >
          {isim}
        </div>
      ))}
    </div>
  );
}

export default App;
