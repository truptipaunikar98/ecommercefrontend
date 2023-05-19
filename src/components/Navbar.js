import React from "react";
import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";

function Navbar() {
  const [signinModel, setsigninModel] = useState(false);
  const [signupModel, setsignupModel] = useState(false);
  // const [userButton, setUserButton] = useState(false);
  // setUserButton(true);

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
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  About Us
                </Link>
              </li>
            </ul>
            {
              false? <div>
              <button
                className="btn btn-success btn-sm"
                onClick={() => {
                  setsigninModel(true);
                  setsignupModel(false);
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
            </div>:<div>

          <button className="btn btn-light btn-sm me-1">
          <i class="fa-solid fa-cart-shopping"></i>
          <b className="text-success ms-1">0</b>
          </button>
          
                <Link  to="/userprofile" className="btn btn-light btn-sm">
              {JSON.parse(localStorage.getItem("logedUser"))[0].name} 
                </Link>
              </div>
            }  
          </div>
        </div>
      </nav>
      {signinModel && <SignIn closeModel={setsigninModel} />}
      {signupModel && <SignUp closeModel={setsignupModel} />}
    </div>
  );
}

export default Navbar;
