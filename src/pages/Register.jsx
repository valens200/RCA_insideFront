import React from "react";
import { baseUrl, footerLinks } from "../assets/data";
import logo from "../assets/images/inside.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TextField } from "@material-ui/core";
import { setUsername } from "../features/formSlice";
import { setErrorMessage } from "../features/formSlice";
import { useNavigate } from "react-router-dom";
import { setInputFiles } from "../features/PageSlice";
import { BsImage } from "react-icons/bs";
import axios from "axios";
function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const enteredInputs = useSelector((store) => store.form.inputs);
  const register = async (e) => {
    console.log(enteredInputs);
    console.log(baseUrl);
    e.preventDefault();
    try {
      await axios
        .post(baseUrl + "/register", {
          userName: enteredInputs.username,
          email: enteredInputs.email,
          password: enteredInputs.password,
        })
        .then((result) => {
          console.log(result.data);
          localStorage.setItem("refreshToken", result.data.refresh_Token);
          localStorage.setItem("accessToken", result.data.acccess_Token);
          localStorage.setItem("username", result.data.username);
          localStorage.setItem("email", result.data.email);
          navigate("/home");
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" mx-auto grid items-center h-[100vh] ">
      <div className="border grid   w-[98%] md:w-[25%] mx-auto h-[60vh] text-black">
        <form onSubmit={(e) => register(e)} className="md:w-[80%] mx-auto">
          <div className="w-[90%] h-[30%]  mx-auto">
            <img className="w-[30%] mx-auto" src={logo} alt="" />
            <p className="text-center font-sans">
              Register and inside your self
            </p>
          </div>
          <div className="h-[60%]">
            <div className="flex grid items-center flex-col space-y-5">
              {footerLinks.registerInputs.map((input, index) => (
                <div className="w-[100%]  h-[5vh] border">
                  <TextField
                    onChange={(e) =>
                      dispatch(
                        setUsername({
                          input: input.name,
                          value: e.target.value,
                        })
                      )
                    }
                    fullWidth
                    p={2}
                    className="p-2"
                    label={input.name}
                    type={input.type}
                  />
                </div>
              ))}
              <div className="image-upload">
                <label className="flex space-x-4" for="file-input">
                  <BsImage className="hover:cursor-pointer text-[2rem] hover:border" />
                  <p className="text-[0.90rem] itemx-center">add image</p>
                </label>
                <input
                  onChange={(e) => dispatch(setInputFiles(e.target.files))}
                  id="file-input"
                  type="file"
                />
              </div>
              <div className="w-[100%] text-center bg-black text-white  h-[5vh] border">
                <input
                  type="submit"
                  className="text-center focus:outline-0 p-2 w-[100%] h-[100%] bg-black p-2 "
                  value="register"
                />
              </div>
            </div>
          </div>
        </form>
        <div className="flex justify-between w-[80%] mx-auto">
          <p>Already have an account ? </p>
          <Link to="/Login">
            <p className="text-[#291E46] hover:font-bold hover:text-black">
              Login
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
