import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./features/PageSlice";
import { userReducer } from "./features/UserSlice";
import { messageReducer } from "./features/messagesSlice";
import { formReducer } from "./features/formSlice";

export const store = configureStore({
    reducer:{
        post:postReducer,
        user:userReducer,
        message:messageReducer,
        form:formReducer
    }
})