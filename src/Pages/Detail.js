import { useParams } from "react-router-dom"
import ConcertData from "../Components/ConcertData";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import DetailTitle from "../Components/DetailTitle";
import DetailContainer from "../Components/DetailContainer";
import { useState,useEffect } from "react";
import axios from "axios";


function Detail()
{
    const params = useParams();
    const concert=ConcertData.find(datas => datas.id==params.id);
    console.log(concert);
    const pathTo=`/res/${concert.id}`


    return(

        <>
            <DetailTitle title={concert.title} day={concert.day}/>
            <DetailContainer concert={concert}/>

            
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
//                 console.log(concert.place);
//             }
//         }, [concert]);


//     return(

//         <>
            
            

//             <DetailTitle title={concert.title} day={concert.day}/>
//             <DetailContainer concert={concert}/>

//             <Button variant="secondary" as={Link} to={pathTo}>예매하기 &raquo;</Button>
//         </>
//     )
// }
// export default Detail;