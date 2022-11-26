import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import Store from '../Redux/Store/store';
import Navigation from '../Components/Navigation';

describe('Testing by jest snapshots', () => {
  it('matches navigation  Snapshot', () => {
    const navDisplay = renderer
      .create(
        <Provider store={Store}>
          <Router>
            <Navigation />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(navDisplay).toMatchSnapshot();
  });
});