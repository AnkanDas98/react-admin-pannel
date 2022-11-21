import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

import { userColumns, userRows } from "../../../datatablesources";

import "./data-table.scss";
import { Link } from "react-router-dom";

const DataTable = ({ listFor }) => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: ({ row }) => {
        return (
          <div className="cellAction">
            <Link to="/users/55" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton" onClick={() => handleDelete(row.id)}>
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="dataTable">
      <div className="dataTableTitle">
        {listFor === "user" ? "Add New User" : "Add New Product"}
        <Link
          to={listFor === "user" ? "/users/new" : "/products/new"}
          className="link"
        >
          Add New
        </Link>
      </div>
      <DataGrid
        className="dataGrid"
        rows={data}
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
    </div>
  );
};

export default DataTable;
