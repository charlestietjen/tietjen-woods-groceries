import React from 'react';
import logo from './logo.svg';
import './App.css';
import "primereact/resources/themes/md-dark-deeppurple/theme.css";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Link, Outlet } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { Menubar } from 'primereact/menubar';

const menuItems = [
  {
    id: "groceries",
    label: "Grocery List",
    url: "/groceries"
  },
  {
    id: "mealplan",
    label: "Meal Planner",
    url: "/"
  },
  {
    id: "chores",
    label: "Chore Tracker",
    url: "/"
  }
]

function App() {
  return (
    <PrimeReactProvider>
      <div className="App">
        <Menubar model={menuItems}></Menubar>
        <main>
          <Outlet />
        </main>
      </div>
    </PrimeReactProvider>
  );
}

export default App;
