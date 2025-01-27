import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //

  const [firstName, setFirstname] = useState("Umut"); //string

  const [names, setNames] = useState(["ali", "enes", "cihan"]); // array

  const [userInfo, setUserInfo] = useState({
    username: "umutsn_",
    password: "1234",
  });
  const [count, setCount] = useState(0);

  const arttir = () => {
    setCount(count + 1);
  };

  const azalt = () => {
    setCount(count - 1);
  };

  console.log("component render edildi");
  const handleChange = () => {
    setFirstname("Orhan");
  };

  // eger onclickte arttir functionuna  gidersek yukaridaki butun kod bloklari usestate yuzunden tekrar calisir bu da uygulamayi yavaslatir

  // console.log(names);
  return (
    <div>
      <div> {count}</div>
      <div>
        <button onClick={arttir}>arttir</button>
        <button onClick={azalt}>azalt</button>
      </div>
    </div>

    //-------------------------------------------------------------------------------------------
    // <div>
    //   {userInfo.username} {userInfo.password}
    // </div>

    //-------------------------------------------------------------------------------------------
    // <div>
    //   <div>
    //     {/* {names.map((isim, index) => (
    //       <div key={index}>{isim}</div>
    //     ))} */}
    //     {firstName}{" "}
    //   </div>
    //   <div>
    //     {/* <button onClick={() => setFirstname("ahmet")}>Ismi Degistir</button> */}
    //     <button onClick={handleChange}>Ismi Degistir</button>
    //   </div>
    // </div>
  );
}

export default App;
