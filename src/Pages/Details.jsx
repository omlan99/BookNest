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
      .get(`https://book-nest-server-wine.vercel.app/book_details/${id}`)
      .then((res) => setDetails(res.data))
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
    const date = new Date(form.date.value);
    const currentDate = new Date();

    if (date > currentDate) {
      if (quantity > 0) {
        try {
          // Update book quantity
          const updateResponse = await axios.patch(
            `https://book-nest-server-wine.vercel.app/book_details/${_id}`,
            {}
          );

          if (updateResponse.data.modifiedCount > 0) {
            // Add borrowed book entry
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
              quantity: quantity - 1,
              email,
              userName: name,
              returnDate: new Date().toISOString().split("T")[0],
            };

            const borrowResponse = await axios.post(
              "https://book-nest-server-wine.vercel.app/borrow_books",
              newData
            );

            if (borrowResponse.data) {
              toast.success("Book has been added to your account!", {
                position: "top-center",
              });
              form.reset(); // Reset form
              document.getElementById("my_modal_4").close(); // Close modal
            }
          } else {
            toast.error("Failed to borrow the book. Please try again.", {
              position: "top-center",
            });
          }
        } catch (error) {
          console.error(error);
          toast.error("Something went wrong. Please try again later.", {
            position: "top-center",
          });
        }
      } else {
        toast.error("The book is currently unavailable.", {
          position: "top-center",
        });
      }
    } else {
      toast.error("Please enter a valid return date.", {
        position: "top-center",
      });
    }
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-10 py-8 px-4">
        <div className="h-[500px] w-[380px] overflow-hidden m-5">
          <img
            src={image}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Book Cover"
          />
        </div>
        <div className="text-left my-5 text-wrap w-1/2 px-4">
          <h1 className="text-5xl font-bold mb-4">{bookName}</h1>
          <p className="py-1 font-semibold">Overview:</p>
          <p>{review}</p>
          <p className="py-1 font-semibold">Author: {author}</p>
          <p className="py-1 font-semibold">Published By: {publisher}</p>
          <p className="py-1 font-semibold">
            Year of Publish: {yearOfPublishing}
          </p>
          <p className="py-1 font-semibold">Category: {category}</p>
          <p className="py-1 font-semibold">Available Copies: {quantity}</p>

          <button
            className="btn btn-primary btn-wide py-2 mt-5"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            Borrow
          </button>
        </div>
      </div>

      {/* Borrow Modal */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Borrow Form</h3>

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

              <button type="submit" className="mt-5 btn">
                Borrow
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Details;
