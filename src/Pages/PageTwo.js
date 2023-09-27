//자유게시판
import { useEffect, useState } from "react";
import FreePost from "../Components/FreePost";
import axios from "axios";
function PageTwo()
{
   const [posts,setPosts]=useState([]);
   useEffect(
    ()=>{
        axios.get('http://localhost:3001/posts')
        .then((response)=>{
            setPosts(response.data)
        })
        .catch((error)=>console.log(error))
    }
    ,[])
    return(
        <>
        {
           posts.map((datas)=>{
            return <FreePost/>
           }) 
        }
        
        </>
    )
}
export default PageTwo;