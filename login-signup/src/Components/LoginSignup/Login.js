import React, { useState } from 'react'
import { Button } from '@mui/material'
import './LoginSignup.css'
import email_icon from '../Assests/email_icon.png'
import password_icon from '../Assests/password_icon.png'
import user_icon from '../Assests/user_icon.png'
import { useNavigate } from 'react-router-dom';
import DIcon from '@mui/icons-material/DoneAll';
export const Login = () => {

  const [action,setAction] = useState("Login");

  // setAction = () =>{
  //   on
  // }
  const navi = useNavigate() ;


  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="image">
          <img src={user_icon} alt="" />
          <input type="text" placeholder='Username' />
        </div>
        <div className="image">
          <img src={email_icon} alt="" />
          <input type="email" placeholder='EmailID'/>
        </div>
        <div className="image">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Password' />
        </div>
        <div className="forgot-password">Forgot Password? <span>click me</span></div>
        <div className="submit-container">
          {/* <div className={action==='Sign Up'?'submit':'submit grey' } onClick={()=>{setAction("Sign Up")}}>Sign Up</div> */}
          <div className={action==='Login'?'submit':'submit grey'}onClick={()=>navi('/')}>Login</div>
        </div>
        
        {/* <Button  variant='contained' size='large' onClick={()=>navi('/')}>Submit<span> </span><DIcon/> </Button> */}
      </div>

    </div>
  )
}
