import React, { Component } from 'react';
import "./css/style.css";
const Header = () => {
    return ( 
        <div id="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                           <h1 id="logo">Company Name</h1> 
                        </div>
                        <div className="col-md-6 offset-2">
                           <ul id="menu">
                               <li><a href="">Home</a></li>
                               <li><a href="">About Us</a></li>
                               <li><a href="">Gallery</a></li>
                               <li><a href="">Products</a></li>
                               <li><a href="">Contact Us</a></li>
                           </ul>
                        </div>
                    </div>
                </div>
            </div>
     );
}
 
export default Header;