import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const FilteredBooks = () => {
    const {category} = useParams()
    const [books, setBooks] = useState([])
    // console.log(category)
    useEffect(() =>{
        if(books.length > 0){
          axios.get(`https://book-nest-server-wine.vercel.app/category?category=${category}`)
        // axios.get(`http://localhost:5000/category?category=${category}`)
        .then(res => {
            setBooks(res.data)
            console.log(res.data)
        })
        }
    },[category])
    return (
        <div className=''>
            <h2> {category}</h2>  
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {
                books.map((book, index) =>  <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure className="overflow-hidden h-[250px] w-[250px]">
                  <img
                    src={book.image}
                    alt={book.bookName}
                    className="object-cover object-center"
                  />
                </figure>
                <div className="card-body flex-grow">
                  <h2 className="card-title">{book.bookName}!</h2>
                  <p className="text-left font-semibold">Author : {book.author}</p>
                  <p className="font-semibold text-left">Available Copy : {book.quantity}</p>
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
              </div>)
            }
            </div>
        </div>
    );
};

export default FilteredBooks;