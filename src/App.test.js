import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import App from './App';

const Wrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

test('renders learn react link', () => {
  render(<App />, {
    wrapper: Wrapper,
  });
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders', () => {
  const { container } = render(<App />, {
    wrapper: Wrapper,
  });
  expect(container).toMatchInlineSnapshot(`
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
    }

    <div>
      <div
        class="emotion-0"
      >
        <header
          class="emotion-1"
        >
          <img
            alt="logo"
            class="emotion-2"
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
            class="emotion-3"
            href="https://reactjs.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            Learn React
          </a>
        </header>
      </div>
    </div>
  `);
});
