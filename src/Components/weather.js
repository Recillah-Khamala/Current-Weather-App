import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../Redux/Slices/weatherSlice';

// display icon https://openweathermap.org/img/wn/${icon}.png
const Weather = () => {
  const [location, setLocation] = useState();
  // dispatch action
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    setLocation('');
    dispatch(getWeather(location));
  };

  // select state from store
  const selector = useSelector((state) => state.weather);
  const { weather, loading, error } = selector;
  console.log('selector', selector);
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
          <form onSubmit={handleSubmit}>
            <input
              label="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Search City"
              className="relative z-10 inline-block w-full md:w-auto mb-2  px-3 py-2 mr-4  font-medium leading-normal bg-transparent border-2 rounded-lg text-green-400 "
            />
            {/* Button */}
            <button
              onClick={() => dispatch(getWeather(location))}
              type="button"
              className="inline-flex items-center px-3 pr-3 28 text-center py-3 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Search
            </button>
          </form>
        </div>
        {/* Content goes here */}
        {loading ? (
          <h1 className="text-gray-400 text-4xl text-center">
            Loading please wait...
          </h1>
        ) : error ? (
          <h1 className="text-red-400 text-2xl text-center">
            {error?.message}
          </h1>
        ) : (
          <div className="max-w-6xl px-4 mx-auto ">
            <div className="flex flex-wrap -mx-4 justify-center">
              <div className="w-full md:w-1/3 px-4">
                <div className="p-8 border border-blue-800 rounded-lg">
                  <div className="flex justify-start  items-center">
                    <span className="flex items-center justify-center w-16 h-16 rounded-full border-2">
                      {/* weather logo */}
                      <img
                        className="w-56 "
                        src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
                        alt="/"
                      />
                    </span>
                    <h1 className="text-gray-300 pl-5">
                      {weather?.weather[0].main}
                    </h1>{' '}
                  </div>
                  <h1 className="text-gray-300 text-center text-4xl mb-10">
                    {Math.ceil(Number(weather?.main.temp))}{' '}
                    <span className="text-yellow-500 text-4xl">°C</span>
                  </h1>
                  <h3 className="mb-6 text-xl text-white font-semibold">
                    {weather?.name},{weather?.sys?.country}
                  </h3>
                  <p className="mb-8 text-gray-300">
                    The weather condition in {weather?.name},{' '}
                    {weather?.sys?.country} is described as :{' '}
                    {weather?.weather[0].description} with a temperature of{' '}
                    {Math.ceil(Number(weather?.main.temp))} °C and a humidity of{' '}
                    {weather?.main?.humidity} %
                  </p>
                  <a
                    className="ml-auto flex items-center justify-center w-20 h-20 rounded-full  hover:bg-blue-700 text-white"
                    href="#"
                  >
                    <span className="flex items-center justify-center w-16 h-16 rounded-full border-2">
                      {/* weather logo */}
                      <img
                        className="w-56 "
                        src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`}
                        alt="/"
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Weather;
