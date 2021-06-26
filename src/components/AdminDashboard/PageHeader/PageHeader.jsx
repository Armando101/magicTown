import { Card, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

import Brightness1Icon from "@material-ui/icons/Brightness1";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ffe58a",
  },
  pageHeader: {
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "row",
    marginBottom: theme.spacing(3),
    alignItems: "center",
  },
  pageIcon: {
    display: "inline-block",
    padding: theme.spacing(3),
    color: "#0e41c2",
    "& .MuiSvgIcon-fontSizeLarge": {
      fontSize: "5rem",
    },
  },
  pageTitle: {
    paddingLeft: theme.spacing(4),
    "& .MuiTypography-subtitle2": {
      opacity: "0.8",
      fontSize: "1.6rem",
      marginTop: "1rem",
    },
  },
  pageQty: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: "auto",
    padding: theme.spacing(4),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    fontSize: "4rem",
    "& .MuiSvgIcon-fontSizeLarge": {
      color: "#3fe293",
      width: "3rem",
      height: "3rem",
    },
  },
}));

function PageHeader({ title, subtitle, icon, qty }) {
  const classes = useStyles();

  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.pageHeader}>
        <Card className={classes.pageIcon}>{icon}</Card>
        <div className={classes.pageTitle}>
          <Typography variant="h3" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {subtitle}
          </Typography>
        </div>
        <Card className={classes.pageQty}>
          <Typography variant="h3" component="div">
            Total {title}
          </Typography>
          <div>
            <Brightness1Icon fontSize={"large"} /> {qty}
          </div>
        </Card>
      </div>
    </Paper>
  );
}

export default PageHeader;
