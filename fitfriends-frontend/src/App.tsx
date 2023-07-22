import { Routes, Route } from "react-router-dom";
import { RoutePathEnum } from "./common/enum/route-path.enum";

import PrivateRoute from "./HOC/Private-route";
import Intro from "./components/intro/Intro";
import Layout from "./components/layout/Layout";
import Main from "./components/main/Main";
import SignIn from "./components/sign-in/Sign-in";


export default function App() {
  return (
    <Routes>
      <Route path={RoutePathEnum.Intro} element={
          <Intro />
        }
      />
      <Route path={RoutePathEnum.SignIn} element={
          <SignIn />
        }
      />
      <Route element={<Layout />} >
        <Route index path={RoutePathEnum.Main} element={
          <PrivateRoute children={
            <Main />
          } />
        } />
      </Route>
    </Routes>
  );
}
