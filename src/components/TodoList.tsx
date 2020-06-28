import React from "react";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import { TodoListItem } from "./TodoListItem";

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
}

const styles = {
  marginLeft: "35px",
  color: "#757575",
  fontFamily: "Roboto",
};

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
      {props.todos.length === 0 ? (
        <p style={styles}>Empty</p>
      ) : (
        props.todos.map((todo) => {
          return (
            <TodoListItem
              key={todo.text}
              todo={todo}
              toggleTodo={props.toggleTodo}
              removeTodo={props.removeTodo}
            />
          );
        })
      )}
    </List>
  );
};
