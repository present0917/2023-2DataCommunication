import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Gap from "../Components/Gap";

function Layout()
{
    return(
        <div>
            <Header></Header>
            <Gap></Gap>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}
export default Layout;