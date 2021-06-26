import React, { useContext } from "react";

import { useHistory } from "react-router-dom";

import { UserContext } from "../../../context/UserContext";

import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PeopleIcon from "@material-ui/icons/People";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import RateReviewIcon from "@material-ui/icons/RateReview";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#ffc93c",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing(8),
  },
}));

function DashboardDrawer({ children }) {
  const { setUser } = useContext(UserContext);
  const classes = useStyles();
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const history = useHistory();

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleLogOut = () => {
    swal({
      title: "¿Cerrar sesión?",
      text: "¿Estas seguro que quieres cerrar sesión?",
      icon: "warning",
      dangerMode: true,
      buttons: {
        cancel: {
          visible: true,
          text: "Cancelar",
        },
        confirm: {
          text: "Sí, cerrar sesión",
        },
      },
    }).then((willLoggOut) => {
      if (willLoggOut) {
        setUser(null);

        localStorage.removeItem("token");
        history.push("/home");
      }
    });
  };

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: openDrawer,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="openDrawer drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: openDrawer,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h2" noWrap>
              Pueblos Mágicos
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: openDrawer,
            [classes.drawerClose]: !openDrawer,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: openDrawer,
              [classes.drawerClose]: !openDrawer,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose} size="medium">
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button onClick={handleLogOut}>
              <ListItemIcon>
                <ExitToAppIcon
                  className={"drawer__icon drawer__icon--logout"}
                />
              </ListItemIcon>
              <ListItemText
                primary={"LogOut"}
                className={"drawer__button-text drawer__button-text--logout"}
              />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem
              button
              onClick={() => history.push("/admin/dashboard/users")}
            >
              <ListItemIcon>
                <PeopleIcon className={"drawer__icon"} />
              </ListItemIcon>
              <ListItemText
                primary={"Users"}
                className={"drawer__button-text"}
              />
            </ListItem>
            <ListItem
              button
              onClick={() => history.push("/admin/dashboard/towns")}
            >
              <ListItemIcon>
                <LocationCityIcon className={"drawer__icon"} />
              </ListItemIcon>
              <ListItemText
                primary={"Towns"}
                className={"drawer__button-text"}
              />
            </ListItem>
            <ListItem
              button
              onClick={() => history.push("/admin/dashboard/reviews")}
            >
              <ListItemIcon>
                <RateReviewIcon className={"drawer__icon"} />
              </ListItemIcon>
              <ListItemText
                primary={"Reviews"}
                className={"drawer__button-text"}
              />
            </ListItem>
          </List>
        </Drawer>
        <main className={classes.content}>
          <>{children}</>
        </main>
      </div>
    </>
  );
}

export default DashboardDrawer;
