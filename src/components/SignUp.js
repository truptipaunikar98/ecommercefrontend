import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function SignUp({ closeModel }) {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    pincode: "",
    address: ""
  });
  const onSubmit = async (values, { resetForm }) => {
    console.log(values);
  };

  const ValidateSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email().required("Required"),
    password: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    pincode: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
  });
  const formik = useFormik({
    initialValues: value,
    validateOnBlur: true,
    onSubmit,
    validationSchema: ValidateSchema,
    enableReinitialize: true,
  });
  return (
    <div className=" popupBg">
      <div
        className="form "
        style={{
          transform: "translate(-50%, -50%)",
          zIndex: "1",
          position: "absolute",
          top: "50%",
          left: "50%",
          backgroundColor: "whitesmoke",
        }}
        id="form"
      >
        <form onSubmit={formik.handleSubmit}>
          <div className="d-flex justify-content-between">
            <h3 className="ms-3">Sign Up</h3>
            <span
              onClick={() => {
                closeModel(false);
              }}
              type="button"
              className=" text-danger"
            >
              X
            </span>
          </div>
          <div className="row my-2">
            <div className="inputDiv col-md-6 col-sm-12">
              <label>Name</label>
              <br />
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.name && formik.errors.name ? (
              <div className="formik-errors text-danger fontSize15">
                {formik.errors.name}
              </div>
            ) : null}
            <div className="inputDiv col-md-6 col-sm-12">
              <label>Password</label>
              <br />
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.password && formik.errors.password ? (
              <div className="formik-errors text-danger fontSize15">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <div className="row my-2">
            <div className="inputDiv col-md-6 col-sm-12">
              <label>Email Address</label>
              <br />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.email && formik.errors.email ? (
              <div className="formik-errors text-danger fontSize15">
                {formik.errors.email}
              </div>
            ) : null}
            <div className="inputDiv col-md-6 col-sm-12">
              <label>Phone Number</label>
              <br />
              <input
                type="number"
                name="phone"
                placeholder="Enter Your Phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.phone && formik.errors.phone ? (
              <div className="formik-errors text-danger fontSize15">
                {formik.errors.phone}
              </div>
            ) : null}
          </div>
          <hr />
          <h6 className="m-2">Address (optional)</h6>
          <div className="row my-2">
            <div className="inputDiv col-md-6 col-sm-12">
              <label>City</label>
              <br />
              <input
                type="text"
                name="city"
                placeholder="Enter Your City"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.city && formik.errors.city ? (
              <div className="formik-errors text-danger fontSize15">
                {formik.errors.city}
              </div>
            ) : null}
            <div className="inputDiv col-md-6 col-sm-12">
              <label>Pincode</label>
              <br />
              <input
                type="number"
                name="pincode"
                placeholder="Enter Your Pincode"
                value={formik.values.pincode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.pincode && formik.errors.pincode ? (
              <div className="formik-errors text-danger fontSize15">
                {formik.errors.pincode}
              </div>
            ) : null}
          </div>
          <div className="inputDiv my-2">
            <label>Address</label>
            <br />
            <input
              type="address"
              name="address"
              placeholder="Enter Your Address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.address && formik.errors.address ? (
            <div className="formik-errors text-danger fontSize15">
              {formik.errors.address}
            </div>
          ) : null}
          <button
            type="submit"
            className="btn btn-primary w-100  my-1 ml-2 mt-3"
          >
            Sign Up
          </button>
          <p>
            Already have an account?{" "}
            <u
              onClick={() => {
                closeModel(false);
              }}
            >
              Sign In
            </u>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
