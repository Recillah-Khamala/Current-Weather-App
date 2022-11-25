import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
export default App;
