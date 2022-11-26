import React from 'react';
import { NavLink } from 'react-router-dom';
import picture1 from '../Weather/logo.png';

const Navigation = () => (
  <nav className="flex justify-between py-8 border-b bg-steel-blue text-white lg:px-12">
    <div className="w-1/3 flex lg-gap-5 items-center font-bold md-text-2xl lg-text-2xl lg-leading-10 lg-tracking-wide capitalize">
      <img className="w-8 md-w-12 lg-w-16 h-8 md-h-12 lg-h-20" src={picture1} alt="logo" />
      <div> Current Weather App</div>
    </div>
    <ul className="flex gap-1 lg:gap-14 items-center font-medium">
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'font-extrabold lg-font-black border md-border-2 lg-border-4 rounded-full bg-blue-900 p-4' : '')}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'font-extrabold lg-font-black border md-border-2 lg-border-4 rounded-full bg-blue-900 p-2' : '')}
          to="/Weather"
        >
          Weather
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'font-extrabold lg-font-black border md-border-2 lg-border-4 rounded-full bg-blue-900 p-2' : '')}
          to="/Contacts"
        >
          Contact Us
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
