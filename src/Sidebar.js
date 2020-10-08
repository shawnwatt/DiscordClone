import React from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>sidebar</h1>
      <div className="sidebar__top">
        <h3>clever programmer</h3>
        <ExpandMoreIcon />
      </div>

      
    </div>
  );
};

export default Sidebar;
