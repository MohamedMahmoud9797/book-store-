import React, { Fragment } from "react";

const BookInfo = ({ info }) => {
  return (
    <>
      {info ? (
        <div>
          <h2>Book Details</h2>
          <p className="fw-bold"> title:{info.title}</p>
          <p className="fw-light">{info.descripion}:</p>
          <p className="fst-italic">{info.price}:</p>
        </div>
      ) : (
        <div>
          <div className="alert alert-secondary" role="alert">
            There is no book selected yet. Please select one!
          </div>
        </div>
      )}
    </>
  );
};

export default BookInfo;
