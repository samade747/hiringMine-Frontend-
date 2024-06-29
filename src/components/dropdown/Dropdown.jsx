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

// MenuProps for customizing the dropdown menu style
const MenuProps = {
  PaperProps: {
    style: {
      width: 200,
    },
  },
};

// Arrays of options for the dropdowns
const dropdownOptions = {
  category: ['Development', 'Marketing & Sales', 'Art & Illustration Tucker'],
  datePosted: ['Anytime', '1 month', 'Last 7 days', 'Past 24 hours'],
  jobType: ['Full-Time', 'Part-Time', 'Contract'],
  seniorityLevel: ['Mid-Level', 'Senior-Level', 'Associate', 'Internship', 'Fresher'],
  workMode: ['Onsite', 'Remote', 'Hybrid'],
  salaryRange: ['0 - 20,000 PKR', '20,000 - 50,000 PKR', '50,000 - 100,000 PKR', '100,000 - 200,000 PKR', '200,000 - 300,000 PKR', '300,000 - 500,000 PKR', '500,000 + PKR'],
  experience: ['0-1 Experience', '1-2 Experience', '2-3 Experience', '3-4 Experience', '4-5 Experience'],
};

export default function Dropdown() {
  // State for all dropdowns
  const [dropdownState, setDropdownState] = useState({
    category: [],
    datePosted: [],
    jobType: [],
    seniorityLevel: [],
    workMode: [],
    salaryRange: [],
    experience: [],
    visibility: {
      category: false,
      datePosted: false,
      jobType: false,
      seniorityLevel: false,
      workMode: false,
      salaryRange: false,
      experience: false,
    },
  });

  // General handler for changing dropdown selections
  const handleDropdownChange = (event, name) => {
    event.stopPropagation();
    const { target: { value } } = event;
    setDropdownState((prevState) => ({
      ...prevState,
      [name]: typeof value === 'string' ? value.split(',') : value,
    }));
  };

  // General handler for toggling dropdown visibility
  const handleDropdownVisibility = (e, name) => {
    setDropdownState((prevState) => ({
      ...prevState,
      visibility: {
        ...prevState.visibility,
        [name]: true,
      },
    }));
    e.stopPropagation();
  };

  // General handler for clearing dropdown selections
  const handleClearDropdown = (e, name) => {
    e.stopPropagation();
    setDropdownState((prevState) => ({
      ...prevState,
      visibility: {
        ...prevState.visibility,
        [name]: false,
      },
      [name]: [],
    }));
  };

  // Utility function to render dropdowns
  const renderDropdown = (label, name, options) => (
    <FormControl sx={{ m: 1, width: 150, height: 40 }} key={name}>
      <InputLabel id={`${name}-label`} sx={{ width: '100%' }}><i>{label}</i></InputLabel>
      <Select
        labelId={`${name}-label`}
        id={name}
        multiple
        value={dropdownState[name]}
        className='selectOptionsHey'
        onChange={(e) => handleDropdownChange(e, name)}
        input={<OutlinedInput label="Tag" />}
        renderValue={(selected) => selected.join(', ')}
        MenuProps={MenuProps}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option} className="customMenuItem">
            <Checkbox checked={dropdownState[name].indexOf(option) > -1} />
            <ListItemText primary={option} />
          </MenuItem>
        ))}
        <div className="bottomdropdown">
          <p onClick={(e) => handleClearDropdown(e, name)}>Clear</p>
          <Button variant="contained" className='resultBtn'>Show results</Button>
        </div>
      </Select>
    </FormControl>
  );

  return (
    <div>
      {renderDropdown('Category', 'category', dropdownOptions.category)}
      {renderDropdown('Date Posted', 'datePosted', dropdownOptions.datePosted)}
      {renderDropdown('Job Type', 'jobType', dropdownOptions.jobType)}
      {renderDropdown('Seniority Level', 'seniorityLevel', dropdownOptions.seniorityLevel)}
      {renderDropdown('On-Site/Remote', 'workMode', dropdownOptions.workMode)}
      {renderDropdown('Salary Range', 'salaryRange', dropdownOptions.salaryRange)}
      {renderDropdown('Experience', 'experience', dropdownOptions.experience)}
    </div>
  );
 }


// import './dropdown.css';
// import { useState } from 'react';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import ListItemText from '@mui/material/ListItemText';
// import Select from '@mui/material/Select';
// import Checkbox from '@mui/material/Checkbox';
// import { Button } from '@mui/material';

// // MenuProps for customizing the dropdown menu style
// const MenuProps = {
//   PaperProps: {
//     style: {
//       width: 200,
//     },
//   },
// };

// // Arrays of options for the dropdowns
// const names1 = ['Development', 'Marketing & Sales', 'Art & Illustration Tucker'];
// const names2 = ['Anytime', '1 month', 'Last 7 days', 'Past 24 hours'];
// const names3 = ['Full-Time', 'Part-Time', 'Contract'];
// const names4 = ['Mid-Level', 'Senior-Level', 'Associate', 'Internship', 'Fresher'];
// const names5 = ['Onsite', 'Remote', 'Hybrid'];
// const names6 = ['0 - 20,000 PKR', '20,000 - 50,000 PKR', '50,000 - 100,000 PKR', '100,000 - 200,000 PKR', '200,000 - 300,000 PKR', '300,000 - 500,000 PKR', '500,000 + PKR'];
// const names7 = ['0-1 Experience', '1-2 Experience', '2-3 Experience', '3-4 Experience', '4-5 Experience'];

// export default function Dropdown() {
//   // State variables for each dropdown's selected values
//   const [personName1, setPersonName1] = useState([]);
//   const [personName2, setPersonName2] = useState([]);
//   const [personName3, setPersonName3] = useState([]);
//   const [personName4, setPersonName4] = useState([]);
//   const [personName5, setPersonName5] = useState([]);
//   const [personName6, setPersonName6] = useState([]);
//   const [personName7, setPersonName7] = useState([]);

//   // State variables for each dropdown's visibility
//   const [isTrue1, setIsTrue1] = useState(false);
//   const [isTrue2, setIsTrue2] = useState(false);
//   const [isTrue3, setIsTrue3] = useState(false);
//   const [isTrue4, setIsTrue4] = useState(false);
//   const [isTrue5, setIsTrue5] = useState(false);
//   const [isTrue6, setIsTrue6] = useState(false);
//   const [isTrue7, setIsTrue7] = useState(false);

//   // Handlers for changing dropdown selections
//   const dropdownHandle1 = (event) => {
//     event.stopPropagation(false);
//     const { target: { value } } = event;
//     setPersonName1(typeof value === 'string' ? value.split(',') : value);
//   };

//   const dropdownHandle2 = (event) => {
//     event.stopPropagation(false);
//     const { target: { value } } = event;
//     setPersonName2(typeof value === 'string' ? value.split(',') : value);
//   };

//   const dropdownHandle3 = (event) => {
//     event.stopPropagation(false);
//     const { target: { value } } = event;
//     setPersonName3(typeof value === 'string' ? value.split(',') : value);
//   };

//   const dropdownHandle4 = (event) => {
//     event.stopPropagation(false);
//     const { target: { value } } = event;
//     setPersonName4(typeof value === 'string' ? value.split(',') : value);
//   };

//   const dropdownHandle5 = (event) => {
//     event.stopPropagation(false);
//     const { target: { value } } = event;
//     setPersonName5(typeof value === 'string' ? value.split(',') : value);
//   };

//   const dropdownHandle6 = (event) => {
//     event.stopPropagation(false);
//     const { target: { value } } = event;
//     setPersonName6(typeof value === 'string' ? value.split(',') : value);
//   };

//   const dropdownHandle7 = (event) => {
//     event.stopPropagation(false);
//     const { target: { value } } = event;
//     setPersonName7(typeof value === 'string' ? value.split(',') : value);
//   };

//   // Handlers for showing dropdowns
//   const clickHandler1 = (e) => {
//     setIsTrue1(true);
//     e.stopPropagation();
//   };

//   const clickHandler2 = (e) => {
//     setIsTrue2(true);
//     e.stopPropagation();
//   };

//   const clickHandler3 = (e) => {
//     setIsTrue3(true);
//     e.stopPropagation();
//   };

//   const clickHandler4 = (e) => {
//     setIsTrue4(true);
//     e.stopPropagation();
//   };

//   const clickHandler5 = (e) => {
//     setIsTrue5(true);
//     e.stopPropagation();
//   };

//   const clickHandler6 = (e) => {
//     setIsTrue6(true);
//     e.stopPropagation();
//   };

//   const clickHandler7 = (e) => {
//     setIsTrue7(true);
//     e.stopPropagation();
//   };

//   // Handlers for clearing dropdown selections
//   const clearDropdownHandler1 = (e) => {
//     e.stopPropagation();
//     setIsTrue1(false);
//     setPersonName1([]);
//   };

//   const clearDropdownHandler2 = (e) => {
//     e.stopPropagation();
//     setIsTrue2(false);
//     setPersonName2([]);
//   };

//   const clearDropdownHandler3 = (e) => {
//     e.stopPropagation();
//     setIsTrue3(false);
//     setPersonName3([]);
//   };

//   const clearDropdownHandler4 = (e) => {
//     e.stopPropagation();
//     setIsTrue4(false);
//     setPersonName4([]);
//   };

//   const clearDropdownHandler5 = (e) => {
//     e.stopPropagation();
//     setIsTrue5(false);
//     setPersonName5([]);
//   };

//   const clearDropdownHandler6 = (e) => {
//     e.stopPropagation();
//     setIsTrue6(false);
//     setPersonName6([]);
//   };

//   const clearDropdownHandler7 = (e) => {
//     e.stopPropagation();
//     setIsTrue7(false);
//     setPersonName7([]);
//   };

//   return (
//     <div>
//       {/* Category Dropdown */}
//       <FormControl sx={{ m: 1, width: 150, height: 40 }}>
//         <InputLabel id="demo-multiple-checkbox-label" sx={{ width: '100%' }}><i>Category</i></InputLabel>
//         <Select
//           labelId="demo-multiple-checkbox-label"
//           id="demo-multiple-checkbox"
//           multiple
//           value={personName1}
//           className='selectOptionsHey'
//           onChange={dropdownHandle1}
//           input={<OutlinedInput label="Tag" />}
//           renderValue={(selected) => selected.join(', ')}
//           MenuProps={MenuProps}
//         >
//           {names1.map((name) => (
//             <MenuItem key={name} value={name} className="customMenuItem">
//               <Checkbox checked={personName1.indexOf(name) > -1} />
//               <ListItemText primary={name} />
//             </MenuItem>
//           ))}
//           <div className="bottomdropdown">
//             <p onClick={(e) => clearDropdownHandler1(e)}>Clear</p>
//             <Button variant="contained" className='resultBtn'>Show results</Button>
//           </div>
//         </Select>
//       </FormControl>

//       {/* Date Posted Dropdown */}
//       <FormControl sx={{ m: 1, width: 150, height: 40 }}>
//         <InputLabel id="demo-multiple-checkbox-label" sx={{ width: '100%' }}><i>Date Posted</i></InputLabel>
//         <Select
//           labelId="demo-multiple-checkbox-label"
//           id="demo-multiple-checkbox"
//           multiple
//           value={personName2}
//           className='selectOptionsHey'
//           onChange={dropdownHandle2}
//           input={<OutlinedInput label="Tag" />}
//           renderValue={(selected) => selected.join(', ')}
//           MenuProps={MenuProps}
//         >
//           {names2.map((name) => (
//             <MenuItem key={name} value={name} className="customMenuItem">
//               <Checkbox checked={personName2.indexOf(name) > -1} />
//               <ListItemText primary={name} />
//             </MenuItem>
//           ))}
//           <div className="bottomdropdown">
//             <p onClick={(e) => clearDropdownHandler2(e)}>Clear</p>
//             <Button variant="contained" className='resultBtn'>Show results</Button>
//           </div>
//         </Select>
//       </FormControl>

//       {/* Job Type Dropdown */}
//       <FormControl sx={{ m: 1, width: 150, height: 40 }}>
//         <InputLabel id="demo-multiple-checkbox-label" sx={{ width: '100%' }}><i>Job Type</i></InputLabel>
//         <Select
//           labelId="demo-multiple-checkbox-label"
//           id="demo-multiple-checkbox"
//           multiple
//           value={personName3}
//           className='selectOptionsHey'
//           onChange={dropdownHandle3}
//           input={<OutlinedInput label="Tag" />}
//           renderValue={(selected) => selected.join(', ')}
//           MenuProps={MenuProps}
//         >
//           {names3.map((name) => (
//             <MenuItem key={name} value={name} className="customMenuItem">
//               <Checkbox checked={personName3.indexOf(name) > -1} />
//               <ListItemText primary={name} />
//             </MenuItem>
//           ))}
//           <div className="bottomdropdown">
//             <p onClick={(e) => clearDropdownHandler3(e)}>Clear</p>
//             <Button variant="contained" className='resultBtn'>Show results</Button>
//           </div>
//         </Select>
//       </FormControl>

//       {/* Seniority Level Dropdown */}
//       <FormControl sx={{ m: 1, width: 150, height: 40 }}>
//         <InputLabel id="demo-multiple-checkbox-label" sx={{ width: '100%' }}><i>Seniority Level</i></InputLabel>
//         <Select
//           labelId="demo-multiple-checkbox-label"
//           id="demo-multiple-checkbox"
//           multiple
//           value={personName4}
//           className='selectOptionsHey'
//           onChange={dropdownHandle4}
//           input={<OutlinedInput label="Tag" />}
//           renderValue={(selected) => selected.join(', ')}
//           MenuProps={MenuProps}
//         >
//           {names4.map((name) => (
//             <MenuItem key={name} value={name} className="customMenuItem">
//               <Checkbox checked={personName4.indexOf(name) > -1} />
//               <ListItemText primary={name} />
//             </MenuItem>
//           ))}
//           <div className="bottomdropdown">
//             <p onClick={(e) => clearDropdownHandler4(e)}>Clear</p>
//             <Button variant="contained" className='resultBtn'>Show results</Button>
//           </div>
//         </Select>
//       </FormControl>

//       {/* On-Site/Remote Dropdown */}
//       <FormControl sx={{ m: 1, width: 150, height: 40 }}>
//         <InputLabel id="demo-multiple-checkbox-label" sx={{ width: '100%' }}><i>On-Site/Remote</i></InputLabel>
//         <Select
//           labelId="demo-multiple-checkbox-label"
//           id="demo-multiple-checkbox"
//           multiple
//           value={personName5}
//           className='selectOptionsHey'
//           onChange={dropdownHandle5}
//           input={<OutlinedInput label="Tag" />}
//           renderValue={(selected) => selected.join(', ')}
//           MenuProps={MenuProps}
//         >
//           {names5.map((name) => (
//             <MenuItem key={name} value={name} className="customMenuItem">
//               <Checkbox checked={personName5.indexOf(name) > -1} />
//               <ListItemText primary={name} />
//             </MenuItem>
//           ))}
//           <div className="bottomdropdown">
//             <p onClick={(e) => clearDropdownHandler5(e)}>Clear</p>
//             <Button variant="contained" className='resultBtn'>Show results</Button>
//           </div>
//         </Select>
//       </FormControl>

//       {/* Salary Range Dropdown */}
//       <FormControl sx={{ m: 1, width: 150, height: 40 }}>
//         <InputLabel id="demo-multiple-checkbox-label" sx={{ width: '100%' }}><i>Salary Range</i></InputLabel>
//         <Select
//           labelId="demo-multiple-checkbox-label"
//           id="demo-multiple-checkbox"
//           multiple
//           value={personName6}
//           className='selectOptionsHey'
//           onChange={dropdownHandle6}
//           input={<OutlinedInput label="Tag" />}
//           renderValue={(selected) => selected.join(', ')}
//           MenuProps={MenuProps}
//         >
//           {names6.map((name) => (
//             <MenuItem key={name} value={name} className="customMenuItem">
//               <Checkbox checked={personName6.indexOf(name) > -1} />
//               <ListItemText primary={name} />
//             </MenuItem>
//           ))}
//           <div className="bottomdropdown">
//             <p onClick={(e) => clearDropdownHandler6(e)}>Clear</p>
//             <Button variant="contained" className='resultBtn'>Show results</Button>
//           </div>
//         </Select>
//       </FormControl>

//       {/* Experience Dropdown */}
//       <FormControl sx={{ m: 1, width: 150, height: 40 }}>
//         <InputLabel id="demo-multiple-checkbox-label" sx={{ width: '100%' }}><i>Experience</i></InputLabel>
//         <Select
//           labelId="demo-multiple-checkbox-label"
//           id="demo-multiple-checkbox"
//           multiple
//           value={personName7}
//           className='selectOptionsHey'
//           onChange={dropdownHandle7}
//           input={<OutlinedInput label="Tag" />}
//           renderValue={(selected) => selected.join(', ')}
//           MenuProps={MenuProps}
//         >
//           {names7.map((name) => (
//             <MenuItem key={name} value={name} className="customMenuItem">
//               <Checkbox checked={personName7.indexOf(name) > -1} />
//               <ListItemText primary={name} />
//             </MenuItem>
//           ))}
//           <div className="bottomdropdown">
//             <p onClick={(e) => clearDropdownHandler7(e)}>Clear</p>
//             <Button variant="contained" className='resultBtn'>Show results</Button>
//           </div>
//         </Select>
//       </FormControl>
//     </div>
//   );
// }
