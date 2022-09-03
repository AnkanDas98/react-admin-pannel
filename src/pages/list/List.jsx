import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { hide_sidebar } from "../../reducers/sidebarReducer";
import DataTable from "../components/datatable/DataTable";

import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

import "./list.scss";

const List = () => {
  const dispatch = useDispatch();

  const { showSidebar } = useSelector((state) => state.sidebar);

  const handleSidebar = () => {
    dispatch(hide_sidebar());
  };

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <main onClick={showSidebar ? handleSidebar : undefined}>
          <DataTable />
        </main>
      </div>
    </div>
  );
};

export default List;
