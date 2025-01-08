import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import FilteredBooks from "../Components/FilteredBooks";

const Home = () => {
    const data =  useLoaderData()
       
    return (
        <div>
            <h1>Welcome Home</h1>
            <Banner></Banner>
            <Categories bookData = {data}></Categories>
            <FilteredBooks bookData = {data}></FilteredBooks>
        </div>
    );
};

export default Home;