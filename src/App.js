import React from 'react'
import Landing from './Pages/LandingPage/Landing.jsx'
import Footer from './Pages/Footer/Footer.jsx'
import NavBar from "./Pages/NavBar/NavBar.jsx"
import Contact from './Pages/Contact/Contact.jsx'
import { BackTop } from 'antd';
import { Routes ,Route } from 'react-router-dom';

const App = () => {

  const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 50,
    backgroundColor: ' #99a3a4 ',
    color: '#000',
    textAlign: 'center',
    fontSize: 20,
  };

  return (
    <>
    <NavBar />
    <Routes >
   
    <Route path='/' element={<Landing/>} />
    <Route path='/Contact' element={<Contact/>} />


      
   

     
    </Routes>
    <Footer />
    <BackTop duration={1500}>
      <div style={style}><i class="fas fa-angle-up"></i></div>
    </BackTop>
      
    </>
  )
}

export default App
