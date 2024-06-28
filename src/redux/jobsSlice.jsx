import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    jobs : [],
    loading: false,
    error: false
}

const jobsSlice = createSlice({
    name: "jobs",
    initialState,
    reducers:{
        getJobsPending: (state)=>{
            state.loading = true;
        },
        getJobsSuccess: (state, {payload})=>{
            state.jobs = payload;
            state.loading = false;
            state.error = false;
        },
        getJobsFailure: (state,{payload})=>{
            state.loading = false;
            state.loading = payload;
            
        },
    }
});

const {actions, reducer} = jobsSlice;
export const {getJobsPending, getJobsSuccess, getJobsFailure} = actions;
export default reducer;