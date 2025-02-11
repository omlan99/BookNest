import { useContext, useEffect, useState } from "react";
import Book from "./Book";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const AllBooks = () => {
    const {loader, setLoader} = useContext(AuthContext)
    const [books, setBooks] = useState([])
    const location = useLocation();

    useEffect(() => {
      // Extract category query parameter
      const queryParams = new URLSearchParams(location.search);
      const category = queryParams.get("category");
  
      // Fetch books based on category or fetch all books
      const url = category
        // ? `http://localhost:5000/category?category=${category}`
        // : `http://localhost:5000/`;
        ? `https://book-nest-server-wine.vercel.app/category?category=${category}`
        : `https://book-nest-server-wine.vercel.app/`;
      
      fetch(url)
        .then((res) => res.json())
        .then((data) => setBooks(data));
    }, [location.search]);
    // console.log(books)
    
    return (
        <div >
            {
                books? <> 
                <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-6 px-5">
                {
                    books.map((book, index) =><Book key={index} book ={book}></Book>)
                }
                </div></> : setLoader(true) 
            }
           
        </div>
    );
};

export default AllBooks;