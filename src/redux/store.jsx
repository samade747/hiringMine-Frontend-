import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import jobsSlice from "./jobsSlice";
import jobsSearch from "./jobsSearch";
import singleJobSlice from "./singleJobSlice";
import keywordSlice from "./keywordSlice";



import themeSlice from "./themeSlice"


export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        jobs: jobsSlice,
        bgTheme: themeSlice,
        jobsSearch: jobsSearch,
        singleJob: singleJobSlice,
        keyword: keywordSlice
    },
});

