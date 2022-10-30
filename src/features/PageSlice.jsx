import { createSlice } from "@reduxjs/toolkit";
import image1 from "../assets/images/image1.jpg";
import students from "../assets/images/students.jpeg";

const initialState = {
  navigations: [
    {
      id: 1,
      name: "Followers",
      clicked: true,
    },
    {
      id: 1,
      name: "Following",
      clicked: false,
    },
    {
      id: 1,
      name: "Posts",
      clicked: false,
    },
  ],
  isDarkMode: true,
  showSidebar: true,
  showSinglePost: false,
  showCreatePOst: false,
  showPosts: false,
  clickedPost: {},
  loggedInUser: {},
  postTobeCreated: {
    ownerEmail: "",
    postDescription: "",
    postImage: "",
  },
  posts: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setClicked: (state, action) => {
      const id = action.payload.id;
      const navigation = state.navigation.filter((nav) => nav.id != id);
      navigation.forEach((nav) => {
        nav.clicked = false;
      });
      console.log(navigation);
      const nav = state.navigation.filter((nav) => nav.id == id);
      nav.clicked = true;
    },
    setClickedPost: (state, action) => {
      state.clickedPost = action.payload;
    },
    setDarkMode: (state, action) => {
      if (action.payload.mode == "dark") {
        state.isDarkMode = true;
      } else {
        state.isDarkMode = false;
      }
    },
    setInputFiles: (state, action) => {
      state.inputFiles = action.payload;
    },
    initializePost: (state, action) => {
      state.postTobeCreated.ownerEmail = action.payload.email;
      state.postTobeCreated.postDescription = action.postDescription;
      state.postTobeCreated.postImage = action.payload.image;
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setLoggedInUser: (state, action) => {
      state.loggedInUser = action.payload;
    },
    managePopus: (state, action) => {
      const type = action.payload.type;
      switch (type) {
        case "selectedpost":
          console.log("yes");
          state.showPosts = false;
          state.showSidebar = false;
          state.showSinglePost = true;
          state.showCreatePOst = false;
          break;
        case "Sidebar":
          state.showSidebar = true;
          state.showSinglePost = false;
          state.showCreatePOst = false;
          state.showPosts = true;
          break;
        case "post":
          state.showSidebar = false;
          state.showSinglePost = true;
          state.showCreatePOst = true;
          state.showPosts = true;
          break;

        default:
          console.log(" ");
          console.log(type);
      }
    },
  },
});

export const postReducer = postSlice.reducer;
export const {
  setClicked,
  managePopus,
  setDarkMode,
  setClickedPost,
  setLoggedInUser,
  setPosts,
  setInputFiles,
  initializePost,
} = postSlice.actions;
