import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name:"messageSlice",
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage(state,action){
            state.messages=[...state.messages,action.payload]
        }
    }
})

//compare users messages to trustedUsers Messages