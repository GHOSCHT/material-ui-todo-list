import React, { CSSProperties, useState } from "react";
import { TodoList } from "./components/TodoList";
import InitialTodos from "./InitialTodos";
import { Paper } from "@material-ui/core";
import { AddTodoForm } from "./components/AddTodoForm";

const hCenterStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const centerStyle: CSSProperties = {
  ...hCenterStyle,
  padding: 0,
  margin: 0,
  width: "100%",
  height: "100%",
};

function App() {
  const [todos, setTodos] = useState(InitialTodos);

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

  const addTodo = (newTodoText: string) => {
    const newTodo: Todo = { text: newTodoText, complete: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <div style={hCenterStyle}>
      <Paper style={{ marginTop: "30px", minHeight: "80px" }}>
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      </Paper>
      <Paper style={{ marginTop: "10px", width: "360px", height: "80px" }}>
        <div style={centerStyle}>
          <AddTodoForm addTodo={addTodo} />
        </div>
      </Paper>
    </div>
  );
}

export default App;
