import React from "react";
import { DataGrid } from "@mui/x-data-grid";

import { userColumns, userRows } from "../../../datatablesources";

import "./data-table.scss";

const actionColumn = [
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: () => {
      return (
        <div className="cellAction">
          <div className="viewButton">View</div>
          <div className="deleteButton">Delete</div>
        </div>
      );
    },
  },
];

const DataTable = () => {
  return (
    <div className="dataTable">
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
    </div>
  );
};

export default DataTable;
