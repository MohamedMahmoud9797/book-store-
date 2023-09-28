import React, { useRef } from "react";
import { insertBooks } from "./Book/Store/book.slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Addform = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  let title = useRef(null);
  let price = useRef(null);
  let description = useRef(null);
  const handelSubmit = (e) => {
    e.preventDefault();
    let data = {
      title: title.current.value,
      price: price.current.value,
      description: description.current.value,
    };
    dispatch(insertBooks(data)).then(() => {
      // Reset form fields here after the dispatch is complete
      title.current.value = "";
      price.current.value = "";
      description.current.value = "";
    });
  };

  return (
    <div className="row">
      <div className="col-6 offset-3 mt-3">
        <h2>Insert Book</h2>
        <form onSubmit={handelSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              ref={title}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              required
              ref={price}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Description">Description</label>
            <textarea
              className="form-control"
              id="Description"
              rows="3"
              required
              ref={description}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!isLoggedIn}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;
