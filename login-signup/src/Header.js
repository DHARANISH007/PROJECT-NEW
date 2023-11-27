import React from 'react';
import {AppBar,Tabs,Tab,Toolbar,Typography, Button, TextField} from "@mui/material";
import Iconcart from '@mui/icons-material/AddShoppingCart';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
export default function Header() {

  const navigate = useNavigate();
  const D ={
    width:'250px',
    height:'20px'
  }
  const customizeToolbar={
      minHeight:'90px',
  };

  return (
    <React.Fragment>
      <AppBar sx={{background:"#E43c90"}}>
        <Toolbar style={customizeToolbar}>
        <Typography sx={{marginRight:'auto'}} textColor='inherit'><h1>LIZ GIFTS</h1></Typography>
        <input type='text' style={D} placeholder='search'/><SearchIcon sx={{cursor:'pointer'}}/>
          <Tabs sx={{marginLeft:'auto'}} textColor='inherit'>
            <Tab onClick={()=>navigate('/')} label="Home"/>
            <Tab onClick={()=>navigate('/con')} label="Contact Us"/>
            <Tab onClick={()=>navigate('/abt')} label="About Us"/>

          </Tabs>
          <div>
              <Button
                color="blue"
                size="small"
                variant="outline"
                onClick={() => navigate('log')}
              >
                <h3>Login</h3>
              </Button>
              <Button
                color="blue"
                size="small"
                variant="outline"
                onClick={() => navigate('sig')}
              >
                <h3>Signup</h3>
              </Button>
            </div>
          
          <Button sx={{marginLeft:'auto'}} variant='contained'>Cart<span>...</span><Iconcart/> </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}
