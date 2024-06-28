import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    categories : null,
    loading: false,
    error: false
}

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers:{
        getcategoriesPending: (state)=>{
            state.loading = true;
        },
        getcategoriesSuccess: (state, {payload})=>{
            state.categories = payload;
            state.loading = false;
            state.error = false;
        },
        getcategoriesFailure: (state,{payload})=>{
            state.loading = false;
            state.loading = payload;
            
        },
    }
});

const {actions, reducer} = categoriesSlice;
export const {getcategoriesPending, getcategoriesSuccess, getcategoriesFailure} = actions;
export default reducer;