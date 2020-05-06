import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../../styles/global.style';
import dark from '../../../styles/themes/dark';
import light from '../../../styles/themes/light';
import usePersistedState from '../../../utils/usePersistedState';
import Header from '../Header/Header';

export function Body({ children }) {
  const [theme, setTheme] = usePersistedState('theme', 'light');

  function toogleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? dark : light}>
      <GlobalStyle />
      <Header toogleTheme={toogleTheme} />
      { children }
    </ThemeProvider>
  );
}

const LoginRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(matchProps) => (
      <Body>
        <Component {...matchProps} />
      </Body>
    )}
  />
);


LoginRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

Body.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LoginRoute;
