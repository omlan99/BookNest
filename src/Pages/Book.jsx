import { Link } from "react-router-dom";

const Book = ({ book }) => {
  console.log(book);
  const {
    _id,
    image,
    bookName,
    category,
    publisher,
    author,
    tags,
    rating,
    quantity,
  } = book;
  return (
    <div className="card card-compact bg-base-100 border shadow-md ">
      <figure className="overflow-hidden h-[200px] p-5 ">
        <img
          src={image}
          alt={bookName}
          className="max-w-sm rounded-lg  h-full w-full object-contain"
        />
      </figure>
      <div className="card-body h-{300px} gap-0 flex-grow">
        <h2 className="card-title gap-0 text-lg font-medium">{bookName}</h2>
        <p className="text-left font-semibold"> by {author}</p>
        {/* <p className="font-semibold text-left"> Published by {publisher}</p> */}
        <div className="flex gap-3 pt-2">
          {tags?.map((tag) => (
            <div className="badge badge-outline">{tag}</div>
          ))}
        </div>

        <div className="card-actions justify-end">
          <Link to={`/update/${_id}`}>
            <button className="btn btn-primary mt-2">
              Update
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Book;
