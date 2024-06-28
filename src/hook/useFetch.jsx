import axios from "axios";
import { useEffect, useState } from "react";
import { getcategoriesFailure, getcategoriesPending, getcategoriesSuccess } from "../redux/categoriesSlice"
import { useDispatch, useSelector } from "react-redux";
import { getJobsPending, getJobsSuccess } from "../redux/jobsSlice";
import { getJobsSearchFailure, getJobsSearchPending, getJobsSearchSuccess, resetJobsSearch } from "../redux/jobsSearch";
const useFetch = (url, title)=>{
   

    const dispatch = useDispatch()
    const [data, setData] = useState([]);
    const [jobs, setJobs] = useState([]);
    const fetchData = async(url)=>{
      if(title == "categories"){
        dispatch(getcategoriesPending())
      }
      else if(title == "jobs"){
        dispatch(getJobsPending())
     }
      else if(title == "jobsSearch"){
        dispatch(getJobsSearchPending())
      }
      else if(title == "jobsSearch2"){
        dispatch(resetJobsSearch())
        dispatch(getJobsSearchPending())
        
      }
        try{
          if(title == "categories"){
            const res = await axios.get(url);
            console.log("res",res);
           res && dispatch(getcategoriesSuccess(res.data))
           return
          }
          else if(title == "jobs"){
            const response = await axios.get(url);
            response && dispatch(getJobsSuccess(response.data))
            // setData(response.data.data)
          }
          else if(title == "jobsSearch"){
            const response = await axios.get(url);
            response && dispatch(getJobsSearchSuccess(response.data))
            console.log("Jobsearch chl rha");
            // setData(response.data.data)
          }
          else if(title == "jobsSearch2"){
            const response = await axios.get(url);
            response && dispatch(getJobsSearchSuccess(response.data))
            console.log("Jobsearch2 chl rha");
            setData(response.data.data)
          }
        }catch(err){
          const message =err.response.data.message
         console.log(err.response.data.message);
         dispatch(getJobsSearchFailure(message))
        }
      
      
    }
    useEffect(()=>{
      fetchData(url)
    },[url])
   console.log(data);
  
}
export default useFetch;