import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Wellcome from './components/Wellcome';
import Hello from './components/Hello';
import Counter from './components/Counter';
import ParentComponent from './components/ParentComponent';
function App() {
  return (
    <div className="App">
      <Greet name="Tony" age="33" genre="male"/>
      <Wellcome name="Lily Rong"/>
      <Hello name="Tony Tiger Rong"/>
      
      <Counter />
      <ParentComponent />
    </div>
  );
}

export default App;
