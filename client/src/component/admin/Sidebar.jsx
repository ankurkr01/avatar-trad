import React, { useState } from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";
import Content from "./Content";

const Sidebar = ({ openSidebarToggle, OpenSidebar, setActiveCategory }) => {
  const handleCategoryClick = (category) => {
    setActiveCategory(category); // Update the active category when a category is clicked
  };

  return (
    <aside
      id="sideNavBar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> SHOP
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li
          className="sidebar-list-item"
          onClick={() => handleCategoryClick("dashboard")}
        >
          <a href="#">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li>
        <li
          className="sidebar-list-item"
          onClick={() => handleCategoryClick("Categories")}
        >
          <a href="#">
            <BsFillGrid3X3GapFill className="icon" /> Categories
          </a>
        </li>
        <li
          className="sidebar-list-item"
          onClick={() => handleCategoryClick("Products")}
        >
          <a href="#">
            <BsFillArchiveFill className="icon" /> Products
          </a>
        </li>
        <li
          className="sidebar-list-item"
          onClick={() => handleCategoryClick("Customers")}
        >
          <a href="#">
            <BsPeopleFill className="icon" /> Customers
          </a>
        </li>
        <li
          className="sidebar-list-item"
          onClick={() => handleCategoryClick("Order")}
        >
          <a href="#">
            <BsListCheck className="icon" /> Order
          </a>
        </li>
        <li
          className="sidebar-list-item"
          onClick={() => handleCategoryClick("Reports")}
        >
          <a href="#">
            <BsMenuButtonWideFill className="icon" /> Reports
          </a>
        </li>
        <li
          className="sidebar-list-item"
          onClick={() => handleCategoryClick("Setting")}
        >
          <a href="#">
            <BsFillGearFill className="icon" /> Setting
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
