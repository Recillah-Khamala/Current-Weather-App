import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GrClose } from 'react-icons/gr';
import { fetchWeather, hideDisplay } from '../Redux/Slices/weatherSlice';

const Search = () => {
  const [location, setLocation] = useState('');
  // dispatch action
  const dispatch = useDispatch();

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
    <form onSubmit={handleSubmit} className="items-center w-full lg:py-4">
      <div className="relative lg:w-3/4 inline-block w-full md:w-auto mb-2 mr-4  font-medium leading-normal bg-transparent border-2 rounded-lg text-neutral-400 ">
        <input
          value={location}
          onChange={handleChange}
          placeholder="Enter Location"
          type="text"
          className="w-full h-full text-xl border-none px-3 py-4 rounded-lg"
        />
        <GrClose
          className=" fill-slate-200 bg-slate-300 rounded px-1 mx-2 absolute right-2 top-3 active:scale-105"
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
