import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    showSidebar: false,
  },

  reducers: {
    show_sidebar: (state) => {
      state.showSidebar = true;
    },

    hide_sidebar: (state) => {
      state.showSidebar = false;
    },
  },
});

export const { show_sidebar, hide_sidebar } = sidebarSlice.actions;

export const sidebarReducer = sidebarSlice.reducer;
