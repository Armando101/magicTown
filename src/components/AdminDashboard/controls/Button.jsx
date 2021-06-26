import React from "react";

import { Button as MuiButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
  },
  label: {
    textTransform: "none",
    fontSize: "1.4rem",
  },
}));

function Button({ text, size, color, variant, onClick, ...other }) {
  const classes = useStyles();

  return (
    <MuiButton
      variant={variant || "outlined"}
      size={size || "large"}
      onClick={onClick}
      {...other}
      classes={{
        root: classes.root,
        label: classes.label,
      }}
    >
      {text}
    </MuiButton>
  );
}

export default Button;
