import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import './jobDetail.css'
import Navbar from '../../components/navbar/Navbar'
import Hello from '../../components/hello/Hello'
import LOGO from "../../assets/hRlogo2.png"
import HR_LOGO from "../../assets/hRlogo2.png";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import useFetch from '../../hook/useFetch'
import { format } from "timeago.js"
import { useLocation, useNavigate } from 'react-router-dom';
import { getSingleJobSuccess } from '../../redux/singleJobSlice'
import { serverUrl } from '../../utils/appConstant'
const JobDetail = () => {
  const dispatch = useDispatch()
  const { singleJob } = useSelector(state => state.singleJob)
  const location = useLocation();
  const jobId = location.pathname.split("/")[3]
  console.log("loca", jobId);
  console.log("signleJob", singleJob);

  //const jobId = new URLSearchParams(location.search).get('jid');
  const { bgTheme } = useSelector(state => state.bgTheme)
  const { jobsSearch, loading, error } = useSelector(state => state.jobsSearch)
  const [isData, setIsData] = useState(false)
  const navigate = useNavigate()

  console.log('loadin', loading);
  const [page, setPage] = useState(0);
  console.log("jobsSearch", jobsSearch.length);
  const [selectedPost, setSelectedPost] = useState(true);






  const data = useFetch(`${serverUrl}/api/jobs/all?limit=10&pageNo=1&keyWord=&category=`, "jobsSearch")


  useEffect(() => {
    const handleScroll = () => {
      const {
        scrollTop,
        scrollHeight,
        clientHeight
      } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        // Abhi tak ki data ke length se next page number ka calculation karein
        const nextPage = page + 1;
        // Agar data fetch nahi horaha hai to next page fetch karein
        console.log(nextPage);
        setPage((pre) => pre + 1)
        // setIsData(false)

      }


      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll)

      };
    }
    handleScroll()
  }, [])

  const singleJobHandler = (postId) => {
    console.log("postId", postId);
    const post = jobsSearch.find((post) => post._id === postId);
    dispatch(getSingleJobSuccess(post))
    // setSelectedPost(!selectedPost)
    console.log(post);
    navigate(`/jobsearch/jid/${postId}`)
  }

  //Cancel Single post Handler
  const cancelHandler = () => {
    navigate("/jobsearch")
  }


  return (
    <Container className={bgTheme ? 'jobsContainer1' : "jobsContainer2"}>
      <Box>
        <Hello jobs="jobs" />
      </Box>
      <Box>
        {loading && jobsSearch.length === 0 ?
          (
            <div className='loader'>
              <img className='svgLoader' src="https://hiringmine.com/assets/wave-bd174a8e.gif" alt="" />
              <img className='svgImg2' src={HR_LOGO} alt="" />
            </div>
          )
          :
          <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop={"20px"} className='detailsJobsGrid'>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} order={{xm: 1}} style={{ cursor: "pointer" }}  >
              <div className='hello'>
                {jobsSearch?.map((job, index) => (

                  <div className={bgTheme ? "LatestJobs2" : 'LatestJobs'} key={`${job._id}-${index}`}>
                    <div className="LatestJobsHeader">
                      <div className="LatestJobsTitles">
                        <p className="companyName">{job.companyName || "Anonymous"}</p>
                        <p className="designation">{job.designation}</p>
                        <p className="salary">{!job?.payRangeStart && !job?.payRangeEnd ? "No Salary Mentioned" : `${job?.payRangeStart} - ${job?.payRangeEnd}`}</p>


                      </div>
                      <div className="LatestJobsImg">
                        <img className='LatestJobsLogo' src={LOGO} alt="" />
                      </div>
                    </div>
                    <div className={bgTheme ? "LatestJobsInfo1" : "LatestJobsInfo"} dangerouslySetInnerHTML={{ __html: job.summary }} />


                    <div className="LatestJobsInfoPar">
                      <div className="LatestJobsBtnAndCountry">
                        <Button variant="contained" className="LatestJobsBtn" onClick={() => singleJobHandler(job._id)}>{job.jobFeseability}</Button>
                        <p className="LatestJobsCountry">Karachi, Pakistan</p>
                      </div>
                      <div className={bgTheme ? "LatestJobsInfoUser1" : "LatestJobsInfoUser"}>
                        <p className="hourInfo">{format(job.createdAt)}</p>
                        <p className="viewsInfo">{job.views} views</p>
                      </div>
                    </div>

                  </div>
                ))
                }
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} order={{xm: 2}} style={{ cursor: "pointer" }} className='helllo'>
              <div className={bgTheme ? "postCard1":"postCard"}>
                <div className="postWrapper">
                  <div className="postHeader">
                    <img className='LatestJobsLogo' src={LOGO} alt="" />
                    <CloseOutlinedIcon onClick={cancelHandler} />
                  </div>
                  <div className="bottomWrapper">
                    <p className='designation'>{singleJob?.designation}</p>
                    <p className='locationWork'>{singleJob?.companyName || "Anonymous"}</p>
                    <div className="postBottom">
                      <p className='cityName'>{singleJob?.city && singleJob?.city + " ,"} {singleJob?.country}</p>
                      <p>{singleJob?.views} views</p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="detailsContainer">
                  <div className="detailscardWrapper">
                    <div className="jobDetailWrapper">
                      <p className='designation'>

                        Job Details
                      </p>

                      <div className="salaryWrapper">
                        <p>Salary</p>
                        <p>{!singleJob?.payRangeStart && !singleJob?.payRangeEnd ? "No Salary Mentioned" : `${singleJob?.payRangeStart} - ${singleJob?.payRangeEnd}`}</p>
                      </div>
                      <div className="jobTypeWrapper">
                        <p>Job Type</p>
                        <p>{singleJob?.jobType}</p>
                      </div>

                    </div>
                    <hr />
                    <div className="experience">
                      <div className="experienceWrapper">
                        <p >Experience</p>
                        <p>{singleJob?.experience} years</p>
                      </div>
                    </div>
                    <hr />
                    <div className="skills">
                      <div className="skillsWrapper">
                        <p>Skills</p>
                        <Stack direction="row" style={{ display: "flex", flexWrap: "wrap", gap: "16px", margin: "16px 0" }} spacing={2}>
                          {singleJob?.skill?.map((skill) => (
                            <Button variant="outlined" className="skillButton">{skill}</Button>
                          ))
                          }
                        </Stack>
                      </div>
                    </div>
                    <hr />
                    <div className="fullJobDescription">
                      <p>Full Job Description</p>
                      <div className='jobDetailDanger' dangerouslySetInnerHTML={{ __html: singleJob?.summary }} />
                       <div style={{marginTop:"20px",marginBottom:"20px"}}>
                          {
                            singleJob?.hashTags.map((val)=>(
                              <Button variant="outlined" className="skillButton">{val}</Button>
                            ))
                          }
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>}
      </Box>
    </Container>
  )
}

export default JobDetail

// <div className="fullJobWrapper">
//                         <strong>Faculty Training Manager</strong>
//                         <p><br /></p>
//                         <p>Location: <strong>Allied Bank Limited (Lahore, Multan)</strong> </p>
//                         <p><br /></p>
//                         <p>Department: <strong> Human Resources, Training and Development</strong> </p>
//                         <p><br /></p>
//                         <p>Job Summary:</p>
//                         <p><br /></p>
//                         <p>The Faculty Training Manager will be responsible for developing and executing a comprehensive training curriculum tailored for the bank's employees staff. This position requires delivering high-quality training in state-of-the-art facilities located in Lahore and Multan. The ideal candidate will enhance employee competencies in digital technology and customer services support to facilitate augment the bank & transformation and modernization initiatives.</p>
//                         <p><br /></p>
//                         <strong>Key Responsibilities:</strong>
//                         <p><br /></p>
//                         <ul>
//                           <li>Plan and execute training calendars in line with training needs identified during annual appraisal cycle as well as Bank’s strategic goals;</li>
//                           <li>Design and develop training programs on emerging topics through focus based on the needs of the bank, focusing on digital banking, customer servicessupport, and organizational transformation</li>
//                           <li>Deliver engaging and effective training sessions to diverse staff employee groups, ensuring high retention of material and practical application of skills;.</li>

//                         </ul>
//                         <p><br /></p>
//                         <strong>Required Competencies/Skills:</strong>
//                         <p><br /></p>
//                         <ul>
//                           <li>Excellent leadership, motivational, team building and communication skills along with excellent linguistics skills (both in Urdu and English); , both written and spoken, in English.</li>
//                           <li>Strong ability to facilitate, present, and motivate staff across various levels of the organization.</li>
//                         </ul>
//                         <p><br /></p>
//                         <strong>Skills</strong>
//                         <ul>
//                           <li>Program Review Technique</li>
//                           <li>Program Review Technique</li>
//                           <li>Program Review Technique</li>
//                           <li>Program Review Technique</li>
//                         </ul>
//                         <p><br /></p>
//                         <strong>TRAINING MANAGER</strong>
//                         <p><br /></p>
//                         <strong>Job Detail</strong>
//                         <p>Experience:<strong> 5 Years - 7 Years</strong></p>
//                         <p>Salary: Rs.<strong> 350,000 - 400,000</strong></p>
//                         <p>Share your resume at <a href="">mudasirbarii@outlook.com</a></p>
//                         <div className="tagsWrapper">
//                           <strong>Tags</strong>
//                           <div style={{ marginTop: "40px" }}>
//                             {
//                               singleJob?.hashTags.map((tag) => (
//                                 <Button variant="outlined" className="skillButton btn2Hey" >{tag}</Button>
//                               ))
//                             }
//                           </div>
//                         </div>


//                       </div>