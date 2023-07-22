import { PropsWithChildren } from "react";
import { useAppSelector } from "../store/store";
import { RoutePathEnum } from "../common/enum/route-path.enum";
import { Navigate } from "react-router-dom";

type PrivateRoutePropsType = {
  children: PropsWithChildren<JSX.Element>,
};


export default function PrivateRoute({ children }: PrivateRoutePropsType) {
  const isAuth = useAppSelector(state => state.Common.isAuth);

  console.log(isAuth);


  return (
    isAuth ? children : <Navigate to={RoutePathEnum.Intro} />
  )
}
