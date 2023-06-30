import React from 'react';
import { ButtonProps } from './Button.types';
import { StyledButton } from './Button.styles';

const Button: React.FC<ButtonProps> = ({ size, primary, disabled, text, onClick, ...props }) => {
  return (
    <StyledButton
      type='button'
      onClick={onClick}
      primary={primary}
      disabled={disabled}
      size={size}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
