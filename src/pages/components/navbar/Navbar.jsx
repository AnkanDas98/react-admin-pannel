import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { show_sidebar, hide_sidebar } from "../../../reducers/sidebarReducer";
import { dark_theme, day_theme } from "../../../reducers/themeReducer";

import {
  ChatBubbleOutlineOutlined,
  CloseOutlined,
  DarkMode,
  DarkModeOutlined,
  LanguageOutlined,
  ListOutlined,
  NotificationsNoneOutlined,
  SearchOutlined,
} from "@mui/icons-material";

import "./navbar.scss";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const dispatch = useDispatch();

  const { showSidebar } = useSelector((state) => state.sidebar);
  const { dark } = useSelector((state) => state.theme);

  const handleSideMenu = () => {
    if (!showSidebar) {
      dispatch(show_sidebar());
    } else {
      dispatch(hide_sidebar());
    }
  };

  return (
    <div className="navbar">
      <div className="desktop">
        <div className="wrapper">
          <div className="search">
            <input type="text" placeholder="Search...." />
            <SearchOutlined className="icon" />
          </div>
          <div className="items">
            <div className="item">
              <LanguageOutlined className="icon" />
              English
            </div>
            <div className="item">
              {!dark ? (
                <DarkModeOutlined
                  className="icon"
                  onClick={() => dispatch(dark_theme())}
                />
              ) : (
                <DarkMode
                  className="icon"
                  onClick={() => dispatch(day_theme())}
                />
              )}
            </div>
            <div className="item">
              <NotificationsNoneOutlined className="icon" />
              <div className="counter">1</div>
            </div>
            <div className="item">
              <ChatBubbleOutlineOutlined className="icon" />
              <div className="counter">2</div>
            </div>
            <div className="item">
              <ListOutlined className="icon" />
            </div>
            <div className="item">
              <img
                src="/images/user-profile.jpeg"
                alt="A man laughing in joy"
                className="avatar"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mobile">
        <div className="item">
          <ListOutlined className="icon" onClick={handleSideMenu} />
        </div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <p>Admin</p>
        </Link>
        <div className="search">
          {showSearch && <input type="text" placeholder="Search...." />}
          <SearchOutlined
            className="icon"
            onClick={() => setShowSearch(true)}
          />
        </div>

        <div className={showSidebar ? "mobile-nav nav-open" : "mobile-nav"}>
          <div className="header">
            <CloseOutlined className="close-outline" onClick={handleSideMenu} />
          </div>

          <div className="mobile-nav-list">
            <ul>
              <p className="title">MAIN</p>
              <Link to="/" style={{ textDecoration: "none" }}>
                <li>
                  <span>Dashboard</span>
                </li>
              </Link>
              <p className="title">LISTS</p>
              <Link to="/users" style={{ textDecoration: "none" }}>
                <li>
                  <span>Users</span>
                </li>
              </Link>
              <Link to="/products" style={{ textDecoration: "none" }}>
                <li>
                  <span>Products</span>
                </li>
              </Link>
              <li>
                <span>Orders</span>
              </li>
              <li>
                <span>Delivery</span>
              </li>
              <p className="title">USEFUL</p>
              <li>
                <span>Stats</span>
              </li>
              <li>
                <span>Notification</span>
              </li>
              <p className="title">SERVICE</p>
              <li>
                <span>System Health</span>
              </li>
              <li>
                <span>Logs</span>
              </li>
              <li>
                <span>Setting</span>
              </li>
              <p className="title">USER</p>
              <li>
                <span>Profile</span>
              </li>
              <li>
                <span>Logout</span>
              </li>
              <p className="title">Theme</p>
              <li>
                <span
                  onClick={() => dispatch(dark ? day_theme() : dark_theme())}
                >
                  {dark ? "Light" : "Dark"}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
