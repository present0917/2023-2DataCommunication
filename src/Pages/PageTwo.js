//자유게시판
import { useEffect, useState } from "react";
import FreePost from "../Components/FreePost";
import axios from "axios";
function PageTwo()
{
   
    return(
        <>
        <div className="spacer"/>
        <FreePost></FreePost>
        </>
    )
}
export default PageTwo;