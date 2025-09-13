import React from 'react';
import * as S from './Button.styled';

function Button({ children, onClick, variant = 'primary', ...rest }) {
  return (
    <S.Button $variant={variant} onClick={onClick} {...rest}>
      {children}
    </S.Button>
  );
}

export default Button;
