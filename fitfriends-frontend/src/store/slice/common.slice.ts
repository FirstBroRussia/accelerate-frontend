import { createSlice } from "@reduxjs/toolkit";
import { SliceEnum } from "../../common/enum/slice.enum";


type InitialCommonSliceStateType = {
  isAuth: boolean,
  sub: string | null,
  email: string | null,
  role: string | null,
};

const initialCommonSliceState: InitialCommonSliceStateType = {
  isAuth: false,
  sub: null,
  email: null,
  role: null,
};


export const commonSlice = createSlice({
  name: SliceEnum.Common,
  initialState: initialCommonSliceState,
  reducers: {
    setIsAuthAction: (state, action) => {
      state.isAuth = action.payload;
    },
    setSubAction: (state, action) => {
      state.sub = action.payload;
    },
    setEmailAction: (state, action) => {
      state.email = action.payload;
    },
    setUserRoleAction: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { setIsAuthAction, setSubAction, setEmailAction, setUserRoleAction } = commonSlice.actions;
