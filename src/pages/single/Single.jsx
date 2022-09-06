import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { hide_sidebar } from "../../reducers/sidebarReducer";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import Chart from "../components/chart/Chart";
import Table from "../components/table/ListTable";

import "./single.scss";

const Single = () => {
  const dispatch = useDispatch();

  const { showSidebar } = useSelector((state) => state.sidebar);

  const handleSidebar = () => {
    dispatch(hide_sidebar());
  };

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <main onClick={showSidebar ? handleSidebar : undefined}>
          <div className="top">
            <div className="left">
              <div className="editButton">Edit</div>
              <div className="title">
                <h1>Information</h1>
              </div>
              <div className="item">
                <img
                  src="/images/a-women-profile.jpeg"
                  alt="A women profile"
                  className="itemImg"
                />
                <div className="details">
                  <h1 className="itemTitle">Jean Dow</h1>
                  <div className="detailItem">
                    <span className="itemKey">Email</span>
                    <span className="itemValue">Jeandoe@gmail.com</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone</span>
                    <span className="itemValue">+9 2313 1214</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Address</span>
                    <span className="itemValue">
                      Elton St. 234 Garden Yd. NewYork
                    </span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Country:</span>
                    <span className="itemValue">USA</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <Chart
                aspect={
                  window.innerWidth > 1090
                    ? window.innerWidth <= 1280
                      ? 2 / 1
                      : 4 / 1
                    : ""
                }
                title="User Spending ( Last 6 Months)"
              />
            </div>
          </div>
          <div className="bottom">
            <div className="listContainer">
              <div className="listTitle">Latest Transactions</div>
              <Table />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Single;
