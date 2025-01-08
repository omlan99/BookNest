import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import axios from "axios";

const Details = () => {
  const { user } = useContext(AuthContext);
  const {
    _id,
    image,
    bookName,
    author,
    review,
    totalPages,
    category,
    publisher,
    yearOfPublishing,
    quantity,
  } = useLoaderData();
  const newData = {
    _id,
    image,
    bookName,
    author,
    review,
    totalPages,
    category,
    publisher,
    yearOfPublishing,
    quantity,
    email: user.email,
    userName: user.displayName,
  };

  const handleQuantity = (e, id) => {
    e.preventDefault();
    const form = e.target;
    const date = new Date(form.date.value);
    const currentDate = new Date();

    console.log("Current Date:", currentDate);
    console.log("Input Date:", date);
    console.log(id);
    if (date > currentDate) {
      if (quantity > 0 && date > currentDate) {
        fetch(`http://localhost:5000/book_details/${_id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          // body : JSON.stringify()
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            console.log(data.modifiedCount);
            if (data.modifiedCount > 0) {
              alert("book has been added to you account");
            }
          });
      } else {
        alert("the book will be avialable soon");
      }
    } else {
      alert("enter a valid date");
    }
  };
  const handleClick = () => {
    axios.get('http://localhost:5000/borrow_books', newData)
    .then(res => console.log(res.data))
  //   fetch(`http://localhost:5000/borrow_books`, {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(newData),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  };
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-10 py-8 px-4">
        <div className="h-[500px] w-[380px] overflow-hidden m-5">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
        <div className="text-left my-5 text-wrap  w-1/2 px-4">
          <h1 className="text-5xl font-bold mb-4">{bookName}</h1>
          <p className="py-1 font-semibold">Overview :</p>
          <p>{review}</p>
          <p className="py-1 font-semibold">Author : {author}</p>
          <p className="py-1 font-semibold">Published By : {publisher}</p>
          <p className="py-1 font-semibold">
            Year of Publish : {yearOfPublishing}
          </p>
          <p className="py-1 font-semibold">Category : {category}</p>
          <p className="py-1 font-semibold">Available Copy : {quantity}</p>

          <button
            className="btn btn-primary btn-wide py-2 mt-5"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            Borrow
          </button>
        </div>
      </div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Borrow form</h3>

          <div className="px-9">
            <button
              onClick={() => document.getElementById("my_modal_4").close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
            <form onSubmit={(e) => handleQuantity(e, _id)} className=" ">
              <div className="grid items-center">
                <div>
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    defaultValue={user?.displayName}
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    defaultValue={user?.email}
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Retrun Date</span>
                  </label>
                  <input
                    type="date"
                    placeholder=""
                    name="date"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>

              {/* if there is a button, it will close the modal */}
              <button type="submit" className="mt-5 btn">
                Borrow
              </button>
              <button onClick={handleClick}> Send Data</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Details;
