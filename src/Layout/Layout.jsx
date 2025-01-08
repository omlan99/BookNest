import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

import Navbar from "../Components/Navbar";

const Layout = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <div className="min-h-svh">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
}; 

export default Layout;