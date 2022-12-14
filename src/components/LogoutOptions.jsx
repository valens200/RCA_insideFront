import React from "react";
import ReactDOM from "react-dom";
import { actions } from "../assets/data";
import { otherActions } from "../assets/data";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { baseUrl  } from "../assets/data";
function LogoutOptions() {
  const username = localStorage.getItem("username");
  const showSidebar = useSelector((store) => store.post.showSidebar);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const getClass = () => {
    if (showSidebar) {
      return "fixed text-black border md:w-[20%]  bg-white  w-[80%]   mx-auto md:mx-0  z-10  h-[90vh]  top-0 translate-y-[10vh] md:translate-y-[10vh] float-right ";
    } else {
      return "fixed text-black border md:w-[20%]  bg-white right-0 w-[80%] hidden md:block  mx-auto md:mx-0  z-10  h-[90vh]  top-0 translate-y-[10vh] md:translate-y-[10vh] float-right ";
    }
  };

  const logout = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.removeItem("accessToken");
      navigate("/login");
    }, 1000);
  };

  const cancel = () => {
    setLoading(false);
  };
  return (
    <div className={getClass()}>
      <p className="text-center  bg-[#0B0B45] text-white  p-2 w-[100%]">
       RCA inside
      </p>
      <div className="flex flex-col space-y-4">
        {loading ? (
          <div className="flex mt-3 w-[90%] mx-auto  justify-between">
            <p>Logging out.... </p>
            <Loader />
            <button
              onClick={() => cancel()}
              className="text-center border w-[30%] h-[70%] rounded hover:bg-[#0B0B45]  hover:text-white font-bold"
            >
              cancel
            </button>
          </div>
        ) : null}
        <div className="w-[90%]  border-b p-2 mt-4 mx-auto  flex justify-between">
          <div className="w-[60%] h-[5vh] flex flex-row space-x-2">
            <img
              className="w-[25%] h-[100%] rounded-full"
              src="data:image/jpeg;base64,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"
            />
            <p className="flex items-center font-bold">{username}</p>
          </div>
          <div className="w-[40%]  flex items-center text-center">
            <button
              onClick={() => logout()}
              className="text-center border w-[80%] h-[70%] rounded hover:bg-[#0B0B45]  hover:text-white font-bold"
            >
              Logout
            </button>
          </div>
        </div>
        <div className="w-[90%]  flex flex-col  space-y-10 border-b p-2 mt-4 mx-auto  flex justify-between">
          {actions.map((action, index) => (
            <p className="hover:underline" key={index}>
              {action}
            </p>
          ))}
        </div>
        <div className="w-[90%]  flex flex-col  space-y-10 border-b p-2 mt-4 mx-auto  flex justify-between">
          {otherActions.map((action, index) => (
            <p
              className="font-sans hover:bg-[#0B0B45] hover:text-white p-2 rounded font-bold"
              key={index}
            >
              {action}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoutOptions;
