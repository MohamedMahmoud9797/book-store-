import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { isLogInOut } from "./Book/Store/auth.slice";

const Header = () => {
  const dispactch = useDispatch();

  const { error } = useSelector((state) => state.book);
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <>
      {error && <div className="alret alert-danger mb -1 ">{error}</div>}
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">My Books</span>
        <button
          className="btn btn-outline-primary"
          type="submit"
          onClick={() => dispactch(isLogInOut())}
        >
          {isLoggedIn ? "login" : "logout"}
        </button>
      </nav>
    </>
  );
};

export default Header;
