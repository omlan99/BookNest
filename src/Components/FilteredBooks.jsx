import React, { useEffect } from 'react';

const FilteredBooks = (data) => {
    console.log(data.categor)
    useEffect(() =>{
        fetch("http://localhost:5000/category?category=Fiction",{
          
                method : "GET",
                headers : {
                    
                    "content-type" : 'application/json',
        
                },
                // body : JSON.stringify()
                    

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)

        })
    },[])
    return (
        <div>
            
        </div>
    );
};

export default FilteredBooks;