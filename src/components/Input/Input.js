import PropTypes from 'prop-types';
import React from 'react';

function Input({
  label, name, onChange, value,
}) {
  const changeValue = (event) => {
    onChange(name, event.target.value);
  };

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input value={value} className="form-control" id={name} onChange={changeValue} />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Input.defaultProps = {
  label: '',
  value: '',
};

export default Input;
