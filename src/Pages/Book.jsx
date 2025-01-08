import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { _id, image, bookName, author, tags, rating, quantity } = book;
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure className="overflow-hidden h-[250px] w-[250px]">
        <img
          src={image}
          alt={bookName}
          className="object-cover object-center"
        />
      </figure>
      <div className="card-body flex-grow">
        <h2 className="card-title">{bookName}!</h2>
        <p className="text-left font-semibold">Author : {author}</p>
        <p className="font-semibold text-left">Available Copy : {quantity}</p>
        <div className="flex gap-3">
          {tags.map((tag) => (
            <div className="badge badge-outline">{tag}</div>
          ))}
        </div>

        <div className="card-actions justify-end">
          <Link to={`/book_details/${_id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
 
export default Book;
