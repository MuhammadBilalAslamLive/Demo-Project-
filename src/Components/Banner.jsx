import React, { Component } from 'react';
import "./css/style.css";
const Banner = () => {
    return ( 
         <div id="banner" className='py-5'>
             <div className="container">
                 <div className="row">
                     <div className="col-md-8 col-lg-6">
                         <div className="banner-title">
                             <h1 className="title">
                                 Some Heading Goes Here
                             </h1>
                             <p className="lead">
                                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, animi. Cupiditate impedit deserunt quas iure repudiandae doloremque adipisci dicta. Alias!
                             </p>
                         </div>

                     </div>
                 </div>
             </div>
         </div>
     );
}
 
export default Banner;