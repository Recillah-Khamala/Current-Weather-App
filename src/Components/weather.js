import { useSelector } from 'react-redux';
import Display from './Display';
import Search from './Form';
import africa from '../africa.png';
import asia from '../asia.png';
import antactica from '../antactica.png';
import europe from '../europe.png';
import samerica from '../samerica.png';
import namerica from '../namerica.png';

const Weather = () => {
  const { showDisplay, error, loading } = useSelector((state) => state);
  return (
    <div className="bg-cornflower-blue">
      <section className="relative min-h-screen flex flex-row items-center">
        <div className="items-center w-1/4 opacity-50">
          <img src={africa} alt="/" width={150} height={150} />
          <img src={antactica} alt="/" width={350} height={350} />
          <img src={asia} alt="/" width={200} height={200} />
        </div>
        <div className="w-2/4">
          <div className="relative container px-4 mb-4  text-center w-full">
            {/* Input */}
            <Search />
          </div>
          {/* Content goes here */}
          {loading && (
            <h1 className="text-gray-400 font-bold text-4xl text-center">
              Loading please wait...
            </h1>
          )}
          {error && (
            <h1 className="text-slate-200 font-bold text-2xl text-center">
              {error}
            </h1>
          )}
          {showDisplay === true && <Display />}
        </div>
        <div className="w-1/4 opacity-50">
          <img src={europe} alt="/" width={200} height={200} />
          <img src={namerica} alt="/" width={200} height={200} />
          <img src={samerica} alt="/" width={200} height={200} />
        </div>
      </section>
    </div>
  );
};

export default Weather;
