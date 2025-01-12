import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FilteredBooks = () => {
    const {category} = useParams()
    console.log(category)
    // useEffect(() =>{
    //     fetch("http://localhost:5000/category?category=Fiction",{
          
    //             method : "GET",
    //             headers : {
                    
    //                 "content-type" : 'application/json',
        
    //             },
    //             // body : JSON.stringify()
                    

    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)

    //     })
    // },[])
    return (
        <div>
            <h2>Filtered product component {category}</h2>
        </div>
    );
};

export default FilteredBooks;