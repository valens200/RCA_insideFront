import React from "react";
import ReactDOM from "react-dom";
import { Link } from "@material-ui/core";
import image1 from "../assets/images/image1.jpg";
import students from "../assets/images/students.jpeg";
import { useSelector, useDispatch } from "react-redux";
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import { BsCursor, BsLightningCharge, BsImage } from "react-icons/bs";
import logo from "../assets/images/inside.png";
import { setInputFiles } from "../features/PageSlice";
import { baseUrl, cloudinaryUrl } from "../assets/data";
import axios from "axios";
import { initializePost } from "../features/PageSlice";
import { useState, useEffect } from "react";
import { setUsers } from "../features/UserSlice";
import { setSelectedUser } from "../features/UserSlice";
import { setLoggedInUser } from "../features/PageSlice";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BsDot } from "react-icons/bs";

function SinglePost() {
  const [postMessage, setPostMessage] = useState("");
  const posts = useSelector((store) => store.post.posts);
  const users = useSelector((store) => store.user.users);
  const showSidebar = useSelector((store) => store.post.showSidebar);
  const showSinglePost = useSelector((store) => store.post.showSinglePost);
  const showCreatePOst = useSelector((store) => store.post.showCreatePOst);
  const post = useSelector((store) => store.post.clickedPost);
  const showPosts = useSelector((store) => store.post.showPosts);
  const clickedPost = useSelector((store) =>store.post.clickedPost)

  const [inputFiles, setInputFiles] = useState([]);
  const postTobeCreated = useSelector((store) => store.post.postTobeCreated);
  const [postDescription, setPostDescription] = useState("");
  const email = localStorage.getItem("email");
  const dispatch = useDispatch();
  const loggedInUser = useSelector((store) => store.post.loggedInUser);
  useEffect(() => {
    const getUsers = async () => {
      try {
        await axios
          .get(baseUrl + "/users", {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
            "Access-Control-Allow-Origin": "http://localhost:3000",
          })
          .then(async (response) => {
            dispatch(setUsers(response.data));
            await axios
              .post(baseUrl + "/user", {
                headers: {
                  "Content-Type": "application/json",
                  Authorization:
                    "Bearer " + localStorage.getItem("accessToken"),
                  "Access-Control-Allow-Origin": "http://localhost:3000",
                },
                email: email,
              })
              .then((response) => {
                dispatch(setLoggedInUser(response.data));
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }, [users]);
  const createPost = async () => {
    const formData = new FormData();
    formData.append("file", inputFiles[0]);
    formData.append("upload_preset", "yijpeydg");
    await axios
      .post(cloudinaryUrl, formData)
      .then(async (response) => {
        const imageUrl = response.data.secure_url;
        await axios
          .post(baseUrl + `/addPost`, {
            email: localStorage.getItem("email"),
            postDescription: postDescription,
            postImage: imageUrl,
          })
          .then((response) => {
            if (response.status == 200) {
              setPostMessage("Your post was saved successfully");
              // console.log(response.data.data);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
  const getclass = (btn) => {
    if (showSidebar) {
      return "fixed text-black border md:w-[19%]  bg-white  w-[100%]   mx-auto md:mx-0  z-10  h-[90vh]  top-0 translate-y-[10 md:translate-y-[10vh]  ";
    } else {
      return "fixed text-black border md:w-[20%]  bg-white  w-[100%] hidden md:block  mx-auto md:mx-0  z-10  h-[90vh]  top-0 translate-y-[10vh] md:translate-y-[10vh]  ";
    }
  };

  if (showSinglePost) {
    if (post == null) {
      return null;
    } else if (showCreatePOst) {
      return (
        <div className="fixed text-black mt-4 border flex flex-col space-y-10 md:w-[24%] mx-auto  bg-white  w-[100%]   mx-auto md:mx-0  z-10  h-[30vh]  top-0 translate-y-[30vh] md:translate-y-[10vh] float-right">
          <div className="w-[90%] h-[30%] mb-4  mx-auto">
            <img className="w-[30%] mx-auto" src={logo} alt="" />
            <h1 className="text-center font-bold">Create post</h1>
            <p className="text-black">{postMessage}</p>
            {/* <p>{postMessage}</p> */}
          </div>
          <div className="w-[80%] h-[20%] mx-auto flex">
            <textarea
              onChange={(e) => setPostDescription(e.target.value)}
              name=""
              placeholder="Type your text here "
              className="border p-2 text-[#0B0B45] w-[80%] focus:outline-0"
              id="postDescription"
            ></textarea>
            <button
              onClick={() => createPost()}
              className=" border  text-white h-[100%] hover:bg-black  bg-[#0B0B45]  rounded  hover:text-white hover:border text-white  font-bold w-[20%] "
            >
              Post
            </button>
          </div>
          <div className="flex flex-row w-[70%] mx-auto text-[1.6rem] justify-between">
            <div className="image-upload">
              <label for="file-input">
                <BsImage className="hover:cursor-pointer hover:border" />
              </label>
              <input
                onChange={(e) => setInputFiles(e.target.files)}
                id="file-input"
                type="file"
              />
            </div>
          </div>
        </div>
      );
    } else {
      return ReactDOM.createPortal(
        <div>
            <div className="fixed text-black mt-4 border flex flex-col space-y-10 md:w-[24%] mx-auto  bg-white  w-[100%]   mx-auto md:mx-0  z-10  h-[100%]  top-0 translate-y-[30vh] md:translate-y-[10vh] float-right">
            <div className="md:w-[100%] post z-100  w-[] border p-4 h-[80%] mx-auto">
              <div className="w-[100%]  z-100 flex">
                <img
                  className="w-[9%]  h-[10%] rounded-full"
                  src={clickedPost.postOwnerImg}
                />
                <p>{clickedPost.postOwner}</p>
              </div>
              <p>{clickedPost.postDescription}</p>
              <div className="w-[100%] mt-4 w-[100%] ">
                <img
                  className="w-[100%] h-[100%]"
                  src={clickedPost.postImage}
                  alt="rca students"
                />
              </div>

              <div className="flex flex-col space-y-5">
                <div className="flex mt-2 text-[1.4rem] space-x-4">
                  <FaRegHeart />
                  <FaRegComment />
                  <BsCursor />
                </div>
                <div className="w-[100%] flex space-x-3 flex-row">
                  <img className="w-[10%] rounded-full  h-[10%]" src={image1} />
                  <p className="items-center translate-y-[8%] text-center ">
                    Liked by murangwa and 239 others
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.getElementById("singlePost")
      );
    }
  } else {
    return ReactDOM.createPortal(
      <div className={getclass()}>
        <div className="w-[100%] hidden md:grid   overflow-y-scroll  grid items-center fixed right-0 bg-white bottom-0  h-[100%]">
          <div className="flex pt-1 flex-col space-y-9 w-[90%] mx-auto ">
            <div className="h-[100%]">
              <div className="h-[40vh] bg-white">
                <h1 className="text-black text-center  font-bold">
                  Active users
                </h1>
                <div className=" p-2 fixed top-0 bg-white w-[100%] mx-auto ">
                  <Carousel>
                    {loggedInUser.followers == null ? (
                      <p>You have no follower</p>
                    ) : (
                      loggedInUser.followers.map((follower, index) => (
                        <div className=" w-[50%] mx-auto">
                          <img
                            className=" rounded-full   border border-black border-[0.3rem] w-[10%]"
                            src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-male-employee-in-office-picture-id1309328823?b=1&k=20&m=1309328823&s=170667a&w=0&h=a-f8vR5TDFnkMY5poQXfQhDSnK1iImIfgVTVpFZi_KU="
                          />
                          <div className="flex w-[100%]">
                            <p className="text-black text-center font-bold  mt-2">
                              {follower.userName}
                            </p>
                            <BsDot className="text-[green]  -translate-y-[10%] text-[5rem]" />
                          </div>
                        </div>
                      ))
                    )}
                  </Carousel>
                </div>
              </div>
              <h1 className="text-center text-[grey] pb-2">
                Suggestions for you
              </h1>
              <div className="w-[100%] mx-auto">
                {users.map((user, index) => (
                  <Link to="/user">
                    <div
                      onClick={() => dispatch(setSelectedUser(post))}
                      key={index}
                      className="w-[100%] flex   border p-4 h-[80%] mx-auto"
                    >
                      <div className="w-[100%] flex">
                        <img
                          className="w-[25%]  h-[100%] rounded-full"
                          src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-male-employee-in-office-picture-id1309328823?b=1&k=20&m=1309328823&s=170667a&w=0&h=a-f8vR5TDFnkMY5poQXfQhDSnK1iImIfgVTVpFZi_KU="
                        />
                        <p>{user.userName}</p>
                      </div>
                      <div className="w-[50%] h-[100%] ">
                        <button
                          onClick={() => sendFollowRequest(user.email)}
                          className=" border  text-black h-[3vh]  rounded  hover:text-[#00008B] hover:border text-white  font-bold w-[70%] "
                        >
                          Follow
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>,
      document.getElementById("singlePost")
    );
  }
}

export default SinglePost;
