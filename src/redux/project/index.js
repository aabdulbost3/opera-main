import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import { API_URL } from "../../utils/api";

export const GetProject = createAsyncThunk("project/get" , async () => {
    return await axios.get(`${API_URL}/project`).then(res => res.data)
})
export const ProjectSlice = createSlice({
    name: "project",
    initialState:{
        getProject :{
            Loading: false,
            Error: false,
            Success: false,
            Data: []
        }
    },
    extraReducers:{
        [GetProject.pending] : (state, action) => {
            state.getProject.Loading = true;
            state.getProject.Error = false;
            state.getProject.Success = false;
        },
        [GetProject.fulfilled] : (state, action) => {
            state.getProject.Loading = false;
            state.getProject.Error = false;
            state.getProject.Success = true;
            state.getProject.Data = action.payload
        },
        [GetProject.rejected] : (state, action) => {
            state.getProject.Loading = false;
            state.getProject.Error = true;
            state.getProject.Success = false;
            state.getProject.Data = action.payload
        }
    }
})
export const {} = ProjectSlice.actions;
export default ProjectSlice.reducer