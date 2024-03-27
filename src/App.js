import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Header from './Header';
import Form from './Form'; 
import Services from './Services';
import Aboutus from './Aboutus'
import Footer from './Footer';
import Home from './Home';
// import ContactUs from './Contactus';

function App() {
  return (
    <Router>
      <Header/>
      <Routes> 
        <>
        <Route path="/" element={<Home/>} />
        <Route path="/Services" element={<Services/>} />
        {/* <Route path="/Contactus" element={<ContactUs/>} /> */}
        <Route path="/Aboutus" element={<Aboutus/>} />
        <Route path="/Form" element={<Form/>} />
        </>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
