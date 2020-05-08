import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './Button.style';

function Button({ text, icon, onClick }) {
  return (
    <Container onClick={onClick}>
      {icon}
      <span>{text}</span>
    </Container>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  text: '',
  icon: '',
};

export default Button;
