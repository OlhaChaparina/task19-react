
import './App.css';
import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/home';
import Photos from './pages/Photos/photos';
import Contacts from './pages/Contacts/contacts';
import Publications from './pages/Publications.js/publications';

function App() {
  return (
    <Router>
      <>
        <nav className='navigation'>


          <Link to="/">Home</Link>

          <Link to="/Publications">Publications</Link>

          <Link to="/Photos">Photos</Link>

          <Link to="/Contacts">Contacts</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/publications' element={<Publications />} />
          <Route path='/photos' element={<Photos />} />
          <Route path='/Contacts' element={<Contacts />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
