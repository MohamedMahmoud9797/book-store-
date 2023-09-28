import React from "react";
import { useSelector } from "react-redux";

const BooksList = ({
  isLoading,
  books,
  dispactch,
  deleteBooks,
  getSingleBook,
}) => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  const bookList =
    books &&
    books.map((item) => (
      <li
        className="list-group-item d-flex  justify-content-between align-items-center"
        key={item.id}
      >
        <div>{item.title}</div>
        <div className="btn-group" role="group">
          <button
            type="button"
            className="btn btn-primary"
            disabled={!isLoggedIn}
            onClick={() => getSingleBook(item.id)}
          >
            Read
          </button>
          <button
            type="button"
            className="btn btn-danger"
            disabled={!isLoggedIn}
            onClick={() => dispactch(deleteBooks(item.id))}
          >
            Delete
          </button>
        </div>
      </li>
    ));
  return (
    <div>
      <h2>Books List</h2>
      {isLoading ? "...loading" : <ul className="list-group">{bookList}</ul>}
    </div>
  );
};

export default BooksList;
