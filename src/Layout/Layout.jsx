import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

import Navbar from "../Components/Navbar";

const Layout = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="min-h-svh container mx-auto mt-20">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
}; 

export default Layout;