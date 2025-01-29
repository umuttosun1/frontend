import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counterSlice";
import UserList from "./userList";

function App() {
  // const dispatch = useDispatch();

  // const { value } = useSelector((store) => store.counter);
  // console.log(value);
  return (
    <div>
      {/* <div>{value}</div>
      <div>
        <button onClick={() => dispatch(increment())}>arttir</button>
        <button onClick={() => dispatch(decrement())}>azalt</button>
      </div> */}
      <UserList />
    </div>
  );
}

export default App;
