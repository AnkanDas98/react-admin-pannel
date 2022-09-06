import React from "react";
import { DataGrid } from "@mui/x-data-grid";

import { userColumns, userRows } from "../../../datatablesources";

import "./data-table.scss";
import { Link } from "react-router-dom";

const actionColumn = [
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: () => {
      return (
        <div className="cellAction">
          <Link to="/users/55" style={{ textDecoration: "none" }}>
            <div className="viewButton">View</div>
          </Link>
          <div className="deleteButton">Delete</div>
        </div>
      );
    },
  },
];

const DataTable = () => {
  const screenSize = window.matchMedia("(max-width:44em)");

  console.log(screenSize);

  return (
    <div className="dataTable">
      <div className="dataTableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="dataGrid"
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        componentsProps={{
          pagination: {
            sx: {
              "& .css-levciy-MuiTablePagination-displayedRows": {
                fontSize: "1.3rem",
                fontWeight: "500",
              },
              "& .css-i4bv87-MuiSvgIcon-root ": {
                fontSize: "2rem",
              },
            },
          },
        }}
      />
      {screenSize && <div className="empty"></div>}
    </div>
  );
};

export default DataTable;
