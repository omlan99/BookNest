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
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => console.error(err));
  }, [id, axios]);
  console.log(details);

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
          console.log("button clicked");
          const updateResponse = await axios.patch(
            // `http://localhost:5000/book_details/${id}`,
            `https://book-nest-server-wine.vercel.app/book_details/${_id}`
          );

          if (updateResponse.data && updateResponse.data.modifiedCount) {
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
      <div className="grid lg:grid-cols-4 items-center justify-center gap-10 my-20">
        <div className="p-5 md:flex md:justify-center">
          <img
            src={image}
            className="max-w-sm rounded-lg shadow-2xl h-full w-full object-contain"
            alt={`${bookName} cover photo`}
          />
        </div>
        <div className="text-left my-5 text-wrap lg:col-span-3  p-5  ">
          <h1 className="text-5xl font-bold mb-4">{bookName}</h1>

          <p className="py-5">{review}</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-2 border ">
              <p className="font-semibold py-1">Author </p>
              <p>{author}</p>
            </div>
            <div className="p-2 border ">
              <p className="py-1 font-semibold">Published By </p>
              <p>{publisher}</p>
            </div>
            <div className="p-2 border ">
              <p className="py-1 font-semibold">
                Year of Publish
              </p>
              <p >
               {yearOfPublishing}
              </p>
            </div>
            <div className="p-2 border ">
              <p className="py-1 font-semibold">Category</p>
              <p className="">{category}</p>
            </div>
            <div className="p-2 border ">
              <p className="py-1 font-semibold">Available Copies</p>
              <p className="  ">{quantity}</p>
            </div>
          </div>

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
