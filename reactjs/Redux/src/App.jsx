import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counterSlice";
import UserList from "./userList";

function App() {
  return (
    <div>
      <UserList />
    </div>
  );
}

export default App;
