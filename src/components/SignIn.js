import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function SignIn({ closeModel }) {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const onSubmit = async (values, { resetForm }) => {
    console.log(values);
  };

  const ValidateSchema = Yup.object().shape({
    email: Yup.string().email().required("Required"),
    password: Yup.string().required("Required"),
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
        className="form width300 "
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
            <h3 className="ms-3">Sign In</h3>
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
          <div className="inputDiv my-2 mx-1">
            <label>Email</label>
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
          <div className="inputDiv my-2 mx-1">
            <label>Password</label> <br />
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
          <div className="d-flex ms-3">
            <input className="me-1 mt-1" type="checkbox"></input>
            Remember the password
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 my-1 ml-2 mt-3"
          >
            Sign In
          </button>
          <p>
            Don't have any account?{" "}
            <u
              onClick={() => {
                closeModel(false);
              }}
            >
              Sign Up
            </u>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
