import { configureStore } from "@reduxjs/toolkit";
import ProjectSlice from "./project/index"

export const store = configureStore({
    reducer: {
        project: ProjectSlice
    }
})