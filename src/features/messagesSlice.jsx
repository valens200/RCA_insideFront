import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages:[
        {
            id:1,
            sent:false,
            message:"hello brada hello brada hello brada hello brada hello brada hello bradahello brada "
        },
        {
            id:1,
            sent:true,
            message:"hello brada hello brada hello brada hello brada hello brada hello bradahello brada "
        },
        {
            id:1,
            sent:true,
            message:"hello brada hello brada hello brada hello brada hello brada hello bradahello brada "
        },
        {
            id:1,
            sent:false,
            message:"hello brada hello brada hello brada hello brada hello brada hello bradahello brada "
        },
        {
            id:1,
            sent:true,
            message:"hello brada hello brada hello brada hello brada hello brada hello bradahello brada "
        },
        {
            id:1,
            sent:false,
            message:"hello brada hello brada hello brada hello brada hello brada hello bradahello brada "
        },
        {
            id:1,
            sent:true,
            message:"hello brada hello brada hello brada hello brada hello brada hello bradahello brada "
        },
        {
            id:1,
            sent:true,
            message:"hello brada hello brada hello brada hello brada hello brada hello bradahello brada "
        }
    ]
}
const messageSlice = createSlice({
    name:"message",
    initialState,
    reducers:{

    }
})


export const messageReducer = messageSlice.reducer