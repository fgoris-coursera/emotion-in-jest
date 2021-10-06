// __mocks__/themeBased.js
import theme from '../theme';

const themeBased = styles =>
  Object.keys(styles).reduce((stylesWithTheme, key) => {
    const style = styles[key];
    if (typeof style === 'function') {
      stylesWithTheme[key] = style(theme);
    } else {
      stylesWithTheme[key] = style;
    }
    return stylesWithTheme;
  }, {});

export default themeBased;
