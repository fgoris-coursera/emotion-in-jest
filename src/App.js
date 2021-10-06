/** @jsxImportSource @emotion/react */
import { css, keyframes, useTheme } from '@emotion/react';
import logo from './logo.svg';

const appLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

function App() {
  const theme = useTheme();
  const styles = {
    app: css`
      text-align: center;
    `,
    appHeader: css`
      background-color: ${theme.colors.background};
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: calc(10px + 2vmin);
      color: white;
    `,
    appLogo: css`
      height: 40vmin;
      pointer-events: none;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${appLogoSpin} infinite 20s linear;
      }
    `,
    appLink: css`
      color: ${theme.colors.link};
    `,
  };
  return (
    <div css={styles.app}>
      <header css={styles.appHeader}>
        <img src={logo} css={styles.appLogo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          css={styles.appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
