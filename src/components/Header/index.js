import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, IconButton, makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SideDrawer from "../SideDrawer";

import "./index.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [headerTransparent, setHeaderTransparent] = useState(true);

  const useStyles = makeStyles((theme) => ({
    root: {
      background: headerTransparent
        ? "rgba(0,0,0,0.05)"
        : "linear-gradient(62deg,#0F020C 0,#320615 18%,#5F0A21 44%,#800D2A 67%,#940F2F 86%,#9B1031 99%,#9B1031 100%,#9B1031 100%) no-repeat padding-box",
      boxShadow: "none",
      padding: "8px 0",
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  const handleDrawer = (status) => {
    setIsOpen(!status);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHeaderTransparent(false);
    } else {
      setHeaderTransparent(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      className="header"
      classes={{ root: classes.root }}
    >
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
