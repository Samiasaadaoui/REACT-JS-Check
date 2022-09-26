import React from 'react'
import './App.css';
import Nav from'./Component/Nav';
import Carro from'./Component/Carro';

import Contact from './Component/Contact';
import Products from './Component/Products';



function App() {
  return (
    <div className="App">
    <Nav/>
    <Carro/>
   <Products/>
    <Contact/>
   
    </div>
  );
}

export default App;
