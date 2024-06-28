import "./header.css"
import Container from '@mui/material/Container';
import CardHeader from '@mui/material/CardHeader';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputAdornment } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getKeyWordSuccess } from "../../redux/keywordSlice";





function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {bgTheme} = useSelector(state=> state.bgTheme);
  const {keyword} = useSelector(state=> state.keyword);
  console.log("key",keyword);

    const [options, setOptions] = useState([]);
    const [value, setValue] =useState(null);
    const [inputValue, setInputValue] = useState('');
    const loaded = useRef(false);
  
    const findJobsHandler = async ()=>{
      const searchName = inputValue.split(" ")[0];
      const searchKey = {
        keyword: searchName || "",
      }
      dispatch(getKeyWordSuccess(searchKey))
      navigate(`/jobsearch?keyword=${searchName}&limit=10`)
    }

  //console.log(inputValue); Input value

  return (
    <Container className={bgTheme?"header1":"header"}>
       
       <Box sx={{ width: '100%', maxWidth: 700}}>
      <Typography className="headerTitle" variant="h1" gutterBottom>
      Dig. Apply<br></br> Prepare Your Future
      </Typography>
      
      <Typography className={bgTheme?"headerPara1":"headerPara"} variant="subtitle1" gutterBottom>
      Hiring Mine connects employer and job seekers, where employers are the source of the resources and the job seeker can find and apply for their targeted job.
      </Typography>
      
    
   <Box className="searchBarPar">
    <Autocomplete
      className="google-map-demo"
      style={{width:"100%",height:"45px", display:"flex", alignItems:"center", justifyContent:"center"}}
      getOptionLabel={(option) =>
        typeof option === 'string' ? option : option.description
      }
      filterOptions={(x) => x}
      options={options}
      autoComplete
      includeInputInList
      filterSelectedOptions
      value={value}
      freeSolo
      onChange={(event, newValue) => {
        setOptions(newValue ? [newValue, ...options] : options);
        setValue(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <TextField {...params} label="Search by Role or Keyword" style={{border:bgTheme&&"2px solid #1b1b1b ", borderRadius:bgTheme &&"5px"}} InputProps={{
          ...params.InputProps,
          style: {
            color: bgTheme ? "#ffffff" : "#000000", // Change input text color based on bgTheme
            backgroundColor: bgTheme ? "#221a1a" : "#ffffff" // Change input background color based on bgTheme
          },
          startAdornment: (
            <InputAdornment position="start" className="input-padding-left" />
            
          ),
          endAdornment: (
            <InputAdornment position="end">
              <PersonSearchOutlinedIcon style={{ color: "rgb(104, 81, 255)" }} />
            </InputAdornment>
          ),
         
          
        }}
        InputLabelProps={{
          style: { color: bgTheme ? "#6851ff" : undefined },
        }}
        />
        
  
      )}
     
     
    />
    
      <button className="searchBtn" onClick={findJobsHandler}>Find Jobs</button>
      </Box>
      <Typography className="headerTitle2" variant="subtitle1" gutterBottom>
       <h6>Popular Searches</h6>
      </Typography>
      <Stack direction="row" style={{display:"flex",flexWrap:"wrap",gap:"16px", margin:"16px 0"}} spacing={2}>
      <Button variant="outlined" className="searchJobsButtons">Software</Button>
      <Button variant="outlined" className="searchJobsButtons">Developer</Button>
      <Button variant="outlined" className="searchJobsButtons">Backend</Button>
      <Button variant="outlined" className="searchJobsButtons">React</Button>
      <Button variant="outlined" className="searchJobsButtons">Node</Button>
      <Button variant="outlined" className="searchJobsButtons">React Native</Button>
      <Button variant="outlined" className="searchJobsButtons">Flutter</Button>
      <Button variant="outlined" className="searchJobsButtons">UI/UX</Button>
      <Button variant="outlined" className="searchJobsButtons">Designer</Button>
      <Button variant="outlined" className="searchJobsButtons">Web</Button>
      <Button variant="outlined" className="searchJobsButtons">SEO</Button>
      <Button variant="outlined" className="searchJobsButtons">Marketing</Button>
      <Button variant="outlined" className="searchJobsButtons">Writer</Button>
      
    </Stack>
    </Box>
    </Container>
  )
}

export default Header