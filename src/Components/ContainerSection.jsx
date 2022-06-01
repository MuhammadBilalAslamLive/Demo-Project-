import React, { Component } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import "./css/style.css";
const ContainerSection = () => {
    return ( 
          <div className="container section">
              <div className="row">
                  <div className="col-md-12">
                      <h2 className="section-head">
                          Some Heading Goes Here
                      </h2>
                      <div className="col-md-4">
                          <div className="section-box">
                              <i className='fa fa-anchor'></i>
                              <h3>Some Heading</h3>
                              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, ea.</p>
                          </div>
                      </div>

                      <div className="col-md-4">
                          <div className="section-box">
                              <i className='fa fa-bar-chart'></i>
                              <h3>Some Heading</h3>
                              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, ea.</p>
                          </div>
                      </div>

                      <div className="col-md-4">
                          <div className="section-box">
                             {/* <FontAwesomeIcon icon={diamond}></FontAwesomeIcon> */}
                              <h3>Some Heading</h3>
                              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, ea.</p>
                          </div>
                      </div>
                    
                  </div>
              </div>
          </div>
     );
}
 
export default ContainerSection;