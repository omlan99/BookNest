import { useEffect, useState } from "react";
import Book from "./Book";
import { useLocation } from "react-router-dom";

const AllBooks = () => {

    const [books, setBooks] = useState([])
    const location = useLocation();

    useEffect(() => {
      // Extract category query parameter
      const queryParams = new URLSearchParams(location.search);
      const category = queryParams.get("category");
  
      // Fetch books based on category or fetch all books
      const url = category
        ? `http://localhost:5000/category?category=${category}`
        : `http://localhost:5000/`;
      
      fetch(url)
        .then((res) => res.json())
        .then((data) => setBooks(data));
    }, [location.search]);
    console.log(books)
    
    return (
        <div >
            <p> Total Books In The Libaray {books.length}</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {
                books.map((book, index) =><Book key={index} book ={book}></Book>)
            }
            </div>
        </div>
    );
};

export default AllBooks;