import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Wellcome from './components/Wellcome';
import Hello from './components/Hello';
function App() {
  return (
    <div className="App">
      <Greet />
      <Wellcome name="Lily Rong"/>
      <Hello name="Tony Tiger Rong"/>
    </div>
  );
}

export default App;
