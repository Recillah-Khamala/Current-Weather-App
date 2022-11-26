import Search from '../Components/Form';
import world from '../Weather/world_weather_map-removebg-preview.png';

const Home = () => (
  <>
    <section className="text-white relative">
      <h2 className="mt-8 mb-12 lg:mb-2 text-white text-3xl lg:text-4xl lg:tracking-wider lg:font-bold font-semibold relative container pt-2 lg:pt-none px-4 mb-20 mx-auto lg:mx-none text-center">
        Current Weather App
      </h2>
      <img
        className="w-full md:w-auto opacity-20 lg:px-44"
        src={world}
        alt="World Map"
      />
    </section>
    <div className="text-white bg-strip-blue p-1">
      <p className="text-2xl font-bold uppercase leading-6 text-center">Check Weather anywhere you are</p>
    </div>
    <Search />
  </>
);

export default Home;
