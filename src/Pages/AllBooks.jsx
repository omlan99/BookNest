import { useEffect, useState } from "react";
import Book from "./Book";

const AllBooks = () => {

    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/')
        .then(res => res.json())
        .then(data => {
            setBooks(data)
            console.log(data)
        })
    }, [])
    return (
        <div >
            <p> Total Books In The Libaray {books.length}</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2">
            {
                books.map(book =><Book book ={book}></Book>)
            }
            </div>
        </div>
    );
};

export default AllBooks;