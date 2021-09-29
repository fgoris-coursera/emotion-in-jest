import { shallow } from 'enzyme';
import App from './App';

test('renders learn react link', () => {
  const wrapper = shallow(<App />);
  const link = wrapper.find('a');
  expect(link).toHaveLength(1);
  expect(link.text()).toEqual(expect.stringMatching(/learn react/i));
});

test('renders', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchInlineSnapshot(`
    <div
      className="App"
    >
      <header
        className="App-header"
      >
        <img
          alt="logo"
          className="App-logo"
          src="logo.svg"
        />
        <p>
          Edit 
          <code>
            src/App.js
          </code>
           and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          Learn React
        </a>
      </header>
    </div>
  `);
});
