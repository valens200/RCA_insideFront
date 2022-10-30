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
import Navbar from "../components/Navbar";
import axios from "axios";
import { useState } from "react";
import { cloudinaryUrl } from "../assets/data";
import { ToastContainer} from "react-toastify";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [profilePicture, setProlfilePicture] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRc8rYp_-q-PZbZquMwiXlanurk8R4Ov30Tw&usqp=CAU"
  );
  const enteredInputs = useSelector((store) => store.form.inputs);
  const register = async (e) => {
    e.preventDefault();
    try {
      if (
        files !=
      []
      ) {
        const formData = new FormData();
        formData.append("file", files[0]);
        formData.append("upload_preset", "yijpeydg");
        await axios
          .post(cloudinaryUrl, formData)
          .then((response) => {
            console.log(response);
            const imageUrl = response.data.secure_url;
            setProlfilePicture(imageUrl);
          })
          .catch((err) => {
            console.log(err);
          });
      }

      await axios
        .post(baseUrl + `/register`, {
          userName: enteredInputs.username,
          email: enteredInputs.email,
          password: enteredInputs.password,
          profilePicture: profilePicture,
        })
        .then((response) => {
          console.log(response);
          localStorage.setItem("refreshToken", response.data.acccess_Token);
          localStorage.setItem("accessToken", response.data.refresh_Token);
          localStorage.setItem("username", response.data.username);
          localStorage.setItem("email", response.data.email);
          navigate("/home")
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="main h-[56vh]">
        <div className=" mx-auto grid items-center h-[100vh] ">
          <div className="border grid   bg-white shadow-lg rounded w-[98%] md:w-[25%] mx-auto h-[70vh] text-black">
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
                    <div className="w-[100%]  h-[5vh]">
                      <TextField
                        className="h-[100%] rounded-r-0   md:w-[100%] p-4"
                        onChange={(e) =>
                          dispatch(
                            setUsername({
                              input: input.name,
                              value: e.target.value,
                            })
                          )
                        }
                        label={input.name}
                        type={input.type}
                        id="outlined-basic"
                        variant="outlined"
                      />
                    </div>
                  ))}
                  <div className="image-upload">
                    <label className="flex space-x-4" for="file-input">
                      <BsImage className="hover:cursor-pointer text-[2rem] hover:border" />
                      <p className="text-[0.90rem] itemx-center">add image</p>
                    </label>
                    <input
                      onChange={(e) => dispatch(setFiles(e.target.files))}
                      id="file-input"
                      type="file"
                    />
                  </div>
                  <div className="w-[100%] text-center bg-black text-white  h-[5vh] border">
                    <input
                      type="submit"
                      className="text-center focus:outline-0 p-2 w-[100%] h-[100%] bg-black p-2 "
                      value="Continue with email"
                    />
                  </div>
                  <div className="flex ">
                    <p className="w-[45%] border-b"></p>
                    <p className="text-center w-[10%]">OR</p>
                    <p className="w-[45%] border-b "></p>
                  </div>
                  <div className="w-[100%] text-center text-white  h-[5vh] border">
                    <div className="text-center flex  hover:cursor-pointer flex-row justify-center space-x-3 text-black items-center focus:outline-0 p-2 w-[100%] h-[100%] border p-2 ">
                      <p>Sign up with google</p>
                      <img
                        className="h-[80%]"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ZGkl4huaCg0a5dWTyDjdWVqAdnW8zu1SR8qB3IhKadu100J94qcpf2OHT0EhXHYShrQ&usqp=CAU"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="flex  mt-10 justify-between w-[80%] mx-auto">
              <p>Already have an account ? </p>
              <Link to="/Login">
                <p className="text-[#291E46] hover:font-bold hover:text-black">
                  Login
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
