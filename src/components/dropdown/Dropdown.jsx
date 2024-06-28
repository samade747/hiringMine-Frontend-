import './dropdown.css';
import { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';

const MenuProps = {
  PaperProps: {
    style: {
        width: 200,
    },
  },
};

const names1 = [
  'Development',
  'Marketing & Sales',
  'Art & Illustration Tucker',
];
const names2 = [
  'Anytime',
  '1 months',
  'Last 7 days',
  'Past 24 hours'
];
const names3 = [
  'Full-Time',
  'Part-Time',
  'Contract',
];
const names4 = [
  'Mid-Level',
  'Senior-Level',
  'Associate',
  'Internship',
  'Fresher'

];
const names5 = [
  'Onsite',
  'Remote',
  'Hybrid',
];
const names6 = [
  '0 - 20,000 PKR',
  '20,000 - 50,000 PKR',
  '50,000 - 100,000 PKR',
  '100,000 - 200,000 PKR',
  '200,000 - 300,000 PKR',
  '300,000 - 500,000 PKR',
  '500,000 + PKR',

];
const names7 = [
  '0-1 Experience',
  '1-2 Experience',
  '2-3 Experience',
  '3-4 Experience',
  '4-5 Experience',

];

export default function Dropdown() {
  const [personName1, setPersonName1] = useState([]);
  const [personName2, setPersonName2] = useState([]);
  const [personName3, setPersonName3] = useState([]);
  const [personName4, setPersonName4] = useState([]);
  const [personName5, setPersonName5] = useState([]);
  const [personName6, setPersonName6] = useState([]);
  const [personName7, setPersonName7] = useState([]);

  const [isTrue1, setIsTrue1] = useState(false);
  const [isTrue2, setIsTrue2] = useState(false);
  const [isTrue3, setIsTrue3] = useState(false);
  const [isTrue4, setIsTrue4] = useState(false);
  const [isTrue5, setIsTrue5] = useState(false);
  const [isTrue6, setIsTrue6] = useState(false);
  const [isTrue7, setIsTrue7] = useState(false);


  const dropdownHandle1 = (event) => {
    event.stopPropagation(false)
    const {
      target: { value },
    } = event;
    setPersonName1(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    
  };
  const clickHandler1 =(e)=>{
    setIsTrue1(true)
    e.stopPropagation()
  }

  const dropdownHandle2 = (event) => {
    event.stopPropagation(false)
    const {
      target: { value },
    } = event;
    setPersonName2(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    
  };
  const clickHandler2 =(e)=>{
    setIsTrue2(true)
    e.stopPropagation()
  }
  const dropdownHandle3 = (event) => {
    event.stopPropagation(false)
    const {
      target: { value },
    } = event;
    setPersonName3(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    
  };
  const clickHandler3 =(e)=>{
    setIsTrue3(true)
    e.stopPropagation()
  }
  const dropdownHandle4 = (event) => {
    event.stopPropagation(false)
    const {
      target: { value },
    } = event;
    setPersonName4(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    
  };
  const clickHandler4 =(e)=>{
    setIsTrue4(true)
    e.stopPropagation()
  }
  const dropdownHandle5 = (event) => {
    event.stopPropagation(false)
    const {
      target: { value },
    } = event;
    setPersonName5(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    
  };
  const clickHandler5 =(e)=>{
    setIsTrue5(true)
    e.stopPropagation()
  }
  const dropdownHandle6 = (event) => {
    event.stopPropagation(false)
    const {
      target: { value },
    } = event;
    setPersonName6(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    
  };
  const clickHandler6 =(e)=>{
    setIsTrue6(true)
    e.stopPropagation()
  }
  const dropdownHandle7 = (event) => {
    event.stopPropagation(false)
    const {
      target: { value },
    } = event;
    setPersonName7(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    
  };
  const clickHandler7 =(e)=>{
    setIsTrue7(true)
    e.stopPropagation()
  }

  const  clearDropdownHandler1 = (e) =>{
    e.stopPropagation()
    setIsTrue1(false)
    setPersonName1([])
  }
  const  clearDropdownHandler2 = (e) =>{
    e.stopPropagation()
    setIsTrue2(false)
    setPersonName2([])
  }
  const  clearDropdownHandler3 = (e) =>{
    e.stopPropagation()
    setIsTrue3(false)
    setPersonName3([])
  }
  const  clearDropdownHandler4 = (e) =>{
    e.stopPropagation()
    setIsTrue4(false)
    setPersonName4([])
  }
  const  clearDropdownHandler5 = (e) =>{
    e.stopPropagation()
    setIsTrue5(false)
    setPersonName5([])
  }
  const  clearDropdownHandler6 = (e) =>{
    e.stopPropagation()
    setIsTrue6(false)
    setPersonName6([])
  }
  const  clearDropdownHandler7 = (e) =>{
    e.stopPropagation()
    setIsTrue7(false)
    setPersonName7([])
  }
  return (
    <div>
      <FormControl sx={{ m: 1,  width: 150,height:40}}>
        <InputLabel id="demo-multiple-checkbox-label"  sx={{ width: '100%'}} ><i>Category</i></InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName1}
          className='selectOptionsHey'
          onChange={dropdownHandle1}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
         {names1.map((name) => (
            <MenuItem key={name} value={name} className="customMenuItem">
              <Checkbox checked={personName1.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
          <div className="bottomdropdown">
            <p onClick={(e)=>clearDropdownHandler1(e)}>Clear</p>
            <Button variant="contained" className='resultBtn'>
           Show results
      </Button>
      </div>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1,  width: 150,height:40}}>
        <InputLabel id="demo-multiple-checkbox-label"  sx={{ width: '100%'}} ><i>Date Posted</i></InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName2}
          className='selectOptionsHey'
          onChange={dropdownHandle2}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
         {names2.map((name) => (
            <MenuItem key={name} value={name} className="customMenuItem">
              <Checkbox checked={personName2.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
          <div className="bottomdropdown">
            <p onClick={(e)=>clearDropdownHandler2(e)}>Clear</p>
            <Button variant="contained" className='resultBtn'>
           Show results
      </Button>
      </div>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1,  width: 150,height:40}}>
        <InputLabel id="demo-multiple-checkbox-label"  sx={{ width: '100%'}} ><i>Job Type</i></InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName3}
          className='selectOptionsHey'
          onChange={dropdownHandle3}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
         {names3.map((name) => (
            <MenuItem key={name} value={name} className="customMenuItem">
              <Checkbox checked={personName3.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
          <div className="bottomdropdown">
            <p onClick={(e)=>clearDropdownHandler3(e)}>Clear</p>
            <Button variant="contained" className='resultBtn'>
           Show results
      </Button>
      </div>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1,  width: 150,height:40}}>
        <InputLabel id="demo-multiple-checkbox-label"  sx={{ width: '100%'}} ><i>Seniority Level</i></InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName4}
          className='selectOptionsHey'
          onChange={dropdownHandle4}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
         {names4.map((name) => (
            <MenuItem key={name} value={name} className="customMenuItem">
              <Checkbox checked={personName4.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
          <div className="bottomdropdown">
            <p onClick={(e)=>clearDropdownHandler4(e)}>Clear</p>
            <Button variant="contained" className='resultBtn'>
           Show results
      </Button>
      </div>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1,  width: 150,height:40}}>
        <InputLabel id="demo-multiple-checkbox-label"  sx={{ width: '100%'}} ><i>On-Site/Remote</i></InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName5}
          className='selectOptionsHey'
          onChange={dropdownHandle5}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
         {names5.map((name) => (
            <MenuItem key={name} value={name} className="customMenuItem">
              <Checkbox checked={personName5.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
          <div className="bottomdropdown">
            <p onClick={(e)=>clearDropdownHandler5(e)}>Clear</p>
            <Button variant="contained" className='resultBtn'>
           Show results
      </Button>
      </div>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1,  width: 150,height:40}}>
        <InputLabel id="demo-multiple-checkbox-label"  sx={{ width: '100%'}} ><i>Salary Range</i></InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName6}
          className='selectOptionsHey'
          onChange={dropdownHandle6}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
         {names6.map((name) => (
            <MenuItem key={name} value={name} className="customMenuItem">
              <Checkbox checked={personName6.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
          <div className="bottomdropdown">
            <p onClick={(e)=>clearDropdownHandler6(e)}>Clear</p>
            <Button variant="contained" className='resultBtn'>
           Show results
      </Button>
      </div>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1,  width: 150,height:40}}>
        <InputLabel id="demo-multiple-checkbox-label"  sx={{ width: '100%'}} ><i>Experience</i></InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName7}
          className='selectOptionsHey'
          onChange={dropdownHandle7}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
         {names7.map((name) => (
            <MenuItem key={name} value={name} className="customMenuItem">
              <Checkbox checked={personName7.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
          <div className="bottomdropdown">
            <p onClick={(e)=>clearDropdownHandler7(e)}>Clear</p>
            <Button variant="contained" className='resultBtn'>
           Show results
      </Button>
      </div>
        </Select>
      </FormControl>
     
      {/*<FormControl sx={{ m: 1, width: 150,height:40}} className='dropdownBox'  onClick={clickHandler2}>
      <InputLabel id={isTrue2 ? "labelhey2":"demo-multiple-checkbox-label2"}><i>Date Posted</i></InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName2}
          onChange={dropdownHandle2}
          renderValue={(selected) => selected.join(', ')}
         className='selectOptions'
        
         
        
        >
          {names2.map((name) => (
            <MenuItem key={name} value={name} className="customMenuItem">
              <Checkbox checked={personName2.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
          <div className="bottomdropdown">
            <p>Clear</p>
            <Button variant="contained" className='resultBtn'>
        Show results
      </Button>
          </div>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: 150,height:40}} className='dropdownBox'  onClick={clickHandler3}>
      <InputLabel id={isTrue3 ? "labelhey3":"demo-multiple-checkbox-label3"}><i>Job Type</i></InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName3}
          onChange={dropdownHandle3}
          renderValue={(selected) => selected.join(', ')}
         className='selectOptions'
        
         
        
        >
          {names3.map((name) => (
            <MenuItem key={name} value={name} className="customMenuItem">
              <Checkbox checked={personName3.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
          <div className="bottomdropdown">
            <p>Clear</p>
            <Button variant="contained" className='resultBtn'>
        Show results
      </Button>
          </div>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: 150,height:40}} className='dropdownBox'  onClick={clickHandler4}>
      <InputLabel id={isTrue4 ? "labelhey4":"demo-multiple-checkbox-label4"}><i>Seniority Level</i></InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName4}
          onChange={dropdownHandle4}
          renderValue={(selected) => selected.join(', ')}
         className='selectOptions'
        
         
        
        >
          {names4.map((name) => (
            <MenuItem key={name} value={name} className="customMenuItem">
              <Checkbox checked={personName4.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
          <div className="bottomdropdown">
            <p>Clear</p>
            <Button variant="contained" className='resultBtn'>
        Show results
      </Button>
          </div>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: 150,height:40}} className='dropdownBox'  onClick={clickHandler5}>
      <InputLabel id={isTrue5 ? "labelhey5":"demo-multiple-checkbox-label5"}><i>On-Site/Remote</i></InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName5}
          onChange={dropdownHandle5}
          renderValue={(selected) => selected.join(', ')}
         className='selectOptions'
        
         
        
        >
          {names5.map((name) => (
            <MenuItem key={name} value={name} className="customMenuItem">
              <Checkbox checked={personName5.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
          <div className="bottomdropdown">
            <p>Clear</p>
            <Button variant="contained" className='resultBtn'>
        Show results
      </Button>
          </div>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: 150,height:40}} className='dropdownBox'  onClick={clickHandler6}>
      <InputLabel id={isTrue6 ? "labelhey6":"demo-multiple-checkbox-label6"}><i>Salary Range</i></InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName6}
          onChange={dropdownHandle6}
          renderValue={(selected) => selected.join(', ')}
         className='selectOptions'
        
         
        
        >
          {names6.map((name) => (
            <MenuItem key={name} value={name} className="customMenuItem">
              <Checkbox checked={personName6.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
          <div className="bottomdropdown">
            <p>Clear</p>
            <Button variant="contained" className='resultBtn'>
        Show results
      </Button>
          </div>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: 150,height:40}} className='dropdownBox'  onClick={clickHandler7}>
      <InputLabel id={isTrue7 ? "labelhey7":"demo-multiple-checkbox-label7"}><i>Experience</i></InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName7}
          onChange={dropdownHandle7}
          renderValue={(selected) => selected.join(', ')}
         className='selectOptions'
        
         
        
        >
          {names7.map((name) => (
            <MenuItem key={name} value={name} className="customMenuItem">
              <Checkbox checked={personName7.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
          <div className="bottomdropdown">
            <p>Clear</p>
            <Button variant="contained" className='resultBtn'>
        Show results
      </Button>
          </div>
        </Select>
      </FormControl> */}
      
    </div>
  );
}