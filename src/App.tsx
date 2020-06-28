import React, { CSSProperties, useState } from "react";
import { TodoList } from "./TodoList";
import InitialTodos from "./InitialTodos";
import "./App.css";
import { Paper } from "@material-ui/core";

function App() {
  const [todos, setTodos] = useState(InitialTodos);

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
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
    <div style={style as CSSProperties}>
      <Paper style={{ marginTop: "30px" }}>
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      </Paper>
      <Paper style={{ marginTop: "30px", width: "350px" }}>
        <pre>
          {todos.length === 0 ? "Empty" : JSON.stringify(todos, null, 2)}
        </pre>
      </Paper>
    </div>
  );
}

export default App;
