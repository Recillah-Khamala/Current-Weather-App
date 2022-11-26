import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className="min-h-[94vh] bg-cornflower-blue">
      <Navigation />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
export default App;
