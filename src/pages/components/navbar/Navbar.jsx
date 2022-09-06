import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { show_sidebar, hide_sidebar } from "../../../reducers/sidebarReducer";

import {
  ChatBubbleOutlineOutlined,
  CloseOutlined,
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
              <DarkModeOutlined className="icon" />
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
        <p>Admin</p>
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
              <li>
                <span>Dashboard</span>
              </li>
              <p className="title">LISTS</p>
              <li>
                <span>Users</span>
              </li>
              <li>
                <span>Products</span>
              </li>
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
