import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SideDrawer from "../SideDrawer";

import "./index.css";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#2f2f2f",
    boxShadow: "none",
    padding: "8px 0",
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);

  const handleDrawer = (status) => {
    setIsOpen(!status);
  };

  return (
    <AppBar position="fixed" className={`${classes.header} header`}>
      <Toolbar>
        <div className="header__logo">
          <h1>Qatar 2022</h1>
          <h2>World Cup</h2>
        </div>
        <IconButton
          aria-label="Menu"
          color="inherit"
          onClick={() => handleDrawer(isOpen)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <SideDrawer open={isOpen} onClose={() => handleDrawer(isOpen)} />
    </AppBar>
  );
};

export default Header;
