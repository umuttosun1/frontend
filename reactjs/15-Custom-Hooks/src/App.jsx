import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useCounter from "./hooks/useCounter";
import { useState } from "react";
import useToggle from "./hooks/useToggle";
import useCopyToClipboard from "./hooks/useCopyToClipboard";

function App() {
  const { count, decrease, increase } = useCounter();

  const { open, change } = useToggle();

  const [copied, copy] = useCopyToClipboard("De'Aaron Fox");
  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={increase}>arttir</button>
        <button onClick={decrease}>azalt</button>
      </div>
      <hr />
      <hr />
      <hr />
      <div>
        {open && (
          <div
            style={{
              backgroundColor: "cadetblue",
              width: "100px",
              height: "100px",
            }}
          >
            box
          </div>
        )}
        <button onClick={change}>{open ? "gizle" : "goster"}</button>
      </div>
      <hr />
      <hr />
      <hr />
      <div>
        <button onClick={copy}>kopyala</button>
      </div>
    </div>
  );
}

export default App;
