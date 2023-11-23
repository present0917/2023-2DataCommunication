import { useParams } from "react-router-dom"
import ConcertData from "../Components/ConcertData";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import DetailTitle from "../Components/DetailTitle";
import DetailContainer from "../Components/DetailContainer";
import { useState,useEffect } from "react";
import axios from "axios";
import MapTest from "./MapTest";
import DetailMobile from "../Components/DetailMobile";

function Detail()
{
    const params = useParams();
    const concert=ConcertData.find(datas => datas.id==params.id);
    console.log(concert);
    const pathTo=`/res/${concert.id}`

    const [mobile, setMobile] = useState();
    useEffect(() => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
          // mobile
          setMobile(true);
        } else {
          // desktop
          setMobile(false);
        }
      }, []);

    return(

        <>
            {!mobile&&<DetailTitle title={concert.title} day={concert.day}/>}
            {!mobile&&<DetailContainer concert={concert}/>}
            {mobile&&<DetailMobile concert={concert}/>}

            
        </>
    )
}
export default Detail;



//서버연동시
// function Detail()
// {
//     const params = useParams();
    
   
    
//     const [pathTo, setPathTo] = useState("");

//     const [concert,setconcert]=useState("");

//     useEffect(
//         ()=>{
//             axios.get(`http://localhost:8080/concert/detail/${params.id}`)
//             .then((response)=>{
//                 setconcert(response.data);
//                 setPathTo(`/res/${response.data.id}`);
//             })
//             .catch((error)=>console.log(error))

//         }
//         ,[])

//         useEffect(() => {
//             if (concert) {
//                 console.log(concert)
//                 console.log(concert.title);
//                 console.log(concert.day);
//             }
//         }, [concert]);


//     return(

//         <>
            
            
            
//             {concert &&
//             <DetailTitle title={concert.title} day={concert.day} />}
//             {concert &&<DetailContainer concert={concert}/>}

//             {/* {concert &&<Button variant="secondary" as={Link} to={pathTo}>예매하기 &raquo;</Button>} */}
// <div style={{ display:"inline-block"}}>
//             {concert &&<MapTest address={concert.hallAddress}  ></MapTest>}
//             </div>
            
//         </>
//     )
// }
// export default Detail;
