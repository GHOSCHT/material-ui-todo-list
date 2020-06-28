import React from "react";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import { TodoListItem } from "./TodoListItem";

interface Props {
  todos: Todo[];
  toggleTodo: (selectedTodo: Todo) => void;
  removeTodo: (selectedTodo: Todo) => void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const TodoList: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {props.todos.length === 0
        ? "Empty"
        : props.todos.map((todo) => {
            return (
              <TodoListItem
                key={todo.text}
                todo={todo}
                toggleTodo={props.toggleTodo}
                removeTodo={props.removeTodo}
              />
            );
          })}
    </List>
  );
};