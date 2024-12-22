import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Layout = () => {
    return (
        <div className="container mx-auto">
            <Header></Header>
            <div className="min-h-svh">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
}; 

export default Layout;