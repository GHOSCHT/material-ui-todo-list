import React from "react";
import { FieldAttributes, useField } from "formik";
import { TextField } from "@material-ui/core";

export const AddTodoField: React.FC<FieldAttributes<{}>> = ({
  placeholder,
  ...props
}) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <TextField
      {...field}
      helperText={errorText}
      error={!!errorText}
      placeholder={placeholder}
    />
  );
};
