import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FilteredBooks = () => {
    const {category} = useParams()
    console.log(category)
    useEffect(() =>{
        axios.get(`http://localhost:5000/category?category=${category}`)
        .then(res => {
            console.log(res.data)
        })
    },[])
    return (
        <div>
            <h2>Filtered product component {category}</h2>
        </div>
    );
};

export default FilteredBooks;