import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { hide_sidebar } from "../../reducers/sidebarReducer";

import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

import "./new.scss";
import { DriveFolderUpload } from "@mui/icons-material";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
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
            <h1>{title}</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img
                src={file ? URL.createObjectURL(file) : "/images/no-image.jpg"}
                alt="No profile pic"
              />
            </div>
            <div className="right">
              <form action="">
                <div className="formInput">
                  <label htmlFor="file">
                    Image: <DriveFolderUpload className="icon" />
                  </label>
                  <input
                    type="file"
                    id="file"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
                {inputs.map((input) => (
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder} />
                  </div>
                ))}

                <div className="btn">
                  <button>Send</button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default New;
