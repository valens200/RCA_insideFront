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

function SinglePost() {
const [ postMessage, setPostMessage ] = useState("");
  const posts = useSelector((store) => store.post.posts);
  const users = useSelector((store) => store.user.users);
  const showSidebar = useSelector((store) => store.post.showSidebar);
  const showSinglePost = useSelector((store) => store.post.showSinglePost);
  const showCreatePOst = useSelector((store) => store.post.showCreatePOst);
  const post = useSelector((store) => store.post.clickedPost);
  const inputFiles = useSelector((store) => store.post.inputFiles);
  const postTobeCreated = useSelector((store) => store.post.postTobeCreated);
  const numbers = [3, 4, 5, 7, 8, 9, 9];
  const [postDescription, setPostDescription] = useState("");

  const dispatch = useDispatch();

  const createPost = async () => {
    const formData = new FormData();
    formData.append("file", inputFiles[0]);
    formData.append("upload_preset", "yijpeydg");
    await axios
      .post(cloudinaryUrl, formData)
      .then(async (response) => {
        const imageUrl = response.data.secure_url;
        console.log(response.data.secure_url);

        await axios
          .post(baseUrl + `/addPost/${localStorage.getItem("email")}`, {
            postDescription: postDescription,
            postImage: imageUrl,
          })
          .then((response) => {
            if(response.status == 200){
                setPostMessage("Your post was saved successfully");
            }
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getclass = (btn) => {
    if (showSidebar) {
      return "fixed text-black border md:w-[20%]  bg-white left-0 w-[80%]   mx-auto md:mx-0  z-10  h-[90vh]  top-0 translate-y-[10vh] md:translate-y-[10vh] float-right ";
    } else {
      return "fixed text-black border md:w-[20%]  bg-white left-0 w-[80%] hidden md:block  mx-auto md:mx-0  z-10  h-[90vh]  top-0 translate-y-[10vh] md:translate-y-[10vh] float-right ";
    }
  };

  if (showSinglePost) {
    if (post == null) {
      return null;
    } else if (showCreatePOst) {
      return ReactDOM.createPortal(
        <div className="fixed text-black mt-4 border flex flex-col space-y-10 md:w-[28.1%] mx-auto  bg-white left-0 w-[80%]   mx-auto md:mx-0  z-10  h-[30vh]  top-0 translate-y-[30vh] md:translate-y-[10vh] float-right">
          <div className="w-[90%] h-[30%] mb-4  mx-auto">
            <img className="w-[30%] mx-auto" src={logo} alt="" />
            <h1 className="text-center font-bold">Create post</h1>
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
                onChange={(e) => dispatch(setInputFiles(e.target.files))}
                id="file-input"
                type="file"
              />
            </div>
            <div className="file-upload">
              <label for="attachment">
                <BsLightningCharge className="hover:cursor-pointer" />
              </label>
              <input
                onChange={(e) => dispatch(setInputFiles(e.target.files))}
                type="file"
                id="attachment"
              />
            </div>
          </div>
        </div>,
        document.getElementById("singlePost")
      );
    } else {
      return ReactDOM.createPortal(
        <div className="fixed text-black mt-4 border md:w-[28.1%] mx-auto  bg-white left-0 w-[80%]   mx-auto md:mx-0  z-10  h-[54vh]  top-0 translate-y-[10vh] md:translate-y-[10vh] float-right">
          <div className="md:w-[100%] post z-100  w-[] border p-4 h-[80%] mx-auto">
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
                src={students}
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
        </div>,
        document.getElementById("singlePost")
      );
    }
  } else {
    return ReactDOM.createPortal(
      <div className={getclass()}>
        <div className="w-[100%] hidden md:grid   overflow-y-scroll  grid items-center fixed right-0 bg-white bottom-0  h-[100%]">
          <div className="flex pt-20 flex-col space-y-9 w-[90%] mx-auto ">
            <Link to="/user">
              {numbers.map((numbre, index) => (
                <div>
                  <h1 className="text-center text-[grey] pb-2">
                    Suggestions for you
                  </h1>
                  {users.map((post, index) => (
                    <div className="w-[100%] flex   border p-4 h-[80%] mx-auto">
                      <div className="w-[100%] flex">
                        <img
                          className="w-[25%]  h-[100%] rounded-full"
                          src={post.userImage}
                        />
                        <p>{post.userName}</p>
                      </div>
                      <div className="w-[50%] h-[100%] ">
                        <button className=" border  text-black h-[3vh]  rounded  hover:text-[#00008B] hover:border text-white  font-bold w-[70%] ">
                          Follow
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </Link>
          </div>
        </div>
      </div>,
      document.getElementById("singlePost")
    );
  }
}

export default SinglePost;
