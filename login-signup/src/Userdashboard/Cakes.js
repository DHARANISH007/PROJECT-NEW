// // import React from 'react'

// // export default function Cakes() {
// //   return (
// //     <div>
// //       <div></div>
// //       <div></div>
// //       <div></div>
// //       <div></div>
// //       <div></div>
// //     </div>
// //   )
// // }
// import * as React from 'react';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import ListItemText from '@mui/material/ListItemText';
// import Select from '@mui/material/Select';
// import Checkbox from '@mui/material/Checkbox';

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// const names = [
//   'Chocolate',
//   'Brownie',
//   'Banana',
//   'Red Velvet',
//   'Vanilla',
//   'Lemon',
//   'Cheesecake',
//   'Black Forest ',
//   'Coffee',
//   'Funfetti cake',
// ];

// export default function Cakes() {
//   const [personName, setPersonName] = React.useState([]);

//   const handleChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setPersonName(
//       // On autofill we get a stringified value.
//       typeof value === 'string' ? value.split(',') : value,
//     );
//   };

//   return (
//     <div>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <FormControl sx={{ m: 1, width: 300 }}>
//         <InputLabel id="demo-multiple-checkbox-label">Flavour</InputLabel>
//         <Select
//           labelId="demo-multiple-checkbox-label"
//           id="demo-multiple-checkbox"
//           multiple
//           value={personName}
//           onChange={handleChange}
//           input={<OutlinedInput label="Tag" />}
//           renderValue={(selected) => selected.join(', ')}
//           MenuProps={MenuProps}
//         >
//           {names.map((name) => (
//             <MenuItem key={name} value={name}>
//               <Checkbox checked={personName.indexOf(name) > -1} />
//               <ListItemText primary={name} />
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </div>
//   );
// }

import { Box,TextField,MenuItem, Select, Button } from "@mui/material";
import React,{useState} from "react";

export const Cakes=()=>
{
  // const [cakename,setCakeName]=useState("");
  // console.log({cakename})
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
  //   setCakeName(event.target.value as string)
  // }
  return(
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      {/* <br/> */}
      <br/>
    {/*<Box>
      <TextField fullWidth
      label='Flavour'
      select value={cakename}>
      <h2>Flavour</h2> 
      <MenuItem>Black Forest</MenuItem>
      <MenuItem>Chocolate</MenuItem>
      <MenuItem>Brownie</MenuItem>
      <MenuItem>Banana</MenuItem>
      <MenuItem>Red Velvet</MenuItem>
      <MenuItem>Vanilla</MenuItem>
      <MenuItem>Cheesecake</MenuItem>
      <MenuItem>Lemon</MenuItem>
      <MenuItem>Funfetti</MenuItem>
      </TextField>
    </Box>*/}
    <h2>Flavour</h2>
    <Select value="" sx={{width:'400px'}}>
          <MenuItem value={1}>Black Forest</MenuItem>
          <MenuItem value={2}>Chocolate</MenuItem>
          <MenuItem value={3}>Brownie</MenuItem>
          <MenuItem value={4}>Banana</MenuItem>
          <MenuItem value={5}>Red Velvet</MenuItem>
          <MenuItem value={6}>Vanilla</MenuItem>
          <MenuItem value={7}>Cheesecake</MenuItem>
          <MenuItem value={8}>Lemon</MenuItem>
          <MenuItem value={9}>Funfetti</MenuItem>
    </Select>
    
    <h2>Toppings</h2>
    <Select value="" sx={{width:'400px'}}>
          <MenuItem value={1}>Butter cream frosting</MenuItem>
          <MenuItem value={2}>Chocolate Ganache</MenuItem>
          <MenuItem value={3}>Edible flowers</MenuItem>
          <MenuItem value={4}>Fruitie beans</MenuItem>
          <MenuItem value={5}>Wipped cream with berries</MenuItem>
          <MenuItem value={6}>Toasted Nuts</MenuItem>
          <MenuItem value={7}>Cookie crumbs</MenuItem>
    </Select>
    <div>
    <Button>Add to cart</Button>
    </div></div>
  )
}
