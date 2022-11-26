import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import Store from '../Redux/Store/store';
import Weather from '../Components/weather';

describe('Testing by jest snapshots', () => {
  it('matches Weather  Snapshot', () => {
    const weatherDisplay = renderer
      .create(
        <Provider store={Store}>
          <Router>
            <Weather />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(weatherDisplay).toMatchSnapshot();
  });
});