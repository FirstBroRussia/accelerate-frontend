import { combineReducers } from "@reduxjs/toolkit";
import { SliceEnum } from "../common/enum/slice.enum";
import { commonSlice } from "./slice/common.slice";


export const commonReducer = combineReducers({
  [SliceEnum.Common]: commonSlice.reducer
});
