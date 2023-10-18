import React, { useState, useEffect } from "react";
import "../../style/adminStyle/headerStyle.css";

import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";
import user from "./user.png";
const Header = ({ OpenSidebar }) => {
  // set toggle

  const [isOpenProfile, setInOpenProfile] = useState(false);
  const toggle = async () => {
    setInOpenProfile(!isOpenProfile);
  };

  // end toggle

  // set Admin  Start

  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    setAdmin(userData);
  }, []);

  //  Admin End

  return (
    <div>
      <header className="header">
        <div className="menu-icon">
          <BsJustify className="icon" onClick={OpenSidebar} />
        </div>
        <div className="header-left">
          <BsSearch className="icon" />
          <input
            type="text"
            name="search"
            id=""
            className="input_search"
            placeholder="Search"
          />
        </div>
        <div className="header-right">
          <BsFillBellFill className="icon" />
          <BsFillEnvelopeFill className="icon" />
          <BsPersonCircle className="icon profile" onClick={toggle} />
        </div>
      </header>
      <aside>
        <div
          className="sideNavbar_profile"
          style={{ display: isOpenProfile ? "block" : "none" }}
        >
          <i
            class="fa fa-window-close close_profile"
            aria-hidden="true"
            onClick={toggle}
          ></i>

          <img src={user} alt="" className="user_profile" />
          <ul>
            <li>
              <a href="">{admin.name}</a>
            </li>
            <li>
              <a href="">{admin.email}</a>
            </li>
            <li>
              <a href="">{admin.mobile}</a>
            </li>
          </ul>
          <div className="logout_profile text-center">
            <a href="">Logout</a>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Header;
