import React from 'react'
import './App.css';
import Navbar from './Navbar';
import Shop from './Shop';

function App() {
  return (
    <React.Fragment> 
     <Navbar/>
    <div className="container">
     <Shop/>
    </div>
    </React.Fragment>
  );
}

export default App;
