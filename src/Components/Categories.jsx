import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const uniqueCategories = [
          ...new Set(data.map((book) => book.category)),
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
            // onClick={() => navigate(`/category?category=${category}`)}
          >
            <h3 className="text-lg font-bold">{category}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
