import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import { API_URL } from "../../utils";

export const GetMessage = createAsyncThunk("message/get" , async () => {
    return await axios.get(`${API_URL}/messages`).then(res => res.data)
})
export const PostMessage = createAsyncThunk("message/post" , async (body) => {
    return await axios.post(`${API_URL}/messages`, body).then(res => res.data)
})

const MessageSlice = createSlice({
    name: "message",
    initialState:{
        getMessage :{
            Loading: false,
            Error: false,
            Success: false,
            Data: []
        },
        postMessage :{
            Loading: false,
            Error: false,
            Success: false,
            Data: []
        }
    },
    extraReducers:{
        [GetMessage.pending] : (state, action) => {
            state.getMessage.Loading = true;
            state.getMessage.Error = false;
            state.getMessage.Success = false;
        },
        [GetMessage.fulfilled] : (state, action) => {
            state.getMessage.Loading = false;
            state.getMessage.Error = false;
            state.getMessage.Success = true;
            state.getMessage.Data = action.payload
        },
        [GetMessage.rejected] : (state, action) => {
            state.getMessage.Loading = false;
            state.getMessage.Error = true;
            state.getMessage.Success = false;
            state.getMessage.Data = action.payload
        },
        [PostMessage.pending] : (state, action) => {
            state.postMessage.Loading = true;
            state.postMessage.Error = false;
            state.postMessage.Success = false;
        },
        [PostMessage.fulfilled] : (state, action) => {
            state.postMessage.Loading = false;
            state.postMessage.Error = false;
            state.postMessage.Success = true;
            state.postMessage.Data = action.payload
        },
        [PostMessage.rejected] : (state, action) => {
            state.postMessage.Loading = false;
            state.postMessage.Error = true;
            state.postMessage.Success = false;
            state.postMessage.Data = action.payload
        }
    }
})
export const {} = MessageSlice.actions;
export default MessageSlice.reducer