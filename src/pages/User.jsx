import React from "react";
import HomeNav from "../components/HomeNav";
import { useDispatch, useSelector } from "react-redux";
import { footerLinks } from "../assets/data";
import { setClicked } from "../features/PageSlice";
import Posts from "../components/Posts";
import { click } from "@testing-library/user-event/dist/click";
function User() {
  const dispatch = useDispatch();
  const navigationLinks = useSelector((store) => store.post.navigation);
  const getClass = (clicked) => {
    console.log(clicked);
    if (clicked) {
      return "w-[30%] border-b border-b-[0.5rem]  hover:cursor-pointer border-black rounded-t-2xl text-center p-3";
    } else {
      return "w-[30%] border-b  text-center hover:cursor-pointer p-3";
    }
  };

  return (
    <div>
      {/* <HomeNav /> */}
      <div className=" h-[90vh]">
        <div className="md:w-[50%] w-[95%] mx-auto border border-b-0 mx-auto  translate-y-20 h-[90%]">
          <div className="w-[100%] bg-black h-[50%] z-100">
            <img
              className="w-[100%] h-[100%]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRufKW3gvO1KfveX9Tq0g2W_AmytT1d3MROmeVGWqMcrA&s"
            />
          </div>
          <div className="w-[80%] -translate-y-40 h-[100%] flex flex-col space-y-10 mx-auto items-center ">
            <div className="w-[26%] z-40   mt-10   h-[50%]">
              <img
                className="rounded-full w-[100%] h-[100%]"
                src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-male-employee-in-office-picture-id1309328823?k=20&m=1309328823&s=612x612&w=0&h=RqA2lYygvOxisNPp6UwFjz7bCw_rYITJMqFTMSrhpis="
                alt=""
              />
            </div>
            <div>
              <p className="text-[blue] font-bold">Edit your profile</p>
            </div>
            <div className=" h-[10%] -translate-y-[90%]">
              <h1 className="font-bold text-[1.5rem] text-center">
              </h1>
              <p className="text-[grey]  text-center text-[0.80rem]">
                {}
              </p>
            </div>
            <div className="w-[90%] mx-auto  -translate-y-[90%] flex justify-center  ">
              {/* {navigationLinks.map((nav, index) => (
                <div
                  onClick={dispatch(setClicked(nav.id))}
                  key={index}
                  className={getClass(nav.clicked)}
                >
                  <p>{nav.name}</p>
                </div>
              ))} */}
            </div>
            <div className=" h-[90%]  overflow-scroll">
              <Posts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
