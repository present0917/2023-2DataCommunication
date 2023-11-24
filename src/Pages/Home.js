import ControlledCarousel from "../Components/ControlledCarousel";
import { useState,useEffect } from "react";
import ConcertList from "../Components/ConcertList";
import axios from "axios";
function Home()
{
    const [moblie, setMobile] = useState();
    const [list,setList]=useState(0);
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
      useEffect(
        () => {
          axios.get(`http://localhost:8080/concert/list`)
            .then((response) => {
              setList(response.data);
            })
            .catch((error) => console.log(error))
    
        }
        , [])
    return(
        <div>
        {    list&&(!moblie&&<ControlledCarousel list={list}/>               )}
        {list&&(<ConcertList list={list}/>)}
        </div>
    )
}
export default Home;