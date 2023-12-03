import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <PrimeReactProvider>
      <div className="App">
        <Outlet />
      </div>
    </PrimeReactProvider>
  );
}

export default App;
