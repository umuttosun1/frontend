import React, { useState } from "react";
import { IoMdRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import "../App.css";
import { FaCheck } from "react-icons/fa";

function ToDo({ todo, onDeleteToDo, onUpdateToDo }) {
  const { id, content } = todo;
  const [editable, setEditable] = useState(false);
  const [editTodo, setEditTodo] = useState(content);

  const deleteToDo = () => {
    onDeleteToDo(id);
  };
  const updateToDo = () => {
    const request = {
      id: id,
      content: editTodo,
    };
    onUpdateToDo(request);
    setEditable(false);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid lightgrey",
        padding: "10px",
        marginTop: "10px",
      }}
    >
      <div>
        {editable ? (
          <input
            style={{ width: "350px" }}
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            className="todo-create-input"
            type="text"
          />
        ) : (
          content
        )}
      </div>
      <div>
        <IoMdRemoveCircle onClick={deleteToDo} className="todo-icons" />
        {editable ? (
          <FaCheck onClick={updateToDo} className="todo-icons" />
        ) : (
          <FaEdit onClick={() => setEditable(true)} className="todo-icons" />
        )}
      </div>
    </div>
  );
}

export default ToDo;
