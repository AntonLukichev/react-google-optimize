import React from 'react';
import TestComponent from '../../components/test1';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <TestComponent experimentId={'nGVD5Y49TRuxPOBjv48ITw'} />
      </header>
    </div>
  );
}

export default App;
