import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import FilteredBooks from "../Components/FilteredBooks";
import About from "../Components/About";
import Newsletter from "../Components/Newsletter";

const Home = () => {
       
    return (
        <div>
         
            <Banner></Banner>
            <Categories></Categories>
            <FilteredBooks></FilteredBooks>
            <About></About>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;