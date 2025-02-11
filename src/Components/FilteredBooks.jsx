import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const FilteredBooks = () => {
  const { category } = useParams();
  const [books, setBooks] = useState([]);
  // console.log(category)
  useEffect(() => {
    axios
      .get(
        `https://book-nest-server-wine.vercel.app/category?category=${category}`
      )
      // axios.get(`http://localhost:5000/category?category=${category}`)
      .then((res) => {
        setBooks(res.data);
        console.log(res.data);
      });
  }, []);
  return (
    <div className="my-20">
      <h2 className="text-2xl font-bold text-center py-5"> {category}</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-6 px-5">
        {books.map((book, index) => (
          <div key={index} className="card card-compact bg-base-100 shadow-md">
            <figure className="overflow-hidden h-[200px] p-5">
              <img
                src={book.image}
                alt={book.bookName}
                className="max-w-sm rounded-lg  h-full w-full object-contain"
              />
            </figure>
            <div className="card-body flex-grow">
              <h2 className="card-title">{book.bookName}!</h2>
              <p className="text-left font-semibold">Author : {book.author}</p>
              <p className="font-semibold text-left">
                Available Copy : {book.quantity}
              </p>
              <div className="flex gap-3">
                {book.tags?.map((tag) => (
                  <div className="badge badge-outline">{tag}</div>
                ))}
              </div>

              <div className="card-actions justify-end">
                <Link to={`/book_details/${book._id}`}>
                  <button className="btn btn-primary">Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilteredBooks;
