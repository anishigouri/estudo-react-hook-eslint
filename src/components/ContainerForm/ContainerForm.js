import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './ContainerForm.styles';

function ContainerForm({ children }) {
  return <Container>{children}</Container>;
}

ContainerForm.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContainerForm;
