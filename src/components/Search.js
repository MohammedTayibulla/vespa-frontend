import {useState,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import axios from "axios";

export default function Search() {

const [data,setData]=useState('data');
const [age,setAge]=useState('');
const [city,setCity]=useState('');

useEffect(()=>{
axios
.get(`http://localhost:6000/search?age=${age}&city=${city}`)
.then(res=>{
setData(res.data);
})
.catch((err)=>{
  console.log(err)
  setData("no results found");
})

},[age,city])

  return (
  <>
 <Grid container spacing={2} mt={2} ml={30}>
     <Grid item md={3}>
      <Autocomplete
  disablePortal
  options={['1','2','3','4']}
  onChange={(event, newValue) => {
  setAge(newValue);
           }}
  renderInput={(params) => <TextField {...params} label="Age" />}
    />
</Grid>
      <Grid item md={3}>
        <Autocomplete
  disablePortal
  id="combo-box-demo"
  options={['bengaluru','chennai','mumbai','delhi']}
   onChange={(event, newValue) => {
  setCity(newValue);
           }}
  renderInput={(params) => <TextField {...params} label="City" />}
/>
</Grid>
<Grid item md={4}>
<Button variant="contained" sx={{height:"3.5rem"}} >Submit</Button>
</Grid>
</Grid>
<div>
{data}
</div>

      </>
  );
}

