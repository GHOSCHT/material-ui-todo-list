import React from "react";
import { TextField, Button, Icon } from "@material-ui/core";
import { Formik, Field, Form } from "formik";

interface Props {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = (props) => {
  return (
    <Formik
      initialValues={{ addTodo: "" }}
      onSubmit={(data, { resetForm }) => {
        props.addTodo(data.addTodo);
        resetForm();
      }}
    >
      {(props) => (
        <Form>
          <Field
            placeholder="Add new todo item"
            name="addTodo"
            type="input"
            as={TextField}
          />
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
