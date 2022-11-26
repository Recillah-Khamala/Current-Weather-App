import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather, hideDisplay } from '../Redux/Slices/weatherSlice';
import { GrClose } from 'react-icons/gr';

const Search = () => {
  const { showDisplay } = useSelector((state) => state);
  const [location, setLocation] = useState('');
  // dispatch action
  const dispatch = useDispatch();
  useEffect(() => {
    if (location) {
      dispatch(fetchWeather());
    }
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setLocation(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeather(location));
  };

  const handleClose = () => {
    setLocation('');
    dispatch(hideDisplay());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative inline-block w-full md:w-auto mb-2 mr-4  font-medium leading-normal bg-transparent border-2 rounded-lg text-neutral-400 ">
        <input
          value={location}
          onChange={handleChange}
          placeholder="Search City"
          type="text"
          className="w-full h-full border-none px-3 py-2 rounded-lg"
        />
        <GrClose
          className=" fill-slate-200 bg-slate-300 rounded px-1 py-1 absolute right-2 top-3 active:scale-105"
          onClick={handleClose}
        />
      </div>
      {/* Button */}
      <button
        onClick={handleSubmit}
        type="button"
        className="inline-flex items-center px-3 pr-3 28 text-center py-3 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
