import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showPosts: true,
  loggedUser: {},
  selectedUser: [
    {
      userId: 4,
      userName: "main",
      email: "uwavalens@gmail.com",
      userBio: "I'm fullstack developer and Bascket player in year 1",
      userImage:
        "data:image/jpeg;base64,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",
      password: "$2a$10$fqcAf.6q3JE1BEh9oUEgGux8FCkHTO.TNlUP9piPqnvtDGQjXVmUy",
      roles: [],
      followers: [
        {
          userId: 1,
          userName: "bava",
          email: "uwavalens2003@gmail.com",
          password:
            "$2a$10$nELZk4BgGd07.GsQpp080OoCDoa5jhwDdVH3JK1zVaJDXfGcUB4Y.",
          roles: [],
          followers: [],
          posts: [
            {
              postId: 2,
              postDescription: "vava",
              postImage: null,
              comments: [
                {
                  commentId: 7,
                  comment: "cool ma boi",
                  likes: [],
                },
                {
                  commentId: 9,
                  comment: "cool ma boi",
                  likes: [],
                },
                {
                  commentId: 11,
                  comment: "cool ma boi",
                  likes: [],
                },
                {
                  commentId: 13,
                  comment: "cool ma boi",
                  likes: [],
                },
              ],
            },
            {
              postId: 3,
              postDescription: "vava",
              postImage: null,
              comments: [],
            },
            {
              postId: 5,
              postDescription: "vava",
              postImage: null,
              comments: [],
            },
          ],
          comments: [],
        },
        {
          userId: 1,
          userName: "bava",
          email: "uwavalens2003@gmail.com",
          password:
            "$2a$10$nELZk4BgGd07.GsQpp080OoCDoa5jhwDdVH3JK1zVaJDXfGcUB4Y.",
          roles: [],
          followers: [],
          posts: [
            {
              postId: 2,
              postDescription: "vava",
              postImage: null,
              comments: [
                {
                  commentId: 7,
                  comment: "cool ma boi",
                  likes: [],
                },
                {
                  commentId: 9,
                  comment: "cool ma boi",
                  likes: [],
                },
                {
                  commentId: 11,
                  comment: "cool ma boi",
                  likes: [],
                },
                {
                  commentId: 13,
                  comment: "cool ma boi",
                  likes: [],
                },
              ],
            },
            {
              postId: 3,
              postDescription: "vava",
              postImage: null,
              comments: [],
            },
            {
              postId: 5,
              postDescription: "vava",
              postImage: null,
              comments: [],
            },
          ],
          comments: [],
        },
        {
          userId: 1,
          userName: "bava",
          email: "uwavalens2003@gmail.com",
          password:
            "$2a$10$nELZk4BgGd07.GsQpp080OoCDoa5jhwDdVH3JK1zVaJDXfGcUB4Y.",
          roles: [],
          followers: [],
          posts: [
            {
              postId: 2,
              postDescription: "vava",
              postImage: null,
              comments: [
                {
                  commentId: 7,
                  comment: "cool ma boi",
                  likes: [],
                },
                {
                  commentId: 9,
                  comment: "cool ma boi",
                  likes: [],
                },
                {
                  commentId: 11,
                  comment: "cool ma boi",
                  likes: [],
                },
                {
                  commentId: 13,
                  comment: "cool ma boi",
                  likes: [],
                },
              ],
            },
            {
              postId: 3,
              postDescription: "vava",
              postImage: null,
              comments: [],
            },
            {
              postId: 5,
              postDescription: "vava",
              postImage: null,
              comments: [],
            },
          ],
          comments: [],
        },
      ],
      posts: [
        {
          postId: 6,
          postDescription: "vava",
          postImage: null,
          comments: [],
        },
      ],
      comments: [
        {
          commentId: 10,
          comment: "cool ma boi",
          likes: [],
        },
        {
          commentId: 12,
          comment: "cool ma boi",
          likes: [],
        },
      ],
    },
  ],
  users: [],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSelectedUser: (state, action) => {
      state.selected = action.payload;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { setSelectedUser,  setUsers} = userSlice.actions;
