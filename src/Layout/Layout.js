import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../Css/testStyle.css"
function Layout()
{
    return(
        <>
            <Header></Header>
            <div className="spacer" />
            <Outlet ></Outlet>
            <Footer></Footer>
        </>
    )
}
export default Layout;