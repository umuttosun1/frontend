import React from "react";

function TodoCreate() {
  return (
    <div className="todo-create">
      <input placeholder="Create a todo" type="text" className="todo-input" />
      <button className="todo-button">Create</button>
    </div>
  );
}

export default TodoCreate;
