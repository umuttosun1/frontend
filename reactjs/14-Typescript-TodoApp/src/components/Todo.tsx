import React from "react";
import { CiSquareRemove } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById } from "../redux/todoSlice";

interface TodoProps {
  todoProps: TodoType;
}
function Todo({ todoProps }: TodoProps) {
  const { id, content } = todoProps;

  const dispatch = useDispatch();

  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id));
  };

  return (
    <div className="todo">
      <div>{content}</div>
      <div>
        <CiSquareRemove onClick={handleRemoveTodo} className="icons" />
        <FiEdit className="icons" />
      </div>
    </div>
  );
}

export default Todo;
