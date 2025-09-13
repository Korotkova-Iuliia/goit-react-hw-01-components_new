// src/components/Button/Button.styled.js
import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  transition: background 0.2s ease;

  ${({ $variant }) =>
    $variant === 'primary' &&
    css`
      background: #0070f3;
      color: white;

      &:hover {
        background: #0059c9;
      }
    `}

  ${({ $variant }) =>
    $variant === 'secondary' &&
    css`
      background: #eaeaea;
      color: #333;

      &:hover {
        background: #d4d4d4;
      }
    `}
`;
