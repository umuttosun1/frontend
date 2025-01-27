import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");

  useEffect(() => {
    console.log("her zaman calisir");
  });

  useEffect(() => {
    console.log("ilk render edildiginde calisir");
  }, []);

  useEffect(() => {
    console.log(
      "ilk render edildiginde ve FIRSTNAME state degeri degistiginde calisir"
    );
  }, [firstName]);

  useEffect(() => {
    console.log(
      "ilk render edildiginde ve LASTNAME state degeri degistiginde calisir"
    );
  }, [lastName]);

  // useEffect(() => {
  //   console.log(
  //     "ilk render edildiginde ve FIRSTNAME veya LASTNAME  state degerleri degistiginde calisir"
  //   );
  // }, [firstName,lastName]);

  return (
    <div>
      {" "}
      <div>
        <button onClick={() => setFirstName("Umut")}>Adi degistir</button>
      </div>
      <div>
        <button onClick={() => setlastName("TOSUN")}>SoyAdi degistir</button>
      </div>
    </div>
  );
}

export default App;
