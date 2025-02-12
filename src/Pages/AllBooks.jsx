import { useContext, useEffect, useState } from "react";
import Book from "./Book";
import { useLocation } from "react-router-dom";
import { Oval } from "react-loader-spinner";

const AllBooks = () => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const location = useLocation();

  useEffect(() => {
    // Extract category query parameter
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category");

    // Fetch books based on category or fetch all books
    const url = category
      ? // ? `http://localhost:5000/category?category=${category}`
        // : `http://localhost:5000/`;
        `https://book-nest-server-wine.vercel.app/category?category=${category}`
      : `https://book-nest-server-wine.vercel.app/`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      });
  }, [location.search]);
  // console.log(books)

  return (
    <div>
      {loading ? (
        <>
          <div className="w-full min-h-screen flex justify-center items-center">
            {" "}
            <Oval
              visible={true}
              height="80"
              width="80"
              color="#000"
              ariaLabel="oval-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        </>
      ) : (
        <>
          {" "}
          <p> Total Books In The Libaray {books.length}</p>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-6 px-5">
            {books.map((book, index) => (
              <Book key={index} book={book}></Book>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AllBooks;
