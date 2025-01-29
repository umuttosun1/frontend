import React, { useState } from "react";
import "../App.css";

function ToDoCreate({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const clearInput = () => {
    setNewTodo("");
  };
  const createTodo = () => {
    if (!newTodo) return;

    const request = {
      id: Math.floor(Math.random() * 99999999999),
      content: newTodo,
    };
    onCreateTodo(request);
    clearInput();
  };
  return (
    <div className="todo-create">
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="todo-create-input"
        type="text"
        placeholder="To-Do giriniz"
      />
      <button onClick={createTodo} className="todo-create-button">
        To-Do Olustur
      </button>
    </div>
  );
}

export default ToDoCreate;
