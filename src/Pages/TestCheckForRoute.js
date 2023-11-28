import { Outlet, Navigate, useLocation } from "react-router-dom";
import GetAccount from "../klaytn/GetAccount";
import { useEffect, useState } from "react";
async function TestCheck() {
  console.log("이거?");
  const { klaytn } = window;
  const test = await klaytn._kaikas.isUnlocked();
  if (test) {
    //console.log(accounts);
    return 1;
  } else {
    return -1;
  }
}
export default TestCheck;
