import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import Store from '../Redux/Store/store';
import Home from '../Pages/home';

describe('Testing by jest snapshots', () => {
  it('matches home  Snapshot', () => {
    const homeDisplay = renderer
      .create(
        <Provider store={Store}>
          <Router>
            <Home />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(homeDisplay).toMatchSnapshot();
  });
});
