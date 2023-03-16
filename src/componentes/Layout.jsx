import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            <Navbar />
            <div className="full-height">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
export default Layout

