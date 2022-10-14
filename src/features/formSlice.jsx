import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    errorMessage:"",
    inputs:{
        username:"",
        email:"",
        password:""
        
    }
}
const formSlice = createSlice({
    name:"form",
    initialState,
    reducers:{
        setErrorMessage: (state, action) => {
            state.errorMessage = action.payload;

        },
        setUsername: (state, action) => {
            const input = action.payload.input;
            const value = action.payload.value;
            switch(input){
                case 'UserName':
                    state.inputs.username = value;
                    break;
                case 'Password':
                    state.inputs.password = value;
                    break;
                case 'Email':
                    state.inputs.email = value;
                    break;
                default:
                    console.log("no one")
                    console.log(input)
            }
        }

    }
})

export const formReducer = formSlice.reducer;
export const {setUsername, setErrorMessage} = formSlice.actions