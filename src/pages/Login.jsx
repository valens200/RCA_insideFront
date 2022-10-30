import React from "react";
import { footerLinks } from "../assets/data";
import logo from "../assets/images/inside.png";
import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../assets/data";
import { setUsername } from "../features/formSlice";
import axios from "axios";
import { setErrorMessage } from "../features/formSlice";
import { useNavigate } from "react-router-dom";
import SockJS from "sockjs-client";
import { over } from "stompjs";
import { stompClient } from "../assets/data";
import Navbar from "../components/Navbar";

function Login() {
  const dispatch = useDispatch();
  const enteredInputs = useSelector((store) => store.form.inputs);
  const navigate = useNavigate();
  const login = async (e) => {
    e.preventDefault();
    console.log("hello");
    try {
      await axios
        .post(baseUrl + "/login", {
          email: enteredInputs.email,
          password: enteredInputs.password,
        })
        .then((result) => {
          localStorage.setItem("refreshToken", result.data.refresh_token);
          localStorage.setItem("accessToken", result.data.access_token);
          localStorage.setItem("username", result.data.username);
          localStorage.setItem("email", result.data.email);
          if (result.status == 200) {
            navigate("/home");
            stompClient.connect({}, onConnected, onError);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const onConnected = (payload) => {
    console.log(payload);
    console.log("connected");
    stompClient.subscribe("/app/chartroom", (data) => {
      console.log("data", data);
    });
    stompClient.subscribe("/app/user");
  };

  const onError = (err) => {
    console.log(err);
  };
  return (
    <div>
      <Navbar />
      <div className="main h-[56vh]">
        <div className=" mx-auto grid   items-center w-[100%] h-[100vh] ">
          <div className="border grid w-[97%]  shadow-lg bg-white  rounded md:w-[25%] mx-auto h-[70vh] text-black">
            <form
              onSubmit={(e) => login(e)}
              className="md:w-[80%] grid items-center mx-auto"
            >
              <div className="w-[90%] h-[30%]  mx-auto">
                <img className="w-[30%] mx-auto" src={logo} alt="" />
                <p className="text-center font-sans">
                  Login and inside your self
                </p>
              </div>
              <div className="h-[60%]">
                <div className="flex grid items-center flex-col space-y-5">
                  {footerLinks.loginInputs.map((input, index) => (
                    <div key={index} className="w-[100%] h-[5vh] ">
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
                      <p>Login with google</p>
                      <img
                        className="h-[80%]"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ZGkl4huaCg0a5dWTyDjdWVqAdnW8zu1SR8qB3IhKadu100J94qcpf2OHT0EhXHYShrQ&usqp=CAU"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="grid items-center">
              <div className="flex justify-between w-[80%] mx-auto">
                <p>Don't you have an account ? </p>
                <Link to="/Register">
                  <p className="text-[#291E46] hover:font-bold hover:text-black">
                    Register
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
