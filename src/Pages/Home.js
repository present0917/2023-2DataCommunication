import FireInfo from "../Components/FireInfo";
import ControlledCarousel from "../Components/ControlledCarousel";
import { useState } from "react";

function Home()
{
    return(
        <div>
        <ControlledCarousel/>                
            <FireInfo/>
        </div>
    )
}
export default Home;