import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login, { users } from "./Login";

function App() {
  console.log(users);

  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
