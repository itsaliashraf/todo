import { configureStore } from "@reduxjs/toolkit";
import { rootreducer } from "./Reducers/rootreducer";

export const store = configureStore({
  reducer: rootreducer,
  some:
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
});
