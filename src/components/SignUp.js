import React from "react";
import { useState  } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/Firebase";

function SignUp({ closeModel }) {
  const form = useRef();
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    pincode: "",
    address: "",
  });
  const userCollectionRef = collection(db, "users");
  const otp = 39475;
  const [showOtp, setShowOtp] = useState(false);
  const [nameE, setNameE]=useState("")
  const [emailE, setEmailE]=useState("")
  const [otp1, setOtp1]=useState("")
  const [otp2, setOtp2]=useState("")
  const [otp3, setOtp3]=useState("")
  const [otp4, setOtp4]=useState("")
  const [otp5, setOtp5]=useState("")
  const [userValue, setUserValue]=useState()
  const [btnTog, setBtnTog]=useState(false)
  const onSubmit = async (values, { resetForm }) => {
    setUserValue(values)
    // await addDoc(userCollectionRef, { values });
    // resetForm();
    setShowOtp(true);
  };

  const matchOtp=async()=>{
    console.log(otp1+""+otp2+""+otp3+""+otp4+""+otp5, otp)

    if(otp==otp1+""+otp2+""+otp3+""+otp4+""+otp5){
      await addDoc(userCollectionRef,  userValue );
    }
    else{
    alert("please enter correct otp")
    }
  }

  const sendEmail =(e)=>{
    e.preventDefault();
    console.log(form.current)
    emailjs.sendForm('service_lixvc56', 'template_fb4c95h', form.current, 'y9yMb0PMAMKEaUWO1')
    .then((result) => {
        console.log(result.text);
        setBtnTog(true)
    }, (error) => {
        console.log(error.text);
    });
  }

  const ValidateSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email().required("Required"),
    password: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    city: Yup.string(),
    pincode: Yup.string(),
    address: Yup.string(),
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
        className="form popupBoxShadow "
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
        {showOtp ? (
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
              <div className="d-flex justify-content-between">
                <h3 className="ms-3">Verify email</h3>
                <span
                  onClick={() => {
                    closeModel(false);
                  }}
                  type="button"
                  className=" text-danger"
                >
                  <i class="fa-regular fa-circle-xmark"></i>
                </span>
              </div>
              <br />
              <p>Enter 2FA OTP</p>
             
              <div className="border p-1 mb-5 text-center">
                <input
                  className="text-center" value={otp1} onChange={(e)=>setOtp1(e.target.value)}
                  style={{ height: "25px", width: "30px", margin: "4px" }}
                  type="text"
                />
                <input
                  className="text-center" value={otp2} onChange={(e)=>setOtp2(e.target.value)}
                  style={{ height: "25px", width: "30px", margin: "4px" }}
                  type="text"
                />
                <input
                  className="text-center" value={otp3} onChange={(e)=>setOtp3(e.target.value)}
                  style={{ height: "25px", width: "30px", margin: "4px" }}
                  type="text"
                />
                <input
                  className="text-center" value={otp4} onChange={(e)=>setOtp4(e.target.value)}
                  style={{ height: "25px", width: "30px", margin: "4px" }}
                  type="text"
                />
                <input
                  className="text-center" value={otp5} onChange={(e)=>setOtp5(e.target.value)}
                  style={{ height: "25px", width: "30px", margin: "4px" }}
                  type="text"
                />
              </div>
              {
                ! btnTog &&  <form  ref={form} onSubmit={sendEmail}>
                <label  style={{display:"none"}}>Name</label>
                <input style={{display:"none"}} type="text" name="name" value={nameE}/>
                <labe  style={{display:"none"}}l>Email</labe>
                <input  style={{display:"none"}} type="email" name="email" value={emailE}/>
                <input
                  type="text"
                  name="otp"
                  value={otp}
                  style={{ display: "none" }}
                />
                <div className="text-center  text-info ">
                <input style={{border:"none", background:"none"}} className="text-center text-info" type="submit" value="Send" placeholder="click" />OTP
                </div>
              </form> 
              }
              
              <button
                type="submit"
                className="btn btn-light text-primary w-100 my-1 ml-2 mt-3"
              >
                Go back
              </button>
              {
                btnTog && <button
                type="button" onClick={matchOtp}
                className="btn btn-primary w-100 my-1 ml-2 mt-3"
              >
                Verify
              </button>

              }
             
            </div>
          </div>
        ) : (
          <form className="p-3" onSubmit={formik.handleSubmit}>
            <div className="d-flex justify-content-between">
              <h3 className="ms-3">Sign Up</h3>
              <span
                onClick={() => {
                  closeModel(false);
                }}
                type="button"
                className=" text-danger"
              >
                <i class="fa-regular fa-circle-xmark"></i>
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
                  onChange={(e)=>{formik.setFieldValue("name",(e.target.value)); setNameE(e.target.value)}}
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
                  onChange={(e)=>{formik.setFieldValue("email",(e.target.value)); setEmailE(e.target.value)}}
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
        )}
      </div>
    </div>
  );
}

export default SignUp;
