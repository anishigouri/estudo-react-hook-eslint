import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './Header.style';

function Header({ toogleTheme }) {
  return (
    <Container>
      <span>Login Header</span>
      <button type="button" onClick={toogleTheme}>click me</button>
    </Container>
  );
}

Header.propTypes = {
  toogleTheme: PropTypes.func.isRequired,
};

export default Header;
