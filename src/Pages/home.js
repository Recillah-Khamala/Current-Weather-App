import world from '../Weather/world_weather_map-removebg-preview.png';

const Home = () => (
  <div>
    <section className="text-white relative">
      <h2 className="mt-8 mb-12 lg:mb-2 text-white text-3xl lg:text-4xl lg:tracking-wider lg:font-bold font-semibold relative container pt-2 lg:pt-none px-4 mx-auto lg:mx-none text-center">
        Current Weather App
      </h2>
      <img
        className="w-full pt-4 md:w-auto opacity-20 lg:px-44"
        src={world}
        alt="World Map"
      />
    </section>
    <div className="text-white bg-strip-blue p-1 mt-12">
      <p className="text-4xl font-bold uppercase leading-6 text-center py-6 mb-none ">
        Check Weather
        {'\n'}
        {' '}
        anywhere you are
      </p>
    </div>
  </div>
);

export default Home;
