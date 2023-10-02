/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./contextProvider/ContextProvider";

const Nav = () => {
  const {user, logOut} = useContext(UserContext);

  const handleLogOut = () => {
    logOut()
    .then( () =>{

    })
    .catch(error => console.error(error.message));
  }

  return (
    <div className="navbar bg-base-300">
      <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
      <Link to="/" className="btn btn-ghost normal-case text-xl">Home</Link>
      {
        user ? <Link to="/profile" className="btn btn-ghost normal-case text-xl">Profile</Link> : 
        <>
          <Link to="/login" className="btn btn-ghost normal-case text-xl">Login</Link>
          <Link to="/register" className="btn btn-ghost normal-case text-xl">Register</Link>
        </>
      }
      {user ? 
      <>
        <span>{user.email}</span>
        <button onClick={handleLogOut} className="btn">Log Out</button>
      </> : 
      <Link to="/login" className="btn">Login</Link>
      }
    </div>
  );
};

export default Nav;
