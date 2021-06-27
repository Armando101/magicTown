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
  secondary: {
    backgroundColor: "#fff",
    borderColor: "#0e41c2",
    "& .MuiButton-label": {
      color: "#000",
    },
    "&:hover": {
      backgroundColor: "#0e41c2",
      color: "#fff",
      "& .MuiButton-label": {
        color: "#fff",
      },
    },
  },
  primary: {
    backgroundImage: "linear-gradient(to right, #0e41c2, #356bf2)",
    "& .MuiButton-label": {
      color: "#fff",
    },
    "&:hover": {
      backgroundImage: "none",
      borderColor: "#0e41c2",
      "& .MuiButton-label": {
        color: "#000",
      },
    },
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
        root: `${classes.root} ${classes[color]}`,
        label: classes.label,
      }}
    >
      {text}
    </MuiButton>
  );
}

export default Button;
