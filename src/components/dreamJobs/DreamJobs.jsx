import { CircularProgress, Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import './dreamJobs.css';
import Job_Image from "../../assets/DreamJob.png"
import useFetch from '../../hook/useFetch';
import { useSelector } from 'react-redux';
import { serverUrl } from '../../utils/appConstant';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
//Hello&Umair@5170978

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function DreamJobs() {
  const {categories,loading, error} = useSelector(state => state.categories);
  const {bgTheme} = useSelector(state => state.bgTheme);
  const navigate = useNavigate();
 
  const data = useFetch(`${serverUrl}/api/categories/all`,"categories");
  console.log("cat", categories);
  const specificJobsHandler =async ()=>{
    navigate("/categories")
  }
  
  //Job Search Handler
  const navigateJobSearchHandler = ()=>{
    navigate("/categories")
  }
  return (
    <Container className={bgTheme?"header1":'header'}>
      <Box className={bgTheme? "title1":"title"}>
        <h3>Find Your Dream Job <span>Super Fast Ever.</span></h3>
        <p className={bgTheme? "dreamJobsPara1":'dreamJobsPara'}>We are here to help jobseekers connect with organizer and companies. We provide the best opportunities to professional people.</p>

      </Box>
      <Box className='imgPar'>
        <img src={Job_Image} alt="JobsImg" />
      </Box>
      <Box className={bgTheme?"title1":"title"} style={{ marginTop: "50px" }}>
        <h3><span>Countless Career Options </span>Are Waiting For You To Explore</h3>
      </Box>
      <Box className="jobCategories">
        <div >
          <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
            {loading ? <div className='loaderDreamJob'>
              <CircularProgress />
            </div>:
            categories?.slice(0, 8)?.map((data) => (
              <Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={data._id} style={{cursor:"pointer"}} onClick={specificJobsHandler}>
                <Item className={bgTheme?"cards1":'cards'} >
                  <div className={bgTheme?"jobsCard1":'jobsCard'}>
                    <img className='jobsUserIcon' src="https://hiringmine.com/assets/ArtIcon-abc0c65a.svg" alt="" />

                    <p className='jobsCardp-1'>{data.name.toUpperCase()}</p>
                    <p className='jobscardp-2'>{data.jobsCount} Jobs</p>
                  </div>
                </Item>
              </Grid>


            ))}
            
          
          </Grid>
        </div>
        <div className='viewAllBtn' onClick={navigateJobSearchHandler}>
          <p>View All <span><ArrowRightAltOutlinedIcon /></span></p>
        </div>
      </Box>
    </Container>
  )
}

export default DreamJobs