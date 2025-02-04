import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/todoSlice";
import { TodoType } from "../types/types";

function TodoCreate() {
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState<string>("");

  const handleCreateTodo = () => {
    if (newTodo.trim().length == 0) {
      alert("Todo giriniz!");
      return;
    }
    const payload: TodoType = {
      id: Math.floor(Math.random() * 99999),
      content: newTodo,
    };
    dispatch(createTodo(payload));
    setNewTodo("");
  };
  return (
    <div className="todo-create">
      <input
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
        placeholder="Create a todo"
        type="text"
        className="todo-input"
      />
      <button onClick={handleCreateTodo} className="todo-button">
        Create
      </button>
    </div>
  );
}

export default TodoCreate;
