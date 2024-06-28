import { Container } from '@mui/material'
import "./categories.css";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import CardTravelOutlinedIcon from '@mui/icons-material/CardTravelOutlined';
import Navbar from '../../components/navbar/Navbar';
import useFetch from '../../hook/useFetch';
import HR_LOGO from "../../assets/hRlogo2.png";
import { useSelector } from 'react-redux';
import { serverUrl } from '../../utils/appConstant';
import Hello from '../../components/hello/Hello';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Categories() {
  const {categories,loading,error}= useSelector(state=> state.categories);
  const {bgTheme} = useSelector(state=> state.bgTheme)
  console.log("cate",categories);
  

  console.log(categories);
    const data = useFetch(`${serverUrl}/api/categories/all`,"categories");
    
  return (
    <>
    <div>
        <Hello/>
    </div>
    <Container className='jobsCon'>
      <div className="title">
        <h3> <span>Categories</span></h3>
       
      </div>
     <Box sx={{ width: '100%',marginTop:"40px" }}>
      {loading ? (
        <div style={{height:"300px"}}>
        <div className='loader'>
           <img className='svgLoader' src="https://hiringmine.com/assets/wave-bd174a8e.gif" alt="" />
          <img className='svgImg2' src={HR_LOGO} alt=""  />
        </div>
        </div>
      ) :
      <>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
       {categories?.map((data)=>(
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={data._id}>
              <Item className={bgTheme?"cards1":'cards'}>
                <div className='jobsCard'>
                    <img className='jobsUserIcon' src="https://hiringmine.com/assets/ArtIcon-abc0c65a.svg" alt=""/>
                   
                    <p className='jobsCardp-1'>{data.name}</p>
                    <p className={bgTheme?"jobscardp-3":'jobscardp-2'}>{data.jobsCount} Jobs</p>
                </div>
              </Item>
            </Grid>
            
          
       ))}
       </Grid>
      </>}
    </Box>
  
    </Container>
    </>
  )
}

export default Categories