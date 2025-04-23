import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const [categories, setCategories] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // axios.get('http://localhost:5000')
    axios.get("https://book-nest-server-wine.vercel.app/").then((res) => {
      // console.log(res.data);
      const getData = res.data;
      const uniqueCategories = [
        ...new Set(getData.map((book) => book.category)),
      ];
      setCategories(uniqueCategories);
      // console.log(uniqueCategories);
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // axios.patch(`http://localhost:5000/update/${id}`, data)
    axios
      .patch(`https://book-nest-server-wine.vercel.app/update/${id}`, data)
      .then((res) => {
        if(res.data.modifiedCount>0){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your update has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
       
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="px-6">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 py-12">
            <h2 className="text-4xl font-bold text-center">
              Update Book Information
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="name"
                  className="block text-sm/6 font-medium"
                >
                  Name of the Book
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    {...register("bookName")}
                    type="text"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="image"
                  className="block text-sm/6 font-medium"
                >
                  Book Image
                </label>
                <div className="mt-2">
                  <input
                    id="image"
                    {...register("image")}
                    type="url"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="author"
                  className="block text-sm/6 font-medium"
                >
                  Author Name
                </label>
                <div className="mt-2">
                  <input
                    {...register("author")}
                    name="author"
                    type="text"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="category"
                  className="block text-sm/6 font-medium"
                >
                  Category
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    id="category"
                    name="country"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    {categories.map((category) => (
                      <option>{category}</option>
                    ))}
                  </select>
                  <IoChevronDownCircleOutline
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="author"
                  className="block text-sm/6 font-medium"
                >
                  Rating
                </label>
                <div className="mt-2">
                  <input
                    id="rating"
                    name="author"
                    type="text"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-wide my-4 bg-[#018567] text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;
