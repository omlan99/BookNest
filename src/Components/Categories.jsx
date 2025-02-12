import axios from "axios";
import React, { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://book-nest-server-wine.vercel.app/").then((res) => {
      // console.log(res.data);
      const getData = res.data;
      const uniqueCategories = [
        ...new Set(getData.map((book) => book.category)),
      ];
      setCategories(uniqueCategories);
      setLoading(false);
      // console.log(uniqueCategories);
    });
  }, []);

  return (
    <div className="mt-[100px] pt-20" id="category">
      <h2 className="text-3xl font-bold text-center  py-5 mb-5">Categories</h2>
      {loading ? (
        <>
          <div className="w-full h-full flex justify-center items-center">
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
          <div className="grid md:grid-cols-3- lg:grid-cols-4 gap-4  px-5 ">
            {categories.map((category, index) => (
              <Link to={`/category/${category}`}>
                <div key={index} className="card border p-4 cursor-pointer">
                  <h3 className="text-lg font-bold">{category}</h3>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Categories;
