import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { hide_sidebar } from "../../reducers/sidebarReducer";

import Chart from "../components/chart/Chart";
import Featured from "../components/featured/Featured";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import ListTable from "../components/table/ListTable";
import Widget from "../components/widget/Widget";

import "./home.scss";

const Home = () => {
  const dispatch = useDispatch();

  const { showSidebar } = useSelector((state) => state.sidebar);

  const handleSidebar = () => {
    dispatch(hide_sidebar());
  };

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <main onClick={showSidebar ? handleSidebar : undefined}>
          <div className="widgets">
            <Widget type="users" />
            <Widget type="orders" />
            <Widget type="earning" />
            <Widget type="balance" />
          </div>
          <div className="charts">
            <Featured />
            <Chart />
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <ListTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
