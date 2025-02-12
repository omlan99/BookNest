import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import About from "../Components/About";
import Newsletter from "../Components/Newsletter";
import Featured from "../Components/Featured";

const Home = () => {
       
    return (
        <div>
         
            <Banner></Banner>
            <Categories></Categories>
            <About></About>
            <Featured></Featured>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;