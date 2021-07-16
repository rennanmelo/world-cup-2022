import React from "react";
import { Drawer, List, ListItem } from "@material-ui/core";
import { scroller } from "react-scroll";

const SideDrawer = (props) => {
  const links = [
    { where: "featured", value: "Qatar 2022" },
    { where: "eventinfo", value: "Event Info" },
    { where: "highlights", value: "Highlights" },
    { where: "pricing", value: "Pricing" },
    { where: "location", value: "Location" },
  ];

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
      >
        {link.value}
      </ListItem>
    ));

  return (
    <Drawer anchor="right" open={props.open} onClose={props.onClose}>
      <List>{renderItems()}</List>
    </Drawer>
  );
};

export default SideDrawer;
