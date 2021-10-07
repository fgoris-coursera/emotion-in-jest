import { mount } from 'enzyme';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import App from './App';

const createMockComponent = name => {
  const MockComponent = ({ children }) => {
    return <>{children}</>;
  };
  MockComponent.displayName = name;
  return MockComponent;
};

jest.mock('./Launches', () => createMockComponent('Launches'));

test('renders learn react link', () => {
  const wrapper = mount(<App />, {
    wrappingComponent: ThemeProvider,
    wrappingComponentProps: {
      theme,
    },
  });
  const link = wrapper.find('a');
  expect(link).toHaveLength(1);
  expect(link.text()).toEqual(expect.stringMatching(/learn react/i));
});

test('renders', () => {
  const wrapper = mount(<App />, {
    wrappingComponent: ThemeProvider,
    wrappingComponentProps: {
      theme,
    },
  });
  expect(wrapper).toMatchInlineSnapshot(`
    @keyframes animation-0 {
      from {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
      }

      to {
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    .emotion-0 {
      text-align: center;
    }

    .emotion-1 {
      background-color: #282c34;
      min-height: 100vh;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      font-size: calc(10px + 2vmin);
      color: white;
    }

    .emotion-2 {
      height: 40vmin;
      pointer-events: none;
    }

    @media (prefers-reduced-motion: no-preference) {
      .emotion-2 {
        -webkit-animation: animation-0 infinite 20s linear;
        animation: animation-0 infinite 20s linear;
      }
    }

    .emotion-3 {
      color: #61dafb;
      margin-bottom: 36px;
    }

    <App>
      <div
        className="emotion-0"
      >
        <header
          className="emotion-1"
        >
          <img
            alt="logo"
            className="emotion-2"
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
            className="emotion-3"
            href="https://reactjs.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            Learn React
          </a>
          <Launches
            count={10}
          />
        </header>
      </div>
    </App>
  `);
});
