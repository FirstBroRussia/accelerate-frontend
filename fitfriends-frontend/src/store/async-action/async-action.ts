import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginRequestType } from "../../common/type/request/login-request.type";
import { axiosApi } from "../../common/api/axios.api";
import { LoginResponseType } from "../../common/type/response/login-response.type";
import { AxiosError } from "axios";
import { parseJwt } from "../../common/helper/helper";
import { JwtPayloadType } from "../../common/type/jwt-payload.type";
import { store } from "../store";
import { setEmailAction, setIsAuthAction, setSubAction, setUserRoleAction } from "../slice/common.slice";
import { ConstantEnum } from "../../common/enum/constant.enum";


export const asyncCheckToken = createAsyncThunk('/checktoken', async () => {

  try {
    await axiosApi.get('/checktoken');

    const accessToken = localStorage.getItem(ConstantEnum.ACCESS_TOKEN) as string;

    const { sub, email, role } = parseJwt(accessToken)[1] as JwtPayloadType;

    store.dispatch(setSubAction(sub));
    store.dispatch(setEmailAction(email));
    store.dispatch(setUserRoleAction(role));

    store.dispatch(setIsAuthAction(true));
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      // localStorage.removeItem(ConstantEnum.ACCESS_TOKEN);

      // store.dispatch(setSubAction(null));
      // store.dispatch(setEmailAction(null));
      // store.dispatch(setUserRoleAction(null));

      // store.dispatch(setIsAuthAction(false));

      const err = error as AxiosError;
      console.error(err.response?.data ?? err.toJSON());
    } else {
      const err = error as Error;
      console.error(err.message);
      console.error(err.stack);
    }
  }
});


export const asyncLoginAction = createAsyncThunk('login', async (dto: LoginRequestType) => {

  try {
    const { data } = await axiosApi.post('/users/login', dto);

    const { accessToken, refreshToken } = data as LoginResponseType;

    const { sub, email, role } = parseJwt(accessToken)[1] as JwtPayloadType;

    localStorage.setItem(ConstantEnum.ACCESS_TOKEN, accessToken);
    localStorage.setItem(ConstantEnum.REFRESH_TOKEN, refreshToken);

    store.dispatch(setSubAction(sub));
    store.dispatch(setEmailAction(email));
    store.dispatch(setUserRoleAction(role));

    store.dispatch(setIsAuthAction(true));
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      const err = error as AxiosError;
      console.error(err.response?.data ?? err.toJSON());
    } else {
      const err = error as Error;
      console.error(err.message);
      console.error(err.stack);
    }
  }

});
