import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

const groceryData = [
  {
    id: "rice",
    display_name: "Rice",
    quantity: 1,
    category: 8,
  },
  {
    id: "crushed_tomatoes",
    display_name: "Crushed Tomatoes",
    quantity: 2,
    category: 3,
  },
  {
    id: "onions",
    display_name: "Onions",
    quantity: 1,
    category: 0,
  },
]

function App() {
  return (
    <PrimeReactProvider>
      <div className="App">
      </div>
    </PrimeReactProvider>
  );
}

export default App;
