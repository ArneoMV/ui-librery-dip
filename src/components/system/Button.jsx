import React from 'react';
import '../../styles/scss/system/_button.scss';

const Button = ({ type = 'default', children, disabled }) => {
  const buttonClassName = `button ${type} ${disabled ? 'disabled' : ''}`;

  return (
    <button className={buttonClassName} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;





