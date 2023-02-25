import { configureStore } from "@reduxjs/toolkit";
import ProjectSlice from "./project/index"
import BlogSlice from "./blog/index"
import MessageSlice from "./message/index"

export const store = configureStore({
    reducer: {
        project: ProjectSlice,
        blog: BlogSlice,
        message: MessageSlice
    }
})