import { combineReducers } from "redux";
import { Vehicles } from "./vehicles";
import { configureStore } from "@reduxjs/toolkit";
import { Reducer } from "./reducer";

export const store = configureStore({
  reducer: combineReducers({
    vehicles: Vehicles,
  }),
});
