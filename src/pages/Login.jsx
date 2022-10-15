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
          console.log(result);
          console.log(result.status);
          localStorage.setItem("refreshToken", result.data.refresh_Token);
          localStorage.setItem("accessToken", result.data.acccess_Token);
          localStorage.setItem("username", result.data.username);
          localStorage.setItem("email", result.data.email);
          if (result.status == 200) {
            navigate("/home");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" mx-auto grid items-center w-[100%] h-[100vh] ">
      <div className="border grid w-[97%]  md:w-[25%] mx-auto h-[60vh] text-black">
        <form
          onSubmit={(e) => login(e)}
          className="md:w-[80%] grid items-center mx-auto"
        >
          <div className="w-[90%] h-[30%]  mx-auto">
            <img className="w-[30%] mx-auto" src={logo} alt="" />
            <p className="text-center font-sans">Login and inside your self</p>
          </div>
          <div className="h-[60%]">
            <div className="flex grid items-center flex-col space-y-5">
              {footerLinks.loginInputs.map((input, index) => (
                <div key={index} className="w-[100%] h-[5vh] border">
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
                    label={input.name}
                    type={input.type}
                  />
                </div>
              ))}
              <div className="w-[100%] text-center bg-black text-white  h-[5vh] border">
                <input
                  type="submit"
                  className="text-center focus:outline-0 p-2 w-[100%] h-[100%] bg-black p-2 "
                  value="login"
                />
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
  );
}

export default Login;
