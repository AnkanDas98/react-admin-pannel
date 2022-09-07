import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    dark: false,
  },

  reducers: {
    day_theme: (state) => {
      state.dark = false;
    },

    dark_theme: (state) => {
      state.dark = true;
    },
  },
});

export const { day_theme, dark_theme } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;
