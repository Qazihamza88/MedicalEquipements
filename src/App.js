import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Header from './Header';
import Form from './Form'; 
import Services from './Services';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Routes> 
        <>
        <Route path="/" element={<Header/>} />
          <Route path="/Form" element={<Form/>} />
        </>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
