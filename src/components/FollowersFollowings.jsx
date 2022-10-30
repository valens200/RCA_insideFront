import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSelectedUser } from "../features/UserSlice";
import axios from "axios";
import { baseUrl } from "../assets/data";
import { Button } from "@material-ui/core";
function FollowersFollowings() {
  const [showFollowers, setShowFollowers] = useState(true);
  const [showFolloweing, setShowFolloweing] = useState(false);
  const [posts, setShowPosts] = useState(false);
  const users = useSelector((store) => store.user.users);
  const post = useSelector((store) => store.post.clickedPost);
  const dispatch = useDispatch();
  const loggedInUser = useSelector((store) => store.post.loggedInUser);
  const sendFollowRequest = async (email) => {
    try {
      await axios
        .post(baseUrl + `/follow/${localStorage.getItem("email")}/${email}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-[905] mx-auto">
      <h1 className="text-center text-[grey] sticky top-0 bg-white pb-2">Users following you</h1>
      <div className="w-[100%] h-[100%] mx-auto">
        {loggedInUser.followers.map((user, index) => (
          <Link to="">
            <div
              onClick={() => dispatch(setSelectedUser(post))}
              key={index}
              className="w-[90%] flex   border p-4 h-[85%] mx-auto"
            >
              <div className="w-[100%] flex">
                <img
                  className="w-[14%]  border h-[100%] rounded-full"
                  src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-male-employee-in-office-picture-id1309328823?b=1&k=20&m=1309328823&s=170667a&w=0&h=a-f8vR5TDFnkMY5poQXfQhDSnK1iImIfgVTVpFZi_KU="
                />
                <p>{user.userName}</p>
              </div>
              <div className="w-[50%] h-[100%] ">
                <button
                  onClick={() => sendFollowRequest(user.email)}
                  className=" border  h-[4vh]  rounded   bg-[#0B0B45] hover:text-[#00008B] hover:border text-white  font-bold w-[60%] "
                >
                  Follow
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FollowersFollowings;
