import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store'; 
import Crypto from '../currencies/Crypto';

it('test navbar render', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Provider store={store}>
          <Crypto />
        </Provider>
      </MemoryRouter>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
