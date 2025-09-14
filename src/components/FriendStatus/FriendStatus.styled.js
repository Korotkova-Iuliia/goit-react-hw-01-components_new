import styled from 'styled-components';

export const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const BaseStatus = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
  text-transform: capitalize;
  margin: 0;
`;
