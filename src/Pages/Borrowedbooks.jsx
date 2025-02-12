import axios from "axios";
import { AuthContext } from "../Context/AuthProvider";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Oval } from "react-loader-spinner";
const Borrowedbooks = () => {
  const { user } = useContext(AuthContext);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(borrowedBooks);
  useEffect(() => {
    if (!user?.email) return;
    axios
      .get(
        `http://localhost:5000/borrow_books?email=${user.email}`
        // `https://book-nest-server-wine.vercel.app/borrow_books?email=${user.email}`
      )
      .then((res) => {
        console.log(res.data);
        setBorrowedBooks(res.data);
        setLoading(false);
      });
  }, [user?.email, setBorrowedBooks]);

  const handleReturn = (id, bookId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to Return the book!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, return it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Returned!",
          text: "book has been returned.",
          icon: "success",
        });
        axios.delete(`http://localhost:5000/return/${id}`).then((res) => {
          if (res.data.deletedCount) {
            // console.log(res.data);
          }
        });
        axios.patch(`http://localhost:5000/return/${bookId}`);
        setBorrowedBooks(
          borrowedBooks.filter((borrowedBook) => borrowedBook._id !== id)
        );
      }
    });
  };
  return (
    <div className=" mt-[100px] mb-20">
      {borrowedBooks.length > 0 ? (
        loading ? (
          <>
            <div className="w-full min-h-screen flex justify-center items-center">
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
            <>
              <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-6 px-5">
                {borrowedBooks.map((borrowedBook, index) => (
                  <div
                    key={index}
                    className="card card-compact bg-base-100 shadow-md"
                  >
                    <figure className="overflow-hidden h-[200px] p-5">
                      <img
                        src={borrowedBook.image}
                        alt={borrowedBook.bookName}
                        className="max-w-sm rounded-lg  h-full w-full object-contain"
                      />
                    </figure>
                    <div className="card-body flex-grow">
                      <h2 className="card-title text-lg">
                        {borrowedBook.bookName}!
                      </h2>
                      <p className="text-left font-semibold">
                        by {borrowedBook.author}
                      </p>

                      <p className="text-left ">{borrowedBook.category}</p>
                      <div>
                        <p>Borrowed on {borrowedBook.borrowDate}</p>
                        <p className="py-2">
                          Returnning time {borrowedBook.returnDate}
                        </p>
                      </div>
                      <div className="card-actions justify-end mt-2">
                        {/* <Link to={`/book_details/${book._id}`}> */}
                        <button
                          onClick={() =>
                            handleReturn(borrowedBook._id, borrowedBook.bookId)
                          }
                          className="btn btn-primary"
                        >
                          Return
                        </button>
                        {/* </Link> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          </>
        )
      ) : (
        <>
          <div className="w-full  min-h-screen flex justify-center items-center">
            <p className="text-2xl font-bold">
              You did not borrowed any books yet
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Borrowedbooks;
