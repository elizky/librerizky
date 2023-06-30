import React from 'react';
import { ButtonProps } from './Button.types';
import { StyledButton } from './Button.styles';

const Button: React.FC<ButtonProps> = ({ size, primary, disabled, text, onClick, ...props }) => {
  return (
    <StyledButton
      type='button'
      className=' rounded font-bold cursor-pointer border-red-500 border-4'
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
