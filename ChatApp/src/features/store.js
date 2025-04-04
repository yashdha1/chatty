import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";  // Ensure this matches the file name exactly

export const store = configureStore({
    reducer: {
        themeKey : themeReducer,
    },
});
