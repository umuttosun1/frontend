import React from "react";
import ToDo from "./ToDo";

function ToDoList({ todos, onDeleteToDo, onUpdateToDo }) {
  return (
    <div style={{ width: "100%", marginTop: "50px" }}>
      {todos &&
        todos.map((todo) => (
          <ToDo
            key={todo.id}
            todo={todo}
            onDeleteToDo={onDeleteToDo}
            onUpdateToDo={onUpdateToDo}
          />
        ))}
    </div>
  );
}

export default ToDoList;
