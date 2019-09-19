import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent from '../../components/test1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <TestComponent experimentId="KPOowLzGS42RosiLqFKuIA" />
      </main>
    </div>
  );
}

export default App;
