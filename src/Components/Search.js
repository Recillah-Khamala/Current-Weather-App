import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../Redux/Slices/weatherSlice';
import { Ioclose } from 'react-icons/all';

const Search = () => {
  const [location, setLocation] = useState('');
  // dispatch action
  const dispatch = useDispatch();
  useEffect(() => {
    if (location === true) {
      dispatch(fetchWeather());
    }
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setLocation(value);
  };

  return (
    <form>
      
        <input
          value={location}
          onChange={handleChange}
          placeholder="Search City"
          type="text"
          className="inline-block w-full md:w-auto mb-2  px-3 py-2 mr-4  font-medium leading-normal bg-transparent border-2 rounded-lg text-green-400 "
        />

      {/* Button */}
      <button
        onClick={() => dispatch(fetchWeather(location))}
        type="button"
        className="inline-flex items-center px-3 pr-3 28 text-center py-3 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
