import { useState } from "react";
import "./App.css";
import ToDoCreate from "./components/ToDoCreate";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);

  const createToDo = (newToDo) => {
    setTodos([...todos, newToDo]);

    /* 
    ...todos userine koymak icin kullandik  mesela 2 elemanimiz var 3 elemani eklemek icin diziyi aciyor icine ekliyor stacke push manitigi
    seperate anlamina geliyor
    
    */
  };

  const deleteToDo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
  };

  const updateTodo = (newtodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== newtodo.id) {
        return todo;
      }
      return newtodo;
    });

    setTodos([...updatedTodos]);
  };

  return (
    <div className="App">
      <div className="main">
        <ToDoCreate onCreateTodo={createToDo} />
        <ToDoList
          todos={todos}
          onDeleteToDo={deleteToDo}
          onUpdateToDo={updateTodo}
        />
      </div>
    </div>
  );
}

export default App;
