import React from 'react';
import './Navbar.css';
export default function Navbar() {
  return (
    <div class="header_section">
         <div class="container-fluid">
            <div class="row">
               <div class="col-sm-6 col-lg-2">
                  {/* style="font-size:33px;cursor:pointer; color: #ffffff;"  */}
                  {/* onclick="openNav()"  */}
                  <span ><img src="images/toggle-menu.jpg" class="toggle_menu"/></span>
               </div>
               <div class="col-sm-6 col-lg-2">
                  <div class="logo"><a href="index.html"><img src="images/logo.jpg"/></a></div>
               </div>
               <div class="col-sm-8">
                  <div class="menu_text">
                     <ul>
                        <li class="active"><a href="index.html">Home</a></li>
                        <li><a href="www.google.com">About</a></li>
                        <li><a href="www.google.com">Our gifts</a></li>
                        <li><a href="www.google.com">Shop</a></li>
                        <li><a href="www.google.com">Contact Us</a></li>
                        <li><a href="www.google.com"><img src="images/search-icon.jpg"/></a></li>
                        <li><a href="www.google.com"><img src="images/user-icon.jpg"/></a></li>
                        <div id="myNav" class="overlay">
                           <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
                           <div class="overlay-content">
                              <a href="www.google.com">Home</a>
                              <a href="www.google.com">About</a>
                              <a href="www.google.com">Our gifts</a>
                              <a href="www.google.com">Shop</a>
                              <a href="www.google.com">Contact Us</a>
                           </div>
                        </div>
                  </ul></div>
                  
                  
               </div>
            </div>
         </div>
         </div>
  )
} 
