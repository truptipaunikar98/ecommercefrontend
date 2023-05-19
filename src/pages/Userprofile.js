import {useState, useEffect} from "react";
import "./pages.css";
import { Link, json } from "react-router-dom";
import List from "../components/List";

function Userprofile() {
  const [userDetail, setUserDetail]=useState("")
  useEffect(()=>{
  
    setUserDetail(JSON.parse(localStorage.getItem("logedUser"))[0])
  }, [])
  console.log(userDetail)
  return (
    <div>
      <div className="row mx-5 my-5 px-6 py-5  ">
        <div className=" col-sm-12 col-md-6 col-lg-3 ">
          <div className="userDiv d-flex p-3 mx-5">
            <img
              className="userImg"
              src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/Box._CB485927553_.png"
              alt=""
            ></img>
            <h5 className="mt-2 m-4 ">Your Orders</h5>
          </div>
        </div>
        <div className=" col-sm-12 col-md-6 col-lg-3 ">
          <a href="#loginDetail">
            <div className="userDiv d-flex p-3 mx-5">
              <img
                className="userImg"
                src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/address-map-pin._CB485934183_.png"
              ></img>
              <h5 className=" mt-2 m-2 ">Personal Details</h5>
            </div>
          </a>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <Link to="/contact">
            <div className="userDiv d-flex p-3 mx-5">
              <img
                className="userImg"
                src="https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/self-service/contact_us._CB623781998_.png"
                alt=""
              ></img>
              <h5 className="mt-2 m-4">Contact Us</h5>
            </div>
          </Link>
        </div>
      </div>
      {/* cardDiv end */}



      {/* Your Order start */}
      <div className="text-center ">
        <div className="p-3">
          <p>0 order placed in last 30 days</p>
        </div>
        <List
          heading="Your Order"
          headingBg="bg-dark"
          headingText="text-white"
          headingCenter="text-center"
        />
      </div>
      <List heading="Items added to the cart" headingBg="bg-dark" headingText="text-white" headingCenter="text-center"/>
      {/* Your Order end */}

      {/* login details start */}
      <div className="mb-4 d-flex justify-content-center ">
      <div id="loginDetail" className="border width350 rounded ">
      <div className="text-center m-2">
          <h3>Personal Details</h3>
        </div>
      <div className="mx-auto my-3  rounded p-2">
        <form className="userForm p-3 ">
        <label>Name</label>
          <input value={userDetail.name} className="form-control " type="text" name="user_name" />
          <br />
          <label>Email</label>
          <input value={userDetail.email}  className=" form-control " type="email" name="user_email" />
          <br />
          <div className="row my-2">
            <div className=" col-md-6 col-sm-12">
              <label>City</label>
              <br />
              <input value={userDetail.city}  className="form-control" type="text" name="city" />
            </div>
            <div className=" col-md-6 col-sm-12">
              <label>Pincode</label>
              <br />
              <input value={userDetail.pincode}  className="form-control" type="number" name="pincode" />
            </div>
          </div>
          <div className=" my-2">
            <label>Address</label>
            <br />
            <input value={userDetail.address}  className="form-control" type="address" name="address" />
          </div>
          <button type="submit" value="Send" className="btn btn-primary w-100 mt-2 ">
            Edit
          </button>
        </form>
      </div>
      </div>
      </div>
      {/* login details end */}
    </div>
  );
}

export default Userprofile;
