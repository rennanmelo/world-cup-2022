import React from "react";
import { Drawer, List, ListItem } from "@material-ui/core";

const SideDrawer = (props) => {
  const links = [
    { where: "featured", value: "Qatar 2022" },
    { where: "eventinfo", value: "Event Info" },
    { where: "highlights", value: "Highlights" },
    { where: "pricing", value: "Pricing" },
    { where: "location", value: "Location" },
  ];

  const renderItems = () =>
    links.map((link) => (
      <ListItem button key={link.where} onClick={() => console.log(link.value)}>
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
