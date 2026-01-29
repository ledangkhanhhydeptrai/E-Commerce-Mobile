import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "../features/home/homeSlice";
import detailReducer from "../features/detail/detailSlice";
export const rootReducer = combineReducers({
  home: homeReducer,
  detail: detailReducer
});
