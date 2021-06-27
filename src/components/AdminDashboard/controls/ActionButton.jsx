import React from "react";

import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 0,
    margin: theme.spacing(0.5),
  },
  delete: {
    backgroundColor: "#fff",
    borderColor: "#db2829",
    "& .MuiButton-label": {
      color: "#000",
    },
    "&:hover": {
      backgroundColor: "#db2829",
      "& .MuiButton-label": {
        color: "#fff",
      },
    },
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

function ActionButton({ color, variant, onClick, children }) {
  const classes = useStyles();

  return (
    <Button
      size={"large"}
      variant={variant || "contained"}
      onClick={onClick}
      className={`${classes.root} ${classes[color]}`}
    >
      {children}
    </Button>
  );
}

export default ActionButton;
