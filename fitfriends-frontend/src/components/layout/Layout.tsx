import { Outlet } from "react-router";
import FitFriendsSvg from "../svg/Fitfriends.svg";

export default function Layout() {
  return (
    <>
      <div className="visually-hidden">
        <FitFriendsSvg />
      </div>
      <div className="wrapper">
        <Outlet />
      </div>
    </>
  )
}

