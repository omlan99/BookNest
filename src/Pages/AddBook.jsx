import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { FaChevronDown } from "react-icons/fa6";
import Swal from "sweetalert2";

const AddBook = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      console.log(data)
      const formattedData = {
        ...data,
        quantity: Number(data.quantity),
        yearOfPublishing: Number(data.yearOfPublishing),
        totalPages: Number(data.totalPages),
        rating: parseFloat(data.rating), // Use parseFloat for ratings if decimals are allowed
      };
  
      console.log(formattedData); 
      const quantity = parseInt(data.quantity)
      // const response = await axios.post("http://localhost:5000/addBooks", data);
      const response = await axios.post("https://book-nest-server-wine.vercel.app/addBooks", formattedData);
      Swal.fire({
        title: "Book Added Succesfully",
        icon: "success",
    });
    // console.log(data);
    reset();
    } catch(error) {
        console.log('error found', error)
    }
  };
  return (
    <div className="space-y-12 ">
      <h1 className="text-5xl text-center py-6 font-bold">Add a new Book To Library</h1>
      <form className="px-6 " onSubmit={handleSubmit(onSubmit)}>
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="bookName"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Book Name
              </label>
              <div className="mt-2">
                <input
                  placeholder="Book Name"
                  id="country-name"
                  {...register("bookName", {
                    required: "Book Name is required",
                  })}
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="image"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Book Image
              </label>
              <div className="mt-2">
                <input
                  placeholder="Image URL "
                  id="img"
                  {...register("image", {
                    required: "Image URL is required",
                  })}
                  type="url"
                  autoComplete=""
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="category"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Category
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="category"
                  {...register("category", {
                    required: "Visa Type is required",
                  })}
                  autoComplete=""
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option disabled selected>
                    Category
                  </option>
                  <option>Novel</option>
                  <option>Thriller</option>
                  <option>History</option>
                  <option>Drama</option>
                  <option>Sci-Fi</option>
                  <option>Medical Visa</option>
                </select>
                <FaChevronDown
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
            </div>
            <div className="sm:col-span-2 ">
              <label
                htmlFor="quantity"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Quantity
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  id="quantity"
                  {...register("quantity", {
                    required: "quantity is required",
                  })}
                  autoComplete="address-level2"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 ">
              <label
                htmlFor="author"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Author Name
              </label>
              <div className="mt-2">
                <input
                  id="author"
                  {...register("author", {
                    required: "author Time is required",
                  })}
                  type="text"
                  autoComplete="address-level2"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-2 ">
              <label
                htmlFor="review"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Short Description
              </label>
              <div className="mt-2">
                <input
                  id="review"
                  {...register("review", {
                    required: "review is required",
                  })}
                  type="text"
                  autoComplete="address-level2"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="yearOfPublishing"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Year of Publishing
              </label>
              <div className="mt-2">
                <input
                  id="yearOfPublishing"
                  {...register("yearOfPublishing", { required: true })}
                  type="number"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="totalPages"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Number Of Page
              </label>
              <div className="mt-2">
                <input
                  id="totalPages"
                  {...register("totalPages", { required: true })}
                  type="number"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="rating"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Rating
              </label>
              <div className="mt-2">
                <input
                  id="rating"
                  {...register("rating", {
                    required: true,
                    min: { value: 1 },
                    max: { value: 5 },
                  })}
                  type="number"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Book Content
              </label>
              <div className="mt-2">
                <textarea
                    placeholder="Static text providing more information about the book."
                  id="about"
                  {...register("description")}
                  rows={3}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-12">
          <button className="btn btn-wide btn-primary ">Add Book</button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
