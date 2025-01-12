import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:5000')
      .then((res) => {
        console.log(res.data);
       const  getData = res.data
        const uniqueCategories = [
          ...new Set(getData.map((book) => book.category)),
        ];
        setCategories(uniqueCategories);
        console.log(uniqueCategories);
      });
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4">
      {categories.map((category, index) => (
        <Link to = {`/category/${category}`} >
         
          <div
            key={index}
            className="card border p-4 cursor-pointer"
          >
            <h3 className="text-lg font-bold">{category}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
