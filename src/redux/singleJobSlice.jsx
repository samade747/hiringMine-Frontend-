import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    singleJob : undefined,
    loading: false,
    error: false
}

const singleJobSlice
 = createSlice({
    name: "singleJob",
    initialState,
    reducers:{
        getSingleJobPending: (state)=>{
            state.loading = true;
        },
        getSingleJobSuccess: (state, {payload})=>{
            state.singleJob = payload;
            state.loading = false;
            state.error = false;
        },
        getSingleJobFailure: (state,{payload})=>{
            state.loading = false;
            state.loading = payload;
            
        },
    }
});

const {actions, reducer} = singleJobSlice
;
export const {getSingleJobPending, getSingleJobSuccess, getSingleJobFailure} = actions;
export default reducer;