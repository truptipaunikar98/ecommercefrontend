import React from "react";
import { Link } from "react-router-dom";

function Navsearch() {
  return (
    <div className="row ">
      <div className="row col-lg-6 col-md-12 p-1 ">
        <div className=" text-center col-md-2 col-4 ">
          <Link  to='/menswear'>
            <img
              className="imgHeight "
              src="https://cdn-icons-png.flaticon.com/512/4086/4086679.png"
              alt=""
            ></img>
            <p className="mb-0">Mens Wear</p>
          </Link>
        </div>
        <div className=" text-center col-md-2 col-4">
          <Link to='/womenswear'>
            <img
              className="imgHeight "
              src="https://www.shutterstock.com/image-vector/decorative-fashion-girl-beauty-salon-600w-44862619.jpg"
              alt=""
            ></img>
            <p className="mb-0">Womens Wear</p>
          </Link>
        </div>
        <div className=" text-center col-md-2 col-4">
          <Link to='/kidswear'>
            <img
              className="imgHeight "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0EFTR2STt3ZoV0vRvbE6A5a83lk7C-vY-Uw&usqp=CAU"
              alt=""
            ></img>
            <p className="mb-0">Kids Wear</p>
          </Link>
        </div>
        <div className=" text-center col-md-2 col-4">
          <Link to='/footwear'>
            <img
              className="imgHeight "
              src="https://rukminim1.flixcart.com/image/832/832/krntoy80/kids-shoe/l/o/l/12c-combo-2-1663-1667-world-wear-footwear-original-imag5edftfvq4pxz.jpeg?q=70"
              alt=""
            ></img>
            <p className="mb-0">Foot Wear</p>
          </Link>
        </div>
        <div className=" text-center col-md-2 col-4">
          <Link to='/essential'>
            <img
              className="imgHeight "
              src="https://www.heart.org/-/media/Healthy-Living-Images/Healthy-Lifestyle/testLE8.jpg?h=530&iar=0&mw=960&w=900&hash=7BC68EC1873A32E5D9F857D0A6FFB3EC"
              alt=""
            ></img>
            <p className="mb-0">Essential</p>
          </Link>
        </div>
        <div className=" text-center col-md-2 col-4">
          <Link to='/trending'>
            <img
              className="imgHeight "
              src="https://img.freepik.com/free-vector/clothes-rack-white-background_1308-43033.jpg"
              alt=""
            ></img>
            <p className="mb-0">Trending</p>
          </Link>
        </div>
      </div>
      <div className=" row col-lg-6 col-md-12 m-auto d-flex justify-content-between p-1">
        <div className="col-9 my-auto">
          <input
            className="w-100 form-control"
            type="text"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="col-3 my-auto text-right">
          <div className="dropdown">
            <button
              className="btn btn-info w-100   dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
             Filter
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navsearch;
