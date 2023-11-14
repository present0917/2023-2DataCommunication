import ControlledCarousel from "../Components/ControlledCarousel";
import { useState,useEffect } from "react";
import ConcertList from "../Components/ConcertList";

function Home()
{
    const [moblie, setMobile] = useState();
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
        <div>
        {    !moblie&&<ControlledCarousel />                }
        <ConcertList/>
        </div>
    )
}
export default Home;