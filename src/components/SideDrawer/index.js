import React from "react";
import { Drawer, List, ListItem, makeStyles } from "@material-ui/core";
import { scroller } from "react-scroll";

import "./index.css";

const SideDrawer = (props) => {
  const links = [
    { where: "featured", value: "Qatar 2022" },
    { where: "eventinfo", value: "Event Info" },
    { where: "highlights", value: "Highlights" },
    { where: "pricing", value: "Pricing" },
    { where: "location", value: "Location" },
  ];

  const useStyles = makeStyles((theme) => ({
    paperAnchorRight: {
      backgroundColor: "#5F0A21",
      color: "#FFFFFF",
    },
  }));

  const classes = useStyles();

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -82,
    });
    props.onClose(false);
  };

  const renderItems = () =>
    links.map((link) => (
      <ListItem
        button
        key={link.where}
        onClick={() => scrollToElement(link.where)}
        className="drawer__item"
      >
        <span>{link.value}</span>
      </ListItem>
    ));

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={props.onClose}
      classes={{ paperAnchorRight: classes.paperAnchorRight }}
      className="drawer"
    >
      <List className="drawer__list">{renderItems()}</List>
    </Drawer>
  );
};

export default SideDrawer;
