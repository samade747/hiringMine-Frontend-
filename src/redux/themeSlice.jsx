import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    bgTheme : false,
}

const themeSlice = createSlice({
    name: "bgTheme",
    initialState,
    reducers:{
        getbgThemeSuccess: (state, {payload})=>{
            state.bgTheme = payload;
        },
    }
});

const {actions, reducer} = themeSlice;
export const {getbgThemePending, getbgThemeSuccess, getbgThemeFailure} = actions;
export default reducer;