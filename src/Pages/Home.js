import ControlledCarousel from "../Components/ControlledCarousel";
import { useState } from "react";
import ConcertList from "../Components/ConcertList";

function Home()
{
    return(
        <div>
        <ControlledCarousel/>                
        <ConcertList/>
        </div>
    )
}
export default Home;