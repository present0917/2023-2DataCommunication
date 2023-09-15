import { Outlet } from "react-router-dom";

function Layout()
{
    return(
        <div>
            layout
            <Outlet></Outlet>
        </div>
    )
}
export default Layout;