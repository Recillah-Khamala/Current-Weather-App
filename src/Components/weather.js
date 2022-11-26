import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../Redux/Slices/weatherSlice';
import Search from './Search';
import Display from './Display';

// display icon https://openweathermap.org/img/wn/${icon}.png
const Weather = () => {
    const {showDisplay} =  useSelector((state) => state);
 return (
    <div>
      <section className="relative bg-gray-900  min-h-screen">
        <div className="relative container pt-12 px-4 mb-20 mx-auto text-center">
          <span className="text-blue-500 font-semibold">
            Built with react and redux
          </span>
          <h2 className="mt-8 mb-8 lg:mb-12 text-white text-4xl lg:text-6xl font-semibold">
            Weather App
          </h2>
          <p className="max-w-3xl mx-auto mb-8 lg:mb-12 text-white text-xl opacity-50">
            Find out the current weather situation around the world
          </p>
          {/* Input */}
          <Search />
        </div>
        {/* Content goes here */}
        {showDisplay === true && <Display />}
      </section>
    </div>
  );
};

export default Weather;
