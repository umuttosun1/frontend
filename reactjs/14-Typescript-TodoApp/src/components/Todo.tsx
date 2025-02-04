import React from "react";
import { CiSquareRemove } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import { TodoType } from "../types/Types";

interface TodoProps {
  todoProps: TodoType;
}
function Todo({ todoProps }: TodoProps) {
  return (
    <div className="todo">
      <div>{todoProps.content}</div>
      <div>
        <CiSquareRemove className="icons" />
        <FiEdit className="icons" />
      </div>
    </div>
  );
}

export default Todo;
