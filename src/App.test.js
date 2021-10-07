import ShallowRenderer from 'react-test-renderer/shallow';
import { findWithType } from 'react-shallow-testutils';
import App from './App';

xtest('renders learn react link', () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(<App />);
  const link = findWithType(tree, 'a');
  console.log(link);
  expect(link.props.children).toEqual(expect.stringMatching(/learn react/i));
});

test('renders', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchInlineSnapshot(`
    <div
      css="unknown styles"
    >
      <header
        css="unknown styles"
      >
        <img
          alt="logo"
          css="unknown styles"
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
          css="unknown styles"
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
