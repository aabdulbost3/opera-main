import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils";

export const PostImage = createAsyncThunk("image/post", async({id, data, config}) => {
    return await axios.get(`${API_URL}/image/${id}`, data, config).then(res => res.data)
})
export const PutImage = createAsyncThunk("image/put", async({id, body}) => {
    return await axios.put(`${API_URL}/image/${id}`, body)
})
export const DeleteImage = createAsyncThunk("image/delete", async(id) => {
    return await axios.delete(`${API_URL}/image/${id}`)
})
const ImageSlice = createSlice({
    name: "image",
    initialState:{
        postImage: {
            Loading : false,
            Error: false,
            Succes: false,
            Data: []
        },
        putImage: {
            Loading: false,
            Error: false,
            Succes: false,
            Data: []
        },
        deleteImage: {
            Loading: false,
            Error: false,
            Succes: false,
            Data: []
        }
    },
    extraReducers:{
        [PostImage.pending] : (state, action) => {
            state.postImage.Loading = true;
            state.postImage.Error = false;
            state.postImage.Succes = false
        },
        [PostImage.fulfilled] : (state, action) => {
            state.postImage.Loading = false
            state.postImage.Error = false
            state.postImage.Succes = true
            state.postImage.Data = action.payload
        },
        [PostImage.rejected] : (state, action) => {
            state.postImage.Loading = false
            state.postImage.Error = true
            state.postImage.Succes = false
            state.postImage.Data = action.payload
        },
        [PutImage.pending] : (state, action) => {
            state.putImage.Loading = true;
            state.putImage.Error = false;
            state.putImage.Succes = false
        },
        [PutImage.fulfilled] : (state, action) => {
            state.putImage.Loading = false
            state.putImage.Error = false
            state.putImage.Succes = true
            state.putImage.Data = action.payload
        },
        [PutImage.rejected] : (state, action) => {
            state.putImage.Loading = false
            state.putImage.Error = true
            state.putImage.Succes = false
            state.putImage.Data = action.payload
        },
        [DeleteImage.pending] : (state, action) => {
            state.deleteImage.Loading = true;
            state.deleteImage.Error = false;
            state.deleteImage.Succes = false
        },
        [DeleteImage.fulfilled] : (state, action) => {
            state.deleteImage.Loading = false
            state.deleteImage.Error = false
            state.deleteImage.Succes = true
            state.deleteImage.Data = action.payload
        },
        [DeleteImage.rejected] : (state, action) => {
            state.deleteImage.Loading = false
            state.deleteImage.Error = true
            state.deleteImage.Succes = false
            state.deleteImage.Data = action.payload
        }
    }
})
export const {} = ImageSlice.actions;
export default ImageSlice.reducer