import React from "react";
import { Link } from "react-router-dom";

function Navsearch() {
  return (
    <div className="row ">
      <div className="row col-lg-6 col-md-12 p-1  ">
        <div className=" text-center col-md-2 col-4 ">
          <Link style={{textDecoration:"none", color:"black"}} to="/menswear">
            <img
              className="imgHeight "
              src="https://cdn.icon-icons.com/icons2/2121/PNG/512/avatar_people_man_boy_child_icon_131271.png"
              alt=""
            ></img>
            <p className="mb-0">Mens Wear</p>
          </Link>
        </div>
        <div className=" text-center col-md-2 col-4">
          <Link style={{textDecoration:"none", color:"black"}} to="/womenswear">
            <img
              className="imgHeight "
              src="https://www.shutterstock.com/image-vector/decorative-fashion-girl-beauty-salon-600w-44862619.jpg"
              alt=""
            ></img>
            <p className="mb-0">Womens Wear</p>
          </Link>
        </div>
        <div className=" text-center col-md-2 col-4">
          <Link style={{textDecoration:"none", color:"black"}} to="/kidswear">
            <img
              className="imgHeight "
              src="https://cdn-icons-png.flaticon.com/512/167/167142.png"
              alt=""
            ></img>
            <p className="mb-0">Kids Wear</p>
          </Link>
        </div>
        <div className=" text-center col-md-2 col-4">
          <Link style={{textDecoration:"none", color:"black"}} to="/footwear">
            <img
              className="imgHeight "
              src="https://cdn-icons-png.flaticon.com/512/2362/2362563.png"
              alt=""
            ></img>
            <p className="mb-0">Foot Wear</p>
          </Link>
        </div>
        <div className=" text-center col-md-2 col-4">
          <Link style={{textDecoration:"none", color:"black"}} to="/essential">
            <img
              className="imgHeight "
              src="https://static.thenounproject.com/png/692176-200.png"
              alt=""
            ></img>
            <p className="mb-0">Essential</p>
          </Link>
        </div>
        <div className=" text-center col-md-2 col-4">
          <Link style={{textDecoration:"none", color:"black"}} to="/trending">
            <img
              className="imgHeight "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg7Mdse040D8UC4hGh69MbLC_FxUBUIZnt8zxl_pogGMJtIA90i0QjSa_BfWxYslhit7A&usqp=CAU"
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
                  Price
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Rating
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  category
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
