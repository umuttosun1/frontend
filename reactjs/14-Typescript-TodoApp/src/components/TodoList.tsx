import React from "react";
import { CiSquareRemove } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";

function TodoList() {
  return (
    <div className="todo">
      <div>ben ilk todoyum</div>
      <div>
        <CiSquareRemove className="icons" />
        <FiEdit className="icons" />
      </div>
    </div>
  );
}

export default TodoList;
