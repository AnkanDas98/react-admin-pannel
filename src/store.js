import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { sidebarReducer } from "./reducers/sidebarReducer";
import { themeReducer } from "./reducers/themeReducer";

const rootReeducer = combineReducers({
  sidebar: sidebarReducer,
  theme: themeReducer,
});

const store = configureStore({
  reducer: rootReeducer,
});

export default store;
