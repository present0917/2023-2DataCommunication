import { Outlet, Navigate, useLocation } from "react-router-dom";
import GetAccount from "../klaytn/GetAccount";
import { useEffect } from "react";
const Forcheck = () => {
  const { pathname } = useLocation();
  GetAccount();
  useEffect(() => {
    console.log("실행됐나");
  }, [pathname]);
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default Forcheck;
