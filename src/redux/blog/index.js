import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import { API_URL } from "../../utils";

export const GetBlogMore = createAsyncThunk("bloger/get" , async (id) => {
    return await axios.get(`${API_URL}/blogs/${id}`).then(res => res.data)
})
export const GetBlog = createAsyncThunk("blog/get" , async () => {
    return await axios.get(`${API_URL}/blogs`).then(res => res.data)
})
export const DeleteBlog = createAsyncThunk("blog/delete" , async (id) => {
    return await axios.delete(`${API_URL}/blogs/${id}`).then(res => res.data)
})
export const PostBlog = createAsyncThunk("blog/post" , async (body) => {
    return await axios.post(`${API_URL}/blogs`,body).then(res => res.data)
})
export const PutBlog = createAsyncThunk("blog/put" , async ({body, id}) => {
    return await axios.put(`${API_URL}/blogs/${id}`,body).then(res => res.data)
})
const BlogSlice = createSlice({
    name: "blog",
    initialState:{
        getBlog :{
            Loading: false,
            Error: false,
            Success: false,
            Data: []
        },
        getBlogMore :{
            Loading: false,
            Error: false,
            Success: false,
            Data: []
        },
        deleteBlog :{
            Loading: false,
            Error: false,
            Success: false,
            Data: []
        },
        postBlog :{
            Loading: false,
            Error: false,
            Success: false,
            Data: []
        },
        putBlog :{
            Loading: false,
            Error: false,
            Success: false,
            Data: []
        }
    },
    extraReducers:{
        [GetBlog.pending] : (state, action) => {
            state.getBlog.Loading = true;
            state.getBlog.Error = false;
            state.getBlog.Success = false;
        },
        [GetBlog.fulfilled] : (state, action) => {
            state.getBlog.Loading = false;
            state.getBlog.Error = false;
            state.getBlog.Success = true;
            state.getBlog.Data = action.payload
        },
        [GetBlog.rejected] : (state, action) => {
            state.getBlog.Loading = false;
            state.getBlog.Error = true;
            state.getBlog.Success = false;
            state.getBlog.Data = action.payload
        },
        [GetBlogMore.pending] : (state, action) => {
            state.getBlogMore.Loading = true;
            state.getBlogMore.Error = false;
            state.getBlogMore.Success = false;
        },
        [GetBlogMore.fulfilled] : (state, action) => {
            state.getBlogMore.Loading = false;
            state.getBlogMore.Error = false;
            state.getBlogMore.Success = true;
            state.getBlogMore.Data = action.payload
        },
        [GetBlogMore.rejected] : (state, action) => {
            state.getBlogMore.Loading = false;
            state.getBlogMore.Error = true;
            state.getBlogMore.Success = false;
            state.getBlogMore.Data = action.payload
        },
        [DeleteBlog.pending] : (state, action) => {
            state.deleteBlog.Loading = true;
            state.deleteBlog.Error = false;
            state.deleteBlog.Success = false;
        },
        [DeleteBlog.fulfilled] : (state, action) => {
            state.deleteBlog.Loading = false;
            state.deleteBlog.Error = false;
            state.deleteBlog.Success = true;
            state.deleteBlog.Data = action.payload
        },
        [DeleteBlog.rejected] : (state, action) => {
            state.deleteBlog.Loading = false;
            state.deleteBlog.Error = true;
            state.deleteBlog.Success = false;
            state.deleteBlog.Data = action.payload
        },
        [PostBlog.pending] : (state, action) => {
            state.postBlog.Loading = true;
            state.postBlog.Error = false;
            state.postBlog.Success = false;
        },
        [PostBlog.fulfilled] : (state, action) => {
            state.postBlog.Loading = false;
            state.postBlog.Error = false;
            state.postBlog.Success = true;
            state.postBlog.Data = action.payload
        },
        [PostBlog.rejected] : (state, action) => {
            state.postBlog.Loading = false;
            state.postBlog.Error = true;
            state.postBlog.Success = false;
            state.postBlog.Data = action.payload
        },
        [PutBlog.pending] : (state, action) => {
            state.putBlog.Loading = true;
            state.putBlog.Error = false;
            state.putBlog.Success = false;
        },
        [PutBlog.fulfilled] : (state, action) => {
            state.putBlog.Loading = false;
            state.putBlog.Error = false;
            state.putBlog.Success = true;
            state.putBlog.Data = action.payload
        },
        [PutBlog.rejected] : (state, action) => {
            state.putBlog.Loading = false;
            state.putBlog.Error = true;
            state.putBlog.Success = false;
            state.putBlog.Data = action.payload
        }
    }
})
export const {} = BlogSlice.actions;
export default BlogSlice.reducer