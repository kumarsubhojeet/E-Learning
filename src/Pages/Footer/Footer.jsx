import React from "react";
import "../Footer/Footer.css";

import Logo from "../../images/Logo.png";

export default function Footer() {
  return (
    <div className="footer_main">
      <div className="footer_heading">
        <h2 style={{color:" #fff " , fontWeight:"bold"}}>Create moments, not just applications</h2>
        <h6 style={{color:" #fff " , fontWeight:"200"}}>An open letter to experience creators worldwide.</h6>
      </div>

      <hr />

      <div className="footer_wrapper">
        <div className="footer_wrapper_left">
          <img src={Logo} alt="Error" className="Logo" />
        </div>

        <div className="footer_wrapper_right">
          <div className="f-slogan">
            <h2 style={{fontWeight:'bold' , color:" #fff "}}>Love what you do</h2>
            <p>
              We believe that with the right tools, anyone can turn thier
              passion into empire. so we made them.
            </p>
          </div>

          <div className="f-details">
            <div className="contact">
               
                <ul style={{listStyleType:'none'}}> 
                    <h4 style={{color: 'white' , fontWeight: 'bold'}}><li>Contact</li></h4>
                    <li>INSTAGRAM</li>
                    <li>+123 456 789</li>
                    <li>LINKEDIN</li>
                </ul>
            </div>
            <div className="contact">
           
                <ul style={{listStyleType:'none'}}>
                <h4 style={{color: 'white' , fontWeight: 'bold'}}><li>Courses</li></h4>
                    <li>DSA</li>
                    <li>Node JS</li>
                    <li>Python</li>
                </ul>
            </div>
            <div className="contact">
            
                <ul style={{listStyleType:'none'}}>
                <h4 style={{color: 'white' , fontWeight: 'bold'}}><li>About</li></h4>
                    <li>YOUTUBE-LEARNING</li>
                    <li>MOOC-COURSES</li>
                    <li>ADYPU-LEARNING</li>
                </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-copyright text-center py-3">
                <p style={{color: 'grey'}}>© 2021 Copyright @ Adypu.learning.com</p>
            </div>
    </div>
  );
}
