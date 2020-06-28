import React from "react";
import { Button, Icon } from "@material-ui/core";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { AddTodoField } from "./fields/AddTodoField";

interface Props {
  todos: Todo[];
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = (props) => {
  const todoTexts: string[] = [];
  props.todos.forEach((todo) => {
    todoTexts.push(todo.text);
  });

  const itemLenth = 27;

  const validationSchema = yup.object().shape({
    addTodo: yup
      .string()
      .required()
      .notOneOf(todoTexts, "Item already exists")
      .max(itemLenth, `Use less than ${itemLenth} letters`),
  });

  return (
    <Formik
      initialValues={{ addTodo: "" }}
      onSubmit={(data, { resetForm }) => {
        props.addTodo(data.addTodo);
        resetForm();
      }}
      validationSchema={validationSchema}
    >
      {(props) => (
        <Form>
          <AddTodoField placeholder="Add new todo item" name="addTodo" />
          <Button
            variant="contained"
            color="primary"
            endIcon={<Icon>send</Icon>}
            type="submit"
            style={{ marginLeft: "15px" }}
          >
            Send
          </Button>
        </Form>
      )}
    </Formik>
  );
};
