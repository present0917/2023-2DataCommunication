import { Outlet,Navigate, useLocation } from "react-router-dom"
import GetAccount from "../klaytn/GetAccount"
import { useEffect ,useState} from "react"


async function TestCheck() {
    console.log("이거?");
    let test=0;
    const { klaytn } = window;
      try{
        test = await klaytn._kaikas.isUnlocked();
      }catch(error){
        console.log(error);
      }
    
    if(test){
      return 1
    }
    else{
      return -1
      
    }
  }
    export default TestCheck

