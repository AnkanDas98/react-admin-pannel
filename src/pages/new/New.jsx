import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { hide_sidebar } from "../../reducers/sidebarReducer";

import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

import "./new.scss";

const New = () => {
  const dispatch = useDispatch();

  const { showSidebar } = useSelector((state) => state.sidebar);

  const handleSidebar = () => {
    dispatch(hide_sidebar());
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <main onClick={showSidebar ? handleSidebar : undefined}>
          <div className="top">
            <h1>Add New User</h1>
          </div>
          <div className="bottom">
            <div className="left">Left</div>
            <div className="right">Right</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default New;
