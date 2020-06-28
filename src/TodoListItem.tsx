import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

interface Props {
  todo: Todo;
  toggleTodo: (selectedTodo: Todo) => void;
}

export const TodoListItem: React.FC<Props> = (props) => {
  return (
    <ListItem dense button onClick={() => props.toggleTodo(props.todo)}>
      <ListItemIcon>
        <Checkbox
          edge="start"
          disableRipple
          checked={props.todo.complete}
          onChange={() => props.toggleTodo(props.todo)}
        />
      </ListItemIcon>
      <ListItemText primary={props.todo.text} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
