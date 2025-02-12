import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";

const Details = () => {
  const { user } = useContext(AuthContext);
  const [details, setDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/book_details/${id}`)
      // .get(`https://book-nest-server-wine.vercel.app/book_details/${id}`)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);
  

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
  } = details;

  const handleQuantity = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const returnDate = new Date(form.date.value).toISOString().split("T")[0];
    const borrowDate = new Date().toISOString().split("T")[0];

    if (returnDate <= borrowDate) {
      toast.error("Please enter a valid return date.", {
        position: "top-center",
      });
      return;
    }
    if (quantity <= 0) {
      toast.error("The book is currently unavailable.", {
        position: "top-center",
      });
      return;
    }
  
    
        try {
          // Add borrowed book entry
          const newData = {
            bookId: _id,
            image,
            bookName,
            author,
            review,
            totalPages,
            category,
            publisher,
            yearOfPublishing,
            quantity,
            email,
            userName: name,
            borrowDate,
            returnDate,
          };

          const borrowResponse = await axios.post(
            `http://localhost:5000/borrow_books`,
            // "https://book-nest-server-wine.vercel.app/borrow_books",
            newData
          );
          if (borrowResponse.data.message) {
            toast.error(borrowResponse.data.message, { position: "top-center" });
            document.getElementById("my_modal_4").close();
            return;
          }
          if (borrowResponse.data.insertedId) {
            toast.success("You borrowed the book successfully!", {
              position: "top-center",
            });
            // Update book quantity

            const updateResponse = await axios.patch(
              `http://localhost:5000/book_details/${id}`
            );
            if (updateResponse.data.modifiedCount) {
              setDetails((prev) => ({
                ...prev,
                quantity: prev.quantity - 1,
              }));
            }
            form.reset(); // Reset form
            document.getElementById("my_modal_4").close(); // Close modal
          }
        } catch (error) {
          console.error(error);
          toast.error("Something went wrong. Please try again later.", {
            position: "top-center",
          });
        }
   
   
  };

  return (
    <div>
      <div className="grid lg:grid-cols-4 items-center justify-center gap-4 my-20  px-4">
        <div className="p-0 md:flex md:justify-center items-center ">
          <img
            src={image}
            className="max-w-sm rounded-lg  h-full w-full object-contain"
            alt={`${bookName} cover photo`}
          />
        </div>
        <div className="text-left my-5 text-wrap lg:col-span-3  p-5  ">
          <h1 className="text-4xl font-bold mb-4">{bookName}</h1>

          <p className="py-5">{review}</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-2 border rounded-lg">
              <p className="font-semibold py-1">Author </p>
              <p>{author}</p>
            </div>
            <div className="p-2 border rounded-lg">
              <p className="py-1 font-semibold">Published By </p>
              <p>{publisher}</p>
            </div>
            <div className="p-2 border rounded-lg">
              <p className="py-1 font-semibold">Year of Publish</p>
              <p>{yearOfPublishing}</p>
            </div>
            <div className="p-2 border rounded-lg">
              <p className="py-1 font-semibold">Category</p>
              <p className="">{category}</p>
            </div>
            <div className="p-2 border rounded-lg">
              <p className="py-1 font-semibold">Available Copies</p>
              <p className="  ">{quantity}</p>
            </div>
          </div>

          <div className="flex w-full  justify-center">
            <button
              className="btn btn-primary btn-wide py-2 mt-5"
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              Borrow
            </button>
          </div>
        </div>
      </div>

      {/* Borrow Modal */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg text-center">Borrow Form</h3>

          <div className="px-9">
            <button
              onClick={() => document.getElementById("my_modal_4").close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
            <form onSubmit={handleQuantity}>
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
                    placeholder="Email"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Return Date</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <button type="submit" className="mt-5 btn btn-primary btn-wide">
                  Borrow
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Details;
