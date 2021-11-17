import React, { useState } from "react";

import { Drawer, Button } from "antd";
import logo from "../../images/Logo.png";
import {Link} from "react-router-dom"



function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="NavBar">
      <div className="header">
        <div className="logo">
        <Link to="/"><img src={logo} className="Nav_logo" alt="Error" /></Link>
          
        </div>
        <div className="mobileHidden">
          
            <section className='NavLinks_PC'>
            <Link to="/" className="NavLink">Home</Link>
             <Link className="NavLink" to="/About">About</Link>
             <Link className="NavLink" to="/Courses">Courses</Link>
             <Link className="NavLink" to="/FAQ">FAQS</Link>
             <Link className="NavLink" to="/Contact">Contact</Link>
             <Link className="NavLink" to="/Signup">Signin</Link>
             
            </section>
         
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
           <div className="closing_btn">
           <i class="fas fa-times Mobile_closing_btn" onClick={onClose}></i>
           </div>
           <section className='NavLinks_Mobile'>
             
            <Link to="/" className="NavLink_mobile">Home</Link>
             <Link className="NavLink_mobile" to="/About">About</Link>
             <Link className="NavLink_mobile" to="/Courses">Courses</Link>
             <Link className="NavLink_mobile" to="/FAQ">FAQ</Link>
             <Link className="NavLink_mobile" to="/Contact">Contact</Link>
             <Link className="NavLink_mobile" to="/Signup">Signup</Link>
            </section>
            
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
