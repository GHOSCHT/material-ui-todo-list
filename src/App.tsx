import React, { CSSProperties, useState } from "react";
import { TodoList } from "./components/TodoList";
import InitialTodos from "./InitialTodos";
import { Paper } from "@material-ui/core";
import { AddTodo } from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState(InitialTodos);

  const horizCenterStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const centerStyle: CSSProperties = {
    padding: 0,
    margin: 0,
    width: "100%",
    height: "100%",
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const toggleTodo = (selectedTodo: Todo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (selectedTodo: Todo) => {
    const updatedTodos = todos.filter((todo) => todo !== selectedTodo);
    setTodos(updatedTodos);
  };

  return (
    <div style={horizCenterStyle}>
      <Paper style={{ marginTop: "30px" }}>
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      </Paper>
      <Paper style={{ marginTop: "10px", width: "360px", height: "80px" }}>
        <div style={centerStyle}>
          <AddTodo />
        </div>
      </Paper>
      <Paper style={{ marginTop: "30px", width: "360px" }}>
        <pre>
          {todos.length === 0 ? "Empty" : JSON.stringify(todos, null, 2)}
        </pre>
      </Paper>
    </div>
  );
}

export default App;
