import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="row p-sm-3  p-md-5 text-center bg-dark text-white">
      <div className="col-md-3 col-sm-12 p-3  ">
        <h6>Quick Links</h6>
        <div className="d-flex justify-content-around">
          <Link style={{textDecoration:"none", color:"white"}} to="/menswear">Mens</Link>
          <Link style={{textDecoration:"none", color:"white"}} to="/womenswear">Womens</Link>
        </div>
        <div className="d-flex justify-content-around">
          <Link style={{textDecoration:"none", color:"white"}} to="/kidswear">Kids Wear</Link>
          <Link style={{textDecoration:"none", color:"white"}} to="/footwear">Foot Wear</Link>
        </div>
      </div>
      <div className="col-md-3 col-sm-12 p-3">
        <h6>About Us</h6>
        <p>
          An E-commerce platform that you <br /> can build livelihood from
        </p>
      </div>
      <div className="col-md-3 col-sm-12 p-3 ">
        <h6>Follow Us</h6>
        <img
          className="logoHeight m-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
        ></img>
        <img
          className="logoHeight m-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPJGedGIDPnUD2ZtLvTUFTfl0FciuAyER5ug&usqp=CAU"
        ></img>
      </div>
      <div className="col-md-3 col-sm-12 p-3">
        <h6>Contact Us</h6>
        <p>Phone-9370472396</p>
      </div>
    </div>
  );
}

export default Footer;
