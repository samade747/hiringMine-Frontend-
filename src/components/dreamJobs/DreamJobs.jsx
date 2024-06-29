// Import necessary components and hooks from @mui/material
import { CircularProgress, Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
// Import the styled function from @mui/material/styles to create a styled component
import { styled } from '@mui/material/styles';
// Import an icon from @mui/icons-material
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
// Import custom CSS file for styling
import './dreamJobs.css';
// Import an image to use in the component
import Job_Image from "../../assets/DreamJob.png"
// Import a custom hook for fetching data
import useFetch from '../../hook/useFetch';
// Import useSelector hook from react-redux to access the Redux store
import { useSelector } from 'react-redux';
// Import a constant for the server URL
import { serverUrl } from '../../utils/appConstant';
// Import axios for making HTTP requests
import axios from 'axios';
// Import Link and useNavigate from react-router-dom for navigation
import { Link, useNavigate } from 'react-router-dom';

// Define a styled component using Paper as the base
const Item = styled(Paper)(({ theme }) => ({
  // Set background color based on theme mode (dark or light)
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // Spread typography styles
  ...theme.typography.body2,
  // Add padding
  padding: theme.spacing(1),
  // Center the text
  textAlign: 'center',
  // Set text color based on theme
  color: theme.palette.text.secondary,
}));

// Define the DreamJobs functional component
function DreamJobs() {
  // Extract categories, loading, and error states from the Redux store
  const { categories, loading, error } = useSelector(state => state.categories);
  // Extract bgTheme state from the Redux store
  const { bgTheme } = useSelector(state => state.bgTheme);
  // Get the navigate function to programmatically navigate
  const navigate = useNavigate();
 
  // Fetch categories data using the custom hook
  const data = useFetch(`${serverUrl}/api/categories/all`, "categories");
  console.log("cat", categories);

  // Define a handler function to navigate to the /categories route
  const specificJobsHandler = async () => {
    navigate("/categories")
  }
  
  // Define a handler function to navigate to the /categories route for job search
  const navigateJobSearchHandler = () => {
    navigate("/categories")
  }

  // Return the JSX to render the component
  return (
    // Container component from @mui/material with conditional class name based on bgTheme
    <Container className={bgTheme ? "header1" : 'header'}>
      {/* Box component from @mui/material with conditional class name based on bgTheme */}
      <Box className={bgTheme ? "title1" : "title"}>
        {/* Title for the Dream Jobs section */}
        <h3>Find Your Dream Job <span>Super Fast Ever.</span></h3>
        {/* Description for the Dream Jobs section with conditional class name based on bgTheme */}
        <p className={bgTheme ? "dreamJobsPara1" : 'dreamJobsPara'}>
          We are here to help jobseekers connect with organizer and companies. We provide the best opportunities to professional people.
        </p>
      </Box>

      {/* Box component containing the job image */}
      <Box className='imgPar'>
        <img src={Job_Image} alt="JobsImg" />
      </Box>

      {/* Box component with conditional class name based on bgTheme and additional margin top */}
      <Box className={bgTheme ? "title1" : "title"} style={{ marginTop: "50px" }}>
        {/* Title for the Career Options section */}
        <h3><span>Countless Career Options </span>Are Waiting For You To Explore</h3>
      </Box>

      {/* Box component containing the job categories grid */}
      <Box className="jobCategories">
        <div>
          {/* Grid container from @mui/material for the job categories */}
          <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {/* Display loading spinner if loading, otherwise display categories */}
            {loading ? (
              <div className='loaderDreamJob'>
                <CircularProgress />
              </div>
            ) : (
              // Map over the categories and create a Grid item for each
              categories?.slice(0, 8)?.map((data) => (
                <Grid 
                  item 
                  xs={12} 
                  sm={6} 
                  md={3} 
                  lg={3} 
                  xl={3} 
                  key={data._id} 
                  style={{ cursor: "pointer" }} 
                  onClick={specificJobsHandler}
                >
                  {/* Styled Item component */}
                  <Item className={bgTheme ? "cards1" : 'cards'}>
                    <div className={bgTheme ? "jobsCard1" : 'jobsCard'}>
                      {/* Job category icon */}
                      <img className='jobsUserIcon' src="https://hiringmine.com/assets/ArtIcon-abc0c65a.svg" alt="" />
                      {/* Job category name */}
                      <p className='jobsCardp-1'>{data.name.toUpperCase()}</p>
                      {/* Job count for the category */}
                      <p className='jobscardp-2'>{data.jobsCount} Jobs</p>
                    </div>
                  </Item>
                </Grid>
              ))
            )}
          </Grid>
        </div>

        {/* Button to view all job categories */}
        <div className='viewAllBtn' onClick={navigateJobSearchHandler}>
          <p>View All <span><ArrowRightAltOutlinedIcon /></span></p>
        </div>
      </Box>
    </Container>
  )
}

// Export the DreamJobs component as the default export
export default DreamJobs;
