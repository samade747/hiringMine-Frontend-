import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    keyword: {},
    loading: false,
    error: false
};

const keywordSlice = createSlice({
    name: "keyword",
    initialState,
    reducers:{
        getKeyWordPending: (state)=>{
            state.loading = true;
        },
        getKeyWordSuccess: (state, {payload})=>{
            state.keyword = payload;
            state.loading = false;
            state.error = false;
        },
        getKeyWordFailure: (state,{payload})=>{
            state.loading = false;
            state.loading = payload;
            
        },
    }
});
const {actions, reducer} = keywordSlice;
export const {getKeyWordPending, getKeyWordSuccess, getKeyWordFailure} = actions;
export default reducer;