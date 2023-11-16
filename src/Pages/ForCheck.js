import { Outlet,Navigate, useLocation } from "react-router-dom"
import GetAcount from "../klaytn/GetAcount"
import { useEffect } from "react"
const Forcheck =()=>
{
    const { pathname } = useLocation();
    GetAcount();
    useEffect(()=>{
        console.log("실행됐나")
        
      },[pathname])
    return(
        <div>
        <Outlet/>
        </div>
    ) 
}
export default Forcheck



