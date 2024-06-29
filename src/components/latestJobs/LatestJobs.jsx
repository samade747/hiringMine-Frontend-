import { Box, CircularProgress, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { format } from "timeago.js"

import "./latestJobs.css";
import axios from "axios";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LOGO from "../../assets/hRlogo2.png"
import useFetch from "../../hook/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { getJobsSearchSuccess } from "../../redux/jobsSearch";
import { useNavigate } from "react-router-dom";
import { serverUrl } from "../../utils/appConstant";

// Styled component for individual items
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

function LatestJobs() {
  // State to hold HTML content
  const [htmlContent, setHtmlContent] = useState('');

  // Get theme and jobs data from Redux store
  const { bgTheme } = useSelector(state => state.bgTheme);
  const { jobs, loading, error } = useSelector(state => state.jobs);
  
  // Initialize dispatch and navigate
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch latest jobs data
  const res = useFetch(`${serverUrl}/api/jobs/all?limit=10&pageNo=1&keyWord=&category=`, "jobs");
  console.log("jobs", jobs);

  // Function to navigate to a specific job search result
  const getAspecificAllJobs = (desc) => {
    const searchName = desc.split(" ")[0];
    navigate(`/jobsearch?keyword=${searchName}&limit=10`);
  }

  return (
    <Container className="latestJobs">
      {/* Header section */}
      <Box className={bgTheme ? "title1" : "title"}>
        <h3><span>Latest And Top</span> Job Openings</h3>
      </Box>
      <Box>
        <>
          {/* Grid container for job listings */}
          <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop={"20px"}>

            {/* Display loading spinner if loading */}
            {loading ?
              <div className="loadingLatestJobs">
                <CircularProgress />
              </div> :
              // Map through jobs and display each job in a grid item
              jobs?.slice(0, 6).map((job) => (
                <Grid item xs={12} sm={6} md={4} lg={4} xl={4} style={{ cursor: "pointer" }} key={job._id} onClick={() => getAspecificAllJobs(job.designation)}>
                  <Item className={bgTheme ? "LatestJobs2" : 'LatestJobs'}>
                    <div className="LatestJobsHeader">
                      <div className="LatestJobsTitles">
                        <p className="companyName">{job.companyName || "Anonymous"}</p>
                        <p className="designation">
                          {job?.designation?.split(" ")[0]?.slice(0, 1)?.toUpperCase()}
                          {job?.designation?.split(" ")[0]?.slice(1)?.toLowerCase()} 
                          {job.designation.split(" ")[1].slice(0, 1).toUpperCase()}
                          {job?.designation?.split(" ")[1]?.slice(1)?.toLowerCase()}
                        </p>
                        <p className="salary">{job.payRangeStart ? job.payRangeStart : "No Salary Mentioned"} - {job.payRangeEnd ? job.payRangeEnd : ""}</p>
                      </div>
                      <div className="LatestJobsImg">
                        <img className='LatestJobsLogo' src={LOGO} alt="" />
                      </div>
                    </div>
                    {/* Display job summary */}
                    <div className={bgTheme ? "LatestJobsInfo1" : "LatestJobsInfo"} dangerouslySetInnerHTML={{ __html: job.summary }} />
                    
                    <div className="LatestJobsInfoPar">
                      <div className="LatestJobsBtnAndCountry">
                        <Button variant="contained" className="LatestJobsBtn">{job.jobFeseability}</Button>
                        <p className="LatestJobsCountry">Karachi, Pakistan</p>
                      </div>
                      <div className={bgTheme ? "LatestJobsInfoUser1" : "LatestJobsInfoUser"}>
                        <p className="hourInfo">{format(job.createdAt)}</p>
                        <p className="viewsInfo">{job.views} views</p>
                      </div>
                    </div>
                  </Item>
                </Grid>
              ))
            }
          </Grid>
        </>
      </Box>
    </Container>
  )
}

export default LatestJobs;

