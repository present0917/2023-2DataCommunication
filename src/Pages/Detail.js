import { useParams } from "react-router-dom"
import ConcertData from "../Components/ConcertData";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import DetailTitle from "../Components/DetailTitle";
import DetailContainer from "../Components/DetailContainer";
import { useState, useEffect } from "react";
import axios from "axios";
import MapTest from "./MapTest";
import DetailMobile from "../Components/DetailMobile";

// function Detail()
// {
//     const params = useParams();
//     const concert=ConcertData.find(datas => datas.id==params.id);
//     console.log(concert);
//     const pathTo=`/res/${concert.id}`

// const [mobile, setMobile] = useState();
// useEffect(() => {
//     const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
//     if (isMobile) {
//       // mobile
//       setMobile(true);
//     } else {
//       // desktop
//       setMobile(false);
//     }
//   }, []);

//     return(

//         <>
//             {!mobile&&<DetailTitle title={concert.title} day={concert.day}/>}
//             {!mobile&&<DetailContainer concert={concert}/>}
//             {mobile&&<DetailMobile concert={concert}/>}


//         </>
//     )
// }
// export default Detail;



//서버연동시
function Detail() {
  const params = useParams();

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

  const [pathTo, setPathTo] = useState("");

  const [concert, setconcert] = useState("");
  const [url, setUrl] = useState("");
  useEffect(
    () => {
      axios.get(`http://localhost:8080/concert/detail/${params.id}`)
        .then((response) => {
          setconcert(response.data);
          setPathTo(`/res/${response.data.id}`);
          setUrl(`/images/${response.data.thumbnailUrl}`)

        })
        .catch((error) => console.log(error))

    }
    , [])

  useEffect(() => {
    if (concert) {
      console.log(concert)
      console.log(concert.title);
      console.log(concert.day);
    }
  }, [concert]);


  return (

    <>




      {concert && (!mobile && <DetailTitle title={concert.title} day={concert.day} />)}
      {concert && (!mobile && <DetailContainer concert={concert} />)}
      {concert && (mobile && <DetailMobile concert={concert} />)}



      <div style={{ display: "inline-block" }}>
        {concert && <MapTest concert={concert}  ></MapTest>}
      </div>

    </>
  )
}
export default Detail;
