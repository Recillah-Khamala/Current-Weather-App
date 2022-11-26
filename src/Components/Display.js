import React from 'react';
import { useSelector } from 'react-redux';

const Display = () => {
  // select state from store
  const selector = useSelector((state) => state);
  const { weather, loading, error } = selector;
  return (
    <div>
      {loading ? (
        <h1 className="text-gray-400 text-4xl text-center">
          Loading please wait...
        </h1>
      ) : error ? (
        <h1 className="text-red-400 text-2xl text-center">{error?.message}</h1>
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
                  {' '}
                </div>
                <h1 className="text-gray-300 text-center text-4xl mb-10">
                  {Math.floor(Number(weather?.main.temp) - 273)}
                  {' '}
                  <span className="text-yellow-500 text-4xl">°C</span>
                </h1>
                <h3 className="mb-6 text-xl text-white font-semibold">
                  {weather?.name}
                  ,
                  {weather?.sys?.country}
                </h3>
                <p className="mb-8 text-gray-300">
                  The weather condition in
                  {' '}
                  {weather?.name}
                  ,
                  {' '}
                  {weather?.sys?.country}
                  {' '}
                  is described as :
                  {' '}
                  {weather?.weather[0].description}
                  {' '}
                  with a temperature of
                  {' '}
                  {Math.floor(Number(weather?.main.temp) - 273)}
                  {' '}
                  °C and a
                  humidity of
                  {' '}
                  {weather?.main?.humidity}
                  {' '}
                  %
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
    </div>
  );
};

export default Display;
