import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { sidebarReducer } from "./reducers/sidebarReducer";

const rootReeducer = combineReducers({
  sidebar: sidebarReducer,
});

const store = configureStore({
  reducer: rootReeducer,
});

export default store;
