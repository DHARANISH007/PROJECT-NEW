import React from 'react';
import {AppBar,Tabs,Tab,Toolbar,Typography, Button} from "@mui/material";
import Iconcart from '@mui/icons-material/AddShoppingCart';
export default function Header() {


  const customizeToolbar={
      minHeight:'90px',
  };

  return (
    <React.Fragment>
      <AppBar sx={{background:"#E43c90"}}>
        <Toolbar style={customizeToolbar}>
        <Typography sx={{marginRight:'auto'}} textColor='inherit'><h1>LIZ GIFTS</h1></Typography>
          <Tabs sx={{marginLeft:'auto'}} textColor='inherit'>
            <Tab label="Products"/>
            <Tab label="Services"/>
            <Tab label="Contact Us"/>
            <Tab label="About Us"/>

          </Tabs>
          
          <Button sx={{marginLeft:'auto'}} variant='contained'>Cart<span>...</span><Iconcart/> </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}
