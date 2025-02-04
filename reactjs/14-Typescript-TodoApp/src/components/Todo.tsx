import React, { useState } from "react";
import { CiSquareRemove } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById, updateTodo } from "../redux/todoSlice";
import { CiSquareCheck } from "react-icons/ci";

interface TodoProps {
  todoProps: TodoType;
}
function Todo({ todoProps }: TodoProps) {
  const { id, content } = todoProps;

  const [editable, setEditable] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>(content);

  const dispatch = useDispatch();

  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id));
  };
  const handleUpdateTodo = () => {
    const payload = {
      id: id,
      content: newTodo,
    };
    dispatch(updateTodo(payload));
    setEditable(!editable);
  };

  return (
    <div className="todo">
      {editable ? (
        <input
          className="todo-edit-input"
          type="text"
          value={newTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewTodo(e.target.value)
          }
        />
      ) : (
        <div>{content}</div>
      )}
      <div>
        <CiSquareRemove onClick={handleRemoveTodo} className="icons" />
        {editable ? (
          <CiSquareCheck onClick={handleUpdateTodo} className="icons" />
        ) : (
          <FiEdit onClick={() => setEditable(!editable)} className="icons" />
        )}
      </div>
    </div>
  );
}

export default Todo;
