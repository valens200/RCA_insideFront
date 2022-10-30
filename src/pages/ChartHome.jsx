import React from "react";
import Navbar from "../components/Navbar";
import HomeNav from "../components/HomeNav";
import image1 from "../assets/images/image1.jpg";
import students from "../assets/images/students.jpeg";
import { useSelector, useDispatch } from "react-redux";
import Notifications from "../components/Notifications";
import Chart from "./Chart";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { buttons2 } from "../assets/data";
import { setSelectedUser } from "../features/UserSlice";
import { Link } from "react-router-dom";
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import { BsCursor, BsReplyAll } from "react-icons/bs";
import { useEffect, useState } from "react";
import { baseUrl } from "../assets/data";
import { setPosts } from "../features/PageSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import { setLoggedInUser } from "../features/PageSlice";
import { withWidth } from "@material-ui/core";
import LogoutOptions from "../components/LogoutOptions";
import SinglePost from "../components/SinglePost";
import EmojiPicker from "emoji-picker-react";
import { managePopus } from "../features/PageSlice";
import { setClicked } from "../features/PageSlice";
import { setClickedPost } from "../features/PageSlice";
function ChartHome() {
  const posts = useSelector((store) => store.post.posts);
  const users = useSelector((store) => store.user.users);
  const numbers = [3, 4, 5, 7, 8, 9, 9];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isDarkMode = useSelector((store) => store.post.isDarkMode);
  const token = localStorage.getItem("accessToken");
  const loggedInUser = useSelector((store) => store.post.loggedInUser);
  const email = localStorage.getItem("email");
  const [showEmogis, setShowEmogis] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      try {
        if (!token || token == "" || token == null) {
          navigate("/login");
        }
        await axios
          .get(baseUrl + "/posts", {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("accessToken"),
              "Access-Control-Allow-Origin": "http://localhost:3000",
            },
          })
          .then(async (result) => {
            dispatch(setPosts(result.data));
            await axios
              .get("/user", {
                headers: {
                  "Content-Type": "application/json",
                  Authorization:
                    "Bearer " + localStorage.getItem("accessToken"),
                  "Access-Control-Allow-Origin": "http://localhost:3000",
                },
                email: email,
              })
              .then((response) => {
                setLoggedInUser(response.data);
              })
              .catch((err) => {
                // console.log(err);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, [posts]);

  const dispatchMentodes = (post) => {
    dispatch(managePopus({ type: "selectedpost" }));
    dispatch(setClickedPost(post));
    console.log(post);
  };
  return (
    <div className="w-[100%]">
      <div className="h-[10vh] fixed top-0 w-[100vw] z-20 bg-white">
        <HomeNav />
      </div>
      <div className=" md:w-[80%] h-[90vh] w-[90%] mx-auto">
        <div className="h-[100vh]   md:w-[100%]  mx-auto flex flex-row  justify-around   items-center ">
          <div className="h-screen w-[20%] sticky bottom-0  border ">
            <SinglePost />
          </div>
          <div className="md:w-[60%]  overfolow-y-scroll space-y-8  h-[100%] flex  space-x-2 flex-col mx-auto">
            <div className="w-[90%] mx-auto">
              <div className="h-[2%]  my-4 w-[90%] mx-auto border text-black bg-black">
                <p>lore</p>
              </div>
              {posts.map((post, index) => (
                <div
                  // onClick={() => setPost(post)}
                  onClick={() => dispatchMentodes(post)}
                  key={index}
                  className="md:w-[75%] post z-100  w-[] border pt-5  mx-auto"
                >
                  <div className="w-[100%]  z-100 flex">
                    <img
                      className="w-[9%]  h-[10%] rounded-full"
                      src={post.postOwnerImg}
                    />
                    <p>{post.postOwner}</p>
                  </div>
                  <p>{post.postDescription}</p>
                  <div className="w-[100%] mt-4 w-[100%] ">
                    <img
                      className="w-[100%] h-[100%]"
                      src={post.postImage}
                      alt="rca students"
                    />
                  </div>
                  <div className="flex flex-col p-4 space-y-5">
                    <div className="flex  w-[80%] mx-auto flex justify-between mt-2 text-[1.4rem] space-x-4">
                      <FaRegHeart />
                      <div className="flex">
                          <span>{post.comments != []  ? 0 :  posts.comments.length + ""}</span>
                        <FaRegComment />
                      </div>
                      <BsCursor />
                      <BsReplyAll />
                    </div>
                    <div className="w-[100%] flex space-x-3 flex-row">
                      <img
                        className="w-[10%] rounded-full  h-[10%]"
                        src={image1}
                      />
                      <p className="items-center translate-y-[8%] text-center ">
                        Liked by murangwa and 239 others
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="h-screen w-[30%]">
            <LogoutOptions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartHome;
