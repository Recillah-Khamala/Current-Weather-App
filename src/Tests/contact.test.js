import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import Contacts from '../Pages/contacts';
import Store from '../Redux/Store/store';

describe('Testing by jest snapshots', () => {
  it('matches contacts  Snapshot', () => {
    const contactDisplay = renderer
      .create(
        <Provider store={Store}>
          <Router>
            <Contacts />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(contactDisplay).toMatchSnapshot();
  });
});
