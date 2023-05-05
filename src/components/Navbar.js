import React from "react";
import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";

function Navbar() {
  const [signinModel, setsigninModel] = useState(false);
  const [signupModel, setsignupModel] = useState(false);


  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            StyleBazaar
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto  mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About Us
                </a>
              </li>
            </ul>
            <button
              className="btn btn-success btn-sm"
              onClick={() => {
                setsigninModel(true);
                setsignupModel(false)
              }}
              type="submit"
            >
              SignIn
            </button>
            <button
              className="btn btn-warning btn-sm ms-1 "
              onClick={() => {
                setsignupModel(true);
                setsigninModel(false);
              }}
              type="submit"
            >
              SignUp
            </button>
          </div>
        </div>
      </nav>
      {signinModel && <SignIn closeModel={setsigninModel} />}
      {signupModel && <SignUp closeModel={setsignupModel} />}
    </div>
  );
}

export default Navbar;
