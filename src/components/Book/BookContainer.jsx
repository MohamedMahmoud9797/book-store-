import React, { Fragment, useEffect, useState } from "react";
import BookInfo from "./BookInfo";
import BooksList from "./BooksList";
import { useDispatch, useSelector } from "react-redux";
import "./book.css";
import { deleteBooks, getBooks } from "./Store/book.slice";
const PostContainer = () => {
  const { isLoading } = useSelector((state) => state.book);
  const { books } = useSelector((state) => state.book);

  const dispactch = useDispatch();
  useEffect(() => {
    dispactch(getBooks());
  }, [dispactch]);

  const [selectedBook, setSelectedBook] = useState();
  const getSingleBook = (id) => {
    const selectedBook = books.filter((item) => item.id === id);
    setSelectedBook((prv) => {
      return { ...prv, ...selectedBook };
    });
  };

  return (
    <Fragment>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <BooksList
            isLoading={isLoading}
            books={books}
            dispactch={dispactch}
            deleteBooks={deleteBooks}
            getSingleBook={getSingleBook}
          />
        </div>
        <div className="col side-line">
          <BookInfo info={selectedBook} />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
