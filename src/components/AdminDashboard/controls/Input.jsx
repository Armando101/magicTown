import React from "react";

import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  input: {
    "& .MuiInputLabel-outlined": {
      fontSize: "1.65rem",
    },
    "& .MuiInputBase-root": {
      fontSize: "1.6rem",
    },
    "& .MuiSvgIcon-root": {
      fontSize: "2.5rem",
    },
  },
}));

function Input({ name, label, value, error = null, onChange, ...other }) {
  const classes = useStyles();
  return (
    <TextField
      className={classes.input}
      size={"medium"}
      variant={"outlined"}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  );
}

export default Input;
